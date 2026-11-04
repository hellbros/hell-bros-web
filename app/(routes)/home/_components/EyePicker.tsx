'use client';

import { useLayoutEffect, useRef } from 'react';
import { EyeButton, EyeDock, EyeGroup, EyeIris, EyePupil } from '../styles';
import { useDictionary } from '@/app/_i18n/LocaleProvider';
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from '@/app/_utils/constants';

export type Iris = 'red' | 'blue' | 'green';

// Red on top, green below left, blue below right, like the eyes in the logo.
const IRISES: Iris[] = ['red', 'green', 'blue'];

const EYE_SIZE = 46;

// The colors of the logo's eyes, solid and as highlighter on the page.
export const IRIS_INK: Record<Iris, { solid: string; mark: string }> = {
  red: { solid: '#ED1B24', mark: 'rgba(237, 27, 36, 0.35)' },
  blue: { solid: '#00A2EA', mark: 'rgba(0, 162, 234, 0.35)' },
  green: { solid: '#B5E51D', mark: 'rgba(181, 229, 29, 0.6)' },
};

const PHONE_QUERY = '(max-width: 700px)';
// How far a press has to travel before it's a drag rather than a click: just
// past a mouse's or a finger's jitter.
const DRAG_START: Record<string, number> = { mouse: 3, pen: 4, touch: 6 };
// Room kept between the eyes and the window's edges and header.
const EDGE = 8;
// Where the visitor left the eyes, per layout, as a share of the free room so
// it holds when the window changes size. A convenience: the page works without.
const SPOT_KEY = 'hb-eyes';

type Spot = { fx: number; fy: number };
type Bounds = { minX: number; maxX: number; minY: number; maxY: number };

const isPhone = () => window.matchMedia(PHONE_QUERY).matches;
const spotKey = () => `${SPOT_KEY}-${isPhone() ? 'phone' : 'desktop'}`;
const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

function readSpot(): Spot | null {
  try {
    const spot = JSON.parse(window.localStorage.getItem(spotKey()) ?? 'null');
    return spot && Number.isFinite(spot.fx) && Number.isFinite(spot.fy) ? spot : null;
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

// The room the dock can move in: inside the window, below the header.
function boundsOf(el: HTMLElement): Bounds {
  const minY = (isPhone() ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT) + EDGE;
  return {
    minX: EDGE,
    maxX: Math.max(EDGE, document.documentElement.clientWidth - el.offsetWidth - EDGE),
    minY,
    maxY: Math.max(minY, window.innerHeight - el.offsetHeight - EDGE),
  };
}

// Pins the dock at a point, overriding where the stylesheet puts it.
function pin(el: HTMLElement, x: number, y: number) {
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  el.style.right = 'auto';
  el.style.bottom = 'auto';
  el.style.transform = 'none';
}

function unpin(el: HTMLElement) {
  for (const prop of ['left', 'top', 'right', 'bottom', 'transform']) el.style.removeProperty(prop);
}

type Props = {
  iris: Iris | null;
  onPick: (iris: Iris) => void;
};

// The three eyes, always on screen: in a triangle in the top-left corner
// under the header, or in a row at the bottom center on phones. The visitor
// can drag them anywhere; a short press still picks an eye.
const EyePicker = ({ iris, onPick }: Props) => {
  const t = useDictionary();
  const dockRef = useRef<HTMLDivElement>(null);

  // Before paint, so a dock the visitor moved never flashes at its default spot.
  useLayoutEffect(() => {
    const el = dockRef.current;
    if (!el) return;

    let drag: {
      id: number;
      x0: number;
      y0: number;
      left: number;
      top: number;
      x: number;
      y: number;
      slop: number;
      moving: boolean;
      bounds: Bounds;
    } | null = null;
    let frame = 0;
    let swallowClick = false;

    // Back where the visitor left it, or where the stylesheet puts it.
    const restore = () => {
      if (drag?.moving) return;
      const spot = readSpot();
      if (!spot) {
        unpin(el);
        return;
      }
      const b = boundsOf(el);
      pin(el, b.minX + spot.fx * (b.maxX - b.minX), b.minY + spot.fy * (b.maxY - b.minY));
    };

    const down = (e: PointerEvent) => {
      if (!e.isPrimary || (e.pointerType === 'mouse' && e.button !== 0)) return;
      const r = el.getBoundingClientRect();
      drag = {
        id: e.pointerId,
        x0: e.clientX,
        y0: e.clientY,
        left: r.left,
        top: r.top,
        x: r.left,
        y: r.top,
        slop: DRAG_START[e.pointerType] ?? 4,
        moving: false,
        bounds: boundsOf(el),
      };
    };

    const move = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const dx = e.clientX - drag.x0;
      const dy = e.clientY - drag.y0;
      if (!drag.moving) {
        if (Math.hypot(dx, dy) < drag.slop) return;
        // From here it's a drag: the dock follows from where it was grabbed,
        // so it doesn't jump by the distance it took to tell.
        drag.moving = true;
        pin(el, drag.left, drag.top);
        el.setPointerCapture(e.pointerId);
        el.dataset.dragging = 'true';
        document.documentElement.classList.add('eyes-dragging');
      }
      const b = drag.bounds;
      drag.x = clamp(drag.left + dx, b.minX, b.maxX);
      drag.y = clamp(drag.top + dy, b.minY, b.maxY);
      // One write per frame, on the compositor: no layout while dragging.
      if (!frame) {
        frame = requestAnimationFrame(() => {
          frame = 0;
          if (drag) el.style.transform = `translate3d(${drag.x - drag.left}px, ${drag.y - drag.top}px, 0)`;
        });
      }
    };

    const end = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return;
      const done = drag;
      drag = null;
      if (!done.moving) return;
      cancelAnimationFrame(frame);
      frame = 0;
      pin(el, done.x, done.y);
      delete el.dataset.dragging;
      document.documentElement.classList.remove('eyes-dragging');
      const b = done.bounds;
      saveSpot({
        fx: b.maxX > b.minX ? (done.x - b.minX) / (b.maxX - b.minX) : 0,
        fy: b.maxY > b.minY ? (done.y - b.minY) / (b.maxY - b.minY) : 0,
      });
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

    restore();
    el.addEventListener('pointerdown', down);
    el.addEventListener('click', click, true);
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', end);
    window.addEventListener('pointercancel', end);
    window.addEventListener('resize', restore);
    return () => {
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove('eyes-dragging');
      el.removeEventListener('pointerdown', down);
      el.removeEventListener('click', click, true);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', end);
      window.removeEventListener('pointercancel', end);
      window.removeEventListener('resize', restore);
    };
  }, []);

  return (
    <EyeDock ref={dockRef}>
      <EyeGroup role="group" aria-label={t.lookout.eyesGroup} $size={EYE_SIZE}>
        {IRISES.map((id) => (
          <EyeButton
            key={id}
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
