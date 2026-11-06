// UI copy per locale. `**text**` marks an emphasized span (rendered as
// <span className="big"> by `rich()`); \u00A0 keeps words from wrapping apart.

import type { Locale } from './locales';

const en = {
  meta: {
    title: 'Look Out: 3-Player Co-op Platformer | Hell Bros',
    description:
      'An online co-op 3D platformer where 3 demons rely on each other to escape the Demon World. A game by Hell Bros, an indie studio from Peru.',
    ogDescription:
      'Hell Bros is an independent Peruvian game studio making Look Out: Indie Game, an online co-op 3D platformer for 3 players.',
    ogLocale: 'en_US',
    gameDescription:
      'An online co-op 3D platformer where 3 demons are trying to escape the Demon World. Unable to see their own path, each player depends on another to move forward, forcing them to coordinate constantly.',
  },
  nav: {
    lookout: 'Look Out',
    about: 'About Us',
    contact: 'Contact',
    home: 'Home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    label: 'Main navigation',
    skip: 'Skip to content',
    language: 'Español',
    languageShort: 'ES',
  },
  lookout: {
    trappedTitle: 'Three trapped demons',
    // From the game design document's story, without its twist.
    story:
      "In the Demon World, each demon sees a single color. Three demons were part of an experiment by the Demon King, but something went wrong: each one woke up with someone else's eye. Now each one sees what the others can't, and only together can they escape.",
    pathTitle: 'No one sees their own path',
    escapeTitle: 'They must escape together',
    tagline: 'An **online co-op 3D platformer** where **3\u00A0demons** are trying to escape the Demon World.',
    irisLabel: { red: '**Red** iris', blue: '**Blue** iris', green: '**Green** iris' },
    irisSees: {
      red: "The **red**-iris player's view",
      blue: "The **blue**-iris player's view",
      green: "The **green**-iris player's view",
    },
    trailerTitle: 'Demo trailer',
    play: (title: string) => `Play ${title}`,
    wishlistTitle: 'Wishlist Look\u00A0Out',
    wishlistButton: 'Add it on Steam',
    comingSoon: 'Coming soon!',
    enlargeShot: (n: number, total: number) => `Enlarge screenshot ${n} of ${total}`,
    shotAlt: 'Look Out gameplay',
    demonsArtAlt: "Look Out's three demons, by Hell Bros, floating in the water, each with a teammate's eye color",
    // The user's text on how it plays, in two halves: one over the three
    // screens, one beside the diagram.
    mechanicPaths:
      "Each player must **travel a path of their own that they can't see**, and can **watch another player's path, but not travel it**.",
    mechanicChain:
      '**No one advances alone**, and progress depends on communication, trust and coordination between the three, forming a circular structure of dependency.',
    chainCaption: 'No one advances alone!',
    eyesGroup: 'Choose the color of your iris',
    iris: { red: 'Red iris', blue: 'Blue iris', green: 'Green iris' },
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
  },
  studio: {
    title: 'Our Studio',
    intro:
      "**Hell Bros** is a **Peruvian** indie game **studio**. We focus on developing **online co-op experiences**. We're **burning** to have you try them!",
    discordTitle: 'Join our Discord',
    discordButton: 'Become a Hell\u00A0Bro!',
  },
  people: {
    headsTitle: 'Our Heads',
    teamTitle: 'Our Team',
    roles: {
      technicalCreative: 'Technical & Creative Director',
      productionMarketing: 'Production & Marketing',
      art: 'Art Director',
      soundMusic: 'Sound & Music Designer',
    },
    onLinkedin: (name: string) => `${name} on LinkedIn (opens in a new tab)`,
  },
  presskit: {
    metaTitle: 'Look Out Press Kit | Hell Bros',
    metaDescription:
      'Press kit for Look Out, the online co-op 3D platformer for 3 players by Hell Bros: description, facts, screenshots, art and logos.',
    title: 'Press kit: Look Out',
    intro: 'Free material for press and content creators.',
    download: 'Download everything (ZIP)',
    // Facts, premise and features come from the game design document.
    glance: 'At a glance',
    studio: 'Studio',
    studioValue: 'Hell Bros, Lima, Peru. Look Out is their first game.',
    releaseDate: 'Release date',
    releaseDateValue: 'Late 2028',
    platforms: 'Platforms',
    platformsValue: 'Windows and macOS (Steam)',
    players: 'Players',
    playersValue: '3, online co-op',
    languages: 'Languages',
    languagesValue: 'Spanish, English and Southern Quechua',
    pressContact: 'Press contact',
    steamPage: 'Steam page',
    trailer: 'Trailer',
    game: 'The game',
    premise:
      "In the Demon World, each demon sees a single color. After a failed experiment by the Demon King, each of the three woke up with someone else's eye: now each one sees what the others can't.",
    different: 'What makes it different',
    featureList: [
      'Asymmetrical co-op: each player sees and touches a different world, so they need their teammates to move forward.',
      'Circular dependency: each player guides one teammate and, at the same time, depends on another.',
      'One laser for everything: it points, triggers mechanisms, pushes and rescues.',
      'Three levels, each with its boss: the Lake of Souls, the Pipes and the Underground.',
      'Playable without a microphone: the laser and a wheel of set phrases are enough to talk.',
      'Colorblind modes and remappable controls, on keyboard and mouse or gamepad.',
      'In Spanish, English and Southern Quechua.',
    ],
    media: 'Media',
    screenshots: 'Screenshots',
    fullSize: 'Click an image to see it full size.',
    shotAlt: (n: number) => `Look Out screenshot ${n}`,
    chainAlt: 'Diagram of the three demons: no one advances alone',
    art: 'Art',
    capsuleAlt: 'Look Out Steam capsule',
    giantDemonAlt: 'Look Out artwork by Hell Bros: a giant black demon with many red eyes and purple fire looming over the three demons',
    logos: 'Logos',
    logoAlt: {
      lookOut: 'Look Out logo',
      lookOutIcon: 'Look Out icon: an eye with a green iris',
      color: 'Hell Bros logo',
      line: 'Hell Bros logo, black outline',
      white: 'Hell Bros logo in white',
      isoColor: 'Hell Bros icon',
      isoLine: 'Hell Bros icon, black outline',
      isoWhite: 'Hell Bros icon in white',
    },
    team: 'Team',
  },
  footer: {
    location: 'Lima, Peru',
    handArtAlt: 'Look Out artwork by Hell Bros: a demon hand with glowing red eyes looming over the three demons',
    copied: 'Copied!',
    clickToCopy: 'Click to copy',
    followUs: 'Follow us',
    pressKit: 'Press kit',
    privacy: 'Privacy',
    rights: 'All rights reserved.',
    socialLink: (network: string) => `Hell Bros on ${network} (opens in a new tab)`,
  },
  privacy: {
    metaTitle: 'Privacy Policy | Hell Bros',
    metaDescription:
      'How hellbrosstudio.com handles your data: no tracking cookies, no analytics, no ads.',
    title: 'Privacy Policy',
    updated: 'Last updated: November 4, 2026',
    intro: 'Hell Bros is a video game studio from Lima, Peru. Here we explain what happens to your data when you visit hellbrosstudio.com.',
    // Each section: a heading, then paragraphs or a list of labeled points.
    sections: [
      {
        title: "What we don't do",
        paragraphs: ["We don't use tracking cookies, analytics or ads. There are no forms or accounts. We don't sell or share your data."],
      },
      {
        title: 'What your browser keeps',
        paragraphs: [
          'If you move the three eyes, your browser remembers where you left them, to show them there on your next visit. If you pick a language in the menu, a cookie remembers it for a year. Both stay on your device and never reach us. You can delete them by clearing this site\'s data in your browser.',
        ],
      },
      {
        title: "Other companies' services",
        items: [
          { label: 'Hosting', text: 'the site runs on Vercel. Like any web server, it records technical data about each visit, such as your IP address and browser, for a limited time, so the site works and stays protected.' },
          { label: 'YouTube', text: "the trailer loads from YouTube only if you click it, in YouTube's privacy-enhanced mode." },
          { label: 'Links', text: "if you go to Steam, Discord or our social media, those sites' own privacy policies apply." },
        ],
      },
      {
        title: 'If you write to us',
        paragraphs: ["If you write to us at hello@hellbrosstudio.com, we use your email and your message only to reply. We don't add them to any list or share them."],
      },
      {
        title: 'Your rights',
        paragraphs: ['You can ask us to see, correct or delete any data of yours we have. Write to us at hello@hellbrosstudio.com.'],
      },
      {
        title: 'Changes',
        paragraphs: ['If something changes, for example if we add a newsletter, we will update this page and its date.'],
      },
    ],
  },
  error: {
    title: 'Something went wrong!',
    retry: 'Try again',
  },
  notFound: {
    message: 'This page got lost in the Demon World.',
    back: 'Back to home',
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  meta: {
    title: 'Look Out: juego cooperativo para 3 jugadores | Hell Bros',
    description:
      'Plataformas 3D cooperativo online donde 3 demonios dependen uno del otro para escapar del Mundo Demoníaco. Un juego de Hell Bros, estudio indie peruano.',
    ogDescription:
      'Hell Bros es un estudio independiente peruano de videojuegos que está creando Look Out: Indie Game, un juego de plataformas 3D cooperativo online para 3 jugadores.',
    ogLocale: 'es_PE',
    gameDescription:
      'Un juego de plataformas 3D cooperativo online donde 3 demonios intentan escapar del Mundo Demoníaco. Sin poder ver su propio camino, cada jugador depende de otro para avanzar, lo que los obliga a coordinarse constantemente.',
  },
  nav: {
    lookout: 'Look Out',
    about: 'Nosotros',
    contact: 'Contacto',
    home: 'Inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    label: 'Navegación principal',
    skip: 'Saltar al contenido',
    language: 'English',
    languageShort: 'EN',
  },
  lookout: {
    trappedTitle: 'Tres demonios atrapados',
    story:
      'En el Mundo Demoníaco, cada demonio ve un solo color. Tres demonios fueron parte de un experimento del Rey Demonio, pero algo salió mal: cada uno despertó con el ojo de otro. Ahora cada uno ve lo que los demás no pueden, y solo juntos pueden escapar.',
    pathTitle: 'Ninguno ve su propio camino',
    escapeTitle: 'Deben escapar juntos',
    tagline: 'Un **juego de plataformas 3D cooperativo online** donde **3\u00A0demonios** intentan escapar del Mundo Demoníaco.',
    irisLabel: { red: 'Iris **rojo**', blue: 'Iris **azul**', green: 'Iris **verde**' },
    irisSees: {
      red: 'Esto vería el jugador con iris **rojo**',
      blue: 'Esto vería el jugador con iris **azul**',
      green: 'Esto vería el jugador con iris **verde**',
    },
    trailerTitle: 'Tráiler de la demo',
    play: (title: string) => `Reproducir ${title}`,
    wishlistTitle: 'Agrega Look\u00A0Out a tu lista de deseados',
    wishlistButton: 'Agrégalo en Steam',
    comingSoon: '¡Pronto!',
    enlargeShot: (n: number, total: number) => `Ampliar captura ${n} de ${total}`,
    shotAlt: 'Gameplay de Look Out',
    demonsArtAlt: 'Los tres demonios de Look Out, de Hell Bros, flotando en el agua, cada uno con el color de ojo de un compañero',
    mechanicPaths:
      'Cada jugador debe **recorrer un camino particular que no puede ver** y puede **observar el camino de otro jugador, pero no recorrerlo**.',
    mechanicChain:
      '**Nadie avanza solo** y el progreso depende de la comunicación, la confianza y la coordinación entre los tres, formando una estructura de dependencia circular.',
    chainCaption: '¡Nadie avanza solo!',
    eyesGroup: 'Elige el color de tu iris',
    iris: { red: 'Iris rojo', blue: 'Iris azul', green: 'Iris verde' },
    close: 'Cerrar',
    prev: 'Anterior',
    next: 'Siguiente',
  },
  studio: {
    title: 'Nuestro Estudio',
    intro:
      '**Hell Bros** es un **estudio** de videojuegos indie **peruano**. Nos enfocamos en desarrollar **experiencias cooperativas online**. ¡**Ardemos** en ganas de que las pruebes!',
    discordTitle: 'Únete a nuestro Discord',
    discordButton: '¡Conviértete en un Hell\u00A0Bro!',
  },
  people: {
    headsTitle: 'Nuestros Líderes',
    teamTitle: 'Nuestro Equipo',
    roles: {
      technicalCreative: 'Dirección Técnica y Creativa',
      productionMarketing: 'Producción y Marketing',
      art: 'Dirección de Arte',
      soundMusic: 'Diseño de Sonido y Música',
    },
    onLinkedin: (name: string) => `${name} en LinkedIn (se abre en una pestaña nueva)`,
  },
  presskit: {
    metaTitle: 'Kit de prensa de Look Out | Hell Bros',
    metaDescription:
      'Kit de prensa de Look Out, el juego de plataformas 3D cooperativo online para 3 jugadores de Hell Bros: descripción, datos, capturas, arte y logos.',
    title: 'Kit de prensa: Look Out',
    intro: 'Material libre para prensa y creadores de contenido.',
    download: 'Descargar todo (ZIP)',
    glance: 'De un vistazo',
    studio: 'Estudio',
    studioValue: 'Hell Bros, Lima, Perú. Look Out es su primer juego.',
    releaseDate: 'Fecha de salida',
    releaseDateValue: 'Finales de 2028',
    platforms: 'Plataformas',
    platformsValue: 'Windows y macOS (Steam)',
    players: 'Jugadores',
    playersValue: '3, cooperativo online',
    languages: 'Idiomas',
    languagesValue: 'Español, inglés y quechua sureño',
    pressContact: 'Contacto de prensa',
    steamPage: 'Página de Steam',
    trailer: 'Tráiler',
    game: 'El juego',
    premise:
      'En el Mundo Demoníaco, cada demonio ve un solo color. Tras un experimento fallido del Rey Demonio, cada uno de los tres despertó con el ojo de otro: ahora cada uno ve lo que los demás no pueden.',
    different: 'Lo que lo hace distinto',
    featureList: [
      'Cooperación asimétrica: cada jugador ve y toca un mundo distinto, así que depende de sus compañeros para avanzar.',
      'Dependencia circular: cada uno guía a un compañero y, a la vez, depende de otro.',
      'Un Láser para todo: señala, activa mecanismos, empuja y rescata.',
      'Tres niveles con sus jefes: el Lago de Almas, las Cañerías y el Subsuelo.',
      'Se puede jugar sin micrófono: el Láser y una rueda de frases bastan para comunicarse.',
      'Modos para daltonismo y controles remapeables, con teclado y ratón o mando.',
      'En español, inglés y quechua sureño.',
    ],
    media: 'Material',
    screenshots: 'Capturas',
    fullSize: 'Haz clic en una imagen para verla en tamaño completo.',
    shotAlt: (n: number) => `Captura de Look Out ${n}`,
    chainAlt: 'Diagrama de los tres demonios: nadie avanza solo',
    art: 'Arte',
    capsuleAlt: 'Cápsula de Steam de Look Out',
    giantDemonAlt: 'Ilustración de Look Out, de Hell Bros: un demonio negro gigante con muchos ojos rojos y fuego morado sobre los tres demonios',
    logos: 'Logos',
    logoAlt: {
      lookOut: 'Logo de Look Out',
      lookOutIcon: 'Ícono de Look Out: un ojo con el iris verde',
      color: 'Logo de Hell Bros',
      line: 'Logo de Hell Bros, en línea negra',
      white: 'Logo de Hell Bros en blanco',
      isoColor: 'Ícono de Hell Bros',
      isoLine: 'Ícono de Hell Bros, en línea negra',
      isoWhite: 'Ícono de Hell Bros en blanco',
    },
    team: 'Equipo',
  },
  footer: {
    location: 'Lima, Perú',
    handArtAlt: 'Ilustración de Look Out, de Hell Bros: una mano demoníaca con ojos rojos sobre los tres demonios',
    copied: '¡Copiado!',
    clickToCopy: 'Clic para copiar',
    followUs: 'Síguenos',
    pressKit: 'Kit de prensa',
    privacy: 'Privacidad',
    rights: 'Todos los derechos reservados.',
    socialLink: (network: string) => `Hell Bros en ${network} (se abre en una pestaña nueva)`,
  },
  privacy: {
    metaTitle: 'Política de privacidad | Hell Bros',
    metaDescription:
      'Cómo trata hellbrosstudio.com tus datos: sin cookies de seguimiento, sin analíticas, sin publicidad.',
    title: 'Política de privacidad',
    updated: 'Última actualización: 4 de noviembre de 2026',
    intro: 'Hell Bros es un estudio de videojuegos de Lima, Perú. Aquí te contamos qué pasa con tus datos cuando visitas hellbrosstudio.com.',
    sections: [
      {
        title: 'Lo que no hacemos',
        paragraphs: ['No usamos cookies de seguimiento, analíticas ni publicidad. No hay formularios ni cuentas. No vendemos ni compartimos tus datos.'],
      },
      {
        title: 'Lo que se guarda en tu navegador',
        paragraphs: [
          'Si mueves los tres ojos, tu navegador recuerda dónde los dejaste para mostrarlos ahí en tu próxima visita. Si eliges un idioma en el menú, una cookie lo recuerda por un año. Ambos se quedan en tu dispositivo y nunca nos llegan. Puedes borrarlos limpiando los datos de este sitio en tu navegador.',
        ],
      },
      {
        title: 'Servicios de otras empresas',
        items: [
          { label: 'Alojamiento', text: 'el sitio está en Vercel. Como cualquier servidor web, registra datos técnicos de cada visita, como tu dirección IP y tu navegador, por un tiempo limitado, para que el sitio funcione y esté protegido.' },
          { label: 'YouTube', text: 'el tráiler se carga desde YouTube solo si haces clic en él, en el modo de privacidad mejorada de YouTube.' },
          { label: 'Enlaces', text: 'si entras a Steam, Discord o nuestras redes sociales, rigen las políticas de privacidad de esos sitios.' },
        ],
      },
      {
        title: 'Si nos escribes',
        paragraphs: ['Si nos escribes a hello@hellbrosstudio.com, usamos tu correo y tu mensaje solo para responderte. No los agregamos a listas ni los compartimos.'],
      },
      {
        title: 'Tus derechos',
        paragraphs: ['Puedes pedirnos ver, corregir o borrar cualquier dato tuyo que tengamos. Escríbenos a hello@hellbrosstudio.com.'],
      },
      {
        title: 'Cambios',
        paragraphs: ['Si algo cambia, por ejemplo si agregamos un boletín, actualizaremos esta página y su fecha.'],
      },
    ],
  },
  error: {
    title: '¡Algo salió mal!',
    retry: 'Intentar de nuevo',
  },
  notFound: {
    message: 'Esta página se perdió en el Mundo Demoníaco.',
    back: 'Volver al inicio',
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };
