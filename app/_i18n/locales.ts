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

// English lives at the root; other languages under their own prefix.
export const localePath = (locale: Locale): string =>
  locale === DEFAULT_LOCALE ? '/' : `/${locale}`;

export const localeUrl = (locale: Locale): string =>
  locale === DEFAULT_LOCALE ? SITE_URL : `${SITE_URL}/${locale}`;

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
