# Technology Stack

## Core Framework & Runtime
- **Next.js 15.0.0**: React framework with App Router, static export capability
- **React 19.0.0**: UI library with latest features
- **TypeScript 5**: Type-safe development with strict mode enabled
- **Node.js 18.x+**: Runtime environment

## Database & ORM
- **Prisma 6.9.0**: Database ORM with SQLite for development
- **SQLite**: File-based database (dev.db) - consider PostgreSQL/MySQL for production
- **Database Models**: User, Post, Project with role-based access control

## Styling & UI
- **Tailwind CSS 4.1.7**: Utility-first CSS framework with custom animations
- **Tailwind Typography**: Enhanced typography plugin
- **Framer Motion 12.15.0**: Animation library for smooth interactions
- **Custom Animations**: Float, fade-in, scale-in, pulse-slow effects

## Authentication & Security
- **NextAuth.js 4.24.11**: Authentication with role-based access (USER/ADMIN/EDITOR)
- **bcryptjs**: Password hashing
- **Zod 3.25.67**: Schema validation and type safety

## Form Handling & Validation
- **React Hook Form 7.58.1**: Form state management
- **Hookform Resolvers**: Integration with validation libraries

## Icons & Assets
- **Heroicons 2.2.0**: SVG icon library
- **Lucide React 0.511.0**: Additional icon set
- **React Icons 5.5.0**: Popular icon library

## Development Tools
- **ESLint**: Code linting with Next.js configuration
- **PostCSS**: CSS processing
- **Canvas 3.1.0**: Server-side image generation

## Common Commands

### Development
```bash
npm run dev                 # Start development server
npm run lint               # Run ESLint
```

### Database Operations
```bash
npm run prisma:setup      # Full Prisma setup (migrations + seed)
npm run prisma:setup:safe # Safe setup script
npm run prisma:seed       # Seed database with initial data
```

### Build & Deployment
```bash
npm run build             # Full build process (includes Prisma setup + sitemap)
npm run build:no-prisma   # Build without Prisma setup
npm run start             # Start production server
npm run sitemap           # Generate sitemap.xml
```

### Dependency Management
```bash
npm run install:legacy    # Install with --legacy-peer-deps flag
```

## Configuration Notes
- **Static Export**: Configured with `output: 'export'` for static hosting
- **Path Aliases**: `@/*` maps to `./src/*`
- **Image Optimization**: Disabled for static export compatibility
- **Dependency Conflicts**: Use legacy peer deps for next-auth compatibility