import React from 'react';
import { Box } from './Box';
import { buttonStyle, primaryStyle, secondaryStyle } from './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
}) => {
  const variantStyle = variant === 'primary' ? primaryStyle : secondaryStyle;
  
  return (
    <Box
      as="button"
      className={`${buttonStyle} ${variantStyle}`}
      px={size === 'sm' ? 2 : size === 'lg' ? 4 : 3}
      py={size === 'sm' ? 1 : size === 'lg' ? 3 : 2}
      onClick={onClick}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      {children}
    </Box>
  );
};
