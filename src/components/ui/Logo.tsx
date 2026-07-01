import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text' | 'horizontal';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  width?: number;
  height?: number;
}

const SIZE_ICON: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'logo-icon-sm',
  md: 'logo-icon-md',
  lg: 'logo-icon-lg',
  xl: 'logo-icon-xl',
};

const SIZE_TEXT: Record<NonNullable<LogoProps['size']>, string> = {
  sm: 'logo-text-sm',
  md: 'logo-text-md',
  lg: 'logo-text-lg',
  xl: 'logo-text-xl',
};

const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'dark',
  size = 'lg',
  className,
  width,
  height,
}) => {
  const logoSrc = '/logo/logo-black.svg';
  const iconClass = cn(
    'logo-icon',
    !width && !height ? SIZE_ICON[size] : undefined
  );
  const textClass = cn('logo-text', SIZE_TEXT[size]);

  if (variant === 'icon') {
    return (
      <img
        src={logoSrc}
        alt="Mindscraft Icon"
        className={cn(iconClass, theme === 'light' && 'logo-icon-light', className)}
        width={width}
        height={height}
      />
    );
  }

  return (
    <div className={cn('logo-shell', className)}>
      <img
        src={logoSrc}
        alt="Mindscraft"
        className={cn(iconClass, theme === 'light' && 'logo-icon-light')}
        width={width}
        height={height}
      />
      <span className={cn(textClass, theme === 'light' && 'logo-text-light')}>
        MindsCraft.
      </span>
    </div>
  );
};

export default Logo;