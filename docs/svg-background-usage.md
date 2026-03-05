# SVG Background Component - Usage Guide

## Overview

The `SvgBackground` component allows you to add custom SVG backgrounds to any section of your website.

## Basic Usage

```tsx
import SvgBackground from '@/components/ui/SvgBackground';

// Use default SVG
<div className="relative">
  <SvgBackground />
  <div className="relative z-10">
    {/* Your content here */}
  </div>
</div>
```

## Custom SVG

Replace the default SVG with your own:

```tsx
<SvgBackground>
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 800"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Your custom SVG content */}
    <rect width="1440" height="800" fill="#fdff8e" opacity="0.2" />
    <circle cx="720" cy="400" r="200" fill="rgba(0,0,0,0.05)" />
  </svg>
</SvgBackground>
```

## Props

- `children`: Custom SVG content (optional)
- `backgroundColor`: Background color (default: 'transparent')
- `opacity`: Opacity of the SVG (default: 1)
- `zIndex`: Z-index value (default: -1)

## Example: Yellow Gradient Background

```tsx
<SvgBackground backgroundColor="#fdff8e" opacity={0.3}>
  <svg
    className="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 800"
  >
    <defs>
      <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#fdff8e" stopOpacity="1" />
        <stop offset="100%" stopColor="#f9fafb" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="1440" height="800" fill="url(#yellowGrad)" />
  </svg>
</SvgBackground>
```

## Editing the Component

To permanently change the default SVG:

1. Open `src/components/ui/SvgBackground.tsx`
2. Find the default SVG (lines 40-70)
3. Replace with your custom SVG design
4. Save the file

## Tips

- Keep SVG files optimized for performance
- Use `preserveAspectRatio="xMidYMid slice"` for full coverage
- Set appropriate viewBox dimensions
- Use opacity for subtle backgrounds
- Layer multiple SVGs for complex designs
