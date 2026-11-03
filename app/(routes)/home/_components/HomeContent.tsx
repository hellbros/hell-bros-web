'use client'
import { useState, useEffect, useRef, type CSSProperties, type MouseEvent as ReactMouseEvent, type ReactNode, type TouchEvent as ReactTouchEvent } from "react";
import TrailerEmbed from "./TrailerEmbed";
import EyePicker, { IRIS_INK, type Iris } from "./EyePicker";
import { SectionContainer, Board, HeroGrid, HeroLogo, Tagline, Mark, Print, Tape, WishNote, Pill, Shots, Mechanics, StudioGrid, ArtFrame, Team, Member, Lightbox, CapsulePopup, CAPSULE_POPUP_GAP } from "../styles";
import { STEAM_PAGE_LIVE, STEAM_URL } from "@/app/_utils/constants";
import LookOutLogo from "@/public/assets/look-out/lookout-wordmark.png"
import HellBrosIso from "@/public/assets/brand/hellbros_iso_02.svg"
import Shot1 from "@/public/assets/images/1.png"
import Shot2 from "@/public/assets/images/2.png"
import Shot3 from "@/public/assets/images/3.png"
import Shot4 from "@/public/assets/images/4.png"
import SteamCapsule from "@/public/assets/look-out/steam-capsule.webp"
import DemonsInWater from "@/public/assets/look-out/demons-in-water.webp"
import Image from "next/image";
import { lockScroll, unlockScroll } from "@/app/_utils/scrollLock";
import { trapTab } from "@/app/_utils/focus";
import { useDictionary } from "@/app/_i18n/LocaleProvider";
import type { Dictionary } from "@/app/_i18n/dictionaries";

// YouTube video ID of the trailer (the part after v= / youtu.be/).
const TRAILER_ID = 'CY4mwk-rh30';

const LinkedinIcon = () => (
  <svg viewBox="0 0 448 512" aria-hidden="true">
    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

// The three Look Out gameplay shots, in order (used by the grid + lightbox),
// each pinned with its own tape.
const SHOTS = [Shot1, Shot2, Shot3];
const SHOT_PINS: { tilt: number; tape: Iris; tapeTilt: number }[] = [
  { tilt: -1.6, tape: 'red', tapeTilt: -4 },
  { tilt: 1, tape: 'blue', tapeTilt: 3 },
  { tilt: -0.8, tape: 'green', tapeTilt: -2 },
];

// Only the game's three colors, so the cards follow the eye like the rest of
// the board.
const TEAM: { name: string; role: keyof Dictionary['people']['roles']; color: Iris; linkedin: string }[] = [
  { name: 'Raúl Jeri', role: 'technicalCreative', color: 'red', linkedin: 'https://www.linkedin.com/in/rauljerilara/' },
  { name: 'Iván Aráoz', role: 'productionMarketing', color: 'blue', linkedin: 'https://www.linkedin.com/in/iaraoz06/' },
  { name: 'Ariana Coronel', role: 'art', color: 'red', linkedin: 'https://www.linkedin.com/in/ariana-coronel-palma-48b653401/' },
  { name: 'Gunter Brenner', role: 'soundMusic', color: 'green', linkedin: 'https://www.linkedin.com/in/gunterbrenner/' },
];

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18M18 6L6 18" /></svg>
);
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5L8 12l7 7" /></svg>
);

// Text without its `**emphasis**` markers.
const plain = (text: string) => text.replace(/\*\*/g, '');

const HomeContent = () => {
  const t = useDictionary();
  // The eye the visitor picked: only its iris color stays on the board.
  const [iris, setIris] = useState<Iris | null>(null);
  const [zoom, setZoom] = useState<number | null>(null);
  const [comingSoon, setComingSoon] = useState(false);
  const [popupBelow, setPopupBelow] = useState(false);
  const comingSoonTimer = useRef<number | undefined>(undefined);
  const popupRef = useRef<HTMLSpanElement>(null);

  const seen = (color: Iris) => iris === null || iris === color;
  const pickIris = (color: Iris) => setIris((current) => (current === color ? null : color));

  // `**text**` becomes highlighter, taking the colors in order.
  const marked = (text: string, colors: Iris[]): ReactNode =>
    text.split(/\*\*(.+?)\*\*/g).map((part, i) => {
      if (i % 2 === 0) return part;
      const color = colors[((i - 1) / 2) % colors.length];
      return <Mark key={i} $color={IRIS_INK[color].mark} $seen={seen(color)}>{part}</Mark>;
    });

  const tape = (color: Iris, style: CSSProperties) => (
    <Tape aria-hidden="true" $color={IRIS_INK[color].tape} $seen={seen(color)} style={style} />
  );

  const showComingSoon = (e: ReactMouseEvent<HTMLElement>) => {
    const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0;
    const popupHeight = popupRef.current?.offsetHeight ?? 0;
    setPopupBelow(e.currentTarget.getBoundingClientRect().top - popupHeight - CAPSULE_POPUP_GAP < headerBottom);
    setComingSoon(true);
    window.clearTimeout(comingSoonTimer.current);
    comingSoonTimer.current = window.setTimeout(() => setComingSoon(false), 1600);
  };
  useEffect(() => () => window.clearTimeout(comingSoonTimer.current), []);
  const lightboxOpen = zoom !== null;
  const lightboxRef = useRef<HTMLDivElement>(null);
  // The thumbnail that opened the lightbox, so focus can return to it on close.
  const zoomTrigger = useRef<HTMLElement | null>(null);

  // While the lightbox is open: lock scroll (no layout shift), wire keys, keep
  // focus inside, and push a history entry so the phone's native back button /
  // gesture closes the zoom instead of leaving the page. Depends on the
  // open/closed flag (not the index) so switching shots doesn't stack history
  // entries.
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setZoom(null);
      else if (e.key === 'ArrowRight') setZoom((z) => (z === null ? z : (z + 1) % SHOTS.length));
      else if (e.key === 'ArrowLeft') setZoom((z) => (z === null ? z : (z - 1 + SHOTS.length) % SHOTS.length));
      else if (e.key === 'Tab') trapTab(e, lightboxRef.current);
    };
    const onPop = () => setZoom(null); // back button closes the lightbox
    lockScroll();
    lightboxRef.current?.querySelector<HTMLElement>('.close')?.focus({ preventScroll: true });
    // Preserve Next's router state; just flag this entry as the lightbox's.
    window.history.pushState({ ...window.history.state, __lightbox: true }, '');
    window.addEventListener('keydown', onKey);
    window.addEventListener('popstate', onPop);
    return () => {
      unlockScroll();
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('popstate', onPop);
      // Closed via X / Esc / backdrop: drop the entry we pushed. Closed via
      // back: the browser already popped it (flag gone), so don't go back twice.
      if (window.history.state && window.history.state.__lightbox) {
        window.history.back();
      }
      zoomTrigger.current?.focus({ preventScroll: true });
    };
  }, [lightboxOpen]);

  // Swipe to change photo on touch (left -> next, right -> prev; both wrap).
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const swiped = useRef(false);

  const onTouchStart = (e: ReactTouchEvent) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    swiped.current = false;
  };
  const onTouchMove = (e: ReactTouchEvent) => {
    if (touchStartX.current === null) return;
    if (Math.abs(e.touches[0].clientX - touchStartX.current) > 10) swiped.current = true;
  };
  const onTouchEnd = (e: ReactTouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.4) {
      setZoom((z) => (z === null ? z : (z + (dx < 0 ? 1 : SHOTS.length - 1)) % SHOTS.length));
    }
  };

  return (
    <SectionContainer id="inicio" tabIndex={-1}>

      <EyePicker iris={iris} onPick={pickIris} />

      {/* LOOK OUT: logo + tagline, trailer, wishlist note, shots, how it plays */}
      <Board id="lookout">
        <HeroGrid>
          <HeroLogo>
            <Image src={LookOutLogo} alt="Look Out: Indie Game" sizes="(max-width: 700px) 90vw, 460px" priority />
          </HeroLogo>
          <Tagline>{marked(t.lookout.tagline, ['blue', 'red'])}</Tagline>
        </HeroGrid>

        <Print $tilt={-0.7} $width="min(880px, 100%)">
          {tape('red', { left: -18, top: -12, transform: 'rotate(-24deg)' })}
          {tape('blue', { right: -18, top: -12, transform: 'rotate(22deg)' })}
          <TrailerEmbed videoId={TRAILER_ID} title={t.lookout.trailerTitle} />
        </Print>

        <WishNote>
          {tape('green', { left: '50%', top: -14, width: 120, height: 32, marginLeft: -60, transform: 'rotate(-3deg)' })}
          <h2>{t.lookout.wishlistTitle}</h2>
          {STEAM_PAGE_LIVE ? (
            <Pill as="a" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
              {t.lookout.wishlistButton}
            </Pill>
          ) : (
            <Pill type="button" onClick={showComingSoon}>
              {t.lookout.wishlistButton}
              <CapsulePopup ref={popupRef} $visible={comingSoon} $below={popupBelow} role="status">
                <span className="header">{t.lookout.comingSoon}</span>
                <Image src={SteamCapsule} alt="Look Out" sizes="300px" />
              </CapsulePopup>
            </Pill>
          )}
        </WishNote>

        <Shots>
          {SHOTS.map((src, i) => (
            <Print key={i} $tilt={SHOT_PINS[i].tilt}>
              {tape(SHOT_PINS[i].tape, { left: '50%', top: -13, width: 100, height: 28, marginLeft: -50, transform: `rotate(${SHOT_PINS[i].tapeTilt}deg)` })}
              <button
                type="button"
                className="shot"
                onClick={(e) => { zoomTrigger.current = e.currentTarget; setZoom(i); }}
                aria-label={t.lookout.enlargeShot(i + 1, SHOTS.length)}
              >
                <Image src={src} alt={t.lookout.shotAlt} fill sizes="(max-width: 700px) 90vw, 300px" />
              </button>
            </Print>
          ))}
        </Shots>

        <Mechanics>
          <Print as="figure" $tilt={-1.2}>
            {tape('green', { left: -16, top: 16, width: 96, height: 28, transform: 'rotate(-38deg)' })}
            <Image src={Shot4} alt={t.lookout.shotAlt} sizes="(max-width: 700px) 90vw, 460px" />
            <figcaption>{t.lookout.chainCaption}</figcaption>
          </Print>
          <div className="copy">
            <p>{marked(t.lookout.platforms, ['red', 'blue'])}</p>
            <p>{marked(t.lookout.players, ['green', 'red', 'blue'])}</p>
          </div>
        </Mechanics>
      </Board>

      {/* OUR STUDIO: intro + Discord, the demons' art, the team */}
      <Board id="about">
        <StudioGrid>
          <div className="intro">
            <h2>{t.studio.title}</h2>
            <p>{plain(t.studio.intro)}</p>
            <Pill as="a" href="https://discord.gg/mSYYyGs5Yd" target="_blank" rel="noopener noreferrer">
              <DiscordIcon />
              {t.studio.discordButton}
            </Pill>
          </div>
          <Image className="iso" src={HellBrosIso} alt="Hell Bros" />
        </StudioGrid>

        <Print $tilt={0.7} $width="min(880px, 100%)">
          {tape('blue', { left: -18, bottom: 18, width: 120, height: 32, transform: 'rotate(32deg)' })}
          {tape('red', { right: -18, top: 18, width: 120, height: 32, transform: 'rotate(32deg)' })}
          <ArtFrame>
            <Image src={DemonsInWater} alt={t.lookout.demonsArtAlt} fill sizes="(max-width: 1000px) 100vw, 856px" />
          </ArtFrame>
        </Print>

        <Team id="team">
          {TEAM.map(({ name, role, color, linkedin }, i) => (
            <Member key={name} $bg={IRIS_INK[color].solid} $seen={seen(color)} $low={i % 2 === 1}>
              <p className="name">{name}</p>
              <p className="role">{t.people.roles[role]}</p>
              <a
                className="linkedin"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.people.onLinkedin(name)}
              >
                <LinkedinIcon />
              </a>
            </Member>
          ))}
        </Team>
      </Board>

      {zoom !== null && (
        <Lightbox
          ref={lightboxRef}
          onClick={() => { if (swiped.current) { swiped.current = false; return; } setZoom(null); }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label={t.lookout.shotAlt}
        >
          <button className="close" type="button" aria-label={t.lookout.close} onClick={() => setZoom(null)}>
            <CloseIcon />
          </button>
          <button
            className="nav prev"
            type="button"
            aria-label={t.lookout.prev}
            onClick={(e) => { e.stopPropagation(); setZoom((z) => (z === null ? z : (z - 1 + SHOTS.length) % SHOTS.length)); }}
          >
            <ChevronIcon />
          </button>
          <div className="frame" onClick={(e) => e.stopPropagation()}>
            <Image src={SHOTS[zoom]} alt={t.lookout.shotAlt} sizes="90vw" priority />
          </div>
          <button
            className="nav next"
            type="button"
            aria-label={t.lookout.next}
            onClick={(e) => { e.stopPropagation(); setZoom((z) => (z === null ? z : (z + 1) % SHOTS.length)); }}
          >
            <ChevronIcon />
          </button>
        </Lightbox>
      )}

    </SectionContainer>
  );
};

export default HomeContent;
