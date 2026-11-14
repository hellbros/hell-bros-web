"use client";

import styled from 'styled-components';
import { MAX_WIDTH, SECTION_PADDING } from '@/app/_utils/constants';
import { theme } from '@/app/_styles/theme';

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const FooterInner = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: 64px ${SECTION_PADDING} 32px;

  /* On phones the home page's eyes float at the bottom center (46px tall,
     16px up): leave room so they don't cover the copyright line. */
  @media (max-width: 700px) {
    padding-bottom: calc(94px + env(safe-area-inset-bottom, 0px));
  }
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  img {
    height: 52px;
    width: auto;
  }

  span,
  a {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  @media (hover: hover) {
    a:hover {
      color: ${theme.colors.red};
    }
  }

  a.email {
    position: relative;
    cursor: pointer;
    transition: color 0.15s ease, text-shadow 0.15s ease; /* lights out fast */
  }

  a.email.highlight {
    color: ${theme.colors.green};
    text-shadow: 0 0 12px ${theme.colors.green};
    transition-duration: 0.25s;
  }

  /* The way in for the press: a white outlined pill under the email. */
  a.press {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0 20px;
    box-sizing: border-box;
    border: 2px solid ${theme.colors.white};
    border-radius: 48px;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.hand};
    font-size: 16px;
    font-weight: 800;
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  @media (hover: hover) {
    a.press:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
    }
  }

  .copied-badge {
    position: absolute;
    right: 0;
    bottom: calc(100% + 6px);
    padding: 3px 8px;
    border-radius: 6px;
    background: ${theme.colors.green};
    color: ${theme.colors.black};
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    pointer-events: none;
  }

  /* Mobile: shown below Follow Us, left-aligned. */
  @media (max-width: 780px) {
    order: 2;
    align-items: flex-start;
    text-align: left;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  /* PC: Follow Us label + icons pushed to the right. */
  align-items: flex-end;
  gap: 0.85rem;

  .label {
    margin: 0 0 0.3rem;
    font-family: ${theme.fonts.hand};
    font-size: 20px;
    font-weight: 800;
    color: ${theme.colors.white};
  }

  span,
  a {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  @media (hover: hover) {
    a:hover {
      color: ${theme.colors.red};
    }
  }

  /* Mobile: shown first (above the brand), left-aligned. */
  @media (max-width: 780px) {
    order: 1;
    align-items: flex-start;
  }
`;

export const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 100%;
  /* PC: icons to the right; mobile: to the left (as many as fit per row). */
  justify-content: flex-end;

  @media (max-width: 780px) {
    justify-content: flex-start;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    color: ${theme.colors.white};
    transition: color 0.2s ease-out, transform 0.2s ease-out;
    /* Its own layer from the start: otherwise the browser redraws the icon
       sharp once the hover scale ends, and the growth lands in two steps. */
    will-change: transform;
  }

  @media (hover: hover) {
    a:hover {
      color: ${theme.colors.red};
    }
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    a:hover {
      transform: scale(1.1);
    }
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 48px;
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);

  a.privacy {
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  @media (hover: hover) {
    a.privacy:hover {
      color: ${theme.colors.white};
    }
  }

  /* The art bleeds past the footer's side padding and melts into black on
     every edge, so the claw reaches out of the dark with no visible frame. */
  .claw {
    display: block;
    width: calc(100% + 2 * ${SECTION_PADDING});
    max-width: none;
    height: auto;
    margin: 0 calc(-1 * ${SECTION_PADDING}) 12px;
    -webkit-mask-image:
      linear-gradient(to right, transparent, #000 6%, #000 94%, transparent),
      linear-gradient(to bottom, transparent, #000 14%, #000 72%, transparent);
    -webkit-mask-composite: source-in;
    mask-image:
      linear-gradient(to right, transparent, #000 6%, #000 94%, transparent),
      linear-gradient(to bottom, transparent, #000 14%, #000 72%, transparent);
    mask-composite: intersect;
  }

  .slogan {
    margin: 0 0 10px;
    font-family: ${theme.fonts.hand};
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.75);
  }

  .heart {
    color: ${theme.colors.red};
  }
`;
