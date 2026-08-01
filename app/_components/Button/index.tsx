import React from 'react';
import SVG from 'react-inlinesvg';
import { StyledButton, StyledProps, SVGContainer } from './styles';

type DefaultProps = {
  children?: React.ReactNode;
  $variant?: 'solid' | 'justIcon';
  type?: 'button' | 'submit',
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: string;
  color?: string,
  iconColor?: string,
  onClick?: any;
  className?: string;
  as?: 'a' | 'button';
  href?: string;
  target?: string;
  rel?: string;
} & StyledProps & React.AriaAttributes;

const Button: React.FC<DefaultProps> = ({
  children,
  color,
  type = 'button',
  loading,
  icon,
  iconColor,
  disabled = false,
  as,
  ...restProps
}) => (
  <StyledButton
    as={as}
    type={as === 'a' ? undefined : type}
    disabled={as === 'a' ? undefined : disabled}
    loading={`${loading}`}
    {...restProps}
    color={color}
    justIcon={!children}
  >
    {icon ? (
      <SVGContainer aria-hidden="true">
        <SVG
          src={icon}
          width="100%"
          height="30px"
          fill={iconColor ? iconColor : color}
        />
      </SVGContainer>
    ) : null}
    <span>{children}</span>
  </StyledButton>
);

export default Button;
