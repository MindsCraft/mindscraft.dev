  # Mindscraft Logo System

This document outlines the comprehensive logo system for Mindscraft.dev, including all variations, usage guidelines, and implementation details.

## Logo Files Structure

### Main Logo Variations

#### Full Logo (Icon + Text)
- **Dark Version**: `/public/images/logo-full.svg` (1439×275px)
- **Light Version**: `/public/images/logo-full-light.svg` (1439×275px)
- **Usage**: Primary logo for headers, main branding

#### Icon Only
- **Dark Version**: `/public/images/logo-icon.svg` (275×275px)
- **Light Version**: `/public/images/logo-icon-light.svg` (275×275px)
- **Usage**: Favicons, app icons, social media profiles

#### Text Only
- **File**: `/public/images/logo-text.svg` (1164×275px)
- **Usage**: When icon space is limited, text-heavy layouts

#### Horizontal Layout
- **File**: `/public/images/logo-horizontal.svg` (600×115px)
- **Usage**: Navigation bars, compact layouts

### Favicon Variations
- **Standard Favicon**: `/public/icons/favicon.svg` (32×32px)
- **Small Icon**: `/public/icons/icon-16x16.svg` (16×16px)

## Color Specifications

### Dark Theme (Default)
- **Background**: `#101828` (Dark slate)
- **Icon Pattern**: `#F3F4C0` (Light yellow-green)
- **Text**: `#101828` (Dark slate)

### Light Theme
- **Background**: `#FFFFFF` (White)
- **Icon Pattern**: `#101828` (Dark slate)
- **Text**: `#FFFFFF` (White)

## React Component Usage

### Basic Implementation

```tsx
import Logo from '@/components/ui/Logo';

// Default usage (full logo, dark theme, medium size)
<Logo />

// Icon only, large size
<Logo variant="icon" size="lg" />

// Light theme for dark backgrounds
<Logo theme="light" />

// Custom dimensions
<Logo width={200} height={50} />

// With custom classes
<Logo className="hover:opacity-80 transition-opacity" />
```

### Available Props

| Prop        | Type                                         | Default     | Description                                   |
| ----------- | -------------------------------------------- | ----------- | --------------------------------------------- |
| `variant`   | `'full' \| 'icon' \| 'text' \| 'horizontal'` | `'full'`    | Logo variation to display                     |
| `theme`     | `'dark' \| 'light'`                          | `'dark'`    | Color theme                                   |
| `size`      | `'sm' \| 'md' \| 'lg' \| 'xl'`               | `'md'`      | Predefined size (ignored if width/height set) |
| `width`     | `number`                                     | `undefined` | Custom width in pixels                        |
| `height`    | `number`                                     | `undefined` | Custom height in pixels                       |
| `className` | `string`                                     | `''`        | Additional CSS classes                        |

### Size Reference

| Size | Height      |
| ---- | ----------- |
| `sm` | 32px (2rem) |
| `md` | 48px (3rem) |
| `lg` | 64px (4rem) |
| `xl` | 96px (6rem) |

## Usage Guidelines

### When to Use Each Variation

#### Full Logo
- **Primary branding locations**
- Website headers
- Marketing materials
- Business cards
- Email signatures

#### Icon Only
- **Space-constrained areas**
- Favicons
- App icons
- Social media profile pictures
- Loading screens
- Mobile navigation

#### Text Only
- **Text-heavy layouts**
- Footer credits
- Watermarks
- When icon context is already established

#### Horizontal Layout
- **Compact horizontal spaces**
- Navigation bars
- Sidebar headers
- Banner advertisements

### Theme Selection

#### Dark Theme (Default)
- Light backgrounds
- White or light-colored surfaces
- Most web pages
- Print materials on white paper

#### Light Theme
- Dark backgrounds
- Dark hero sections
- Dark mode interfaces
- High contrast scenarios

## Implementation Examples

### Header Navigation
```tsx
// Main site header
<header className="bg-white border-b">
  <Logo variant="horizontal" size="md" />
</header>

// Dark hero section
<section className="bg-gray-900">
  <Logo variant="full" theme="light" size="lg" />
</section>
```

### Favicon Setup
```html
<!-- In your HTML head -->
<link rel="icon" type="image/svg+xml" href="/icons/favicon.svg">
<link rel="icon" type="image/svg+xml" sizes="16x16" href="/icons/icon-16x16.svg">
```

### Loading States
```tsx
// Loading spinner with icon
<div className="flex items-center justify-center">
  <Logo variant="icon" size="lg" className="animate-pulse" />
</div>
```

## File Optimization

All SVG files are optimized for:
- **Small file sizes**: Minimal code, no unnecessary elements
- **Scalability**: Vector-based, crisp at any size
- **Performance**: Optimized paths and reduced complexity
- **Accessibility**: Proper alt text and semantic structure

## Brand Consistency

### Do's
✅ Use the provided logo files without modification  
✅ Maintain proper spacing around the logo  
✅ Use appropriate theme for background contrast  
✅ Scale proportionally  
✅ Use the React component for consistent implementation  

### Don'ts
❌ Don't modify colors, proportions, or elements  
❌ Don't use low-resolution versions  
❌ Don't place on backgrounds with poor contrast  
❌ Don't stretch or distort the logo  
❌ Don't add effects, shadows, or outlines  

## Technical Notes

- All logos are SVG format for maximum scalability
- React component handles responsive sizing automatically
- Files are optimized for web performance
- Color values use consistent brand palette
- Proper semantic markup for accessibility

## Future Enhancements

Potential additions to the logo system:
- Animated versions for loading states
- Monochrome variations
- Additional size variations
- Brand mark variations
- Social media specific formats