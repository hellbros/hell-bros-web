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
  /* 40px between every direct child, so elements share one vertical rhythm. */
  gap: ${SECTION_PADDING};
  margin: auto;
  /* Fill up to max-width instead of shrinking to fit content, so every
     section shares the same box width (1000px). */
  width: 100%;
  max-width: ${MAX_WIDTH};
  /* 40px padding on every side (the first section also clears the fixed
     header via the container's padding-top). */
  padding: ${SECTION_PADDING};
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  border-radius: 40px;
  margin-bottom: ${SECTION_PADDING};

  ${() => variant({
  prop: '$styles',
  variants: {
    solid: {
      maxWidth: '100%',
      paddingX: `calc((max(100%, ${MAX_WIDTH}) - ${MAX_WIDTH})/2 + ${SECTION_PADDING})`,
      borderRadius: '0px',
    },
    card: {
      // Align the black card with the section content column (the video):
      // same 40px side margins as a normal section body, so it no longer
      // sticks out past the video. Kept as a reusable variant (not removed).
      width: `calc(100% - ${SECTION_PADDING} * 2)`,
      maxWidth: `calc(${MAX_WIDTH} - ${SECTION_PADDING} * 2)`,
      '@media (max-width: 640px)': {
        // Fixed insets instead of a viewport-based guess at the row's
        // content width: the row itself (DiscordRow) shrinks its own
        // pieces to fit, so the card padding can just stay constant.
        paddingX: '12px',
        paddingY: '20px',
        // Smaller radius to match the shorter mobile card; the 40px
        // desktop radius is too big for this height and crowds the
        // icon/button against the curve.
        borderRadius: '24px',
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
      // No own margin; the section's 40px gap handles title-to-content spacing.
      marginBottom: '0px',
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
  /* Same box as the other sections: 40px all sides, 40px between children,
     40px bottom margin. */
  margin: 0 auto ${SECTION_PADDING};
  padding: ${SECTION_PADDING};
  gap: ${SECTION_PADDING};
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
    background: ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
  }

  .facade:hover .play {
    transform: translate(-50%, -50%) scale(1.08);
  }

  .facade .play svg {
    width: 30px;
    height: 30px;
    fill: ${theme.colors.white};
    margin-left: 3px;
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
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

/* Look Out: three gameplay shots in one row (3 equal columns with gaps). */
export const ShotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;

  .shot {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    overflow: hidden;
  }

  .shot img {
    object-fit: cover;
  }
`;

/* A single standalone image (not inside a grid/card): 75% on desktop, full
   width on phones. */
export const FullShot = styled.div`
  width: 75%;
  margin: 0 auto;

  @media (max-width: 640px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 12px;
  }
`;

/* Black CTA card (Discord / Wishlist) placed inside a section rather than
   being its own section. 50px of separation above it. */
export const CtaCard = styled.div`
  width: 100%;
  /* Spacing above is the section's 40px gap. Adaptive inner padding: 15px on
     phones up to 30px on desktop. */
  padding: clamp(15px, 3vw, 30px);
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border-radius: 24px;
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
  width: 100%;
`;

export const HeadCard = styled.div<{ $accent?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.6rem;
  /* Fixed width so every people-card is equal and both grids wrap
     2 -> 1 columns at the same width. */
  flex: 0 0 240px;
  max-width: 100%;

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

  @media (hover: hover) {
    .linkedin:hover {
      transform: scale(1.15);
    }
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
  /* Two equal columns: left = icon + text, right = button. */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 12px;
  width: 100%;

  .left {
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: left;
    min-width: 0;
  }

  .left > div {
    min-width: 0;
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

  /* One line normally; wraps to 2 lines when its column gets narrow. */
  .title {
    margin: 0;
    font-size: 22px;
    font-weight: 700;
  }

  /* Button fills 90% of the right column, pinned right, so it's a long,
     easy-to-press target. */
  & > a {
    width: 90%;
    justify-self: end;
  }

  @media (max-width: 640px) {
    gap: 8px;

    .left {
      gap: 10px;
    }

    .icon {
      width: 40px;
      height: 40px;
    }

    .icon svg {
      width: 22px;
      height: 22px;
    }

    .title {
      font-size: 15px;
    }

    & > a {
      min-height: 40px;
      padding-left: 8px;
      padding-right: 8px;
      font-size: 12px;
      line-height: 1.2;
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