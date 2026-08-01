"use client"

import styled, { css } from 'styled-components';
import { LayoutProps, SpaceProps, layout, space, variant } from 'styled-system';
import TextGlobal from '../../_components/Text';
import { MAX_WIDTH, SECTION_PADDING } from '../../_utils/constants';
import { theme } from '@/app/_styles/theme';

export const LayoutSection = styled.section`

`;

export type StyledProps = SpaceProps & LayoutProps;

interface SectionProps {
  $styles?: 'solid' | 'card';
  color?: string;
  textColor?: string;
}

export const Section = styled.section<SectionProps & StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  /* Fill up to max-width instead of shrinking to fit content, so every
     section shares the same box width (1000px). */
  width: 100%;
  max-width: ${MAX_WIDTH};
  padding: ${SECTION_PADDING};
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  border-radius: 40px;
  margin-bottom: 100px;

  ${() => variant({
  prop: '$styles',
  variants: {
    solid: {
      maxWidth: '100%',
      paddingX: `calc((max(100%, ${MAX_WIDTH}) - ${MAX_WIDTH})/2 + ${SECTION_PADDING})`,
      borderRadius: '0px',
    },
    card: {
      // Keeps its own 5px inset on each side (990px in full); shrink-to-fit,
      // so it opts out of the base `width: 100%`.
      width: 'auto',
      maxWidth: `calc(${MAX_WIDTH} + 80px)`,
      '& > div': {
        maxWidth: `calc(${MAX_WIDTH} - 80px)`,
      },
      '@media (min-width: 0px)': {
        marginX: '5px',
        paddingX: `calc(${SECTION_PADDING} - 5px)`,
      },
      '@media (max-width: 640px)': {
        paddingX: '20px',
        paddingY: '24px',
      },
      [`@media (min-width: calc(${MAX_WIDTH} + 80px))`]: {
        marginX: 'auto',
      },
    },
  },
})}

  ${space};
  ${layout};
`;

interface SectionContainerProps {
  $headerHeight?: number;
}

export const SectionContainer = styled.div<SectionContainerProps>`
  padding-top: ${(props) => (props.$headerHeight)}px;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
`;

export const Text = styled(TextGlobal)`
   ${variant({
  prop: '$styles',
  variants: {
    sectionTitle: {
      fontSize: '40px',
      marginBottom: '54px',
      textAlign: 'center',
      fontWeight: 500,
    },
    sectionTitle2: {
      color: theme.colors.tercerary,
      fontSize: '40px',
      marginBottom: '54px',
      textAlign: 'center',
      fontWeight: 500,
    },
    sectionSubtitle: {
      fontSize: '40px',
    },
    sectionDesc: {
      fontSize: '18px',
      color: `${theme.colors.secondaryText}`,
      lineHeight: '28px'
    },
    studioIntro: {
      fontSize: '18px',
      lineHeight: '28px',
      color: `${theme.colors.secondaryText}`,
      textAlign: 'center',
      width: '100%',
      '.big': {
        fontSize: '24px',
        fontWeight: 700,
        color: theme.colors.black,
      },
    },
    sectionDesc2: {
      fontSize: '18px',
      color: `${theme.colors.whiteSmoke}`,
      lineHeight: '28px'
    },
    headsTitle: {
      fontSize: '28px',
      fontWeight: 700,
      textAlign: 'center',
      marginTop: '4rem',
      marginBottom: '0.5rem',
    },
    heroEyebrow: {
      fontSize: '14px',
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: theme.colors.primary,
    },
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
    heroPitch: {
      fontSize: '18px',
      lineHeight: '28px',
      maxWidth: '620px',
      color: theme.colors.secondaryText,
    },
    emailFooter: {
      color: 'white',
      fontSize: 'min(3vw + 10px, 40px)',
      marginTop: '32px',
    },
  },
})}
`;

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* Match the shared 1000px section box. */
  width: 100%;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  /* 40px top/bottom for the Look Out section itself (wishlist card aside). */
  padding: 40px ${SECTION_PADDING};
  gap: 1.75rem;
`;

export const TrailerFrame = styled.div`
  width: 100%;
  /* Grow to the full section content width. */
  max-width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 14px;
  overflow: hidden;
  background: #0d0d10;
  box-shadow: 0 14px 44px rgba(0, 0, 0, 0.14);

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
    background: #0d0d10;
    display: block;
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
    width: 68px;
    height: 68px;
    border-radius: 50%;
    background: ${theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  .facade:hover .play {
    transform: translate(-50%, -50%) scale(1.08);
  }

  .facade .play .switch {
    width: 52px;
    height: 52px;
    /* Green tint (multiply-equivalent on the white silhouette). */
    background-color: #B5E61D;
    -webkit-mask: url(/assets/look-out/switch.png) center / contain no-repeat;
    mask: url(/assets/look-out/switch.png) center / contain no-repeat;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;

  @media (min-width: 820px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const HeroRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
`;

export const HeroLogo = styled.div`
  width: 100%;
  max-width: 360px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 700px) {
    max-width: 300px;
  }
`;

export const StudioLogo = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto 32px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.5rem;
`;

export const HeadsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 1rem;
  width: 100%;
`;

export const HeadCard = styled.div<{ $accent?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.6rem;

  .name {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
  }

  .role {
    margin: 0;
    font-size: 15px;
    color: ${theme.colors.secondaryText};
  }

  .linkedin {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.35rem;
    color: ${({ $accent }) => $accent || theme.colors.primary};
    transition: transform 0.2s ease;
  }

  .linkedin:hover {
    transform: scale(1.15);
  }

  .linkedin svg {
    width: 22px;
    height: 22px;
    fill: currentColor;
  }
`;

export const Avatar = styled.div<{ $bg?: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  background-color: ${({ $bg }) => $bg || theme.colors.primary};
  color: ${theme.colors.white};
  font-size: 38px;
  font-weight: 700;
  user-select: none;
`;

export const SectionContent = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  img {
    margin-top: 3rem;
    border-radius: 20px;    
    object-fit: cover;
  }  
`;

export const DiscordRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: min(calc(${MAX_WIDTH} - 80px), calc(100vw - 96px));

  .left {
    display: flex;
    align-items: center;
    gap: 18px;
    text-align: left;
  }

  .icon {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: #5865f2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon svg {
    width: 30px;
    height: 30px;
    fill: ${theme.colors.white};
  }

  .title {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
  }

  .sub {
    margin: 4px 0 0;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.6);
  }

  /* Mobile: keep everything on one line, shrink the pieces and use a
     compact CTA (short label + brand icon). */
  @media (max-width: 640px) {
    width: 100%;
    gap: 0.6rem;

    .left {
      gap: 12px;
    }

    .icon {
      width: 44px;
      height: 44px;
    }

    .icon svg {
      width: 24px;
      height: 24px;
    }

    .title {
      font-size: 16px;
    }

    .sub {
      font-size: 12px;
    }

    & > a {
      min-height: 40px;
      padding-left: 12px;
      padding-right: 12px;
      gap: 6px;
      font-size: 14px;
      white-space: nowrap;
    }

    & > a svg {
      width: 18px;
      height: 18px;
    }
  }
`;

// Same black-card row as Discord, with a Steam-cyan icon tile.
export const WishlistRow = styled(DiscordRow)`
  .icon {
    background: ${theme.colors.cyan};
  }
`;

export const HalfCircleContainer = styled.div`
  width: 100%;
  /* Solapa 1px con la sección negra de abajo para evitar una línea fina en el borde */
  margin-bottom: -1px;
`;

export const HalfCircle = styled.div`
  width: 100%;
  /* La altura controla directamente qué tan pronunciado es el arco */
  height: 56px;
  background-color: ${theme.colors.black};
  /* Radio elíptico solo en las esquinas superiores: 50% de ancho a cada lado
     (se encuentran en el centro) y radio vertical = alto -> un arco simple */
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;

  @media (max-width: 700px) {
    height: 36px;
  }
`;