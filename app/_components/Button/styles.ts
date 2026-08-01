"use client";

import { theme } from '@/app/_styles/theme';
import styled, { keyframes, css } from 'styled-components';
import {
  variant, space, SpaceProps, layout, LayoutProps,
} from 'styled-system';

export type StyledProps =
  SpaceProps &
  LayoutProps;

type ButtonProps = {
  fullWidth?: boolean;
  loading?: string;
  color?: string;
  iconColor?: string;
  justIcon?: boolean;
} & StyledProps;

const spinnerAnimation = keyframes`
  0% {
    -webkit-transform: translate(-50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    -webkit-transform: translate(-50%) rotate(360deg);
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const SVGContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

export const StyledButton = styled.button<ButtonProps>`
  font-size: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  min-height: 48px;
  border-radius: 48px;
  opacity: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ color }) => color ? color : theme.colors.black};
  background-color: ${({ color, justIcon }) => justIcon ? "transparent" : (color ? color : theme.colors.primary)};
  position: relative;
  transition: background-color 250ms ease, color 250ms ease, border-color 250ms ease, transform 200ms ease;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ color, justIcon }) => justIcon ? "transparent" : (color ? color : theme.colors.primary)};
  font-weight: 600;
  
  svg{
    pointer-events:none;
  }

  ${(props) => props.fullWidth && css`
    flex: 100%;
    width: 100%;
  `}

  ${(props) => props.loading === 'true' && css`
    opacity: 0.9;
    overflow: hidden;
    pointer-events: none;

    ::before {
      content: '';
      width: 24px;
      height: 24px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      border: 3px solid #FFFFFF;
      border-left-color: transparent;
      animation-name: ${spinnerAnimation};
      animation-duration: 1s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    span {
      text-indent: -9999px;
    }
  `}

  ${variant({
    prop: '$variant',
    variants: {
      solid: {
        '@media (hover: hover) and (pointer: fine)': { //DESKTOP
          '&:hover': {
            backgroundColor: 'transparent',
            transform: 'scale(1.04)',
          },
          '&:not(:hover)': {
            color: `${theme.colors.white}`,           
          },
        },
        '@media (hover: none) and (pointer: coarse)': { //MOBILES
          color: `${theme.colors.white}`,
        },
      },
      justIcon: {
      },
    },
  })}

  ${space};
  ${layout};
`;
