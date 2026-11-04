import { SITE_URL } from '../_utils/constants';

export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
// Remembers the language picked in the header over the browser's preference.
export const LOCALE_COOKIE = 'hb-locale';

export const isLocale = (value: string | undefined): value is Locale =>
  LOCALES.includes(value as Locale);

export const toLocale = (value: string): Locale => (isLocale(value) ? value : DEFAULT_LOCALE);

export const otherLocale = (locale: Locale): Locale => (locale === 'en' ? 'es' : 'en');

// The site's pages besides the home page, as their path after the language.
export const PRESSKIT_PAGE = '/presskit';
export const PRIVACY_PAGE = '/privacy';

// English lives at the root; other languages under their own prefix. `page` is
// a path such as PRESSKIT_PAGE; none means the home page.
export const localePath = (locale: Locale, page = ''): string =>
  locale === DEFAULT_LOCALE ? page || '/' : `/${locale}${page}`;

export const localeUrl = (locale: Locale, page = ''): string =>
  locale === DEFAULT_LOCALE ? `${SITE_URL}${page}` : `${SITE_URL}/${locale}${page}`;

// The visitor's preferred language (highest q in Accept-Language): Spanish if
// it is any `es` variant, English otherwise.
export function parseAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;
  const preferred = header
    .split(',')
    .map((part, i) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { tag: tag.toLowerCase(), q: q ? parseFloat(q.trim().slice(2)) || 0 : 1, i };
    })
    .filter(({ tag, q }) => tag && q > 0)
    .sort((a, b) => b.q - a.q || a.i - b.i)[0];
  if (!preferred) return DEFAULT_LOCALE;
  return preferred.tag === 'es' || preferred.tag.startsWith('es-') ? 'es' : 'en';
}
