"use client"

import styled, { keyframes } from 'styled-components';
import { variant } from 'styled-system';
import TextGlobal from '../../_components/Text';
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE, MAX_WIDTH, SECTION_PADDING } from '../../_utils/constants';
import { theme } from '@/app/_styles/theme';

export const CAPSULE_POPUP_GAP = 6;

const PHONE = '@media (max-width: 700px)';
const PHONE_PADDING = '20px';

// Hand-drawn box: each corner bulges a little differently.
const ROUGH_RADIUS = '255px 15px 225px 15px / 15px 225px 15px 255px';

// Tape ends cut in a zigzag.
const ZIGZAG = 'polygon(0 0, 100% 0, 96% 25%, 100% 50%, 96% 75%, 100% 100%, 0 100%, 4% 75%, 0 50%, 4% 25%)';

export const SectionContainer = styled.main`
  padding-top: ${HEADER_HEIGHT}px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  /* Tape that sticks out past a tilted print must not widen the page. */
  overflow-x: clip;

  /* Focusable only as the skip link's target; a ring around the page is noise. */
  &:focus {
    outline: none;
  }

  /* In CSS, not from useMediaQuery, so phones don't shift 16px on hydration. */
  ${PHONE} {
    padding-top: ${HEADER_HEIGHT_MOBILE}px;
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

/* One column for the whole board, on the header's 1000px grid. */
export const Board = styled.section`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: 36px ${SECTION_PADDING} 48px;
  box-sizing: border-box;

  ${PHONE} {
    padding: 28px ${PHONE_PADDING} 40px;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 28px;
  align-items: center;
`;

export const HeroLogo = styled.h1`
  width: min(460px, 100%);
  margin: 0;
  transform: rotate(-3deg);

  img {
    width: 100%;
    height: auto;
  }
`;

export const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  /* The eyes' legend, written by hand under the tagline. */
  .hint {
    margin: 0;
    font-family: ${theme.fonts.hand};
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const Tagline = styled.p`
  margin: 0;
  font-size: clamp(23px, 2.7vw, 30px);
  line-height: 1.32;
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

// A photo pinned to the board: white border, a slight tilt.
export const Print = styled.div<{ $tilt?: number; $width?: string }>`
  position: relative;
  align-self: center;
  width: ${({ $width }) => $width ?? '100%'};
  margin: 0;
  padding: 12px;
  box-sizing: border-box;
  background: ${theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.12);
  transform: rotate(${({ $tilt }) => $tilt ?? 0}deg);

  & > img {
    width: 100%;
    height: auto;
  }

  figcaption {
    margin-top: 4px;
    font-family: ${theme.fonts.hand};
    font-size: 24px;
    font-weight: 800;
    text-align: center;
  }
`;

// Colored tape holding a print. Its size and angle come from the inline style.
// A color you can't see leaves its dashed outline.
export const Tape = styled.span<{ $color: string; $seen: boolean }>`
  position: absolute;
  z-index: 1;
  width: 130px;
  height: 34px;
  box-sizing: border-box;
  background: ${({ $color, $seen }) => ($seen ? $color : 'transparent')};
  border: ${({ $seen }) => ($seen ? '0' : '3px dashed #000000')};
  clip-path: ${({ $seen }) => ($seen ? ZIGZAG : 'none')};
  pointer-events: none;
`;

// Steam's note, taped to the board.
export const WishNote = styled.div`
  position: relative;
  /* Above the shots, so the coming-soon popup can open over them. */
  z-index: 1;
  align-self: center;
  width: min(760px, 100%);
  box-sizing: border-box;
  padding: 26px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px 26px;
  flex-wrap: wrap;
  background: ${theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.12);
  transform: rotate(0.8deg);

  h2 {
    flex: 1 1 280px;
    margin: 0;
    font-family: ${theme.fonts.hand};
    font-size: clamp(26px, 3vw, 32px);
    font-weight: 800;
    line-height: 1.15;
  }
`;

// The board's buttons: black pills lettered by hand. On hover they empty out,
// like the site's other solid buttons.
export const Pill = styled.button`
  position: relative;
  /* Over the note's tape: the hover scale wraps the coming-soon popup in the
     button's own layer, so the button has to sit above the tape. */
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

/* The three gameplay shots, each pinned with its own tape. */
export const Shots = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
  gap: 30px 24px;
  padding-top: 10px;

  .shot {
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    padding: 0;
    border: 0;
    background: ${theme.colors.black};
    cursor: zoom-in;
  }

  .shot img {
    object-fit: cover;
  }
`;

export const Mechanics = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
  gap: 24px 40px;
  align-items: center;

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

// The art keeps the trailer's 16:9 frame.
export const ArtFrame = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;

  img {
    object-fit: cover;
  }
`;

export const Team = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  gap: 30px 22px;
  padding-bottom: 16px;
`;

// Each teammate on a hand-drawn card in one of the game's colors; every other
// card sits a little lower. A color you can't see leaves the dashed outline.
export const Member = styled.div<{ $bg: string; $seen: boolean; $low?: boolean }>`
  position: relative;
  padding: 16px 56px 16px 18px;
  background: ${({ $bg, $seen }) => ($seen ? $bg : 'transparent')};
  border: 3px ${({ $seen }) => ($seen ? 'solid' : 'dashed')} ${theme.colors.black};
  border-radius: ${ROUGH_RADIUS};
  transform: ${({ $low }) => ($low ? 'translateY(14px)' : 'none')};

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

  .linkedin {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    color: ${theme.colors.black};
  }

  .linkedin svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }

  /* Stacked in one column there's nothing to stagger against. */
  ${PHONE} {
    transform: none;
  }
`;

/* Eyes ------------------------------------------------------------------- */

// The chosen eye narrows its lid into a V over the iris instead of wearing a
// ring. Both shapes have the same points so the lid can close smoothly.
const LID_OPEN = 'polygon(0 0, 50% 0, 100% 0, 100% 100%, 0 100%)';
const LID_V = 'polygon(0 12%, 50% 41%, 100% 12%, 100% 100%, 0 100%)';

/* Two eyes below, one on top, like the game's eye counter. */
export const EyeGroup = styled.div<{ $size: number }>`
  display: grid;
  grid-template-columns: repeat(2, ${({ $size }) => $size + 2}px);
  gap: 2px 4px;

  & > :first-child {
    grid-column: 1 / span 2;
    justify-self: center;
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
  transition: clip-path 0.15s ease-out;
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

// The eyes wait in the top-left corner, under the header whenever the header
// is showing (also when keyboard focus calls it back while scrolled away).
export const EyeDock = styled.div<{ $docked: boolean; $belowHeader: boolean }>`
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 9998;
  opacity: ${({ $docked }) => ($docked ? 1 : 0)};
  visibility: ${({ $docked }) => ($docked ? 'visible' : 'hidden')};
  transform: translateY(${({ $belowHeader }) => ($belowHeader ? HEADER_HEIGHT : 0)}px);
  transition: opacity 0.2s ease-out, transform 0.35s ease-out,
    visibility 0s linear ${({ $docked }) => ($docked ? '0s' : '0.2s')};

  .site-header:has(:focus-visible) ~ main & {
    transform: translateY(${HEADER_HEIGHT}px);
  }

  ${PHONE} {
    left: 8px;
    transform: translateY(${({ $belowHeader }) => ($belowHeader ? HEADER_HEIGHT_MOBILE : 0)}px);

    .site-header:has(:focus-visible) ~ main & {
      transform: translateY(${HEADER_HEIGHT_MOBILE}px);
    }
  }
`;

/* Trailer ---------------------------------------------------------------- */

export const TrailerFrame = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
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
