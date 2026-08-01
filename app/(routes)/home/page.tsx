'use client'
import TrailerEmbed from "./_components/TrailerEmbed";
import Button from "@/app/_components/Button";
import { SectionContainer, Section, Text, HalfCircle, HalfCircleContainer, Hero, HeroLogo, CtaRow, HeadsGrid, HeadCard, Avatar, DiscordRow } from "./styles";
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from "@/app/_utils/constants";
import { theme } from "@/app/_styles/theme";
import LookOutLogo from "@/public/assets/look-out/lookout-wordmark.png"
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

const Home = () => {
  const sm = useMediaQuery('(max-width: 700px)');
  const headerHeight = sm ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT;

  return (
    <SectionContainer id="inicio" $headerHeight={headerHeight}> 

      <Hero>
        <Text as="h1" $styles="heroTagline">
          Currently developing an <span className="big">asymmetrical online co-op 3D platformer</span> where <span className="big">3 demons</span> are trying to escape the Demon World. Unable to see their own path, each player depends on another to move forward, forcing them to coordinate constantly.
        </Text>

        <TrailerEmbed videoId={TRAILER_ID} />

        <HeroLogo>
          <Image src={LookOutLogo} alt="Look Out" priority />
        </HeroLogo>

        <CtaRow>
          <Button
            as="a"
            href="https://store.steampowered.com/app/4605750/"
            target="_blank"
            rel="noopener noreferrer"
            $variant="solid"
            color={theme.colors.red}>
            Wishlist on Steam
          </Button>
        </CtaRow>
      </Hero>

      <Section $styles="card" id="discord" color={theme.colors.black} textColor="white">
        <DiscordRow>
          <div className="left">
            <span className="icon" aria-hidden="true">
              <DiscordIcon />
            </span>
            <div>
              <h2 className="title">Join our Discord</h2>
              <p className="sub">Become a Hell Bro!</p>
            </div>
          </div>
          <Button
            as="a"
            href="https://discord.gg/5yXsbXfKM"
            target="_blank"
            rel="noopener noreferrer"
            $variant="solid"
            color="#5865F2">
            Join the server
          </Button>
        </DiscordRow>
      </Section>

      <Section id="nosotros" marginBottom="48px">
        <Text as="h2" $styles="sectionTitle">
          The Heads behind Hell Bros
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

      <HalfCircleContainer>
        <HalfCircle/>
      </HalfCircleContainer>

    </SectionContainer>
  );
};

export default Home;