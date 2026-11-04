"use client"

import styled from 'styled-components';
import { HEADER_HEIGHT, HEADER_HEIGHT_MOBILE, SECTION_PADDING } from '../../_utils/constants';
import { theme } from '@/app/_styles/theme';

const PHONE = '@media (max-width: 700px)';

// The press kit is plain on purpose, like most studios' kits: one column of
// text on white, short uppercase headings, facts as "Label: value" lines and
// the pictures in a simple grid that opens the full-size files.
export const PressKitPage = styled.main`
  background: ${theme.colors.white};
  padding: ${HEADER_HEIGHT + 56}px ${SECTION_PADDING} 96px;

  &:focus {
    outline: none;
  }

  ${PHONE} {
    padding: ${HEADER_HEIGHT_MOBILE + 40}px 20px 72px;
  }
`;

export const Sheet = styled.article`
  max-width: 880px;
  margin: 0 auto;
  font-size: 17px;
  line-height: 1.55;

  h1 {
    margin: 0 0 6px;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.2;
  }

  h2 {
    margin: 48px 0 14px;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
  }

  h3 {
    margin: 22px 0 4px;
    font-size: 17px;
    font-weight: 700;
  }

  p {
    margin: 0 0 12px;
  }

  ul {
    margin: 0;
    padding-left: 22px;
  }

  ul li {
    margin: 6px 0;
    list-style-type: disc;
  }

  a {
    color: ${theme.colors.red};
  }

  .lead {
    margin-bottom: 8px;
    color: ${theme.colors.secondaryText};
  }

  .note {
    margin-top: 10px;
    color: ${theme.colors.secondaryText};
    font-size: 15px;
  }
`;

// Thumbnails that open the full-size file, in the pictures' own 16:9.
export const Gallery = styled.div<{ $wide?: boolean }>`
  display: grid;
  grid-template-columns: repeat(${({ $wide }) => ($wide ? 3 : 4)}, minmax(0, 1fr));
  gap: 12px;

  a {
    position: relative;
    display: block;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: ${theme.colors.black};
  }

  img {
    object-fit: cover;
  }

  ${PHONE} {
    grid-template-columns: repeat(${({ $wide }) => ($wide ? 1 : 2)}, minmax(0, 1fr));
  }
`;

export const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  /* Flex, not grid: the logo's max-height needs the box's fixed height. */
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    max-width: 100%;
    height: 150px;
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #E2E2E2;
  }

  a.dark {
    background: ${theme.colors.black};
    border-color: ${theme.colors.black};
  }

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;
