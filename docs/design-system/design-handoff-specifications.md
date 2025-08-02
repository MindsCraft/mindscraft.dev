# Design Handoff Specifications

## Overview

This document provides comprehensive design specifications and implementation guidelines for developers to accurately implement the Mindscraft design system. All specifications are based on the established brand style guide, design tokens, and component library.

---

## Design Token Implementation

### CSS Custom Properties

#### Complete Token System
```css
:root {
  /* Brand Colors - Primary Identity */
  --color-brand-dark: #101828;
  --color-brand-dark-rgb: 16, 24, 40;
  --color-brand-accent: #F3F4C0;
  --color-brand-accent-rgb: 243, 244, 192;
  
  /* AI Theme Colors - Technology Focus */
  --color-ai-primary: #2563EB;
  --color-ai-primary-rgb: 37, 99, 235;
  --color-ai-light: #DBEAFE;
  --color-ai-dark: #1E40AF;
  --color-ai-accent: #60A5FA;
  
  /* Growth Theme Colors - Success States */
  --color-growth-primary: #059669;
  --color-growth-primary-rgb: 5, 150, 105;
  --color-growth-light: #D1FAE5;
  --color-growth-dark: #047857;
  --color-growth-accent: #34D399;
  
  /* Semantic Text Colors */
  --color-text-primary: var(--color-brand-dark);
  --color-text-secondary: #4B5563;
  --color-text-muted: #9CA3AF;
  --color-text-inverse: #FFFFFF;
  --color-text-link: var(--color-ai-primary);
  --color-text-link-hover: var(--color-ai-dark);
  
  /* Background Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F9FAFB;
  --color-bg-tertiary: #F3F4F6;
  --color-bg-brand: var(--color-brand-dark);
  --color-bg-ai: var(--color-ai-light);
  --color-bg-growth: var(--color-growth-light);
  
  /* Border Colors */
  --color-border-default: #E5E7EB;
  --color-border-subtle: #F3F4F6;
  --color-border-strong: #D1D5DB;
  --color-border-brand: var(--color-brand-dark);
  --color-border-focus: var(--color-ai-primary);
  
  /* Status Colors */
  --color-success: #10B981;
  --color-success-light: #ECFDF5;
  --color-success-dark: #065F46;
  --color-warning: #F59E0B;
  --color-warning-light: #FFFBEB;
  --color-warning-dark: #92400E;
  --color-error: #EF4444;
  --color-error-light: #FEF2F2;
  --color-error-dark: #991B1B;
  --color-info: #3B82F6;
  --color-info-light: #EFF6FF;
  --color-info-dark: #1E3A8A;
  
  /* Typography Tokens */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  
  /* Font Sizes - Mobile First */
  --font-size-xs: 0.75rem;      /* 12px */
  --font-size-sm: 0.875rem;     /* 14px */
  --font-size-base: 1rem;       /* 16px */
  --font-size-lg: 1.125rem;     /* 18px */
  --font-size-xl: 1.25rem;      /* 20px */
  --font-size-2xl: 1.5rem;      /* 24px */
  --font-size-3xl: 1.875rem;    /* 30px */
  --font-size-4xl: 2.25rem;     /* 36px */
  --font-size-5xl: 3rem;        /* 48px */
  --font-size-6xl: 3.75rem;     /* 60px */
  
  /* Responsive Font Sizes */
  --font-size-hero-mobile: 2rem;        /* 32px */
  --font-size-hero-desktop: 3rem;       /* 48px */
  --font-size-section-mobile: 1.5rem;   /* 24px */
  --font-size-section-desktop: 2.25rem; /* 36px */
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  /* Line Heights */
  --line-height-tight: 1.2;
  --line-height-snug: 1.3;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.5;
  --line-height-loose: 1.6;
  
  /* Letter Spacing */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  
  /* Spacing Scale (4px base unit) */
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  
  /* Semantic Spacing */
  --space-component-xs: var(--space-2);   /* 8px */
  --space-component-sm: var(--space-3);   /* 12px */
  --space-component-md: var(--space-4);   /* 16px */
  --space-component-lg: var(--space-6);   /* 24px */
  --space-component-xl: var(--space-8);   /* 32px */
  
  --space-layout-xs: var(--space-4);      /* 16px */
  --space-layout-sm: var(--space-6);      /* 24px */
  --space-layout-md: var(--space-12);     /* 48px */
  --space-layout-lg: var(--space-16);     /* 64px */
  --space-layout-xl: var(--space-24);     /* 96px */
  
  --space-section-sm: var(--space-16);    /* 64px */
  --space-section-md: var(--space-20);    /* 80px */
  --space-section-lg: var(--space-24);    /* 96px */
  --space-section-xl: var(--space-32);    /* 128px */
  
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 0.125rem;    /* 2px */
  --radius-md: 0.375rem;    /* 6px */
  --radius-lg: 0.5rem;      /* 8px */
  --radius-xl: 0.75rem;     /* 12px */
  --radius-2xl: 1rem;       /* 16px */
  --radius-3xl: 1.5rem;     /* 24px */
  --radius-full: 9999px;
  
  /* Semantic Border Radius */
  --radius-button: var(--radius-lg);
  --radius-card: var(--radius-xl);
  --radius-input: var(--radius-md);
  --radius-badge: var(--radius-full);
  
  /* Shadows */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* Semantic Shadows */
  --shadow-card: var(--shadow-md);
  --shadow-card-hover: var(--shadow-lg);
  --shadow-button: var(--shadow-sm);
  --shadow-button-hover: var(--shadow-md);
  --shadow-dropdown: var(--shadow-lg);
  --shadow-modal: var(--shadow-2xl);
  --shadow-focus: 0 0 0 3px rgb(var(--color-ai-primary-rgb) / 0.1);
  
  /* Animation Tokens */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
  
  /* Semantic Durations */
  --duration-button: var(--duration-fast);
  --duration-card: var(--duration-normal);
  --duration-modal: var(--duration-slow);
  --duration-page: var(--duration-slower);
  
  /* Easing Functions */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Semantic Easing */
  --ease-button: var(--ease-out);
  --ease-card: var(--ease-in-out);
  --ease-modal: var(--ease-out);
  
  /* Breakpoints */
  --breakpoint-xs: 375px;
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
  
  /* Container Max Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1400px;
  
  /* Z-Index Scale */
  --z-hide: -1;
  --z-base: 0;
  --z-docked: 10;
  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-banner: 1200;
  --z-overlay: 1300;
  --z-modal: 1400;
  --z-popover: 1500;
  --z-skiplink: 1600;
  --z-toast: 1700;
  --z-tooltip: 1800;
}
```

### Tailwind CSS Configuration

#### Extended Tailwind Config
```javascript
// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        brand: {
          dark: '#101828',
          accent: '#F3F4C0',
        },
        
        // AI Theme Colors
        ai: {
          primary: '#2563EB',
          light: '#DBEAFE',
          dark: '#1E40AF',
          accent: '#60A5FA',
        },
        
        // Growth Theme Colors
        growth: {
          primary: '#059669',
          light: '#D1FAE5',
          dark: '#047857',
          accent: '#34D399',
        },
        
        // Semantic Text Colors
        text: {
          primary: '#101828',
          secondary: '#4B5563',
          muted: '#9CA3AF',
          inverse: '#FFFFFF',
          link: '#2563EB',
          'link-hover': '#1E40AF',
        },
        
        // Background Colors
        bg: {
          primary: '#FFFFFF',
          secondary: '#F9FAFB',
          tertiary: '#F3F4F6',
          brand: '#101828',
          ai: '#DBEAFE',
          growth: '#D1FAE5',
        },
        
        // Border Colors
        border: {
          default: '#E5E7EB',
          subtle: '#F3F4F6',
          strong: '#D1D5DB',
          brand: '#101828',
          focus: '#2563EB',
        },
      },
      
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      
      fontSize: {
        // Base scale
        'xs': ['0.75rem', { lineHeight: '1.4' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.5' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.6' }],     // 18px
        'xl': ['1.25rem', { lineHeight: '1.5' }],      // 20px
        '2xl': ['1.5rem', { lineHeight: '1.4' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '1.3' }],    // 30px
        '4xl': ['2.25rem', { lineHeight: '1.3' }],     // 36px
        '5xl': ['3rem', { lineHeight: '1.2' }],        // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],     // 60px
        
        // Semantic sizes
        'hero-mobile': ['2rem', { lineHeight: '1.2' }],        // 32px
        'hero-desktop': ['3rem', { lineHeight: '1.2' }],       // 48px
        'section-mobile': ['1.5rem', { lineHeight: '1.3' }],   // 24px
        'section-desktop': ['2.25rem', { lineHeight: '1.3' }], // 36px
        'body': ['1rem', { lineHeight: '1.6' }],               // 16px
        'caption': ['0.875rem', { lineHeight: '1.5' }],        // 14px
      },
      
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      
      spacing: {
        // Component spacing
        'component-xs': '0.5rem',    // 8px
        'component-sm': '0.75rem',   // 12px
        'component-md': '1rem',      // 16px
        'component-lg': '1.5rem',    // 24px
        'component-xl': '2rem',      // 32px
        
        // Layout spacing
        'layout-xs': '1rem',         // 16px
        'layout-sm': '1.5rem',       // 24px
        'layout-md': '3rem',         // 48px
        'layout-lg': '4rem',         // 64px
        'layout-xl': '6rem',         // 96px
        
        // Section spacing
        'section-sm': '4rem',        // 64px
        'section-md': '5rem',        // 80px
        'section-lg': '6rem',        // 96px
        'section-xl': '8rem',        // 128px
      },
      
      borderRadius: {
        'button': '0.5rem',          // 8px
        'card': '0.75rem',           // 12px
        'input': '0.375rem',         // 6px
        'badge': '9999px',           // Full rounded
      },
      
      boxShadow: {
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'button': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'button-hover': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'focus': '0 0 0 3px rgb(37 99 235 / 0.1)',
        'dropdown': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'modal': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
        'slower': '500ms',
      },
      
      transitionTimingFunction: {
        'button': 'cubic-bezier(0, 0, 0.2, 1)',
        'card': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'modal': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-10px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'scale-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.95)', opacity: '0' },
        },
        'rotate-in': {
          '0%': { transform: 'rotate(-180deg)', opacity: '0' },
          '100%': { transform: 'rotate(0deg)', opacity: '1' },
        },
        'bounce': {
          '0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '40%, 43%': { transform: 'translate3d(0, -30px, 0)' },
          '70%': { transform: 'translate3d(0, -15px, 0)' },
          '90%': { transform: 'translate3d(0, -4px, 0)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'shake': {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-4px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(4px)' },
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      
      animation: {
        'fade-in': 'fade-in 0.25s ease-out',
        'fade-out': 'fade-out 0.25s ease-out',
        'slide-up': 'slide-up 0.25s ease-out',
        'slide-down': 'slide-down 0.25s ease-out',
        'slide-left': 'slide-left 0.25s ease-out',
        'slide-right': 'slide-right 0.25s ease-out',
        'scale-in': 'scale-in 0.25s ease-out',
        'scale-out': 'scale-out 0.25s ease-out',
        'rotate-in': 'rotate-in 0.35s ease-out',
        'bounce': 'bounce 0.5s ease-out',
        'pulse': 'pulse 2s infinite',
        'shake': 'shake 0.25s ease-out',
        'spin': 'spin 1s linear infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
```

---

## Component Specifications

### Button Component

#### Visual Specifications
```css
/* Primary Button */
.btn-primary {
  background-color: var(--color-ai-primary);
  color: var(--color-text-inverse);
  border: none;
  border-radius: var(--radius-button);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-wide);
  transition: all var(--duration-button) var(--ease-button);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  text-decoration: none;
  user-select: none;
  position: relative;
  overflow: hidden;
}

/* Button Sizes */
.btn-sm {
  padding: var(--space-2) var(--space-4);
  min-height: 32px;
  font-size: var(--font-size-sm);
}

.btn-md {
  padding: var(--space-3) var(--space-6);
  min-height: 40px;
  font-size: var(--font-size-base);
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  min-height: 48px;
  font-size: var(--font-size-lg);
}

/* Button States */
.btn-primary:hover {
  background-color: var(--color-ai-dark);
  transform: translateY(-1px);
  box-shadow: var(--shadow-button-hover);
}

.btn-primary:active {
  transform: translateY(0);
  box-shadow: var(--shadow-button);
  transition-duration: calc(var(--duration-button) / 2);
}

.btn-primary:focus {
  outline: none;
  box-shadow: var(--shadow-button), var(--shadow-focus);
}

.btn-primary:disabled {
  background-color: var(--color-border-strong);
  color: var(--color-text-muted);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

/* Secondary Button */
.btn-secondary {
  background-color: transparent;
  color: var(--color-ai-primary);
  border: 2px solid var(--color-ai-primary);
  border-radius: var(--radius-button);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  transition: all var(--duration-button) var(--ease-button);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
}

.btn-secondary:hover {
  background-color: var(--color-ai-primary);
  color: var(--color-text-inverse);
  transform: translateY(-1px);
  box-shadow: var(--shadow-button-hover);
}

/* Tertiary Button */
.btn-tertiary {
  background-color: transparent;
  color: var(--color-ai-primary);
  border: none;
  border-radius: var(--radius-button);
  font-family: var(--font-family-primary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
  transition: all var(--duration-button) var(--ease-button);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  position: relative;
}

.btn-tertiary::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: currentColor;
  transition: width var(--duration-normal) var(--ease-button);
}

.btn-tertiary:hover::after {
  width: 100%;
}

/* Loading State */
.btn-loading {
  position: relative;
  color: transparent;
}

.btn-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1rem;
  height: 1rem;
  margin: -0.5rem 0 0 -0.5rem;
  border: 2px solid transparent;
  border-top-color: currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

#### TypeScript Interface
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}
```

#### Implementation Example
```tsx
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  type = 'button',
  onClick,
  children,
  className = '',
  ...ariaProps
}) => {
  const baseClasses = 'btn';
  const variantClasses = `btn-${variant}`;
  const sizeClasses = `btn-${size}`;
  const stateClasses = [
    loading && 'btn-loading',
    disabled && 'btn-disabled',
    fullWidth && 'w-full'
  ].filter(Boolean).join(' ');
  
  const buttonClasses = [
    baseClasses,
    variantClasses,
    sizeClasses,
    stateClasses,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || loading}
      onClick={onClick}
      {...ariaProps}
    >
      {icon && iconPosition === 'left' && (
        <span className="btn-icon btn-icon-left">{icon}</span>
      )}
      <span className="btn-text">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="btn-icon btn-icon-right">{icon}</span>
      )}
    </button>
  );
};
```

### Input Component

#### Visual Specifications
```css
/* Base Input Styles */
.input {
  width: 100%;
  border: 2px solid var(--color-border-default);
  border-radius: var(--radius-input);
  background-color: var(--color-bg-primary);
  color: var(--color-text-primary);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-normal);
  line-height: var(--line-height-normal);
  padding: var(--space-3) var(--space-4);
  transition: all var(--duration-fast) var(--ease-out);
  appearance: none;
  outline: none;
}

.input::placeholder {
  color: var(--color-text-muted);
  opacity: 1;
}

/* Input States */
.input:focus {
  border-color: var(--color-border-focus);
  box-shadow: var(--shadow-focus);
  transform: scale(1.01);
}

.input.error {
  border-color: var(--color-error);
  box-shadow: 0 0 0 3px rgb(239 68 68 / 0.1);
}

.input.success {
  border-color: var(--color-success);
  box-shadow: 0 0 0 3px rgb(16 185 129 / 0.1);
}

.input:disabled {
  background-color: var(--color-bg-tertiary);
  color: var(--color-text-muted);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Textarea Variant */
.input-textarea {
  resize: vertical;
  min-height: 120px;
  line-height: var(--line-height-relaxed);
}

/* Input with Icon */
.input-container {
  position: relative;
  display: flex;
  align-items: center;
}

.input-with-icon {
  padding-left: var(--space-12);
}

.input-with-icon-right {
  padding-right: var(--space-12);
}

.input-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-muted);
  pointer-events: none;
}

.input-icon-left {
  left: var(--space-4);
}

.input-icon-right {
  right: var(--space-4);
}

.input-icon-button {
  pointer-events: auto;
  cursor: pointer;
  transition: color var(--duration-fast) var(--ease-out);
}

.input-icon-button:hover {
  color: var(--color-text-secondary);
}
```

#### TypeScript Interface
```typescript
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string | boolean;
  success?: string | boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  rows?: number;
  maxLength?: number;
  autoComplete?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  className?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
}
```

### Card Component

#### Visual Specifications
```css
/* Base Card Styles */
.card {
  background-color: var(--color-bg-primary);
  border-radius: var(--radius-card);
  border: 1px solid var(--color-border-default);
  transition: all var(--duration-card) var(--ease-card);
  position: relative;
  overflow: hidden;
}

/* Card Variants */
.card-default {
  box-shadow: var(--shadow-xs);
}

.card-elevated {
  box-shadow: var(--shadow-card);
}

.card-outlined {
  border: 2px solid var(--color-border-default);
  box-shadow: none;
}

.card-filled {
  background-color: var(--color-bg-secondary);
  border: none;
  box-shadow: none;
}

/* Card Padding */
.card-padding-sm {
  padding: var(--space-component-md);
}

.card-padding-md {
  padding: var(--space-component-lg);
}

.card-padding-lg {
  padding: var(--space-component-xl);
}

/* Interactive Card */
.card-interactive {
  cursor: pointer;
  user-select: none;
}

.card-interactive:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--color-ai-primary);
}

.card-interactive:active {
  transform: translateY(-1px);
  transition-duration: calc(var(--duration-card) / 2);
}

/* Card Header */
.card-header {
  padding: var(--space-component-lg) var(--space-component-lg) 0;
  border-bottom: 1px solid var(--color-border-subtle);
  margin-bottom: var(--space-component-lg);
}

/* Card Footer */
.card-footer {
  padding: 0 var(--space-component-lg) var(--space-component-lg);
  border-top: 1px solid var(--color-border-subtle);
  margin-top: var(--space-component-lg);
}

/* Card Content */
.card-content {
  padding: var(--space-component-lg);
}
```

#### TypeScript Interface
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
  tabIndex?: number;
  role?: string;
  'aria-label'?: string;
}
```

---

## Animation and Micro-interaction Guidelines

### Animation Specifications

#### Button Animations
```css
/* Button Hover Animation */
@keyframes button-hover {
  0% {
    transform: translateY(0);
    box-shadow: var(--shadow-button);
  }
  100% {
    transform: translateY(-1px);
    box-shadow: var(--shadow-button-hover);
  }
}

/* Button Press Animation */
@keyframes button-press {
  0% {
    transform: translateY(-1px);
  }
  100% {
    transform: translateY(0);
  }
}

/* Button Loading Animation */
@keyframes button-loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Shimmer Effect for Primary CTA */
@keyframes button-shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.btn-primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: left var(--duration-slow) var(--ease-out);
}

.btn-primary:hover::before {
  left: 100%;
}
```

#### Card Animations
```css
/* Card Hover Animation */
@keyframes card-hover {
  0% {
    transform: translateY(0);
    box-shadow: var(--shadow-card);
  }
  100% {
    transform: translateY(-2px);
    box-shadow: var(--shadow-card-hover);
  }
}

/* Card Content Stagger Animation */
@keyframes card-content-enter {
  0% {
    opacity: 0;
    transform: translateY(8px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.card-content > * {
  animation: card-content-enter var(--duration-normal) var(--ease-out) forwards;
}

.card-content > *:nth-child(1) { animation-delay: 0ms; }
.card-content > *:nth-child(2) { animation-delay: 50ms; }
.card-content > *:nth-child(3) { animation-delay: 100ms; }
.card-content > *:nth-child(4) { animation-delay: 150ms; }
```

#### Form Animations
```css
/* Input Focus Animation */
@keyframes input-focus {
  0% {
    border-color: var(--color-border-default);
    box-shadow: none;
    transform: scale(1);
  }
  100% {
    border-color: var(--color-border-focus);
    box-shadow: var(--shadow-focus);
    transform: scale(1.01);
  }
}

/* Input Error Animation */
@keyframes input-error-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}

.input.error {
  animation: input-error-shake var(--duration-normal) var(--ease-out);
}

/* Form Validation Messages */
@keyframes validation-slide-down {
  0% {
    opacity: 0;
    transform: translateY(-4px);
    max-height: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    max-height: 2rem;
  }
}

.validation-message {
  animation: validation-slide-down var(--duration-fast) var(--ease-out);
}
```

#### Page Transition Animations
```css
/* Page Load Animation */
@keyframes page-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.page-content {
  animation: page-fade-in var(--duration-slower) var(--ease-out);
}

/* Section Reveal Animation */
@keyframes section-slide-up {
  0% {
    opacity: 0;
    transform: translateY(24px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.section {
  opacity: 0;
  animation: section-slide-up var(--duration-slow) var(--ease-out) forwards;
}

/* Stagger sections */
.section:nth-child(1) { animation-delay: 0ms; }
.section:nth-child(2) { animation-delay: 100ms; }
.section:nth-child(3) { animation-delay: 200ms; }
.section:nth-child(4) { animation-delay: 300ms; }

/* Hero Animation */
@keyframes hero-content-enter {
  0% {
    opacity: 0;
    transform: translateY(32px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-headline {
  animation: hero-content-enter var(--duration-slower) var(--ease-out) 200ms forwards;
  opacity: 0;
}

.hero-subtitle {
  animation: hero-content-enter var(--duration-slower) var(--ease-out) 400ms forwards;
  opacity: 0;
}

.hero-cta {
  animation: hero-content-enter var(--duration-slower) var(--ease-out) 600ms forwards;
  opacity: 0;
}
```

### Accessibility Considerations

#### Reduced Motion Support
```css
/* Respect user preferences for reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* Provide alternative feedback for reduced motion */
  .btn:hover {
    background-color: var(--color-ai-dark);
    transform: none;
  }
  
  .card:hover {
    border-color: var(--color-ai-primary);
    transform: none;
    box-shadow: var(--shadow-card);
  }
  
  .input:focus {
    transform: none;
  }
}
```

#### Focus Management
```css
/* Focus indicators */
.focusable {
  transition: all var(--duration-fast) var(--ease-out);
}

.focusable:focus {
  outline: 2px solid var(--color-ai-primary);
  outline-offset: 2px;
}

/* Skip focus animation for reduced motion */
@media (prefers-reduced-motion: reduce) {
  .focusable:focus {
    transform: none;
  }
}
```

---

## Responsive Design Specifications

### Breakpoint System

#### Media Query Definitions
```css
/* Mobile First Breakpoints */
@media (min-width: 375px) {
  /* Small mobile adjustments */
}

@media (min-width: 640px) {
  /* Large mobile / small tablet */
}

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1280px) {
  /* Large desktop */
}

@media (min-width: 1536px) {
  /* Extra large desktop */
}
```

#### Container System
```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 640px) {
  .container {
    max-width: var(--container-sm);
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 768px) {
  .container {
    max-width: var(--container-md);
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: var(--container-lg);
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: var(--container-xl);
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: var(--container-2xl);
  }
}
```

### Typography Scaling

#### Responsive Typography
```css
/* Hero Text Scaling */
.hero-text {
  font-size: var(--font-size-hero-mobile);
  line-height: var(--line-height-tight);
  font-weight: var(--font-weight-bold);
}

@media (min-width: 768px) {
  .hero-text {
    font-size: var(--font-size-hero-desktop);
  }
}

/* Section Headers */
.section-header {
  font-size: var(--font-size-section-mobile);
  line-height: var(--line-height-snug);
  font-weight: var(--font-weight-semibold);
}

@media (min-width: 768px) {
  .section-header {
    font-size: var(--font-size-section-desktop);
  }
}

/* Fluid Typography */
.fluid-text {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}

.hero-fluid {
  font-size: clamp(2rem, 5vw, 3.5rem);
}
```

### Component Responsiveness

#### Button Responsiveness
```css
.btn {
  min-height: 44px; /* Touch target minimum */
  padding: var(--space-3) var(--space-4);
}

@media (min-width: 768px) {
  .btn {
    min-height: 40px; /* Desktop can be smaller */
  }
}

/* Full width on mobile */
.btn-mobile-full {
  width: 100%;
}

@media (min-width: 640px) {
  .btn-mobile-full {
    width: auto;
  }
}
```

#### Card Grid Responsiveness
```css
.card-grid {
  display: grid;
  gap: var(--space-4);
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-8);
  }
}
```

#### Navigation Responsiveness
```css
/* Mobile Navigation */
.nav-mobile {
  display: block;
}

.nav-desktop {
  display: none;
}

@media (min-width: 768px) {
  .nav-mobile {
    display: none;
  }
  
  .nav-desktop {
    display: flex;
    align-items: center;
    gap: var(--space-8);
  }
}

/* Mobile Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-bg-primary);
  z-index: var(--z-modal);
  transform: translateX(-100%);
  transition: transform var(--duration-normal) var(--ease-out);
}

.mobile-menu.open {
  transform: translateX(0);
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: var(--z-overlay);
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
  pointer-events: none;
}

.mobile-menu-overlay.open {
  opacity: 1;
  pointer-events: auto;
}
```

---

## Asset Export Specifications

### Image Assets

#### Logo Assets
```
Logo Formats Required:
- SVG (vector, scalable)
- PNG (32x32, 64x64, 128x128, 256x256, 512x512)
- WebP (optimized for web)
- ICO (favicon, 16x16, 32x32, 48x48)

Logo Variations:
- Full logo (icon + text)
- Icon only
- Text only
- Horizontal layout
- Stacked layout
- Light version (for dark backgrounds)
- Dark version (for light backgrounds)
```

#### Icon System
```
Icon Specifications:
- Format: SVG (preferred), PNG fallback
- Sizes: 16px, 20px, 24px, 32px, 48px
- Style: 2px stroke width, rounded line caps
- Colors: Brand dark (#101828), AI primary (#2563EB)
- Naming: kebab-case (e.g., arrow-right.svg)

Icon Categories:
- UI Icons: navigation, actions, states
- Feature Icons: services, benefits, process steps
- Social Icons: platforms, sharing, contact
- Status Icons: success, warning, error, info
```

#### Photography Guidelines
```
Image Specifications:
- Format: WebP (primary), JPEG (fallback)
- Quality: 85% compression for web
- Sizes: Multiple sizes for responsive images
  - Mobile: 400w, 800w (2x)
  - Tablet: 800w, 1600w (2x)
  - Desktop: 1200w, 2400w (2x)
- Aspect Ratios:
  - Hero: 16:9
  - Cards: 4:3
  - Team photos: 1:1
  - Case studies: 3:2

Naming Convention:
- hero-section-mobile.webp
- hero-section-tablet.webp
- hero-section-desktop.webp
- hero-section-desktop@2x.webp
```

### Code Assets

#### CSS Variables Export
```css
/* Export all design tokens as CSS custom properties */
/* File: design-tokens.css */
:root {
  /* All design tokens from above */
}

/* Export utility classes */
/* File: utilities.css */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.focus-visible {
  outline: 2px solid var(--color-ai-primary);
  outline-offset: 2px;
}

.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.visually-hidden {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}
```

#### JavaScript/TypeScript Exports
```typescript
// design-tokens.ts
export const designTokens = {
  colors: {
    brand: {
      dark: '#101828',
      accent: '#F3F4C0',
    },
    ai: {
      primary: '#2563EB',
      light: '#DBEAFE',
      dark: '#1E40AF',
      accent: '#60A5FA',
    },
    growth: {
      primary: '#059669',
      light: '#D1FAE5',
      dark: '#047857',
      accent: '#34D399',
    },
  },
  spacing: {
    componentXs: '0.5rem',
    componentSm: '0.75rem',
    componentMd: '1rem',
    componentLg: '1.5rem',
    componentXl: '2rem',
  },
  typography: {
    fontFamily: {
      primary: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: 'JetBrains Mono, "Fira Code", Consolas, monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
      slower: '500ms',
    },
    easing: {
      button: 'cubic-bezier(0, 0, 0.2, 1)',
      card: 'cubic-bezier(0.4, 0, 0.2, 1)',
      modal: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
  breakpoints: {
    xs: '375px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Component prop types
export interface ComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface ButtonProps extends ComponentProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface InputProps extends ComponentProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url' | 'number' | 'textarea';
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string | boolean;
  success?: string | boolean;
  onChange?: (value: string) => void;
}

export interface CardProps extends ComponentProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onClick?: () => void;
}
```

---

## Quality Assurance Checklist

### Design Implementation Checklist

#### Visual Accuracy
- [ ] Colors match design tokens exactly
- [ ] Typography uses correct font families, sizes, and weights
- [ ] Spacing follows the 4px base unit system
- [ ] Border radius values are consistent
- [ ] Shadows match specifications
- [ ] Icons are properly sized and colored

#### Responsive Design
- [ ] Mobile-first approach implemented
- [ ] All breakpoints tested and working
- [ ] Typography scales appropriately
- [ ] Touch targets meet 44px minimum on mobile
- [ ] Content reflows without horizontal scrolling
- [ ] Images are optimized for each breakpoint

#### Accessibility
- [ ] Color contrast ratios meet WCAG AA standards (4.5:1)
- [ ] Focus indicators are visible and consistent
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader compatibility tested
- [ ] ARIA labels and roles implemented correctly
- [ ] Semantic HTML structure used
- [ ] Alternative text provided for images

#### Performance
- [ ] CSS is optimized and minified
- [ ] Images are compressed and properly sized
- [ ] Fonts are preloaded and optimized
- [ ] Animations respect prefers-reduced-motion
- [ ] Critical CSS is inlined
- [ ] Non-critical resources are lazy loaded

#### Browser Compatibility
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Mobile Safari (iOS 14+)
- [ ] Chrome Mobile (Android 10+)

#### Code Quality
- [ ] CSS follows BEM or consistent naming convention
- [ ] TypeScript interfaces are properly defined
- [ ] Components are properly typed
- [ ] Code is properly commented
- [ ] No console errors or warnings
- [ ] Linting rules pass

### Testing Procedures

#### Visual Regression Testing
```bash
# Example testing commands
npm run test:visual
npm run test:accessibility
npm run test:performance
npm run lint:css
npm run lint:typescript
```

#### Manual Testing Checklist
- [ ] Test all interactive states (hover, focus, active, disabled)
- [ ] Verify animations work smoothly
- [ ] Check loading states and error handling
- [ ] Test form validation and submission
- [ ] Verify responsive behavior at all breakpoints
- [ ] Test with screen reader (NVDA, JAWS, VoiceOver)
- [ ] Test keyboard navigation
- [ ] Verify color contrast in different lighting conditions

This comprehensive design handoff specification provides developers with all the necessary information to accurately implement the Mindscraft design system while maintaining consistency, accessibility, and performance standards.