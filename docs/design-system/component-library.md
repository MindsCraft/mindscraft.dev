# Component Library Architecture

## Overview

The Mindscraft component library follows atomic design principles, organizing components into a hierarchical system that promotes reusability, consistency, and maintainability. All components are built with TypeScript, accessibility, and responsive design in mind.

---

## Component Architecture

### Atomic Design Structure

#### Atoms (Basic Building Blocks)
- **Button**: Primary, secondary, tertiary variants
- **Input**: Text, email, password, textarea
- **Label**: Form labels with required indicators
- **Icon**: SVG icon system with consistent sizing
- **Badge**: Status indicators and labels
- **Avatar**: User profile images with fallbacks
- **Spinner**: Loading indicators
- **Divider**: Section separators

#### Molecules (Simple Component Groups)
- **Form Field**: Input + Label + Error message
- **Search Box**: Input + Search icon + Clear button
- **Pagination**: Navigation controls for lists
- **Breadcrumb**: Navigation path indicators
- **Alert**: Status messages with icons
- **Card**: Content containers with headers/footers
- **Dropdown**: Select menus and option lists
- **Toggle**: Switch and checkbox components

#### Organisms (Complex Component Groups)
- **Header**: Site navigation with logo and menu
- **Footer**: Site footer with links and info
- **Hero Section**: Landing page hero components
- **Feature Grid**: Service/feature showcases
- **Testimonial**: Client feedback displays
- **Case Study Card**: Portfolio item previews
- **Contact Form**: Lead capture forms
- **Blog Post Card**: Article previews

#### Templates (Page Layouts)
- **Landing Page**: Homepage layout structure
- **Service Page**: Service detail page layout
- **Case Study**: Portfolio detail page layout
- **Blog Post**: Article page layout
- **Contact Page**: Contact form page layout

---

## Component Specifications

### Atoms

#### Button Component

**Variants:**
- **Primary**: Main call-to-action buttons
- **Secondary**: Supporting actions
- **Tertiary**: Subtle actions and links
- **Ghost**: Minimal styling for secondary actions

**Sizes:**
- **Small**: 32px height, 12px padding
- **Medium**: 40px height, 16px padding
- **Large**: 48px height, 20px padding

**States:**
- Default, Hover, Active, Focus, Disabled, Loading

**Props Interface:**
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}
```

**Usage Examples:**
```tsx
// Primary CTA button
<Button variant="primary" size="lg">
  Start Your AI Project
</Button>

// Secondary action with icon
<Button variant="secondary" icon={<ArrowRight />} iconPosition="right">
  Learn More
</Button>

// Loading state
<Button variant="primary" loading>
  Processing...
</Button>
```

#### Input Component

**Types:**
- **Text**: Standard text input
- **Email**: Email validation
- **Password**: Hidden text with toggle
- **Textarea**: Multi-line text input
- **Number**: Numeric input with validation

**States:**
- Default, Focus, Error, Disabled, Success

**Props Interface:**
```typescript
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'textarea' | 'number';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  success?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  onChange?: (value: string) => void;
  onBlur?: () => void;
  className?: string;
}
```

#### Icon Component

**Icon System:**
- **Heroicons**: Primary icon library
- **Lucide**: Secondary icon library
- **Custom**: Brand-specific icons

**Sizes:**
- **XS**: 12px (0.75rem)
- **SM**: 16px (1rem)
- **MD**: 20px (1.25rem)
- **LG**: 24px (1.5rem)
- **XL**: 32px (2rem)

**Props Interface:**
```typescript
interface IconProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}
```

### Molecules

#### Form Field Component

**Structure:**
- Label (with required indicator)
- Input component
- Helper text
- Error message

**Props Interface:**
```typescript
interface FormFieldProps {
  label: string;
  required?: boolean;
  helperText?: string;
  error?: string;
  children: ReactNode;
  className?: string;
}
```

**Usage Example:**
```tsx
<FormField 
  label="Email Address" 
  required 
  error={errors.email}
  helperText="We'll never share your email"
>
  <Input 
    type="email" 
    placeholder="your@email.com"
    value={email}
    onChange={setEmail}
  />
</FormField>
```

#### Card Component

**Variants:**
- **Default**: Standard card with border
- **Elevated**: Card with shadow
- **Outlined**: Card with border emphasis
- **Filled**: Card with background color

**Props Interface:**
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'sm' | 'md' | 'lg';
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
```

### Organisms

#### Header Component

**Features:**
- Responsive navigation
- Logo integration
- Mobile menu
- CTA button
- Active state indicators

**Props Interface:**
```typescript
interface HeaderProps {
  logo?: ReactNode;
  navigation: NavigationItem[];
  ctaButton?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  mobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  children?: NavigationItem[];
}
```

#### Hero Section Component

**Variants:**
- **Default**: Standard hero with text and CTA
- **With Image**: Hero with background image
- **With Video**: Hero with background video
- **Split**: Hero with text and image side-by-side

**Props Interface:**
```typescript
interface HeroProps {
  variant?: 'default' | 'image' | 'video' | 'split';
  headline: string;
  subheadline?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  backgroundVideo?: string;
  className?: string;
}
```

---

## Component Guidelines

### Design Principles

#### Consistency
- Use design tokens for all styling values
- Maintain consistent spacing and typography
- Follow established color and interaction patterns
- Ensure visual hierarchy is clear and predictable

#### Accessibility
- Include proper ARIA labels and roles
- Ensure keyboard navigation works correctly
- Maintain sufficient color contrast ratios
- Provide alternative text for images and icons
- Support screen readers with semantic markup

#### Responsiveness
- Design mobile-first with progressive enhancement
- Use flexible layouts that adapt to different screen sizes
- Ensure touch targets are minimum 44px on mobile
- Test components across all supported breakpoints

#### Performance
- Optimize bundle size with tree shaking
- Use lazy loading for non-critical components
- Minimize re-renders with proper memoization
- Optimize images and assets for web delivery

### Component Development Standards

#### TypeScript Requirements
```typescript
// All components must have proper TypeScript interfaces
interface ComponentProps {
  // Required props (no default values)
  children: ReactNode;
  
  // Optional props (with default values)
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  
  // Event handlers
  onClick?: (event: MouseEvent) => void;
  
  // Style customization
  className?: string;
  style?: CSSProperties;
}
```

#### Prop Validation
- Use TypeScript interfaces for all props
- Provide default values for optional props
- Validate prop combinations and constraints
- Include JSDoc comments for complex props

#### Styling Approach
- Use Tailwind CSS classes with design tokens
- Create component-specific CSS modules when needed
- Avoid inline styles except for dynamic values
- Use CSS custom properties for theming

#### Testing Requirements
- Unit tests for all component logic
- Accessibility tests with testing-library
- Visual regression tests for UI components
- Integration tests for complex interactions

### Component Documentation

#### Required Documentation
- **Purpose**: What the component does and when to use it
- **Props**: All available props with types and descriptions
- **Examples**: Common usage patterns and variations
- **Accessibility**: ARIA requirements and keyboard interactions
- **Design Tokens**: Which tokens the component uses

#### Documentation Template
```markdown
# Component Name

## Purpose
Brief description of what the component does and when to use it.

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Visual style variant |
| size | string | 'md' | Component size |

## Examples
```tsx
// Basic usage
<Component variant="primary">
  Content
</Component>

// Advanced usage
<Component 
  variant="secondary" 
  size="lg"
  onClick={handleClick}
>
  Content
</Component>
```

## Accessibility
- Keyboard navigation: Tab, Enter, Space
- ARIA labels: aria-label, aria-describedby
- Screen reader support: Proper semantic markup

## Design Tokens Used
- Colors: --color-brand-primary, --color-text-primary
- Spacing: --space-component-md, --space-component-lg
- Typography: --font-size-base, --font-weight-medium
```

---

## Implementation Roadmap

### Phase 1: Foundation Components (Week 1)
- [ ] Design token system implementation
- [ ] Button component with all variants
- [ ] Input component with validation
- [ ] Icon system integration
- [ ] Basic layout components (Container, Grid)

### Phase 2: Form Components (Week 1)
- [ ] Form Field wrapper component
- [ ] Select/Dropdown component
- [ ] Checkbox and Radio components
- [ ] Form validation system
- [ ] Contact form implementation

### Phase 3: Navigation Components (Week 2)
- [ ] Header component with responsive navigation
- [ ] Footer component with links
- [ ] Breadcrumb navigation
- [ ] Pagination component
- [ ] Mobile menu implementation

### Phase 4: Content Components (Week 2)
- [ ] Card component with variants
- [ ] Hero section component
- [ ] Feature grid component
- [ ] Testimonial component
- [ ] Case study card component

### Phase 5: Advanced Components (Week 3)
- [ ] Modal and dialog components
- [ ] Tooltip and popover components
- [ ] Alert and notification system
- [ ] Loading states and skeletons
- [ ] Data visualization components

### Phase 6: Page Templates (Week 3)
- [ ] Landing page template
- [ ] Service page template
- [ ] Case study page template
- [ ] Blog post template
- [ ] Contact page template

---

## Quality Assurance

### Component Checklist

#### Before Component Release
- [ ] TypeScript interfaces defined and documented
- [ ] All variants and states implemented
- [ ] Responsive design tested across breakpoints
- [ ] Accessibility requirements met (WCAG 2.1 AA)
- [ ] Unit tests written and passing
- [ ] Visual regression tests passing
- [ ] Documentation complete with examples
- [ ] Design tokens used consistently
- [ ] Performance optimized (bundle size, rendering)
- [ ] Cross-browser compatibility verified

#### Accessibility Checklist
- [ ] Proper semantic HTML structure
- [ ] ARIA labels and roles where needed
- [ ] Keyboard navigation support
- [ ] Focus management and indicators
- [ ] Color contrast ratios meet WCAG standards
- [ ] Screen reader compatibility tested
- [ ] Alternative text for images and icons
- [ ] Form labels and error messages accessible

#### Performance Checklist
- [ ] Component bundle size optimized
- [ ] Unnecessary re-renders prevented
- [ ] Images and assets optimized
- [ ] Lazy loading implemented where appropriate
- [ ] Tree shaking compatible
- [ ] No memory leaks in event handlers
- [ ] Efficient CSS selectors used

This component library architecture provides a solid foundation for building consistent, accessible, and maintainable UI components that align with the Mindscraft brand and user experience goals.