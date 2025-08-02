# Design Token System

## Overview

This design token system provides the foundation for consistent design implementation across all Mindscraft digital products. Tokens are organized hierarchically from global values to component-specific applications.

---

## Color Tokens

### Brand Colors

#### Primary Brand Colors
```css
:root {
  /* Brand Dark - Primary brand color */
  --color-brand-dark: #101828;
  --color-brand-dark-rgb: 16, 24, 40;
  --color-brand-dark-hsl: 220, 43%, 11%;
  
  /* Brand Accent - Secondary brand color */
  --color-brand-accent: #F3F4C0;
  --color-brand-accent-rgb: 243, 244, 192;
  --color-brand-accent-hsl: 61, 68%, 85%;
}
```

#### AI Theme Colors
```css
:root {
  /* AI Primary - Technology/AI features */
  --color-ai-primary: #2563EB;
  --color-ai-primary-rgb: 37, 99, 235;
  
  /* AI Light - AI backgrounds/highlights */
  --color-ai-light: #DBEAFE;
  --color-ai-light-rgb: 219, 234, 254;
  
  /* AI Dark - AI hover states */
  --color-ai-dark: #1E40AF;
  --color-ai-dark-rgb: 30, 64, 175;
}
```

#### Growth Theme Colors
```css
:root {
  /* Growth Primary - Success/growth indicators */
  --color-growth-primary: #059669;
  --color-growth-primary-rgb: 5, 150, 105;
  
  /* Growth Light - Success backgrounds */
  --color-growth-light: #D1FAE5;
  --color-growth-light-rgb: 209, 250, 229;
  
  /* Growth Dark - Success hover states */
  --color-growth-dark: #047857;
  --color-growth-dark-rgb: 4, 120, 87;
}
```

### Neutral Colors

#### Gray Scale
```css
:root {
  /* Gray 50 - Lightest backgrounds */
  --color-gray-50: #F9FAFB;
  --color-gray-50-rgb: 249, 250, 251;
  
  /* Gray 100 - Light backgrounds */
  --color-gray-100: #F3F4F6;
  --color-gray-100-rgb: 243, 244, 246;
  
  /* Gray 200 - Borders, dividers */
  --color-gray-200: #E5E7EB;
  --color-gray-200-rgb: 229, 231, 235;
  
  /* Gray 300 - Disabled states */
  --color-gray-300: #D1D5DB;
  --color-gray-300-rgb: 209, 213, 219;
  
  /* Gray 400 - Muted text */
  --color-gray-400: #9CA3AF;
  --color-gray-400-rgb: 156, 163, 175;
  
  /* Gray 500 - Secondary text */
  --color-gray-500: #6B7280;
  --color-gray-500-rgb: 107, 114, 128;
  
  /* Gray 600 - Body text */
  --color-gray-600: #4B5563;
  --color-gray-600-rgb: 75, 85, 99;
  
  /* Gray 700 - Headings */
  --color-gray-700: #374151;
  --color-gray-700-rgb: 55, 65, 81;
  
  /* Gray 800 - Dark text */
  --color-gray-800: #1F2937;
  --color-gray-800-rgb: 31, 41, 55;
  
  /* Gray 900 - Darkest text */
  --color-gray-900: #111827;
  --color-gray-900-rgb: 17, 24, 39;
}
```

### Semantic Colors

#### Status Colors
```css
:root {
  /* Success */
  --color-success: #10B981;
  --color-success-rgb: 16, 185, 129;
  --color-success-light: #D1FAE5;
  --color-success-dark: #047857;
  
  /* Warning */
  --color-warning: #F59E0B;
  --color-warning-rgb: 245, 158, 11;
  --color-warning-light: #FEF3C7;
  --color-warning-dark: #D97706;
  
  /* Error */
  --color-error: #EF4444;
  --color-error-rgb: 239, 68, 68;
  --color-error-light: #FEE2E2;
  --color-error-dark: #DC2626;
  
  /* Info */
  --color-info: #3B82F6;
  --color-info-rgb: 59, 130, 246;
  --color-info-light: #DBEAFE;
  --color-info-dark: #2563EB;
}
```

### Functional Color Tokens

#### Text Colors
```css
:root {
  /* Primary text - Main content */
  --color-text-primary: var(--color-brand-dark);
  
  /* Secondary text - Supporting content */
  --color-text-secondary: var(--color-gray-600);
  
  /* Muted text - Captions, metadata */
  --color-text-muted: var(--color-gray-400);
  
  /* Inverse text - Text on dark backgrounds */
  --color-text-inverse: #FFFFFF;
  
  /* Link text - Interactive text */
  --color-text-link: var(--color-ai-primary);
  --color-text-link-hover: var(--color-ai-dark);
}
```

#### Background Colors
```css
:root {
  /* Primary background - Main page background */
  --color-bg-primary: #FFFFFF;
  
  /* Secondary background - Cards, sections */
  --color-bg-secondary: var(--color-gray-50);
  
  /* Tertiary background - Subtle highlights */
  --color-bg-tertiary: var(--color-gray-100);
  
  /* Brand background - Brand sections */
  --color-bg-brand: var(--color-brand-dark);
  
  /* AI background - AI-related sections */
  --color-bg-ai: var(--color-ai-light);
  
  /* Growth background - Success sections */
  --color-bg-growth: var(--color-growth-light);
}
```

#### Border Colors
```css
:root {
  /* Default border - Standard borders */
  --color-border-default: var(--color-gray-200);
  
  /* Subtle border - Very light borders */
  --color-border-subtle: var(--color-gray-100);
  
  /* Strong border - Emphasized borders */
  --color-border-strong: var(--color-gray-300);
  
  /* Brand border - Brand-colored borders */
  --color-border-brand: var(--color-brand-dark);
  
  /* Focus border - Focus states */
  --color-border-focus: var(--color-ai-primary);
}
```

---

## Typography Tokens

### Font Families
```css
:root {
  /* Primary font - Inter for all text */
  --font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  
  /* Monospace font - Code and technical content */
  --font-family-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
}
```

### Font Sizes
```css
:root {
  /* Font size scale */
  --font-size-xs: 0.75rem;    /* 12px */
  --font-size-sm: 0.875rem;   /* 14px */
  --font-size-base: 1rem;     /* 16px */
  --font-size-lg: 1.125rem;   /* 18px */
  --font-size-xl: 1.25rem;    /* 20px */
  --font-size-2xl: 1.5rem;    /* 24px */
  --font-size-3xl: 1.875rem;  /* 30px */
  --font-size-4xl: 2.25rem;   /* 36px */
  --font-size-5xl: 3rem;      /* 48px */
  --font-size-6xl: 3.75rem;   /* 60px */
  
  /* Semantic font sizes */
  --font-size-hero: var(--font-size-5xl);
  --font-size-section: var(--font-size-4xl);
  --font-size-subsection: var(--font-size-2xl);
  --font-size-component: var(--font-size-xl);
  --font-size-body: var(--font-size-base);
  --font-size-caption: var(--font-size-sm);
}
```

### Font Weights
```css
:root {
  /* Font weight scale */
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --font-weight-extrabold: 800;
  
  /* Semantic font weights */
  --font-weight-heading: var(--font-weight-semibold);
  --font-weight-subheading: var(--font-weight-medium);
  --font-weight-body: var(--font-weight-normal);
  --font-weight-emphasis: var(--font-weight-medium);
}
```

### Line Heights
```css
:root {
  /* Line height scale */
  --line-height-tight: 1.2;
  --line-height-snug: 1.3;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.5;
  --line-height-loose: 1.6;
  
  /* Semantic line heights */
  --line-height-heading: var(--line-height-tight);
  --line-height-subheading: var(--line-height-snug);
  --line-height-body: var(--line-height-relaxed);
  --line-height-caption: var(--line-height-normal);
}
```

### Letter Spacing
```css
:root {
  /* Letter spacing scale */
  --letter-spacing-tight: -0.025em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.025em;
  --letter-spacing-wider: 0.05em;
  
  /* Semantic letter spacing */
  --letter-spacing-heading: var(--letter-spacing-tight);
  --letter-spacing-body: var(--letter-spacing-normal);
  --letter-spacing-button: var(--letter-spacing-wide);
}
```

---

## Spacing Tokens

### Base Spacing Scale
```css
:root {
  /* Base spacing unit - 4px */
  --space-unit: 0.25rem;
  
  /* Spacing scale based on 4px unit */
  --space-0: 0;
  --space-1: calc(var(--space-unit) * 1);  /* 4px */
  --space-2: calc(var(--space-unit) * 2);  /* 8px */
  --space-3: calc(var(--space-unit) * 3);  /* 12px */
  --space-4: calc(var(--space-unit) * 4);  /* 16px */
  --space-5: calc(var(--space-unit) * 5);  /* 20px */
  --space-6: calc(var(--space-unit) * 6);  /* 24px */
  --space-8: calc(var(--space-unit) * 8);  /* 32px */
  --space-10: calc(var(--space-unit) * 10); /* 40px */
  --space-12: calc(var(--space-unit) * 12); /* 48px */
  --space-16: calc(var(--space-unit) * 16); /* 64px */
  --space-20: calc(var(--space-unit) * 20); /* 80px */
  --space-24: calc(var(--space-unit) * 24); /* 96px */
  --space-32: calc(var(--space-unit) * 32); /* 128px */
}
```

### Semantic Spacing
```css
:root {
  /* Component spacing */
  --space-component-xs: var(--space-2);   /* 8px */
  --space-component-sm: var(--space-3);   /* 12px */
  --space-component-md: var(--space-4);   /* 16px */
  --space-component-lg: var(--space-6);   /* 24px */
  --space-component-xl: var(--space-8);   /* 32px */
  
  /* Layout spacing */
  --space-layout-xs: var(--space-4);      /* 16px */
  --space-layout-sm: var(--space-6);      /* 24px */
  --space-layout-md: var(--space-12);     /* 48px */
  --space-layout-lg: var(--space-16);     /* 64px */
  --space-layout-xl: var(--space-24);     /* 96px */
  
  /* Section spacing */
  --space-section-sm: var(--space-16);    /* 64px */
  --space-section-md: var(--space-20);    /* 80px */
  --space-section-lg: var(--space-24);    /* 96px */
  --space-section-xl: var(--space-32);    /* 128px */
}
```

---

## Border Radius Tokens

### Border Radius Scale
```css
:root {
  /* Border radius scale */
  --radius-none: 0;
  --radius-sm: 0.125rem;    /* 2px */
  --radius-md: 0.375rem;    /* 6px */
  --radius-lg: 0.5rem;      /* 8px */
  --radius-xl: 0.75rem;     /* 12px */
  --radius-2xl: 1rem;       /* 16px */
  --radius-3xl: 1.5rem;     /* 24px */
  --radius-full: 9999px;    /* Full rounded */
  
  /* Semantic border radius */
  --radius-button: var(--radius-lg);
  --radius-card: var(--radius-xl);
  --radius-input: var(--radius-md);
  --radius-badge: var(--radius-full);
}
```

---

## Shadow Tokens

### Box Shadow Scale
```css
:root {
  /* Shadow scale */
  --shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* Semantic shadows */
  --shadow-card: var(--shadow-md);
  --shadow-card-hover: var(--shadow-lg);
  --shadow-button: var(--shadow-sm);
  --shadow-button-hover: var(--shadow-md);
  --shadow-dropdown: var(--shadow-lg);
  --shadow-modal: var(--shadow-2xl);
}
```

### Focus Shadows
```css
:root {
  /* Focus shadows for accessibility */
  --shadow-focus: 0 0 0 3px rgb(var(--color-ai-primary-rgb) / 0.1);
  --shadow-focus-error: 0 0 0 3px rgb(var(--color-error-rgb) / 0.1);
  --shadow-focus-success: 0 0 0 3px rgb(var(--color-success-rgb) / 0.1);
}
```

---

## Animation Tokens

### Transition Duration
```css
:root {
  /* Duration scale */
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
  
  /* Semantic durations */
  --duration-button: var(--duration-fast);
  --duration-card: var(--duration-normal);
  --duration-modal: var(--duration-slow);
  --duration-page: var(--duration-slower);
}
```

### Transition Timing
```css
:root {
  /* Easing functions */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Semantic easing */
  --ease-button: var(--ease-out);
  --ease-card: var(--ease-in-out);
  --ease-modal: var(--ease-out);
}
```

---

## Breakpoint Tokens

### Screen Sizes
```css
:root {
  /* Breakpoint scale */
  --screen-xs: 375px;
  --screen-sm: 640px;
  --screen-md: 768px;
  --screen-lg: 1024px;
  --screen-xl: 1280px;
  --screen-2xl: 1536px;
  
  /* Container max widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1400px;
}
```

---

## Z-Index Tokens

### Layer Scale
```css
:root {
  /* Z-index scale */
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

---

## Usage Guidelines

### Token Naming Convention

#### Structure
`--{category}-{property}-{variant}`

#### Examples
- `--color-text-primary` (color category, text property, primary variant)
- `--space-component-md` (space category, component property, medium variant)
- `--font-size-hero` (font category, size property, hero variant)

### Implementation Priority

#### Level 1: Core Tokens (Use First)
- Color: brand, gray, semantic colors
- Typography: font sizes, weights, line heights
- Spacing: component and layout spacing
- Border radius: button, card, input radius

#### Level 2: Extended Tokens (Use When Needed)
- Shadows: card, button, focus shadows
- Animation: durations and easing
- Breakpoints: responsive design
- Z-index: layering components

#### Level 3: Specialized Tokens (Use Sparingly)
- Theme-specific colors (AI, Growth)
- Advanced animations
- Complex shadows
- Custom breakpoints

### Best Practices

#### Do's
✅ Use semantic tokens over raw values  
✅ Maintain consistent token naming  
✅ Document token usage and purpose  
✅ Test tokens across different contexts  
✅ Update tokens systematically  

#### Don'ts
❌ Don't create tokens for one-off values  
❌ Don't use raw values when tokens exist  
❌ Don't modify token values without system-wide consideration  
❌ Don't create conflicting or duplicate tokens  
❌ Don't ignore accessibility requirements  

This design token system provides the foundation for consistent, scalable, and maintainable design implementation across all Mindscraft digital products.