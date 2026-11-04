'use client'
import Image, { type StaticImageData } from "next/image";
import { PressKitPage, Sheet, Gallery, Logos } from "../styles";
import { STEAM_PAGE_LIVE, STEAM_URL } from "@/app/_utils/constants";
import { useDictionary } from "@/app/_i18n/LocaleProvider";
import type { Dictionary } from "@/app/_i18n/dictionaries";
import Shot1 from "@/public/assets/images/1.png"
import Shot2 from "@/public/assets/images/2.png"
import Shot3 from "@/public/assets/images/3.png"
import Shot4 from "@/public/assets/images/4.png"
import SteamCapsule from "@/public/assets/look-out/steam-capsule.webp"
import DemonsInWater from "@/public/assets/look-out/hell-bros-look-out-demons-in-water.webp"
import DemonHand from "@/public/assets/look-out/hell-bros-look-out-demon-hand.webp"
import GiantDemon from "@/public/assets/look-out/hell-bros-look-out-giant-demon.png"
import LookOutLogo from "@/public/assets/look-out/look-out-logo-hell-bros.png"
import LookOutIcon from "@/public/assets/look-out/look-out-game-icon.png"
import HellBrosColor from "@/public/assets/brand/logo_hb_color02.png"
import HellBrosLine from "@/public/assets/brand/logo_hb_linea02.png"
import HellBrosWhite from "@/public/assets/brand/logo_hb_neg02.png"
import HellBrosIsoColor from "@/public/assets/brand/hellbros_iso_02.png"
import HellBrosIsoLine from "@/public/assets/brand/hellbros_iso_02linea.png"
import HellBrosIsoWhite from "@/public/assets/brand/hellbros_iso_02neg.png"

const EMAIL = 'hello@hellbrosstudio.com';
const TRAILER_URL = 'https://www.youtube.com/watch?v=CY4mwk-rh30';
// Every file below, zipped (see public/assets/press/).
const ZIP_URL = '/assets/press/hell-bros-look-out-press-kit.zip';

// Each picture links to its file at the address the site already serves it.
const SHOTS: { img: StaticImageData; file: string }[] = [
  { img: Shot1, file: '/assets/images/1.png' },
  { img: Shot2, file: '/assets/images/2.png' },
  { img: Shot3, file: '/assets/images/3.png' },
  { img: Shot4, file: '/assets/images/4.png' },
];

// The game's logo and icon, then the studio's in color, black outline and
// white, whole and as the icon alone. The white ones sit on black, and so does
// the game's icon, a white eye.
const LOGOS: { img: StaticImageData; file: string; alt: keyof Dictionary['presskit']['logoAlt']; dark?: boolean }[] = [
  { img: LookOutLogo, file: '/assets/look-out/look-out-logo-hell-bros.png', alt: 'lookOut' },
  { img: LookOutIcon, file: '/assets/look-out/look-out-game-icon.png', alt: 'lookOutIcon', dark: true },
  { img: HellBrosColor, file: '/assets/brand/logo_hb_color02.png', alt: 'color' },
  { img: HellBrosLine, file: '/assets/brand/logo_hb_linea02.png', alt: 'line' },
  { img: HellBrosWhite, file: '/assets/brand/logo_hb_neg02.png', alt: 'white', dark: true },
  { img: HellBrosIsoColor, file: '/assets/brand/hellbros_iso_02.png', alt: 'isoColor' },
  { img: HellBrosIsoLine, file: '/assets/brand/hellbros_iso_02linea.png', alt: 'isoLine' },
  { img: HellBrosIsoWhite, file: '/assets/brand/hellbros_iso_02neg.png', alt: 'isoWhite', dark: true },
];

const TEAM: { name: string; role: keyof Dictionary['people']['roles'] }[] = [
  { name: 'Raúl Jeri', role: 'technicalCreative' },
  { name: 'Iván Aráoz', role: 'productionMarketing' },
  { name: 'Ariana Coronel', role: 'art' },
  { name: 'Gunter Brenner', role: 'soundMusic' },
];

// Text without its `**emphasis**` markers.
const plain = (text: string) => text.replace(/\*\*/g, '');

const PressKitContent = () => {
  const t = useDictionary();
  const p = t.presskit;

  const art = [
    { img: SteamCapsule, file: '/assets/look-out/steam-capsule.webp', alt: p.capsuleAlt },
    { img: DemonsInWater, file: '/assets/look-out/hell-bros-look-out-demons-in-water.webp', alt: t.lookout.demonsArtAlt },
    { img: DemonHand, file: '/assets/look-out/hell-bros-look-out-demon-hand.webp', alt: t.footer.handArtAlt },
    { img: GiantDemon, file: '/assets/look-out/hell-bros-look-out-giant-demon.png', alt: p.giantDemonAlt },
  ];

  return (
    <PressKitPage id="inicio" tabIndex={-1}>
      <Sheet>
        <h1>{p.title}</h1>
        <p className="lead">{p.intro}</p>
        <p><a href={ZIP_URL} download>{p.download}</a></p>

        <h2>{p.description}</h2>
        <p>{t.meta.gameDescription}</p>

        <h2>{p.about}</h2>
        <h3>{t.lookout.pathTitle}</h3>
        <p>{plain(t.lookout.mechanicPaths)}</p>
        <h3>{t.lookout.escapeTitle}</h3>
        <p>{plain(t.lookout.mechanicChain)}</p>

        <h2>{p.features}</h2>
        <ul>
          {p.featureList.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>

        <h2>{p.facts}</h2>
        <p>{p.developer}: {p.developerValue}</p>
        <p>{p.releaseDate}: {p.releaseDateValue}</p>
        <p>{p.platforms}: {p.platformsValue}</p>
        <p>{p.pressContact}: <a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
        {STEAM_PAGE_LIVE && <p><a href={STEAM_URL} target="_blank" rel="noopener noreferrer">{p.steamPage}</a></p>}
        <p><a href={TRAILER_URL} target="_blank" rel="noopener noreferrer">{p.trailer}</a></p>

        <h2>{p.screenshots}</h2>
        <Gallery>
          {SHOTS.map(({ img, file }, i) => (
            <a key={file} href={file} target="_blank" rel="noopener noreferrer">
              <Image src={img} alt={i === 3 ? p.chainAlt : p.shotAlt(i + 1)} fill sizes="(max-width: 700px) 45vw, 220px" />
            </a>
          ))}
        </Gallery>
        <p className="note">{p.fullSize}</p>

        <h2>{p.art}</h2>
        <Gallery $wide>
          {art.map(({ img, file, alt }) => (
            <a key={file} href={file} target="_blank" rel="noopener noreferrer">
              <Image src={img} alt={alt} fill sizes="(max-width: 700px) 90vw, 440px" />
            </a>
          ))}
        </Gallery>

        <h2>{p.logos}</h2>
        <Logos>
          {LOGOS.map(({ img, file, alt, dark }) => (
            <a key={file} className={dark ? 'dark' : undefined} href={file} target="_blank" rel="noopener noreferrer">
              <Image src={img} alt={p.logoAlt[alt]} sizes="200px" />
            </a>
          ))}
        </Logos>

        <h2>{p.team}</h2>
        {TEAM.map(({ name, role }) => (
          <p key={name}>{name}: {t.people.roles[role]}</p>
        ))}

        <h2>{p.aboutStudio}</h2>
        <p>{plain(t.studio.intro)}</p>
      </Sheet>
    </PressKitPage>
  );
};

export default PressKitContent;
