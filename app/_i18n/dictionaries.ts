// UI copy per locale. `**text**` marks an emphasized span (rendered as
// <span className="big"> by `rich()`); \u00A0 keeps words from wrapping apart.

import type { Locale } from './locales';

const en = {
  meta: {
    title: 'Look Out: 3-Player Co-op Platformer | Hell Bros',
    description:
      'An online co-op 3D platformer where 3 demons rely on each other to escape the Demon World. A game by Hell Bros, an indie studio from Peru.',
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
    label: 'Main navigation',
    skip: 'Skip to content',
    language: 'Español',
    languageShort: 'ES',
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
    demonsArtAlt: "Look Out's three demons, by Hell Bros, floating in the water, each with a teammate's eye color",
    mechanic:
      "Each player must **travel a path of their own that they can't see**, and can **watch another player's path, but not travel it**. This takes away a player's self-sufficiency: **no one advances alone**, and progress depends on communication, trust and coordination between the three, forming a circular structure of dependency.",
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
  footer: {
    location: 'Lima, Peru',
    handArtAlt: 'Look Out artwork by Hell Bros: a demon hand with glowing red eyes looming over the three demons',
    copied: 'Copied!',
    clickToCopy: 'Click to copy',
    followUs: 'Follow us',
    rights: 'All rights reserved.',
    socialLink: (network: string) => `Hell Bros on ${network} (opens in a new tab)`,
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
    label: 'Navegación principal',
    skip: 'Saltar al contenido',
    language: 'English',
    languageShort: 'EN',
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
    demonsArtAlt: 'Los tres demonios de Look Out, de Hell Bros, flotando en el agua, cada uno con el color de ojo de un compañero',
    mechanic:
      'Cada jugador debe **recorrer un camino particular que no puede ver** y puede **observar el camino de otro jugador, pero no recorrerlo**. Esto elimina la autosuficiencia del jugador: **nadie avanza solo** y el progreso depende de la comunicación, la confianza y la coordinación entre los tres, formando una estructura de dependencia circular.',
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
  footer: {
    location: 'Lima, Perú',
    handArtAlt: 'Ilustración de Look Out, de Hell Bros: una mano demoníaca con ojos rojos sobre los tres demonios',
    copied: '¡Copiado!',
    clickToCopy: 'Clic para copiar',
    followUs: 'Síguenos',
    rights: 'Todos los derechos reservados.',
    socialLink: (network: string) => `Hell Bros en ${network} (se abre en una pestaña nueva)`,
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
