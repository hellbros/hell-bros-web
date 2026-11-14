import React from 'react';
import { StyledButton, StyledProps } from './styles';

type DefaultProps = {
  children?: React.ReactNode;
  $variant?: 'solid' | 'justIcon';
  type?: 'button' | 'submit',
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  color?: string,
  $labelColor?: string,
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
    <span>{children}</span>
  </StyledButton>
);

export default Button;
