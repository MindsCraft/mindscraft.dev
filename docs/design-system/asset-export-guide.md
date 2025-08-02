# Asset Export Guide

## Overview

This document provides comprehensive guidelines for exporting, optimizing, and implementing all design assets for the Mindscraft design system. It covers logos, icons, images, fonts, and code assets with specific technical requirements and naming conventions.

---

## Logo Assets

### Logo Variations Required

#### Primary Logo Set
```
mindscraft-logo-full.svg          // Icon + text, primary version
mindscraft-logo-full-dark.svg     // Dark version for light backgrounds
mindscraft-logo-full-light.svg    // Light version for dark backgrounds
mindscraft-logo-full-mono.svg     // Monochrome version
```

#### Icon-Only Versions
```
mindscraft-icon.svg               // Icon only, primary
mindscraft-icon-dark.svg          // Dark version
mindscraft-icon-light.svg         // Light version
mindscraft-icon-mono.svg          // Monochrome version
```

#### Text-Only Versions
```
mindscraft-text.svg               // Text only, primary
mindscraft-text-dark.svg          // Dark version
mindscraft-text-light.svg         // Light version
mindscraft-text-mono.svg          // Monochrome version
```

#### Layout Variations
```
mindscraft-logo-horizontal.svg    // Horizontal layout
mindscraft-logo-stacked.svg       // Stacked layout
mindscraft-logo-compact.svg       // Compact version for small spaces
```

### Logo Technical Specifications

#### SVG Requirements
```xml
<!-- Example SVG structure -->
<svg 
  width="120" 
  height="40" 
  viewBox="0 0 120 40" 
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="logo-title"
>
  <title id="logo-title">Mindscraft Logo</title>
  <defs>
    <!-- Define reusable elements -->
  </defs>
  <!-- Logo paths with semantic naming -->
  <g class="logo-icon">
    <!-- Icon paths -->
  </g>
  <g class="logo-text">
    <!-- Text paths -->
  </g>
</svg>
```

#### PNG Export Specifications
```
Sizes Required:
- 32x32px   (favicon, small icons)
- 64x64px   (medium icons, social profiles)
- 128x128px (large icons, app icons)
- 256x256px (high-res icons)
- 512x512px (extra high-res, app stores)

Format Settings:
- Color Mode: RGB
- Bit Depth: 24-bit (32-bit with transparency)
- Compression: PNG-8 for simple logos, PNG-24 for complex
- Background: Transparent
- DPI: 72 for web, 300 for print
```

#### Favicon Package
```
favicon.ico                       // Multi-size ICO file (16, 32, 48px)
favicon-16x16.png                 // 16x16 PNG
favicon-32x32.png                 // 32x32 PNG
apple-touch-icon.png              // 180x180 for iOS
android-chrome-192x192.png        // 192x192 for Android
android-chrome-512x512.png        // 512x512 for Android
mstile-150x150.png               // 150x150 for Windows
safari-pinned-tab.svg            // Monochrome SVG for Safari
```

### Logo Usage Guidelines

#### Minimum Sizes
```css
/* Minimum logo sizes for readability */
.logo-full {
  min-width: 120px;
  min-height: 40px;
}

.logo-icon {
  min-width: 32px;
  min-height: 32px;
}

.logo-text {
  min-width: 80px;
  min-height: 24px;
}
```

#### Clear Space Requirements
```css
/* Clear space = 1/2 logo height on all sides */
.logo-container {
  padding: calc(var(--logo-height) / 2);
}

/* Example for 40px height logo */
.logo-40 {
  padding: 20px;
}
```

#### Color Specifications
```css
:root {
  /* Logo colors */
  --logo-primary: #101828;        /* Brand dark */
  --logo-accent: #F3F4C0;         /* Brand accent */
  --logo-light: #FFFFFF;          /* Light version */
  --logo-mono-dark: #000000;      /* Monochrome dark */
  --logo-mono-light: #FFFFFF;     /* Monochrome light */
}
```

---

## Icon System

### Icon Library Structure

#### Icon Categories
```
ui/                               // User interface icons
├── navigation/
│   ├── arrow-left.svg
│   ├── arrow-right.svg
│   ├── chevron-down.svg
│   └── menu.svg
├── actions/
│   ├── edit.svg
│   ├── delete.svg
│   ├── save.svg
│   └── share.svg
├── status/
│   ├── check-circle.svg
│   ├── alert-triangle.svg
│   ├── x-circle.svg
│   └── info.svg
└── media/
    ├── play.svg
    ├── pause.svg
    ├── download.svg
    └── upload.svg

features/                         // Feature-specific icons
├── ai/
│   ├── brain.svg
│   ├── robot.svg
│   ├── neural-network.svg
│   └── machine-learning.svg
├── development/
│   ├── code.svg
│   ├── terminal.svg
│   ├── git-branch.svg
│   └── database.svg
└── business/
    ├── growth.svg
    ├── analytics.svg
    ├── target.svg
    └── rocket.svg

social/                          // Social media icons
├── linkedin.svg
├── twitter.svg
├── github.svg
├── dribbble.svg
└── email.svg
```

### Icon Technical Specifications

#### SVG Icon Standards
```xml
<!-- Standard icon template -->
<svg 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2" 
  stroke-linecap="round" 
  stroke-linejoin="round"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-labelledby="icon-title"
>
  <title id="icon-title">Icon Description</title>
  <!-- Icon paths -->
</svg>
```

#### Icon Design Rules
```
Grid System: 24x24px base grid
Stroke Width: 2px (consistent across all icons)
Line Caps: Rounded (stroke-linecap="round")
Line Joins: Rounded (stroke-linejoin="round")
Padding: 2px internal padding from grid edges
Style: Outline style, no fills except for emphasis
Color: currentColor (inherits from parent)
```

#### Icon Size Scale
```css
:root {
  /* Icon size scale */
  --icon-xs: 12px;    /* Small decorative icons */
  --icon-sm: 16px;    /* Inline with text */
  --icon-md: 20px;    /* Standard UI icons */
  --icon-lg: 24px;    /* Prominent icons */
  --icon-xl: 32px;    /* Large feature icons */
  --icon-2xl: 48px;   /* Hero section icons */
}

/* Icon size classes */
.icon-xs { width: var(--icon-xs); height: var(--icon-xs); }
.icon-sm { width: var(--icon-sm); height: var(--icon-sm); }
.icon-md { width: var(--icon-md); height: var(--icon-md); }
.icon-lg { width: var(--icon-lg); height: var(--icon-lg); }
.icon-xl { width: var(--icon-xl); height: var(--icon-xl); }
.icon-2xl { width: var(--icon-2xl); height: var(--icon-2xl); }
```

### Icon Implementation

#### React Icon Component
```tsx
interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string;
  className?: string;
  'aria-label'?: string;
}

const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'md', 
  color = 'currentColor',
  className = '',
  'aria-label': ariaLabel,
  ...props 
}) => {
  const iconClasses = `icon icon-${size} ${className}`;
  
  return (
    <svg
      className={iconClasses}
      style={{ color }}
      role="img"
      aria-label={ariaLabel || name}
      {...props}
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
};

// Usage
<Icon name="arrow-right" size="lg" />
<Icon name="check-circle" color="var(--color-success)" />
```

#### Icon Sprite System
```html
<!-- Icon sprite (hidden) -->
<svg style="display: none;">
  <defs>
    <symbol id="icon-arrow-right" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </symbol>
    <symbol id="icon-check-circle" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="9,11 12,14 22,4"/>
    </symbol>
  </defs>
</svg>
```

---

## Image Assets

### Photography Guidelines

#### Image Categories and Specifications

##### Hero Images
```
Purpose: Landing page backgrounds, section headers
Dimensions: 1920x1080px (16:9 aspect ratio)
Formats: WebP (primary), JPEG (fallback)
Quality: 85% compression
Sizes:
- hero-mobile.webp (800x450)
- hero-tablet.webp (1200x675)
- hero-desktop.webp (1920x1080)
- hero-desktop@2x.webp (3840x2160)
```

##### Card Images
```
Purpose: Service cards, blog post previews, case studies
Dimensions: 400x300px (4:3 aspect ratio)
Formats: WebP (primary), JPEG (fallback)
Quality: 80% compression
Sizes:
- card-image.webp (400x300)
- card-image@2x.webp (800x600)
```

##### Team Photos
```
Purpose: About page, team member profiles
Dimensions: 400x400px (1:1 aspect ratio)
Formats: WebP (primary), JPEG (fallback)
Quality: 85% compression
Sizes:
- team-member.webp (200x200)
- team-member@2x.webp (400x400)
```

##### Case Study Images
```
Purpose: Portfolio showcases, project details
Dimensions: 1200x800px (3:2 aspect ratio)
Formats: WebP (primary), JPEG (fallback)
Quality: 90% compression
Sizes:
- case-study-mobile.webp (600x400)
- case-study-tablet.webp (900x600)
- case-study-desktop.webp (1200x800)
- case-study-desktop@2x.webp (2400x1600)
```

### Image Optimization

#### Responsive Image Implementation
```html
<!-- Responsive image with multiple sources -->
<picture>
  <source 
    media="(min-width: 1024px)" 
    srcset="hero-desktop.webp 1920w, hero-desktop@2x.webp 3840w"
    type="image/webp"
  >
  <source 
    media="(min-width: 768px)" 
    srcset="hero-tablet.webp 1200w, hero-tablet@2x.webp 2400w"
    type="image/webp"
  >
  <source 
    srcset="hero-mobile.webp 800w, hero-mobile@2x.webp 1600w"
    type="image/webp"
  >
  <!-- Fallback -->
  <img 
    src="hero-desktop.jpg" 
    srcset="hero-desktop.jpg 1920w, hero-desktop@2x.jpg 3840w"
    alt="AI-powered development for growing startups"
    loading="lazy"
    decoding="async"
  >
</picture>
```

#### CSS Background Images
```css
/* Responsive background images */
.hero-section {
  background-image: url('hero-mobile.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

@media (min-width: 768px) {
  .hero-section {
    background-image: url('hero-tablet.webp');
  }
}

@media (min-width: 1024px) {
  .hero-section {
    background-image: url('hero-desktop.webp');
  }
}

/* High DPI displays */
@media (min-resolution: 2dppx) {
  .hero-section {
    background-image: url('hero-desktop@2x.webp');
  }
}
```

### Image Naming Convention

#### Naming Structure
```
[category]-[description]-[size].[format]

Examples:
hero-ai-development-desktop.webp
card-service-ai-integration.webp
team-john-doe-profile.webp
case-study-fintech-dashboard-mobile.webp
icon-feature-brain-ai.svg
logo-mindscraft-full-dark.svg
```

#### Directory Structure
```
assets/
├── images/
│   ├── hero/
│   │   ├── hero-ai-development-mobile.webp
│   │   ├── hero-ai-development-tablet.webp
│   │   ├── hero-ai-development-desktop.webp
│   │   └── hero-ai-development-desktop@2x.webp
│   ├── cards/
│   │   ├── service-ai-integration.webp
│   │   ├── service-web-development.webp
│   │   └── service-mobile-apps.webp
│   ├── team/
│   │   ├── john-doe-profile.webp
│   │   ├── jane-smith-profile.webp
│   │   └── team-group-photo.webp
│   └── case-studies/
│       ├── fintech-dashboard/
│       ├── ecommerce-platform/
│       └── ai-chatbot/
├── icons/
│   ├── ui/
│   ├── features/
│   └── social/
└── logos/
    ├── svg/
    ├── png/
    └── favicon/
```

---

## Typography Assets

### Font Files

#### Inter Font Family
```
Required Font Files:
- Inter-Light.woff2 (300)
- Inter-Regular.woff2 (400)
- Inter-Medium.woff2 (500)
- Inter-SemiBold.woff2 (600)
- Inter-Bold.woff2 (700)
- Inter-ExtraBold.woff2 (800)

Fallback Formats:
- Inter-Light.woff
- Inter-Regular.woff
- Inter-Medium.woff
- Inter-SemiBold.woff
- Inter-Bold.woff
- Inter-ExtraBold.woff
```

#### JetBrains Mono (Monospace)
```
Required Font Files:
- JetBrainsMono-Regular.woff2 (400)
- JetBrainsMono-Medium.woff2 (500)
- JetBrainsMono-Bold.woff2 (700)

Fallback Formats:
- JetBrainsMono-Regular.woff
- JetBrainsMono-Medium.woff
- JetBrainsMono-Bold.woff
```

### Font Loading Implementation

#### CSS Font Face Declarations
```css
/* Inter Font Family */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Light.woff2') format('woff2'),
       url('/fonts/Inter-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Regular.woff2') format('woff2'),
       url('/fonts/Inter-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Medium.woff2') format('woff2'),
       url('/fonts/Inter-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-SemiBold.woff2') format('woff2'),
       url('/fonts/Inter-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter';
  src: url('/fonts/Inter-Bold.woff2') format('woff2'),
       url('/fonts/Inter-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* JetBrains Mono Font Family */
@font-face {
  font-family: 'JetBrains Mono';
  src: url('/fonts/JetBrainsMono-Regular.woff2') format('woff2'),
       url('/fonts/JetBrainsMono-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

#### Font Preloading
```html
<!-- Preload critical fonts -->
<link 
  rel="preload" 
  href="/fonts/Inter-Regular.woff2" 
  as="font" 
  type="font/woff2" 
  crossorigin
>
<link 
  rel="preload" 
  href="/fonts/Inter-SemiBold.woff2" 
  as="font" 
  type="font/woff2" 
  crossorigin
>
<link 
  rel="preload" 
  href="/fonts/Inter-Bold.woff2" 
  as="font" 
  type="font/woff2" 
  crossorigin
>
```

---

## Code Assets

### CSS Design Tokens Export

#### Design Tokens CSS File
```css
/* design-tokens.css - Complete token system */
:root {
  /* Brand Colors */
  --color-brand-dark: #101828;
  --color-brand-dark-rgb: 16, 24, 40;
  --color-brand-accent: #F3F4C0;
  --color-brand-accent-rgb: 243, 244, 192;
  
  /* AI Theme Colors */
  --color-ai-primary: #2563EB;
  --color-ai-primary-rgb: 37, 99, 235;
  --color-ai-light: #DBEAFE;
  --color-ai-dark: #1E40AF;
  --color-ai-accent: #60A5FA;
  
  /* Growth Theme Colors */
  --color-growth-primary: #059669;
  --color-growth-primary-rgb: 5, 150, 105;
  --color-growth-light: #D1FAE5;
  --color-growth-dark: #047857;
  --color-growth-accent: #34D399;
  
  /* Typography */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
  
  /* Font Sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  --font-size-4xl: 2.25rem;
  --font-size-5xl: 3rem;
  
  /* Spacing Scale */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  
  /* Shadows */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  
  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
}
```

#### Utility Classes CSS
```css
/* utilities.css - Helper classes */

/* Screen Reader Only */
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

/* Focus Visible */
.focus-visible {
  outline: 2px solid var(--color-ai-primary);
  outline-offset: 2px;
}

/* Text Utilities */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.text-balance {
  text-wrap: balance;
}

/* Layout Utilities */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
    padding-left: var(--space-6);
    padding-right: var(--space-6);
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding-left: var(--space-8);
    padding-right: var(--space-8);
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1400px;
  }
}

/* Animation Utilities */
.animate-fade-in {
  animation: fade-in 0.25s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.25s ease-out;
}

.animate-scale-in {
  animation: scale-in 0.25s ease-out;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-up {
  from { 
    opacity: 0; 
    transform: translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

@keyframes scale-in {
  from { 
    opacity: 0; 
    transform: scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: scale(1); 
  }
}
```

### JavaScript/TypeScript Exports

#### Design Tokens TypeScript
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
    text: {
      primary: '#101828',
      secondary: '#4B5563',
      muted: '#9CA3AF',
      inverse: '#FFFFFF',
      link: '#2563EB',
      linkHover: '#1E40AF',
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB',
      tertiary: '#F3F4F6',
      brand: '#101828',
      ai: '#DBEAFE',
      growth: '#D1FAE5',
    },
    border: {
      default: '#E5E7EB',
      subtle: '#F3F4F6',
      strong: '#D1D5DB',
      brand: '#101828',
      focus: '#2563EB',
    },
    status: {
      success: '#10B981',
      successLight: '#ECFDF5',
      successDark: '#065F46',
      warning: '#F59E0B',
      warningLight: '#FFFBEB',
      warningDark: '#92400E',
      error: '#EF4444',
      errorLight: '#FEF2F2',
      errorDark: '#991B1B',
      info: '#3B82F6',
      infoLight: '#EFF6FF',
      infoDark: '#1E3A8A',
    },
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
      heroMobile: '2rem',
      heroDesktop: '3rem',
      sectionMobile: '1.5rem',
      sectionDesktop: '2.25rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      snug: 1.3,
      normal: 1.4,
      relaxed: 1.5,
      loose: 1.6,
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
    },
  },
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
    componentXs: '0.5rem',
    componentSm: '0.75rem',
    componentMd: '1rem',
    componentLg: '1.5rem',
    componentXl: '2rem',
    layoutXs: '1rem',
    layoutSm: '1.5rem',
    layoutMd: '3rem',
    layoutLg: '4rem',
    layoutXl: '6rem',
    sectionSm: '4rem',
    sectionMd: '5rem',
    sectionLg: '6rem',
    sectionXl: '8rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
    button: '0.5rem',
    card: '0.75rem',
    input: '0.375rem',
    badge: '9999px',
  },
  boxShadow: {
    xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    card: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    cardHover: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    button: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    buttonHover: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    focus: '0 0 0 3px rgb(37 99 235 / 0.1)',
    dropdown: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    modal: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },
  animation: {
    duration: {
      instant: '0ms',
      fast: '150ms',
      normal: '250ms',
      slow: '350ms',
      slower: '500ms',
      slowest: '750ms',
    },
    easing: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      back: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
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
  zIndex: {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skiplink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
} as const;

export type DesignTokens = typeof designTokens;
```

#### Component Type Definitions
```typescript
// component-types.ts
import { ReactNode, MouseEvent, KeyboardEvent } from 'react';

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
  'data-testid'?: string;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

export interface InputProps extends BaseComponentProps {
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
  'aria-label'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  onClick?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLDivElement>) => void;
  tabIndex?: number;
  role?: string;
  'aria-label'?: string;
}

export interface IconProps extends BaseComponentProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  color?: string;
  'aria-label'?: string;
}
```

---

## Asset Delivery and Implementation

### File Organization

#### Production Asset Structure
```
public/
├── images/
│   ├── hero/
│   ├── cards/
│   ├── team/
│   ├── case-studies/
│   └── optimized/
├── icons/
│   ├── sprite.svg
│   ├── ui/
│   ├── features/
│   └── social/
├── logos/
│   ├── svg/
│   ├── png/
│   └── favicon/
├── fonts/
│   ├── inter/
│   └── jetbrains-mono/
└── assets/
    ├── design-tokens.css
    ├── utilities.css
    └── components.css
```

### Performance Optimization

#### Image Optimization Checklist
- [ ] All images compressed with appropriate quality settings
- [ ] WebP format used with JPEG fallbacks
- [ ] Multiple sizes provided for responsive images
- [ ] Lazy loading implemented for non-critical images
- [ ] Alt text provided for all images
- [ ] Images optimized for Core Web Vitals

#### Font Optimization Checklist
- [ ] WOFF2 format used with WOFF fallbacks
- [ ] Critical fonts preloaded
- [ ] Font-display: swap implemented
- [ ] Unused font weights removed
- [ ] Font subsetting applied if needed

#### Icon Optimization Checklist
- [ ] SVG icons optimized and minified
- [ ] Icon sprite system implemented
- [ ] Consistent viewBox and sizing
- [ ] Accessible labels provided
- [ ] currentColor used for theming

### Quality Assurance

#### Asset Quality Checklist
- [ ] All assets follow naming conventions
- [ ] File sizes optimized for web delivery
- [ ] Multiple formats provided where needed
- [ ] Accessibility requirements met
- [ ] Cross-browser compatibility verified
- [ ] Performance impact measured
- [ ] CDN delivery configured
- [ ] Caching headers set appropriately

This comprehensive asset export guide ensures all design system assets are properly optimized, organized, and implemented for maximum performance and maintainability.