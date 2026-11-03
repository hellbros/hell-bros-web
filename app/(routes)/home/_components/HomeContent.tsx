'use client'
import { useState, useEffect, useRef, type MouseEvent as ReactMouseEvent, type ReactNode, type TouchEvent as ReactTouchEvent } from "react";
import TrailerEmbed from "./TrailerEmbed";
import EyePicker, { IRIS_INK, type Iris } from "./EyePicker";
import { SectionContainer, Brand, Intro, Act, Studio, Card, StoryArt, HeroLogo, Tagline, Mark, WishNote, Pill, Lanes, Lane, Mechanics, StudioGrid, ChainArt, ArtFrame, Team, Member, Lightbox, CapsulePopup, CAPSULE_POPUP_GAP } from "../styles";
import { STEAM_PAGE_LIVE, STEAM_URL } from "@/app/_utils/constants";
import LookOutLogo from "@/public/assets/look-out/look-out-logo-hell-bros.png"
import HellBrosLogo from "@/public/assets/brand/logo_hb_color02.svg"
import HellBrosIso from "@/public/assets/brand/hellbros_iso_02.svg"
import RaulDemon from "@/public/assets/team/hell-bros-raul-jeri.webp"
import IvanDemon from "@/public/assets/team/hell-bros-ivan-araoz.webp"
import ArianaDemon from "@/public/assets/team/hell-bros-ariana-coronel.webp"
import GunterDemon from "@/public/assets/team/hell-bros-gunter-brenner.webp"
import Shot1 from "@/public/assets/images/1.png"
import Shot2 from "@/public/assets/images/2.png"
import Shot3 from "@/public/assets/images/3.png"
import Shot4 from "@/public/assets/images/4.png"
import SteamCapsule from "@/public/assets/look-out/steam-capsule.webp"
import DemonsInWater from "@/public/assets/look-out/hell-bros-look-out-demons-in-water.webp"
import Image, { type StaticImageData } from "next/image";
import { lockScroll, unlockScroll } from "@/app/_utils/scrollLock";
import { trapTab } from "@/app/_utils/focus";
import { useDictionary } from "@/app/_i18n/LocaleProvider";
import type { Dictionary } from "@/app/_i18n/dictionaries";

// YouTube video ID of the trailer (the part after v= / youtu.be/).
const TRAILER_ID = 'CY4mwk-rh30';

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

// The three Look Out gameplay shots, in order (used by the screens + lightbox),
// each seen through one eye.
const SHOTS: { src: StaticImageData; eye: Iris }[] = [
  { src: Shot1, eye: 'blue' },
  { src: Shot2, eye: 'green' },
  { src: Shot3, eye: 'red' },
];

// Each teammate as a demon of the game in their own colors. They aren't part
// of the page's colors, so the eyes leave them alone.
const TEAM: { name: string; role: keyof Dictionary['people']['roles']; demon: StaticImageData; linkedin: string }[] = [
  { name: 'Raúl Jeri', role: 'technicalCreative', demon: RaulDemon, linkedin: 'https://www.linkedin.com/in/rauljerilara/' },
  { name: 'Iván Aráoz', role: 'productionMarketing', demon: IvanDemon, linkedin: 'https://www.linkedin.com/in/iaraoz06/' },
  { name: 'Ariana Coronel', role: 'art', demon: ArianaDemon, linkedin: 'https://www.linkedin.com/in/ariana-coronel-palma-48b653401/' },
  { name: 'Gunter Brenner', role: 'soundMusic', demon: GunterDemon, linkedin: 'https://www.linkedin.com/in/gunterbrenner/' },
];

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18M18 6L6 18" /></svg>
);
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5L8 12l7 7" /></svg>
);

// Text without its `**emphasis**` markers.
const plain = (text: string) => text.replace(/\*\*/g, '');

// Steam's button, up top and again under the trailer. While the store page
// isn't live, it shows its own "Coming soon!" capsule instead of linking out.
const WishlistButton = () => {
  const t = useDictionary();
  const [comingSoon, setComingSoon] = useState(false);
  const [popupBelow, setPopupBelow] = useState(false);
  const comingSoonTimer = useRef<number | undefined>(undefined);
  const popupRef = useRef<HTMLSpanElement>(null);

  const showComingSoon = (e: ReactMouseEvent<HTMLElement>) => {
    const headerBottom = document.querySelector('.site-header')?.getBoundingClientRect().bottom ?? 0;
    const popupHeight = popupRef.current?.offsetHeight ?? 0;
    setPopupBelow(e.currentTarget.getBoundingClientRect().top - popupHeight - CAPSULE_POPUP_GAP < headerBottom);
    setComingSoon(true);
    window.clearTimeout(comingSoonTimer.current);
    comingSoonTimer.current = window.setTimeout(() => setComingSoon(false), 1600);
  };
  useEffect(() => () => window.clearTimeout(comingSoonTimer.current), []);

  if (STEAM_PAGE_LIVE) {
    return (
      <Pill as="a" href={STEAM_URL} target="_blank" rel="noopener noreferrer">
        {t.lookout.wishlistButton}
      </Pill>
    );
  }
  return (
    <Pill type="button" onClick={showComingSoon}>
      {t.lookout.wishlistButton}
      <CapsulePopup ref={popupRef} $visible={comingSoon} $below={popupBelow} role="status">
        <span className="header">{t.lookout.comingSoon}</span>
        <Image src={SteamCapsule} alt="Look Out" sizes="300px" />
      </CapsulePopup>
    </Pill>
  );
};

const HomeContent = () => {
  const t = useDictionary();
  // The eye the visitor picked: only its iris color stays on the page.
  const [iris, setIris] = useState<Iris | null>(null);
  const [zoom, setZoom] = useState<number | null>(null);

  const seen = (color: Iris) => iris === null || iris === color;
  const pickIris = (color: Iris) => setIris((current) => (current === color ? null : color));

  // `**text**` becomes highlighter, taking the colors in order.
  const marked = (text: string, colors: Iris[]): ReactNode =>
    text.split(/\*\*(.+?)\*\*/g).map((part, i) => {
      if (i % 2 === 0) return part;
      const color = colors[((i - 1) / 2) % colors.length];
      return <Mark key={i} $color={IRIS_INK[color].mark} $seen={seen(color)}>{part}</Mark>;
    });

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

      {/* The studio first: its logo big and the slogan under it. Once this
          leaves the screen, the header shows the logo small. */}
      <Brand id="marca">
        <Image src={HellBrosLogo} alt="Hell Bros" sizes="(max-width: 700px) 82vw, 560px" priority />
        <p>Games from hell</p>
      </Brand>

      <EyePicker iris={iris} onPick={pickIris} />

      {/* LOOK OUT first says what it is: logo, tagline and Steam's button. */}
      <Intro id="lookout">
        <HeroLogo>
          <Image src={LookOutLogo} alt="Look Out: Indie Game" sizes="(max-width: 700px) 90vw, 460px" priority />
        </HeroLogo>
        <div className="pitch">
          <Tagline>{marked(t.lookout.tagline, ['blue', 'red'])}</Tagline>
          <WishlistButton />
        </div>
      </Intro>

      {/* Part 1: the three demons, trapped. */}
      <Act>
        <h2>{t.lookout.trappedTitle}</h2>
        <StoryArt>
          <ArtFrame>
            <Image src={DemonsInWater} alt={t.lookout.demonsArtAlt} fill sizes="(max-width: 1000px) 90vw, 856px" />
          </ArtFrame>
        </StoryArt>
      </Act>

      {/* Part 2: no one sees their own path. What each eye can do over its
          screen, then what that means beside the diagram. */}
      <Act>
        <h2>{t.lookout.pathTitle}</h2>
        <p>{marked(t.lookout.mechanicPaths, ['red', 'blue'])}</p>
        <Lanes>
          {SHOTS.map(({ src, eye }, i) => (
            <Lane key={eye} $color={IRIS_INK[eye].solid} $seen={seen(eye)} $open={iris === eye}>
              <button
                type="button"
                className="screen"
                onClick={(e) => { zoomTrigger.current = e.currentTarget; setZoom(i); }}
                aria-label={`${plain(t.lookout.irisView[eye])} ${t.lookout.enlargeShot(i + 1, SHOTS.length)}`}
              >
                <Image src={src} alt={t.lookout.shotAlt} fill sizes="(max-width: 700px) 90vw, 600px" />
              </button>
              <p>{marked(t.lookout.irisView[eye], [eye])}</p>
            </Lane>
          ))}
        </Lanes>

        <Mechanics>
          <Card as="figure">
            <ChainArt>
              <Image src={Shot4} alt={t.lookout.shotAlt} fill sizes="(max-width: 860px) 90vw, 380px" />
            </ChainArt>
            <figcaption>{t.lookout.chainCaption}</figcaption>
          </Card>
          <div className="copy">
            <p>{marked(t.lookout.mechanicChain, ['green'])}</p>
          </div>
        </Mechanics>
      </Act>

      {/* Part 3: escape together. The trailer, then Steam's note. */}
      <Act>
        <h2>{t.lookout.escapeTitle}</h2>
        <Card>
          <TrailerEmbed videoId={TRAILER_ID} title={t.lookout.trailerTitle} />
        </Card>

        <WishNote>
          <Image src={SteamCapsule} alt="Look Out" sizes="(max-width: 700px) 90vw, 300px" />
          <div>
            <h3>{t.lookout.wishlistTitle}</h3>
            <WishlistButton />
          </div>
        </WishNote>
      </Act>

      {/* OUR STUDIO: intro + Discord, the team */}
      <Studio id="about">
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

        <Team id="team">
          {TEAM.map(({ name, role, demon, linkedin }, i) => (
            <Member
              key={name}
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.people.onLinkedin(name)}
              $low={i % 2 === 1}
            >
              <Image src={demon} alt="" sizes="(max-width: 700px) 40vw, 200px" />
              <p className="name">{name}</p>
              <p className="role">{t.people.roles[role]}</p>
            </Member>
          ))}
        </Team>
      </Studio>

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
            <Image src={SHOTS[zoom].src} alt={t.lookout.shotAlt} sizes="90vw" priority />
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
