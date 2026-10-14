import { headers } from 'next/headers';
import { DEFAULT_LOCALE, type Locale } from './dictionaries';

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

export function getLocale(): Locale {
  return parseAcceptLanguage(headers().get('accept-language'));
}
