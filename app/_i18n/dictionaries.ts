// UI copy per locale. `**text**` marks an emphasized span (rendered as
// <span className="big"> by `rich()`); \u00A0 keeps words from wrapping apart.

export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

const en = {
  meta: {
    title: 'Hell Bros | Indie Game Studio',
    description:
      'Hell Bros is an independent Peruvian game studio making Look Out: Indie Game, an asymmetrical online co-op 3D platformer for 3 players. Wishlist it on Steam and join our Discord.',
    ogDescription:
      'Hell Bros is an independent Peruvian game studio making Look Out: Indie Game, an asymmetrical online co-op 3D platformer for 3 players.',
    ogLocale: 'en_US',
    gameDescription:
      'An asymmetrical online co-op 3D platformer where 3 demons are trying to escape the Demon World. Unable to see their own path, each player depends on another to move forward, forcing them to coordinate constantly.',
  },
  nav: {
    lookout: 'Look Out',
    about: 'About Us',
    contact: 'Contact',
    home: 'Home',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  lookout: {
    tagline: 'An **asymmetrical online co-op 3D platformer** where **3\u00A0demons** are trying to escape the Demon World.',
    trailerTitle: 'Demo trailer',
    play: (title: string) => `Play ${title}`,
    wishlistTitle: 'Wishlist Look\u00A0Out',
    wishlistButton: 'Add it on Steam',
    comingSoon: 'Coming soon!',
    enlargeShot: (n: number, total: number) => `Enlarge screenshot ${n} of ${total}`,
    shotAlt: 'Look Out gameplay',
    platforms:
      "Every platform is one of three colors. You can see one of those colors, but you **can't stand on it**, while you can stand on a different color that you **can't see**.",
    players:
      "Every player wears one of those colors. The color you see belongs to a teammate, so you **guide them just as another guides you**. It's a circular chain of dependency where **no one advances alone**, and progress depends on **communication, trust, and coordination** between the three.",
    close: 'Close',
    prev: 'Previous',
    next: 'Next',
  },
  studio: {
    title: 'Our Studio',
    intro:
      "**Hell Bros** is a **Peruvian** indie game **studio** specializing in **online co-op experiences**. We're **burning** to have you play our games!",
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
    onLinkedin: (name: string) => `${name} on LinkedIn`,
  },
  footer: {
    location: 'Lima, Peru',
    copied: 'Copied!',
    clickToCopy: 'Click to copy',
    followUs: 'Follow us',
    rights: 'All rights reserved.',
  },
  error: {
    title: 'Something went wrong!',
    retry: 'Try again',
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  meta: {
    title: 'Hell Bros | Estudio de videojuegos indie',
    description:
      'Hell Bros es un estudio independiente peruano de videojuegos que está creando Look Out: Indie Game, un juego de plataformas 3D cooperativo online y asimétrico para 3 jugadores. Agrégalo a tu lista de deseados en Steam y únete a nuestro Discord.',
    ogDescription:
      'Hell Bros es un estudio independiente peruano de videojuegos que está creando Look Out: Indie Game, un juego de plataformas 3D cooperativo online y asimétrico para 3 jugadores.',
    ogLocale: 'es_PE',
    gameDescription:
      'Un juego de plataformas 3D cooperativo online y asimétrico donde 3 demonios intentan escapar del Mundo Demoníaco. Sin poder ver su propio camino, cada jugador depende de otro para avanzar, lo que los obliga a coordinarse constantemente.',
  },
  nav: {
    lookout: 'Look Out',
    about: 'Nosotros',
    contact: 'Contacto',
    home: 'Inicio',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },
  lookout: {
    tagline: 'Un **juego de plataformas 3D cooperativo online y asimétrico** donde **3\u00A0demonios** intentan escapar del Mundo Demoníaco.',
    trailerTitle: 'Tráiler de la demo',
    play: (title: string) => `Reproducir ${title}`,
    wishlistTitle: 'Agrega Look\u00A0Out a tu lista de deseados',
    wishlistButton: 'Agrégalo en Steam',
    comingSoon: '¡Pronto!',
    enlargeShot: (n: number, total: number) => `Ampliar captura ${n} de ${total}`,
    shotAlt: 'Gameplay de Look Out',
    platforms:
      'Cada plataforma es de uno de tres colores. Puedes ver uno de esos colores, pero **no puedes pararte sobre él**, mientras que sí puedes pararte sobre otro color que **no puedes ver**.',
    players:
      'Cada jugador viste uno de esos colores. El color que ves pertenece a un compañero, así que **lo guías tal como otro te guía a ti**. Es una cadena circular de dependencia donde **nadie avanza solo**, y el progreso depende de la **comunicación, la confianza y la coordinación** entre los tres.',
    close: 'Cerrar',
    prev: 'Anterior',
    next: 'Siguiente',
  },
  studio: {
    title: 'Nuestro Estudio',
    intro:
      '**Hell Bros** es un **estudio** indie **peruano** de videojuegos especializado en **experiencias cooperativas online**. ¡**Ardemos** en ganas de que juegues nuestros juegos!',
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
    onLinkedin: (name: string) => `${name} en LinkedIn`,
  },
  footer: {
    location: 'Lima, Perú',
    copied: '¡Copiado!',
    clickToCopy: 'Clic para copiar',
    followUs: 'Síguenos',
    rights: 'Todos los derechos reservados.',
  },
  error: {
    title: '¡Algo salió mal!',
    retry: 'Intentar de nuevo',
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };
