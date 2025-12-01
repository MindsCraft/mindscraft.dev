# PageHeader Component

A reusable, animated page header component that matches the MindsCraft design system with navy/cream colors, Altone typography, and modern aesthetics.

## Features

- ✨ **Three Variants**: Gradient, Solid (Navy), and Minimal
- 🎨 **Design System Integration**: Uses navy/cream color palette and Altone typography
- 🎭 **Smooth Animations**: Framer Motion powered animations with staggered children
- 🧭 **Breadcrumb Support**: Optional breadcrumb navigation
- 🏷️ **Badge Support**: Optional status badges (e.g., "New", "Beta")
- 🔘 **CTA Button**: Optional call-to-action button with primary/secondary variants
- 📐 **Flexible Alignment**: Center or left-aligned content
- 🎪 **Decorative Elements**: Floating blobs and grid patterns for gradient variant

## Usage

### Basic Example

```tsx
import PageHeader from '@/components/ui/PageHeader';

export default function MyPage() {
  return (
    <PageHeader
      title="Page Title"
      description="A brief description of what this page is about"
    />
  );
}
```

### Gradient Variant (Default)

```tsx
<PageHeader
  title="Our Services"
  description="Comprehensive web development and UX design solutions tailored to your needs"
  variant="gradient"
  align="center"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Services' }
  ]}
  cta={{
    text: 'Get Started',
    href: '/contact',
    variant: 'primary'
  }}
/>
```

### Solid Variant (Navy Background)

```tsx
<PageHeader
  title="About Mindscraft"
  description="We're a team of passionate designers, developers, and AI experts"
  variant="solid"
  align="center"
  cta={{
    text: 'Join Our Team',
    href: '/contact',
    variant: 'secondary' // White button on navy background
  }}
/>
```

### Minimal Variant

```tsx
<PageHeader
  title="Blog"
  description="Insights and updates from our team"
  variant="minimal"
  align="left"
  badge="Updated Weekly"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | **Required** | Main page title |
| `description` | `string` | `undefined` | Subtitle or description text |
| `badge` | `string` | `undefined` | Optional badge text (e.g., "New", "Beta") |
| `cta` | `object` | `undefined` | Call-to-action button configuration |
| `cta.text` | `string` | - | Button text |
| `cta.href` | `string` | - | Button link |
| `cta.variant` | `'primary' \| 'secondary'` | `'primary'` | Button style variant |
| `variant` | `'gradient' \| 'solid' \| 'minimal'` | `'gradient'` | Background style variant |
| `align` | `'left' \| 'center'` | `'center'` | Content alignment |
| `breadcrumbs` | `Array<{label: string, href?: string}>` | `undefined` | Breadcrumb navigation items |

## Variants

### Gradient
- Soft gradient background from navy-50 to cream-100
- Floating animated blobs for visual interest
- Grid pattern overlay
- Best for: Landing pages, main service pages

### Solid
- Navy-900 background with white text
- Clean, professional look
- Cream-colored accents
- Best for: About pages, team pages, formal content

### Minimal
- White background with bottom border
- Clean and simple
- No decorative elements
- Best for: Blog pages, documentation, content-heavy pages

## Design System Integration

The PageHeader component uses:

- **Colors**: Navy palette (primary-*) and Cream palette (accent-*)
- **Typography**: Altone font family with proper font weights
- **Spacing**: Design system spacing variables
- **Animations**: Consistent with site-wide animation patterns
- **Shadows**: Design system shadow utilities

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- ARIA labels for breadcrumb navigation
- Keyboard accessible buttons and links
- Reduced motion support (respects `prefers-reduced-motion`)

## Examples in Use

### Services Page
```tsx
// src/app/services/ServicesContent.tsx
<PageHeader
  title="Our Services"
  description="Comprehensive web development and UX design solutions"
  variant="gradient"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Services' }
  ]}
  cta={{
    text: 'Get Started',
    href: '/contact',
    variant: 'primary'
  }}
/>
```

### About Page
```tsx
// src/app/about/AboutContent.tsx
<PageHeader
  title="About Mindscraft"
  description="We're a team of passionate designers and developers"
  variant="solid"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'About' }
  ]}
  cta={{
    text: 'Join Our Team',
    href: '/contact',
    variant: 'secondary'
  }}
/>
```

## Customization

The component is built with Tailwind CSS classes and can be easily customized by:

1. **Modifying variants**: Edit the `getBackgroundClasses()` function
2. **Adding new variants**: Extend the `variant` prop type and add new cases
3. **Changing animations**: Adjust the `containerVariants` and `itemVariants` objects
4. **Styling elements**: Update Tailwind classes in the component

## Performance

- Uses Framer Motion's `viewport={{ once: true }}` to prevent re-animations
- Optimized animations with GPU-accelerated properties
- Lazy-loaded decorative elements
- Minimal re-renders with React best practices

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Respects user motion preferences

---

**Created**: 2025-12-01  
**Component Location**: `src/components/ui/PageHeader.tsx`  
**Design System**: MindsCraft Design System v1.0
