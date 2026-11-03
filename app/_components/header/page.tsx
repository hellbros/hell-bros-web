"use client";
import React, { useEffect, useRef, useState } from 'react'
import { HeaderMobileOptions, HeaderOptions, HeaderStyled, MenuToggle, Text } from './styles'
import useScroll from '@/app/hooks/useScroll';
import useHeaderHidden from '@/app/hooks/useHeaderHidden';
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE, HIGHLIGHT_EMAIL_EVENT } from '@/app/_utils/constants';
import scrollToSection, { onScrollNear } from '@/app/_utils/functions';
import { lockScroll, unlockScroll } from '@/app/_utils/scrollLock';
import { trapTab } from '@/app/_utils/focus';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import useActiveSection from '@/app/hooks/useActiveSection';
import Image from 'next/image';
import HellBrosLogo from '@/public/assets/brand/logo_hb_color02.svg';
import { useDictionary, useLocale } from '@/app/_i18n/LocaleProvider';
import type { Dictionary } from '@/app/_i18n/dictionaries';
import { LOCALE_COOKIE, localePath, otherLocale } from '@/app/_i18n/locales';

const HamburgerIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const NAV: { id: string; label: keyof Dictionary['nav']; scrollTo?: string }[] = [
  { id: 'lookout', label: 'lookout' },
  { id: 'about', label: 'about' },
  { id: 'contact', label: 'contact' },
];
const NAV_IDS = NAV.map((n) => n.id);

// How long the email stays lit: scales with the share of the page travelled.
const EMAIL_HIGHLIGHT_MS = { min: 500, max: 1300 };

const Header = () => {
  const t = useDictionary();
  const nextLocale = otherLocale(useLocale());
  const sm = useMediaQuery('(max-width: 700px)');
  const hasScrolled = useScroll();
  const scrolledAway = useHeaderHidden();
  const headerHeight = sm ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT;
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const activeSection = useActiveSection(NAV_IDS, headerHeight);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  function goToSection(sectionId: string): void {
    const from = window.scrollY;
    const top = scrollToSection(sectionId, headerHeight);
    if (sectionId === 'contact' && top !== undefined) {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const { min, max } = EMAIL_HIGHLIGHT_MS;
      const duration = min + (max - min) * (Math.abs(top - from) / maxScroll);
      onScrollNear(top, () => window.dispatchEvent(new CustomEvent(HIGHLIGHT_EMAIL_EVENT, { detail: duration })));
    }
  }

  function ScrollMobile(sectionId: string): void {
    goToSection(sectionId);
    setMobileMenuOpen(false);
  }

  function goHome(): void {
    scrollToSection('inicio', headerHeight);
    setMobileMenuOpen(false);
  }

  // Beats the browser's language on later visits to the root.
  function rememberLanguage(): void {
    document.cookie = `${LOCALE_COOKIE}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
  }

  // Moves focus without adding #inicio to the URL: the lightbox closes with
  // history.back(), and a fragment there sends the page back to the top.
  function skipToContent(e: React.MouseEvent): void {
    e.preventDefault();
    document.getElementById('inicio')?.focus();
  }

  useEffect(() => {
    // Lock background scroll while the mobile menu is open (no layout shift).
    if (sm && mobileMenuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }

    return () => {
      unlockScroll();
    };
  }, [mobileMenuOpen, sm]);

  // The open menu covers the page: Esc closes it and Tab stays inside.
  useEffect(() => {
    if (!sm || !mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        toggleRef.current?.focus();
      } else if (e.key === 'Tab') {
        trapTab(e, headerRef.current);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen, sm]);

  return (
    <HeaderStyled
      ref={headerRef}
      className="site-header"
      $hasScrolled={hasScrolled}
      $hidden={scrolledAway && !mobileMenuOpen}
      $mobileMenuOpen={mobileMenuOpen}
    >
      <a className="skip-link" href="#inicio" onClick={skipToContent}>{t.nav.skip}</a>
      <div className='header-content'>

        <div className='row'>
          <div className='logo'>
            <button type="button" aria-label={t.nav.home} onClick={goHome}>
              <Image src={HellBrosLogo} alt="Hell Bros" priority />
            </button>
          </div>

          <HeaderOptions aria-label={t.nav.label}>
            {NAV.map(({ id, label, scrollTo }) => (
              <button
                key={id}
                type="button"
                className={activeSection === id ? 'active' : undefined}
                onClick={() => goToSection(scrollTo ?? id)}
              >
                <Text $styles='link' as="span">{t.nav[label]}</Text>
              </button>
            ))}
            <a
              href={localePath(nextLocale)}
              hrefLang={nextLocale}
              lang={nextLocale}
              aria-label={t.nav.language}
              onClick={rememberLanguage}
            >
              <Text $styles='link' as="span">{t.nav.languageShort}</Text>
            </a>
          </HeaderOptions>

          <MenuToggle
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuOpen ? 'mobile-menu' : undefined}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </MenuToggle>
        </div>

        {mobileMenuOpen &&
          <HeaderMobileOptions id="mobile-menu" aria-label={t.nav.label}>
            {NAV.map(({ id, label, scrollTo }) => (
              <button
                key={id}
                type="button"
                className={activeSection === id ? 'active' : undefined}
                onClick={() => ScrollMobile(scrollTo ?? id)}
              >
                <Text as="span">{t.nav[label]}</Text>
              </button>
            ))}
            <a href={localePath(nextLocale)} hrefLang={nextLocale} lang={nextLocale} onClick={rememberLanguage}>
              <Text as="span">{t.nav.language}</Text>
            </a>
          </HeaderMobileOptions>
        }

      </div>
    </HeaderStyled>
  )
}

export default Header
