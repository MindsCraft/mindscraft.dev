import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text' | 'horizontal';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  size = 'md',
  className = '',
  width,
  height
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24'
  };

  const logoSrc = {
    full: '/logo/new-logo.svg',
    icon: '/logo/new-logo.svg',
    text: '/logo/new-logo.svg',
    horizontal: '/logo/new-logo.svg'
  };

  const altText = {
    full: 'Mindscraft - Full Logo',
    icon: 'Mindscraft - Icon',
    text: 'Mindscraft - Text',
    horizontal: 'Mindscraft - Horizontal Logo'
  };

  const baseClasses = 'object-contain';
  const finalClasses = `${baseClasses} ${!width && !height ? sizeClasses[size] : ''} ${className}`;

  return (
    <img
      src={logoSrc[variant]}
      alt={altText[variant]}
      className={finalClasses}
      width={width}
      height={height}
    />
  );
};

export default Logo;