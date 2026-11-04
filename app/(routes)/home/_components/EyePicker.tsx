'use client';

import { useLayoutEffect, useRef } from 'react';
import { EyeButton, EyeDock, EyeGroup, EyeIris, EyePupil } from '../styles';
import { useDictionary } from '@/app/_i18n/LocaleProvider';
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from '@/app/_utils/constants';

export type Iris = 'red' | 'blue' | 'green';

// Red on top, green below left, blue below right, like the eyes in the logo.
// Also the order an unseen string ties them in: red to green to blue.
const IRISES: Iris[] = ['red', 'green', 'blue'];

const EYE_SIZE = 46;

// The colors of the logo's eyes, solid and as highlighter on the page.
export const IRIS_INK: Record<Iris, { solid: string; mark: string }> = {
  red: { solid: '#ED1B24', mark: 'rgba(237, 27, 36, 0.35)' },
  blue: { solid: '#00A2EA', mark: 'rgba(0, 162, 234, 0.35)' },
  green: { solid: '#B5E51D', mark: 'rgba(181, 229, 29, 0.6)' },
};

/* Dragging ----------------------------------------------------------------
   The visitor can grab any eye and throw the three: they fly on, land on the
   nearest side and stay at the height they were thrown to. On phones they
   can also land back in their row at the bottom center, within thumb reach. Each eye is its
   own body tied to the next by a string nobody sees: the grabbed one stays
   under the finger, the others follow on springs, bunch up the faster they go
   (never overlapping) and spread back with a little bounce once they stop.
   Where they land, each takes the free spot of the arrangement nearest to it,
   so none crosses the others: the logo's order only holds until the first
   throw. */

type Point = { x: number; y: number };
type Layout = 'triangle' | 'row' | 'column';
type Formation = { w: number; h: number; at: Record<Iris, Point> };

// Where each eye sits (its top-left corner) in each arrangement: the triangle
// of the stylesheet on desktop, its row on phones, and a column for a phone's
// side so the eyes cover as little of a line of text as they can.
const S = EYE_SIZE;
const FORMATIONS: Record<Layout, Formation> = {
  triangle: {
    w: 2 * (S + 2) + 4,
    h: 2 * S + 2,
    at: { red: { x: S + 4 - S / 2, y: 0 }, green: { x: 0, y: S + 2 }, blue: { x: S + 6, y: S + 2 } },
  },
  row: { w: 3 * S + 16, h: S, at: { red: { x: 0, y: 0 }, green: { x: S + 8, y: 0 }, blue: { x: 2 * S + 16, y: 0 } } },
  column: { w: S, h: 3 * S + 16, at: { red: { x: 0, y: 0 }, green: { x: 0, y: S + 8 }, blue: { x: 0, y: 2 * S + 16 } } },
};

const PHONE_QUERY = '(max-width: 700px)';
// How far a press travels before it's a drag rather than a click: just past
// a mouse's or a finger's jitter.
const DRAG_START: Record<string, number> = { mouse: 3, pen: 4, touch: 6 };
// Room kept between the eyes and the window's sides and header.
const EDGE = 12;
// Where the visitor left the eyes, per layout: the side and how far down the
// free room. A convenience: the page works without it.
const SPOT_KEY = 'hb-eyes';

// Springs, per second. The eyes chase their spot a little loosely so they
// sway; the group glides to its side with a slight overshoot.
const EYE_SPRING = { k: 380, c: 24 };
const GLIDE_SPRING = { k: 200, c: 24 };
// How far a throw carries: a release at v px/s lands about v / 2 px further,
// like a scroll view's normal deceleration.
const CARRY = 0.5;
// At full speed the eyes pull a quarter of the way together.
const SQUEEZE = 0.25;
const SQUEEZE_SPEED = 1600;
// The string never stretches past 1.7 times the eyes' gap, so a hard throw
// can't leave an eye behind; and no two eyes get closer than this share of
// their size.
const STRING_MAX = 1.7;
const PERSONAL_SPACE = 0.94;
const LIFT = 1.08;
// The grip: the eyes' whole group plus this margin, so a press between them or
// just off one still catches the nearest eye.
const GRIP_MARGIN = 14;

// The bottom spot is the phone's row; fy only counts on a side. order[i] is
// the arrangement's spot eye i took (spots listed in the logo's order).
type Spot = { side: 'left' | 'right' | 'bottom'; fy: number; order?: number[] };

// The ways three eyes can fill three spots.
const ORDERS = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]];
const LOGO_ORDER = ORDERS[0];
const isOrder = (order: unknown): order is number[] =>
  Array.isArray(order) && ORDERS.some((o) => o.every((v, i) => v === order[i]));
type Body = { x: number; y: number; vx: number; vy: number };

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const isPhone = () => window.matchMedia(PHONE_QUERY).matches;
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const spotKey = () => `${SPOT_KEY}-${isPhone() ? 'phone' : 'desktop'}`;

function readSpot(): Spot | null {
  try {
    const spot = JSON.parse(window.localStorage.getItem(spotKey()) ?? 'null');
    if (!spot || !Number.isFinite(spot.fy)) return null;
    // Spots saved before the eyes snapped to a side kept a free x instead.
    if (spot.side !== 'left' && spot.side !== 'right' && spot.side !== 'bottom') {
      return Number.isFinite(spot.fx) ? { side: spot.fx < 0.5 ? 'left' : 'right', fy: spot.fy } : null;
    }
    return spot;
  } catch {
    return null;
  }
}

function saveSpot(spot: Spot) {
  try {
    window.localStorage.setItem(spotKey(), JSON.stringify(spot));
  } catch {
    // Storage blocked: the eyes stay put for this visit only.
  }
}

// How far down the window an arrangement can go: below the header, above the
// bottom edge.
function verticalRoom(f: Formation) {
  const min = (isPhone() ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT) + EDGE;
  return { min, max: Math.max(min, window.innerHeight - f.h - EDGE) };
}

function sideX(side: 'left' | 'right', f: Formation) {
  return side === 'left' ? EDGE : Math.max(EDGE, document.documentElement.clientWidth - f.w - EDGE);
}

type Props = {
  iris: Iris | null;
  onPick: (iris: Iris) => void;
};

// The three eyes, always on screen: in a triangle in the top-left corner
// under the header, or in a row at the bottom center on phones, until the
// visitor throws them to a side. A short press still picks an eye.
const EyePicker = ({ iris, onPick }: Props) => {
  const t = useDictionary();
  const dockRef = useRef<HTMLDivElement>(null);
  const gripRef = useRef<HTMLSpanElement>(null);
  const eyeRefs = useRef<Partial<Record<Iris, HTMLButtonElement | null>>>({});

  // Before paint, so eyes the visitor moved never flash at their default spot.
  useLayoutEffect(() => {
    const dock = dockRef.current;
    const grip = gripRef.current;
    const eyes = IRISES.map((id) => eyeRefs.current[id]);
    if (!dock || !grip || eyes.some((el) => !el)) return;
    const buttons = eyes as HTMLButtonElement[];

    // Where the stylesheet puts the phone's row, measured once: its gap to the
    // bottom includes the iPhone's home indicator.
    const cssRect = dock.getBoundingClientRect();
    const bottomGap = window.innerHeight - cssRect.bottom;

    let layout: Layout = isPhone() ? 'row' : 'triangle';
    let origin: Point = { x: 0, y: 0 };
    let velocity: Point = { x: 0, y: 0 };
    let target: Point | null = null; // where a throw glides to
    let squeeze = 1;
    let lift = 1;
    const bodies: Body[] = IRISES.map(() => ({ x: 0, y: 0, vx: 0, vy: 0 }));
    let drag: {
      id: number;
      eye: number;
      x0: number;
      y0: number;
      grab: Point; // pointer offset within the grabbed eye
      pointer: Point;
      samples: { t: number; x: number; y: number }[];
      slop: number;
      moving: boolean;
      fromGrip: boolean; // pressed on the grip, not on the eye itself
    } | null = null;
    let frame = 0;
    let last = 0;
    let swallowClick = false;

    // Which of the arrangement's spots each eye holds.
    let order = LOGO_ORDER;

    const formation = () => FORMATIONS[layout];
    const slot = (f: Formation, i: number) => f.at[IRISES[order[i]]];

    // Where each eye wants to be: its spot in the arrangement, pulled toward
    // the middle while the group moves fast.
    const spotOf = (i: number): Point => {
      const f = formation();
      const at = slot(f, i);
      const cx = (f.w - S) / 2;
      const cy = (f.h - S) / 2;
      return { x: origin.x + cx + (at.x - cx) * squeeze, y: origin.y + cy + (at.y - cy) * squeeze };
    };

    const restLength = (i: number) => {
      const f = formation();
      const a = slot(f, i);
      const b = slot(f, i + 1);
      return Math.hypot(b.x - a.x, b.y - a.y);
    };

    const draw = () => {
      buttons.forEach((el, i) => {
        const b = bodies[i];
        const scale = drag?.moving && drag.eye === i ? lift : 1 + (lift - 1) * 0.6;
        el.style.transform = `translate3d(${b.x.toFixed(2)}px, ${b.y.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
      });
      // The grip hugs the group wherever it goes.
      const left = Math.min(...bodies.map((b) => b.x)) - GRIP_MARGIN;
      const top = Math.min(...bodies.map((b) => b.y)) - GRIP_MARGIN;
      const right = Math.max(...bodies.map((b) => b.x)) + S + GRIP_MARGIN;
      const bottom = Math.max(...bodies.map((b) => b.y)) + S + GRIP_MARGIN;
      grip.style.transform = `translate3d(${left.toFixed(2)}px, ${top.toFixed(2)}px, 0)`;
      grip.style.width = `${(right - left).toFixed(2)}px`;
      grip.style.height = `${(bottom - top).toFixed(2)}px`;
    };

    // Everything straight to its spot, no motion.
    const settle = () => {
      squeeze = 1;
      lift = 1;
      bodies.forEach((b, i) => {
        const p = spotOf(i);
        Object.assign(b, { x: p.x, y: p.y, vx: 0, vy: 0 });
      });
      draw();
    };

    // The phone's row at the bottom center, where the stylesheet puts it.
    const bottomSpot = (): Point => {
      const f = FORMATIONS.row;
      return { x: (document.documentElement.clientWidth - f.w) / 2, y: window.innerHeight - bottomGap - f.h };
    };

    // The resting place: where the visitor left the eyes, or the default.
    const home = () => {
      const spot = readSpot();
      order = spot && isOrder(spot.order) ? spot.order : LOGO_ORDER;
      if (spot && spot.side !== 'bottom') {
        layout = isPhone() ? 'column' : 'triangle';
        const f = formation();
        const room = verticalRoom(f);
        origin = { x: sideX(spot.side, f), y: room.min + spot.fy * (room.max - room.min) };
      } else if (isPhone()) {
        layout = 'row';
        origin = bottomSpot();
      } else {
        layout = 'triangle';
        origin = { x: 12, y: HEADER_HEIGHT + 12 };
      }
    };

    const spring = (b: Body, to: Point, k: number, c: number, dt: number) => {
      b.vx += (k * (to.x - b.x) - c * b.vx) * dt;
      b.vy += (k * (to.y - b.y) - c * b.vy) * dt;
      b.x += b.vx * dt;
      b.y += b.vy * dt;
    };

    // Pulls two eyes back to a distance between min and max, moving the ones
    // that aren't held.
    const keepApart = (i: number, j: number, min: number, max: number) => {
      const a = bodies[i];
      const b = bodies[j];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const d = Math.hypot(dx, dy) || 0.01;
      const goal = clamp(d, min, max);
      if (goal === d) return;
      const fix = (d - goal) / d;
      const held = drag?.moving ? drag.eye : -1;
      if (held === i) {
        b.x -= dx * fix; b.y -= dy * fix;
      } else if (held === j) {
        a.x += dx * fix; a.y += dy * fix;
      } else {
        a.x += (dx * fix) / 2; a.y += (dy * fix) / 2;
        b.x -= (dx * fix) / 2; b.y -= (dy * fix) / 2;
      }
    };

    // The string between neighbors, and room between every pair.
    const tieStrings = () => {
      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const max = j === i + 1 ? restLength(i) * STRING_MAX : Infinity;
          keepApart(i, j, S * PERSONAL_SPACE, max);
        }
      }
    };

    // The pointer's speed over its last tenth of a second; zero once it rests.
    const pointerVelocity = (now: number): Point => {
      if (!drag) return { x: 0, y: 0 };
      const recent = drag.samples.filter((p) => now - p.t <= 100);
      if (recent.length < 2) return { x: 0, y: 0 };
      const a = recent[0];
      const b = recent[recent.length - 1];
      const span = (b.t - a.t) / 1000;
      return span > 0 ? { x: (b.x - a.x) / span, y: (b.y - a.y) / span } : { x: 0, y: 0 };
    };

    const step = (dt: number, now: number) => {
      const still = reducedMotion();
      const f = formation();
      if (drag?.moving) velocity = pointerVelocity(now);

      // Faster means tighter, eased so it doesn't flicker.
      const speed = Math.hypot(velocity.x, velocity.y);
      const squeezeGoal = still ? 1 : 1 - SQUEEZE * Math.min(1, speed / SQUEEZE_SPEED);
      squeeze += (squeezeGoal - squeeze) * Math.min(1, dt * 10);
      const liftGoal = drag?.moving && !still ? LIFT : 1;
      lift += (liftGoal - lift) * Math.min(1, dt * 18);

      // The group: under the finger while dragged, gliding to its side after.
      if (drag?.moving) {
        const at = slot(f, drag.eye);
        const cx = (f.w - S) / 2;
        const cy = (f.h - S) / 2;
        const grabbed = { x: drag.pointer.x - drag.grab.x, y: drag.pointer.y - drag.grab.y };
        const room = verticalRoom(f);
        origin = {
          x: clamp(grabbed.x - cx - (at.x - cx) * squeeze, EDGE, Math.max(EDGE, document.documentElement.clientWidth - f.w - EDGE)),
          y: clamp(grabbed.y - cy - (at.y - cy) * squeeze, room.min, room.max),
        };
      } else if (target) {
        if (still) {
          origin = target;
          velocity = { x: 0, y: 0 };
        } else {
          velocity.x += (GLIDE_SPRING.k * (target.x - origin.x) - GLIDE_SPRING.c * velocity.x) * dt;
          velocity.y += (GLIDE_SPRING.k * (target.y - origin.y) - GLIDE_SPRING.c * velocity.y) * dt;
          origin = { x: origin.x + velocity.x * dt, y: origin.y + velocity.y * dt };
        }
        if (Math.hypot(target.x - origin.x, target.y - origin.y) < 0.3 && Math.hypot(velocity.x, velocity.y) < 6) {
          origin = target;
          velocity = { x: 0, y: 0 };
          target = null;
        }
      }

      bodies.forEach((b, i) => {
        const to = spotOf(i);
        if (drag?.moving && drag.eye === i) {
          // Held: its spot is under the finger, as long as the group fits.
          b.vx = (to.x - b.x) / dt;
          b.vy = (to.y - b.y) / dt;
          b.x = to.x;
          b.y = to.y;
        } else if (still) {
          Object.assign(b, { x: to.x, y: to.y, vx: 0, vy: 0 });
        } else {
          spring(b, to, EYE_SPRING.k, EYE_SPRING.c, dt);
        }
      });
      if (!still) tieStrings();
    };

    const resting = () =>
      !drag?.moving &&
      !target &&
      Math.abs(squeeze - 1) < 0.001 &&
      Math.abs(lift - 1) < 0.001 &&
      bodies.every((b, i) => {
        const to = spotOf(i);
        return Math.hypot(to.x - b.x, to.y - b.y) < 0.2 && Math.hypot(b.vx, b.vy) < 4;
      });

    const tick = (now: number) => {
      const elapsed = Math.min((now - last) / 1000, 1 / 30);
      last = now;
      // Small steps keep the springs steady on slow frames.
      const steps = Math.max(1, Math.ceil(elapsed / (1 / 240)));
      for (let i = 0; i < steps; i++) step(elapsed / steps, now);
      if (resting()) {
        settle();
        frame = 0;
        return;
      }
      draw();
      frame = requestAnimationFrame(tick);
    };

    const wake = () => {
      if (frame) return;
      last = performance.now();
      frame = requestAnimationFrame(tick);
    };

    const down = (e: PointerEvent) => {
      if (!e.isPrimary || (e.pointerType === 'mouse' && e.button !== 0)) return;
      // An eye, or the grip around them: then the eye nearest the press.
      let eye = buttons.findIndex((el) => el.contains(e.target as Node));
      const fromGrip = eye < 0 && e.target === grip;
      if (fromGrip) {
        const gap = (b: Body) => Math.hypot(e.clientX - (b.x + S / 2), e.clientY - (b.y + S / 2));
        eye = bodies.reduce((best, b, i) => (gap(b) < gap(bodies[best]) ? i : best), 0);
      }
      if (eye < 0) return;
      const b = bodies[eye];
      drag = {
        id: e.pointerId,
        eye,
        x0: e.clientX,
        y0: e.clientY,
        grab: { x: e.clientX - b.x, y: e.clientY - b.y },
        pointer: { x: e.clientX, y: e.clientY },
        samples: [{ t: performance.now(), x: e.clientX, y: e.clientY }],
        slop: DRAG_START[e.pointerType] ?? 4,
        moving: false,
        fromGrip,
      };
    };

    const move = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      if (!drag.moving) {
        if (Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) < drag.slop) return;
        drag.moving = true;
        target = null;
        buttons[drag.eye].setPointerCapture(e.pointerId);
        dock.dataset.dragging = 'true';
        buttons[drag.eye].style.zIndex = '1';
        document.documentElement.classList.add('eyes-dragging');
      }
      drag.pointer = { x: e.clientX, y: e.clientY };
      // The pointer's recent path, for the throw's speed.
      drag.samples.push({ t: performance.now(), x: e.clientX, y: e.clientY });
      if (drag.samples.length > 32) drag.samples.shift();
      wake();
    };

    const end = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const done = drag;
      drag = null;
      if (!done.moving) {
        // A tap on the grip counts as a tap on the nearest eye.
        if (done.fromGrip && e.type === 'pointerup') buttons[done.eye].click();
        return;
      }
      delete dock.dataset.dragging;
      buttons[done.eye].style.removeProperty('z-index');
      document.documentElement.classList.remove('eyes-dragging');
      // The throw: the pointer's speed as it let go (none after a pause).
      drag = done;
      velocity = pointerVelocity(performance.now());
      drag = null;

      // Where the throw would carry the group decides where it lands: the
      // nearer side or, on phones, the row at the bottom center if that's
      // nearer still.
      const width = document.documentElement.clientWidth;
      const carried = { x: origin.x + velocity.x * CARRY, y: origin.y + velocity.y * CARRY };
      const center = { x: carried.x + formation().w / 2, y: carried.y + formation().h / 2 };
      let side: Spot['side'] = center.x < width / 2 ? 'left' : 'right';
      if (isPhone()) {
        const row = FORMATIONS.row;
        const bottom = bottomSpot();
        const toSide = Math.min(center.x - (EDGE + S / 2), width - EDGE - S / 2 - center.x);
        const toBottom = Math.hypot(center.x - width / 2, center.y - (bottom.y + row.h / 2));
        // A throw that's mostly downward goes home too, even if its carry
        // would overshoot the middle.
        const downward = velocity.y > 400 && velocity.y > 1.5 * Math.abs(velocity.x);
        if (toBottom < toSide || (downward && center.y > window.innerHeight * 0.6)) side = 'bottom';
      }
      const turnTo: Layout = !isPhone() ? 'triangle' : side === 'bottom' ? 'row' : 'column';
      if (turnTo !== layout) {
        // Keeps the eyes where they are while the arrangement turns.
        const from = formation();
        layout = turnTo;
        const to = formation();
        origin = { x: origin.x + (from.w - to.w) / 2, y: origin.y + (from.h - to.h) / 2 };
      }
      // Each eye takes the spot nearest to where it is in the group: of the six
      // ways to share the spots, the one with the least travel.
      const f = formation();
      const mean = (points: Point[]) => ({
        x: points.reduce((sum, p) => sum + p.x, 0) / points.length,
        y: points.reduce((sum, p) => sum + p.y, 0) / points.length,
      });
      const spots = IRISES.map((id) => f.at[id]);
      const spotsMid = mean(spots);
      const eyesMid = mean(bodies);
      const travelOf = (candidate: number[]) => bodies.reduce((sum, b, i) => {
        const at = spots[candidate[i]];
        return sum + ((b.x - eyesMid.x) - (at.x - spotsMid.x)) ** 2 + ((b.y - eyesMid.y) - (at.y - spotsMid.y)) ** 2;
      }, 0);
      // On a tie the eyes keep the spots they had.
      let travel = travelOf(order);
      for (const candidate of ORDERS) {
        const cost = travelOf(candidate);
        if (cost < travel - 0.5) {
          travel = cost;
          order = candidate;
        }
      }
      if (side === 'bottom') {
        target = bottomSpot();
        saveSpot({ side, fy: 1, order });
      } else {
        const room = verticalRoom(f);
        target = { x: sideX(side, f), y: clamp(carried.y, room.min, room.max) };
        saveSpot({ side, fy: room.max > room.min ? (target.y - room.min) / (room.max - room.min) : 0, order });
      }
      wake();
      // The click that follows a drag isn't a pick.
      swallowClick = true;
      window.setTimeout(() => { swallowClick = false; }, 0);
    };

    const click = (e: MouseEvent) => {
      if (!swallowClick) return;
      swallowClick = false;
      e.preventDefault();
      e.stopPropagation();
    };

    const resize = () => {
      if (drag?.moving) return;
      target = null;
      velocity = { x: 0, y: 0 };
      home();
      settle();
    };

    // From here the script places the eyes; the stylesheet's layout was only
    // for the first paint.
    dock.dataset.live = 'true';
    home();
    settle();
    dock.addEventListener('pointerdown', down);
    dock.addEventListener('click', click, true);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove('eyes-dragging');
      dock.removeEventListener('pointerdown', down);
      dock.removeEventListener('click', click, true);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <EyeDock ref={dockRef}>
      <span ref={gripRef} className="grip" aria-hidden="true" />
      <EyeGroup role="group" aria-label={t.lookout.eyesGroup} $size={EYE_SIZE}>
        {IRISES.map((id) => (
          <EyeButton
            key={id}
            ref={(el) => { eyeRefs.current[id] = el; }}
            type="button"
            $size={EYE_SIZE}
            aria-pressed={iris === id}
            aria-label={t.lookout.iris[id]}
            onClick={() => onPick(id)}
          >
            <EyeIris aria-hidden="true" $size={Math.round(EYE_SIZE * 0.62)} $color={IRIS_INK[id].solid} $chosen={iris === id} />
            <EyePupil aria-hidden="true" $size={Math.round(EYE_SIZE * 0.3)} />
          </EyeButton>
        ))}
      </EyeGroup>
    </EyeDock>
  );
};

export default EyePicker;
