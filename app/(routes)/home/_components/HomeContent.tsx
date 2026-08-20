'use client'
import TrailerEmbed from "./TrailerEmbed";
import Button from "@/app/_components/Button";
import { SectionContainer, Section, Text, HalfCircle, HalfCircleContainer, Hero, HeroLogo, StudioLogo, HeadsGrid, HeadCard, Avatar, DiscordRow, WishlistRow, ShotsGrid, FullShot, CtaCard } from "../styles";
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from "@/app/_utils/constants";
import { theme } from "@/app/_styles/theme";
import LookOutLogo from "@/public/assets/look-out/lookout-wordmark.png"
import HellBrosIso from "@/public/assets/brand/hellbros_iso_02.svg"
import Shot1 from "@/public/assets/images/1.png"
import Shot2 from "@/public/assets/images/2.png"
import Shot3 from "@/public/assets/images/3.png"
import Shot4 from "@/public/assets/images/4.png"
import Image from "next/image";
import useMediaQuery from '@/app/hooks/useMediaQuery';

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

const SteamIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z" />
  </svg>
);

const HomeContent = () => {
  const sm = useMediaQuery('(max-width: 700px)');
  const headerHeight = sm ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT;

  return (
    <SectionContainer id="inicio" $headerHeight={headerHeight}>

      {/* HOME: trailer + wishlist (first section clears header via the
          container's padding-top, plus the section's own 40px top padding) */}
      <Section id="home">
        <TrailerEmbed videoId={TRAILER_ID} />
        <CtaCard>
          <WishlistRow>
            <div className="left">
              <span className="icon" aria-hidden="true">
                <SteamIcon />
              </span>
              <div>
                <h2 className="title">Wishlist <span style={{ whiteSpace: 'nowrap' }}>Look Out</span></h2>
              </div>
            </div>
            <Button
              as="a"
              href="https://store.steampowered.com/app/4605750/"
              target="_blank"
              rel="noopener noreferrer"
              $variant="solid"
              color={theme.colors.cyan}>
              Add it on Steam
            </Button>
          </WishlistRow>
        </CtaCard>
      </Section>

      {/* LOOK OUT: logo + text + shots + text + full shot */}
      <Hero id="lookout">
        <HeroLogo>
          <Image src={LookOutLogo} alt="Look Out" priority />
        </HeroLogo>

        <Text as="p" $styles="heroTagline">
          An <span className="big">asymmetrical online co-op 3D platformer</span> where <span className="big">3 demons</span> are trying to escape the Demon World.
        </Text>

        <ShotsGrid>
          <div className="shot">
            <Image src={Shot1} alt="Look Out gameplay" fill sizes="(max-width: 700px) 31vw, 300px" />
          </div>
          <div className="shot">
            <Image src={Shot2} alt="Look Out gameplay" fill sizes="(max-width: 700px) 31vw, 300px" />
          </div>
          <div className="shot">
            <Image src={Shot3} alt="Look Out gameplay" fill sizes="(max-width: 700px) 31vw, 300px" />
          </div>
        </ShotsGrid>

        <Text as="p" $styles="heroTagline">
          Each player must travel a unique path they <span className="big">cannot see</span>, while they can <span className="big">watch another player&apos;s path</span> but never walk it themselves.
        </Text>

        <FullShot>
          <Image src={Shot4} alt="Look Out gameplay" sizes="(max-width: 1000px) 100vw, 920px" />
        </FullShot>

        <Text as="p" $styles="heroTagline">
          This strips away all self-sufficiency: <span className="big">no one advances alone</span>, and progress depends on <span className="big">communication, trust, and coordination</span> between the three, forming a circular chain of dependency.
        </Text>
      </Hero>

      {/* OUR STUDIO */}
      <Section id="about">
        <Text as="h2" $styles="sectionTitle">
          Our Studio
        </Text>
        <StudioLogo>
          <Image src={HellBrosIso} alt="Hell Bros" />
        </StudioLogo>
        <Text as="p" $styles="studioIntro">
          <span className="big">Hell Bros</span> is a <span className="big">Peruvian</span> indie game <span className="big">studio</span> with a lot of <span className="big">passion</span>. We love the games we make and we focus on developing online co-op experiences.
        </Text>

        <CtaCard>
          <DiscordRow>
            <div className="left">
              <span className="icon" aria-hidden="true">
                <DiscordIcon />
              </span>
              <div>
                <h2 className="title">Join our Discord</h2>
              </div>
            </div>
            <Button
              as="a"
              href="https://discord.gg/5yXsbXfKM"
              target="_blank"
              rel="noopener noreferrer"
              $variant="solid"
              color="#5865F2">
              Become a <span style={{ whiteSpace: 'nowrap' }}>Hell Bro!</span>
            </Button>
          </DiscordRow>
        </CtaCard>
      </Section>

      {/* OUR HEADS */}
      <Section id="nosotros">
        <Text as="h2" $styles="sectionTitle">
          Our Heads
        </Text>
        <HeadsGrid>
          <HeadCard $accent={theme.colors.red}>
            <Avatar $bg={theme.colors.red} aria-hidden="true">RJ</Avatar>
            <p className="name">Raúl Jeri</p>
            <p className="role">Technical &amp; Creative Director</p>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/rauljerilara/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Raúl Jeri on LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </HeadCard>
          <HeadCard $accent={theme.colors.blue}>
            <Avatar $bg={theme.colors.blue} aria-hidden="true">IA</Avatar>
            <p className="name">Iván Aráoz</p>
            <p className="role">Production &amp; Marketing</p>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/iaraoz06/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Iván Aráoz on LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </HeadCard>
        </HeadsGrid>
      </Section>

      {/* OUR TEAM */}
      <Section id="team">
        <Text as="h2" $styles="sectionTitle">
          Our Team
        </Text>
        <HeadsGrid>
          <HeadCard $accent={theme.colors.cyan}>
            <Avatar $bg={theme.colors.cyan} aria-hidden="true">AC</Avatar>
            <p className="name">Ariana Coronel</p>
            <p className="role">Art Director</p>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/ariana-coronel-palma-48b653401/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ariana Coronel on LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </HeadCard>
          <HeadCard $accent="#7C3AED">
            <Avatar $bg="#7C3AED" aria-hidden="true">GB</Avatar>
            <p className="name">Gunter Brenner</p>
            <p className="role">Sound &amp; Music Designer</p>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/gunterbrenner/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gunter Brenner on LinkedIn"
            >
              <LinkedinIcon />
            </a>
          </HeadCard>
        </HeadsGrid>
      </Section>

      <HalfCircleContainer>
        <HalfCircle/>
      </HalfCircleContainer>

    </SectionContainer>
  );
};

export default HomeContent;
