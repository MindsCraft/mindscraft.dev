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
  size = 'lg',
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

  const textSizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  };

  const logoSrc = '/logo/new-logo.svg';

  // If only icon variant is requested
  if (variant === 'icon') {
    const baseClasses = 'object-contain';
    const finalClasses = `${baseClasses} ${!width && !height ? sizeClasses[size] : ''} ${className}`;

    return (
      <img
        src={logoSrc}
        alt="Mindscraft Icon"
        className={finalClasses}
        width={width}
        height={height}
      />
    );
  }

  // Default: icon + text
  const iconClasses = `object-contain ${!width && !height ? sizeClasses[size] : ''}`;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logoSrc}
        alt="Mindscraft"
        className={iconClasses}
        width={width}
        height={height}
      />
      <span
        className="text-gray-800"
        style={{
          fontSize: '24px',
          letterSpacing: '-0.02em',
          fontWeight: 500
        }}
      >
        MindsCraft.
      </span>
    </div>
  );
};

export default Logo;