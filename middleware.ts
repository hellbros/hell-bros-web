import { NextResponse, type NextRequest } from 'next/server';
import { LOCALE_COOKIE, isLocale, parseAcceptLanguage } from '@/app/_i18n/locales';

// Each language has one URL: English at /, Spanish at /es. Both pages are
// static, so the language choice happens here instead of on the server render.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.nextUrl.clone();

  // English is the root, so /en would only duplicate it.
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    url.pathname = pathname.slice(3) || '/';
    return NextResponse.redirect(url, 308);
  }

  if (pathname === '/es' || pathname.startsWith('/es/')) return NextResponse.next();

  // Crawlers send no Accept-Language, so they stay on the English root.
  const chosen = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(chosen) ? chosen : parseAcceptLanguage(request.headers.get('accept-language'));

  if (pathname === '/' && locale === 'es') {
    url.pathname = '/es';
    const response = NextResponse.redirect(url, 307);
    response.headers.set('Vary', 'Accept-Language, Cookie');
    return response;
  }

  // The root serves English; unknown paths get a 404 in the visitor's language.
  url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
