"use client";

import styled from 'styled-components';
import { MAX_WIDTH, SECTION_PADDING } from '@/app/_utils/constants';
import { theme } from '@/app/_styles/theme';

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const FooterInner = styled.div`
  max-width: ${MAX_WIDTH};
  margin: 0 auto;
  padding: 64px ${SECTION_PADDING} 32px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: start;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    gap: 2.25rem;
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  img {
    height: 52px;
    width: auto;
  }

  span,
  a {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${theme.colors.red};
  }

  a.email {
    position: relative;
    cursor: pointer;
  }

  .copied-badge {
    position: absolute;
    right: 0;
    bottom: calc(100% + 6px);
    padding: 3px 8px;
    border-radius: 6px;
    background: ${theme.colors.green};
    color: ${theme.colors.black};
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
    pointer-events: none;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;

  .label {
    margin: 0 0 0.3rem;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${theme.colors.white};
  }

  span,
  a {
    font-size: 15px;
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${theme.colors.red};
  }
`;

export const SocialRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    color: ${theme.colors.white};
    transition: color 0.2s ease, transform 0.2s ease;
  }

  a:hover {
    color: ${theme.colors.red};
    transform: scale(1.1);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: currentColor;
  }
`;

export const FooterBottom = styled.div`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);

  .slogan {
    margin: 0 0 10px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.75);
  }

  .heart {
    color: ${theme.colors.red};
  }
`;
