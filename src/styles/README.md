# CSS Organization Structure

This document outlines the CSS file organization for the MindsCraft project.

## Directory Structure

```
src/styles/
├── foundation/          # Core design system
│   ├── index.css       # Imports all foundation styles
│   ├── variables.css   # CSS variables and design tokens
│   ├── typography.css  # Typography system
│   └── layout.css      # Layout utilities
│
├── utilities/          # Utility classes and helpers
│   ├── index.css       # Imports all utility styles
│   ├── button-system.css # Button component system
│   ├── animation.css   # Animation utilities
│   └── background.css  # Background utilities
│
├── components/         # Component-specific styles
│   ├── index.css       # Imports all component styles
│   ├── hero.css        # Hero component styles
│   ├── navigation.css  # Navigation component styles
│   ├── footer.css      # Footer component styles
│   ├── cards.css       # Card component styles
│   ├── forms.css       # Form component styles
│   ├── modals.css      # Modal component styles
│   └── grids.css       # Grid component styles
│
├── pages/              # Page-specific styles
│   ├── index.css       # Imports all page styles
│   ├── home.css        # Home page styles
│   ├── about.css       # About page styles
│   ├── services.css    # Services page styles
│   ├── work.css        # Work/Portfolio page styles
│   ├── contact.css     # Contact page styles
│   ├── blog.css        # Blog page styles
│   ├── design-system.css # Design system page styles
│   ├── privacy-policy.css # Privacy policy page styles
│   └── terms-and-conditions.css # Terms page styles
│
├── admin/              # Admin-specific styles
│   ├── index.css       # Imports all admin styles
│   └── admin.css       # Admin theme styles
│
├── globals.css         # Global styles and main entry point
└── README.md           # This file
```

## Import Order (in globals.css)

The styles are imported in the following order for proper cascade:

1. **Tailwind CSS** - Base framework
2. **Foundation** - Core design system (variables, typography, layout)
3. **Utilities** - Utility classes and helpers
4. **Components** - Reusable component styles
5. **Pages** - Page-specific styles
6. **Admin** - Admin theme styles

## Usage

### Importing Styles

All styles are automatically imported through `globals.css`. You don't need to import individual files unless you have a specific use case.

### Adding New Styles

#### For a New Component:
1. Create a new file in `src/styles/components/[component-name].css`
2. Add the import to `src/styles/components/index.css`

#### For a New Page:
1. Create a new file in `src/styles/pages/[page-name].css`
2. Add the import to `src/styles/pages/index.css`

#### For a New Utility:
1. Create a new file in `src/styles/utilities/[utility-name].css`
2. Add the import to `src/styles/utilities/index.css`

### Best Practices

1. **Use Semantic Class Names**: Prefix classes with their context (e.g., `.home-hero`, `.blog-card`)
2. **Leverage CSS Variables**: Use the design tokens defined in `foundation/variables.css`
3. **Keep Specificity Low**: Avoid deep nesting and overly specific selectors
4. **Component Isolation**: Component styles should be self-contained and reusable
5. **Page-Specific Overrides**: Use page-specific CSS files for unique page layouts
6. **Foundation First**: Define design tokens in foundation before using them

### CSS Variable Usage

Reference design tokens from `foundation/variables.css`:

```css
.my-component {
  color: rgb(var(--primary-500));
  padding: var(--space-4);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal) ease;
}
```

## Folder Purposes

### 📂 foundation/
Core design system files that define the visual language of your application. These should rarely change once established.

- **variables.css** - Design tokens (colors, spacing, typography scales, etc.)
- **typography.css** - Font definitions and typography system
- **layout.css** - Base layout utilities and grid systems

### 📂 utilities/
Reusable utility classes and helper styles that can be applied across the application.

- **button-system.css** - Button variants and styles
- **animation.css** - Animation utilities and keyframes
- **background.css** - Background utilities and patterns

### 📂 components/
Styles for reusable UI components. Each component should have its own file.

### 📂 pages/
Page-specific styles that are unique to individual pages and not reusable.

### 📂 admin/
Admin dashboard and backend-specific styles, separated from the main site.

## Benefits of This Structure

✅ **Clear Separation of Concerns** - Each folder has a specific, well-defined purpose  
✅ **Scalable** - Easy to add new files in the right place  
✅ **Maintainable** - Developers know exactly where to find and add styles  
✅ **Clean Root** - Only essential files (`globals.css` and `README.md`) in the root  
✅ **Modular** - Each file can be understood and modified independently  
✅ **Performance** - Can selectively import only needed styles in the future
