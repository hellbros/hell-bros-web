"use client";

import styled, { keyframes } from 'styled-components';
import { variant } from 'styled-system';
import TextGlobal from '../../_components/Text';
import { MAX_WIDTH, SECTION_PADDING, HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from '@/app/_utils/constants';
import { theme } from '@/app/_styles/theme';

interface HeaderStyledProps {
  $hasScrolled?: boolean;
  $mobileMenuOpen?: boolean;
  $scrollbarWidth?: number;
}

export const HeaderStyled = styled.div<HeaderStyledProps>`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  background: ${(props) => (props.$hasScrolled ? theme.colors.white : theme.colors.whiteSmoke)};
  box-shadow: ${(props) => (props.$hasScrolled ? '0 2px 5px rgba(0,0,0,.05), 0 8px 40px rgba(0,0,0,.04), 0 0 2px rgba(0,0,0,.15)' : 'unset')};
  transition: background 0.3s ease-out, box-shadow 0.3s ease-out,
    height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 9999;

  .header-content {
    margin: auto;
    max-width: ${MAX_WIDTH};
    display: flex;
    flex-direction: column;
    padding: 0 ${SECTION_PADDING};
    height: 100%;
    position: relative;
    top: ${HEADER_HEIGHT / 2}px;

    .logo {
      display: flex;
      align-items: center;
    }

    .logo button {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .logo img {
      height: 36px;
      width: auto;
    }

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      transform: translateY(-50%);
    }

    .menu-toggle {
      display: none;
    }
  }

  @media (max-width: 700px) {
    /* Open menu is a full-screen overlay (covers the whole viewport) rather
       than a fixed height that let the page show through underneath. */
    height: ${(props) => (props.$mobileMenuOpen ? '100dvh' : `${HEADER_HEIGHT_MOBILE}px`)};

    .header-content {
      top: ${HEADER_HEIGHT_MOBILE / 2}px;
      padding-right: ${(props) => (props.$mobileMenuOpen ? `calc(${SECTION_PADDING} + ${props.$scrollbarWidth}px - 0.5px)` : SECTION_PADDING)};

      .logo img {
        height: 26px;
      }

      .menu-toggle {
        display: inline-flex;
      }
    }
  }
`;

export const MenuToggle = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  padding: 0;
  border: 0;
  background: transparent;
  color: ${theme.colors.primary};
  cursor: pointer;
  /* Clip the vertical icon track so only one icon shows at a time. */
  overflow: hidden;

  /* Two icons stacked on a track: closed shows the bottom one (hamburger);
     opening slides the track down to reveal the top one (X), and closing
     slides it back up — a little vertical "rotation". */
  .icon-track {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    transform: translateY(-50%);
    transition: transform 0.4s cubic-bezier(0.65, 0, 0.35, 1);
  }

  &[aria-expanded='true'] .icon-track {
    transform: translateY(0);
  }

  .icon-track > span {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 26px;
    height: 26px;
    stroke: currentColor;
    stroke-width: 2.5;
    stroke-linecap: round;
    fill: none;
  }
`;

export const HeaderOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }

  button {
    margin: 0.95rem;
    padding: 0.5rem;
    text-decoration: none;
    color: #393939;
    font-weight: 600;
    font-size: 17px;
    letter-spacing: 1px;
    transition: color 0.4s ease-out;
    cursor: pointer;
    user-select: none;
    text-align: center;

    &.active {
      color: ${theme.colors.primary};
    }

    /* Hover only on real pointer devices, so tapping/holding on touch doesn't
       leave a stuck hover color. The active tab is already red, so a red hover
       would be invisible on it; hovering the active tab swaps to Hell Bros
       blue instead. Pure CSS (higher-specificity &.active:hover) so
       wheel-scrolling to another section while the pointer stays put swaps
       red <-> blue automatically as the .active class moves between tabs. */
    @media (hover: hover) {
      &:hover {
        color: ${theme.colors.primary};
      }

      &.active:hover {
        color: ${theme.colors.blue};
      }
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeaderMobileOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Buttons appear only after the header has finished expanding (0.35s). */
  animation: ${fadeIn} 0.25s ease-out 0.35s forwards;
  opacity: 0;

  @media (min-width: 701px) {
    display: none;
  }

  button {
    margin: 0.95rem;
    padding: 1.2rem;
    text-decoration: none;
    color: #393939;
    font-weight: 600;
    letter-spacing: 1px;
    transition: color 0.4s ease-out;
    cursor: pointer;
    user-select: none;
    width: 100%;
    text-align: center;

    span {
      font-size: 16px;
    }

    &.active {
      color: ${theme.colors.primary};
    }

    /* Hover only with a real pointer — avoids stuck hover color on touch taps. */
    @media (hover: hover) {
      &:hover {
        color: ${theme.colors.primary};
      }

      &.active:hover {
        color: ${theme.colors.blue};
      }
    }
  }
`;

export const Text = styled(TextGlobal)`
  font-size: 18px;
   ${variant({
  prop: '$styles',
  variants: {
    logo: {
      fontSize: '30px',
      textAlign: 'center',
      textDecoration: 'none',
      color: theme.colors.primary,
      userSelect: 'none',
      '@media (min-width: 0px)': {
        fontSize: '18px',
      },

      '@media (min-width: 600px)': {
        fontSize: '22px',
      },

      '@media (min-width: 900px)': {
        fontSize: '26px',
      },

      '@media (min-width: 1200px)': {
        fontSize: '30px',
      },
    },
    link: {
      '@media (min-width: 0px)': {
        fontSize: '11px',
      },

      '@media (min-width: 600px)': {
        fontSize: '13px',
      },

      '@media (min-width: 900px)': {
        fontSize: '15px',
      },

      '@media (min-width: 1200px)': {
        fontSize: '18px',
      },
    },
  },
})}
`;
