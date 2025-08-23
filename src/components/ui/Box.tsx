import React from 'react';
import { sprinkles, type Sprinkles } from '@/styles/sprinkles.css';

interface BoxProps extends Partial<Sprinkles> {
  children?: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  href?: string;
  target?: string;
  rel?: string;
  type?: string;
}

export const Box: React.FC<BoxProps> = ({ 
  children, 
  className, 
  as: Component = 'div',
  style,
  onClick,
  disabled,
  name,
  placeholder,
  href,
  target,
  rel,
  ...sprinkleProps 
}) => {
  const sprinkleClasses = sprinkles(sprinkleProps);

  return (
    <Component 
      className={[sprinkleClasses, className].filter(Boolean).join(' ')}
      style={style}
      onClick={onClick}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </Component>
  );
};
