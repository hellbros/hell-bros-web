"use client";
import React, { useEffect, useState } from 'react'
import { HeaderMobileOptions, HeaderOptions, HeaderStyled, Text } from './styles'
import useScroll from '@/app/hooks/useScroll';
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE } from '@/app/_utils/constants';
import scrollToSection from '@/app/_utils/functions';
import useMediaQuery from '@/app/hooks/useMediaQuery';
import Button from '@/app/_components/Button';
import { theme } from "@/app/_styles/theme";
import useScrollbarWidth from '@/app/hooks/useScrollbarWidth';
import useActiveSection from '@/app/hooks/useActiveSection';
import Image from 'next/image';
import HellBrosLogo from '@/public/assets/brand/logo_hb_color02.svg';

const NAV: { id: string; label: string; scrollTo?: string }[] = [
  { id: 'estudio', label: 'Home' },
  { id: 'lookout', label: 'Look Out' },
  { id: 'nosotros', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
];
const NAV_IDS = NAV.map((n) => n.id);

const Header = () => {
  const sm = useMediaQuery('(max-width: 700px)');
  const hasScrolled = useScroll();
  const headerHeight = sm ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT;
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const scrollbarWidth = useScrollbarWidth();
  const activeSection = useActiveSection(NAV_IDS, headerHeight);

  function ScrollMobile(sectionId: string): void {
    scrollToSection(sectionId, headerHeight);
    setMobileMenuOpen(false);
  }

  useEffect(() => {
    if (sm && mobileMenuOpen) {
      // Al ocultar el scroll se quita la barra; compensamos su ancho con
      // padding-right para que el contenido no se re-maquete (salto lateral).
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [mobileMenuOpen, sm, scrollbarWidth]);

  return (
    <HeaderStyled $hasScrolled={hasScrolled} $mobileMenuOpen={mobileMenuOpen} $scrollbarWidth={scrollbarWidth}>
      <div className='header-content'>

        <div className='row'>
          <div className='logo'>
            <button type="button" aria-label="Home" onClick={() => scrollToSection('inicio', headerHeight)}>
              <Image src={HellBrosLogo} alt="Hell Bros" priority />
            </button>
          </div>

          <HeaderOptions>
            {NAV.map(({ id, label, scrollTo }) => (
              <button
                key={id}
                type="button"
                className={activeSection === id ? 'active' : undefined}
                onClick={() => scrollToSection(scrollTo ?? id, headerHeight)}
              >
                <Text $styles='link' as="span">{label}</Text>
              </button>
            ))}
          </HeaderOptions>

          <Button
            className="menu-toggle"
            $variant="justIcon"
            icon="assets/icons/HAMBURGUESA.svg"
            color={theme.colors.primary}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}/>
        </div>

        {mobileMenuOpen &&
          <HeaderMobileOptions>
            {NAV.map(({ id, label, scrollTo }) => (
              <button
                key={id}
                type="button"
                className={activeSection === id ? 'active' : undefined}
                onClick={() => ScrollMobile(scrollTo ?? id)}
              >
                <Text as="span">{label}</Text>
              </button>
            ))}
          </HeaderMobileOptions>
        }

      </div>
    </HeaderStyled>
  )
}

export default Header
