"use client";

import styled from 'styled-components';
import { theme } from '@/app/_styles/theme';

// Small green badge that pops above the right edge of its (position: relative)
// parent — e.g. "Coming soon!" on Wishlist. Same look as the footer's
// .copied-badge.
const FloatingBadge = styled.span.attrs({ role: 'status' })`
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
`;

export default FloatingBadge;
