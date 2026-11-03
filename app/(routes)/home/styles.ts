"use client"

import styled, { keyframes } from 'styled-components';
import { variant } from 'styled-system';
import TextGlobal from '../../_components/Text';
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE, MAX_WIDTH, SECTION_PADDING } from '../../_utils/constants';
import { theme } from '@/app/_styles/theme';

export const CAPSULE_POPUP_GAP = 6;

const PHONE = '@media (max-width: 700px)';
const PHONE_PADDING = '20px';
// Where the side-by-side pairs of a part stack up.
const NARROW = '@media (max-width: 860px)';

// Hand-drawn box: each corner bulges a little differently.
const ROUGH_RADIUS = '255px 15px 225px 15px / 15px 225px 15px 255px';

// No top padding: the brand section sits under the header, which is see-through
// up there.
export const SectionContainer = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  /* A tilted card must not widen the page. */
  overflow-x: clip;

  /* Focusable only as the skip link's target; a ring around the page is noise. */
  &:focus {
    outline: none;
  }
`;

// The studio up top, like Evil Empire: the logo big, the slogan under it.
export const Brand = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  min-height: min(70vh, 560px);
  padding: ${HEADER_HEIGHT + 24}px ${SECTION_PADDING} 32px;
  box-sizing: border-box;
  text-align: center;

  img {
    width: min(560px, 82vw);
    height: auto;
  }

  p {
    margin: 0;
    font-family: ${theme.fonts.hand};
    font-size: clamp(30px, 5vw, 52px);
    font-weight: 800;
    line-height: 1.05;
  }

  ${PHONE} {
    min-height: 0;
    padding: ${HEADER_HEIGHT_MOBILE + 32}px ${PHONE_PADDING} 24px;
  }
`;

export const NotFoundPage = styled.main`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: ${SECTION_PADDING};
  text-align: center;

  img {
    width: 100%;
    max-width: 240px;
    height: auto;
  }

  h1 {
    margin: 0;
    font-size: 72px;
    font-weight: 700;
    line-height: 1;
  }
`;

export const Text = styled(TextGlobal)`
   ${variant({
  prop: '$styles',
  variants: {
    heroTagline: {
      fontSize: '19px',
      fontWeight: 400,
      lineHeight: '32px',
      color: theme.colors.secondaryText,
      '.big': {
        fontSize: '25px',
        fontWeight: 700,
        color: theme.colors.black,
      },
    },
  },
})}
`;

/* One of the page's three parts: a title, then its pictures and text, on the
   header's 1000px grid. */
export const Act = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: 64px ${SECTION_PADDING} 0;
  box-sizing: border-box;

  & > h2 {
    margin: 0;
    font-family: ${theme.fonts.hand};
    font-size: clamp(34px, 4.6vw, 48px);
    font-weight: 800;
    line-height: 1.1;
  }

  & > p {
    margin: 0;
    font-size: 21px;
    line-height: 1.45;
  }

  ${PHONE} {
    gap: 24px;
    padding: 48px ${PHONE_PADDING} 0;
  }
`;

/* The studio and its team, after the three parts. */
export const Studio = styled.section`
  display: flex;
  flex-direction: column;
  gap: 44px;
  width: 100%;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: 88px ${SECTION_PADDING} 72px;
  box-sizing: border-box;

  ${PHONE} {
    gap: 36px;
    padding: 64px ${PHONE_PADDING} 40px;
  }
`;

// A white card for a photo or a note: thick black border, round corners.
export const Card = styled.div`
  position: relative;
  margin: 0;
  padding: 10px;
  box-sizing: border-box;
  background: ${theme.colors.white};
  border: 3px solid ${theme.colors.black};
  border-radius: 18px;
`;

// Look Out up front, before its three parts: the logo, what the game is, and
// the Steam button.
export const Intro = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 28px 40px;
  align-items: center;
  width: 100%;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: 32px ${SECTION_PADDING} 0;
  box-sizing: border-box;

  .pitch {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  /* Phones: the button spans the width, so the coming-soon popup that hangs
     from its right edge stays on screen. */
  ${PHONE} {
    gap: 12px;
    padding: 16px ${PHONE_PADDING} 0;

    .pitch {
      gap: 16px;
    }

    .pitch > * {
      align-self: stretch;
    }
  }
`;

// Smaller on phones, so the Steam button clears the floating eyes on the first
// screen.
export const HeroLogo = styled.h1`
  width: min(460px, 100%);
  margin: 0;
  transform: rotate(-3deg);

  img {
    width: 100%;
    height: auto;
  }

  ${PHONE} {
    width: 240px;
  }
`;

export const Tagline = styled.p`
  margin: 0;
  font-size: clamp(23px, 2.7vw, 30px);
  line-height: 1.32;
`;

// Part 1: the three demons in the water, a little tilted.
export const StoryArt = styled(Card)`
  align-self: center;
  width: min(880px, 100%);
  transform: rotate(-1deg);
`;

// Highlighter over the key phrases. A color you can't see leaves only a dashed
// underline.
export const Mark = styled.mark<{ $color: string; $seen: boolean }>`
  color: inherit;
  background: ${({ $color, $seen }) => ($seen ? $color : 'none')};
  text-decoration: ${({ $seen }) => ($seen ? 'none' : 'underline dashed 2px')};
  text-underline-offset: 6px;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
`;

// Steam's note under the trailer: the game's capsule beside the button.
export const WishNote = styled(Card)`
  /* Above the trailer, so the coming-soon popup can open over it. */
  z-index: 1;
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 28px;
  align-items: center;
  padding: 20px;

  & > img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  h3 {
    margin: 0 0 14px;
    font-family: ${theme.fonts.hand};
    font-size: clamp(26px, 3vw, 32px);
    font-weight: 800;
    line-height: 1.15;
  }

  ${PHONE} {
    grid-template-columns: 1fr;
    gap: 18px;
    padding: 16px;
  }
`;

// The page's buttons: black pills lettered by hand. On hover they empty out,
// like the site's other solid buttons.
export const Pill = styled.button`
  position: relative;
  /* The hover scale wraps the coming-soon popup in the button's own layer, so
     the button has to sit above the cards around it. */
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 60px;
  padding: 0 30px;
  box-sizing: border-box;
  border: 2px solid ${theme.colors.black};
  border-radius: 48px;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.hand};
  font-size: 20px;
  font-weight: 800;
  line-height: 1.2;
  text-align: center;
  text-decoration: none;
  white-space: normal;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease, transform 200ms ease;

  svg {
    flex: none;
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: transparent;
      color: ${theme.colors.black};
      transform: scale(1.04);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

/* Part 2: three screens side by side, one per iris. On phones they stack. */
export const Lanes = styled.div`
  container-type: inline-size;
  display: flex;
  gap: 14px;

  ${PHONE} {
    flex-direction: column;
    gap: 18px;
  }
`;

// What one iris sees: its screen framed in its color, and under it what that
// iris means. The iris you pick opens its screen wide; the colors you can't
// see go grey behind a dashed border. On phones the open one keeps its full
// height and the others shrink to a strip.
export const Lane = styled.div<{ $color: string; $seen: boolean; $open: boolean }>`
  flex: ${({ $open }) => ($open ? 2.6 : 1)} 1 0;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: flex-grow 0.3s ease-out;

  .screen {
    position: relative;
    display: block;
    width: 100%;
    height: clamp(220px, 33vw, 330px);
    overflow: hidden;
    padding: 0;
    box-sizing: border-box;
    background: ${theme.colors.black};
    border: 4px ${({ $seen }) => ($seen ? 'solid' : 'dashed')} ${({ $color, $seen }) => ($seen ? $color : theme.colors.black)};
    border-radius: 16px;
    filter: ${({ $seen }) => ($seen ? 'none' : 'grayscale(1)')};
    opacity: ${({ $seen }) => ($seen ? 1 : 0.45)};
    cursor: zoom-in;
    transition: height 0.3s ease-out, filter 0.3s ease-out, opacity 0.3s ease-out;
  }

  .screen img {
    object-fit: cover;
  }

  p {
    margin: 0;
    font-family: ${theme.fonts.hand};
    font-size: 19px;
    font-weight: 800;
    line-height: 1.35;
  }

  ${PHONE} {
    flex: none;

    .screen {
      height: ${({ $seen }) => ($seen ? 'calc(100cqw * 9 / 16)' : '96px')};
    }
  }
`;

// The demons' diagram beside how the game plays.
export const Mechanics = styled.div`
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 24px 40px;
  align-items: center;

  figcaption {
    margin-top: 6px;
    font-family: ${theme.fonts.hand};
    font-size: 24px;
    font-weight: 800;
    text-align: center;
  }

  ${NARROW} {
    grid-template-columns: 1fr;
  }

  .copy {
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-size: 21px;
    line-height: 1.45;
  }

  .copy p {
    margin: 0;
  }
`;

export const StudioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 24px 40px;
  align-items: center;

  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  h2 {
    margin: 0;
    padding-bottom: 6px;
    border-bottom: 4px dashed ${theme.colors.black};
    font-family: ${theme.fonts.hand};
    font-size: clamp(34px, 4.6vw, 52px);
    font-weight: 800;
    line-height: 1.1;
  }

  p {
    margin: 0;
    font-size: 21px;
    line-height: 1.45;
  }

  .iso {
    justify-self: center;
    width: min(320px, 80%);
    height: auto;
    transform: rotate(3deg);
  }
`;

// The three demons' diagram, with the empty sides of the 16:9 art cut off.
// The drawing spans x 257-1662 of 1920; keep about 127px of it beside each cape.
export const ChainArt = styled.div`
  position: relative;
  aspect-ratio: 1659 / 1080;
  overflow: hidden;
  border-radius: 10px;

  img {
    object-fit: cover;
  }
`;

// The art keeps the trailer's 16:9 frame.
export const ArtFrame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 10px;

  img {
    object-fit: cover;
  }
`;

export const Team = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(140px, 100%), 1fr));
  gap: 30px 22px;
  padding-bottom: 16px;
`;

// Each teammate as a demon of the game, linking to their LinkedIn; every other
// one stands a little lower and each one hops on hover.
export const Member = styled.a<{ $low?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${theme.colors.black};
  text-decoration: none;
  transform: translateY(${({ $low }) => ($low ? 14 : 0)}px);
  transition: transform 0.15s ease-out;

  @media (hover: hover) {
    &:hover {
      transform: translateY(${({ $low }) => ($low ? 10 : -4)}px);
    }
  }

  img {
    width: min(200px, 100%);
    height: auto;
    margin-bottom: 10px;
  }

  .name {
    margin: 0;
    font-family: ${theme.fonts.hand};
    font-size: 23px;
    font-weight: 800;
    line-height: 1.15;
  }

  .role {
    margin: 4px 0 0;
    font-size: 18px;
    line-height: 1.25;
  }

  /* Two to a row on phones: no staggering. */
  ${PHONE} {
    transform: none;

    @media (hover: hover) {
      &:hover {
        transform: translateY(-4px);
      }
    }
  }
`;

/* Eyes ------------------------------------------------------------------- */

// The chosen eye narrows its lid into a V over the iris instead of wearing a
// ring. Both shapes have the same points so the lid can close in a blink.
const LID_OPEN = 'polygon(0 0, 50% 0, 100% 0, 100% 100%, 0 100%)';
const LID_V = 'polygon(0 12%, 50% 41%, 100% 12%, 100% 100%, 0 100%)';

/* Two eyes below, one on top; on phones, one row. */
export const EyeGroup = styled.div<{ $size: number }>`
  display: grid;
  grid-template-columns: repeat(2, ${({ $size }) => $size + 2}px);
  gap: 2px 4px;

  & > :first-child {
    grid-column: 1 / span 2;
    justify-self: center;
  }

  ${PHONE} {
    display: flex;
    gap: 8px;
  }
`;

export const EyeButton = styled.button<{ $size: number }>`
  display: grid;
  place-items: center;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  padding: 0;
  box-sizing: border-box;
  background: ${theme.colors.white};
  border: 0;
  border-radius: 50%;
  cursor: pointer;
`;

export const EyeIris = styled.span<{ $size: number; $color: string; $chosen: boolean }>`
  grid-area: 1 / 1;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: ${({ $color }) => $color};
  border-radius: 50%;
  clip-path: ${({ $chosen }) => ($chosen ? LID_V : LID_OPEN)};
  transition: clip-path 0.1s ease-out;
`;

// Always on top of the iris, even while the lid cuts it.
export const EyePupil = styled.span<{ $size: number }>`
  grid-area: 1 / 1;
  position: relative;
  z-index: 1;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: ${theme.colors.black};
  border-radius: 50%;
`;

// The eyes wait in the top-left corner, just under the header.
export const EyeDock = styled.div`
  position: fixed;
  top: ${HEADER_HEIGHT + 12}px;
  left: 12px;
  z-index: 9998;

  /* Phones: one row at the bottom center, within thumb reach and clear of the
     header, lifted above the iPhone's home indicator. */
  ${PHONE} {
    top: auto;
    left: 50%;
    bottom: calc(16px + env(safe-area-inset-bottom, 0px));
    transform: translateX(-50%);
  }
`;

/* Trailer ---------------------------------------------------------------- */

export const TrailerFrame = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 10px;
  background: ${theme.colors.black};

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
    display: block;
  }

  .facade {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    border: 0;
    cursor: pointer;
    background: ${theme.colors.black};
    display: block;
  }

  .facade:focus-visible {
    outline-offset: -4px;
  }

  .facade img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .facade .play {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 92px;
    height: 92px;
    box-sizing: border-box;
    border: 4px solid ${theme.colors.black};
    border-radius: 50%;
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  @media (prefers-reduced-motion: no-preference) {
    .facade:hover .play {
      transform: translate(-50%, -50%) scale(1.08);
    }
  }

  .facade .play svg {
    width: 42px;
    height: 42px;
    fill: ${theme.colors.black};
    margin-left: 4px;
  }

  ${PHONE} {
    .facade .play {
      width: 68px;
      height: 68px;
    }

    .facade .play svg {
      width: 30px;
      height: 30px;
      margin-left: 3px;
    }
  }
`;

// "Coming soon!" popup for the Wishlist button while the Steam page isn't
// live: the Steam capsule under a green header, framed in the same green.
// Pops above the button's right edge like a badge, or below it when there's no
// room under the fixed header; always mounted (just hidden) so the image is
// already loaded when it shows.
export const CapsulePopup = styled.span<{ $visible: boolean; $below: boolean }>`
  position: absolute;
  right: 0;
  ${({ $below }) => ($below ? 'top' : 'bottom')}: calc(100% + ${CAPSULE_POPUP_GAP}px);
  z-index: 2;
  display: block;
  width: 300px;
  max-width: 70vw;
  border: 3px solid ${theme.colors.green};
  border-radius: 10px;
  overflow: hidden;
  background: ${theme.colors.green};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  pointer-events: none;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};

  .header {
    display: block;
    padding: 5px 8px 6px;
    color: ${theme.colors.black};
    font-size: 16px;
    font-weight: 800;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  @media (max-width: 640px) {
    .header {
      font-size: 13px;
    }
  }
`;

const lightboxFade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

/* Full-screen overlay to view a gameplay shot larger. Above the header
   (z-index 9999). Click the backdrop / X / Esc to close; arrows to browse. */
export const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.9);
  cursor: zoom-out;
  /* Let horizontal swipes reach our JS (vertical stays with the browser). */
  touch-action: pan-y;
  animation: ${lightboxFade} 0.2s ease-out;

  .frame {
    cursor: default;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frame img {
    max-width: 90vw;
    max-height: 85vh;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }

  button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.12);
    color: ${theme.colors.white};
    cursor: pointer;
    transition: background 0.2s ease;
  }

  @media (hover: hover) {
    button:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }

  button svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
  }

  .close {
    top: 20px;
    right: 20px;
  }

  .nav {
    top: 50%;
    transform: translateY(-50%);
  }
  .nav.prev {
    left: 16px;
  }
  .nav.next {
    right: 16px;
  }
  .nav.next svg {
    transform: rotate(180deg);
  }

  @media (max-width: 640px) {
    /* The photo fills the width here, so the arrows sit on top of it and the
       translucent white disappears over the bright shots. */
    .nav {
      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.55);
    }
    .nav.prev {
      left: 8px;
    }
    .nav.next {
      right: 8px;
    }
    .close {
      top: 12px;
      right: 12px;
    }
  }
`;
