# Project Structure

## Root Directory
- **Configuration Files**: `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`
- **Environment**: `.env*` files for different environments (local, production)
- **Database**: `prisma/` directory with schema, migrations, and seed data
- **Documentation**: `docs/` folder with setup guides and deployment info
- **Scripts**: `scripts/` folder with utility scripts for setup and generation

## Source Code Organization (`src/`)

### Application Structure (`src/app/`)
Uses Next.js App Router with file-based routing:
- **Pages**: `about/`, `blog/`, `contact/`, `services/`, `work/`, `privacy-policy/`, `terms-and-conditions/`
- **Admin Section**: `admin/` with protected dashboard routes
- **API Routes**: `api/` for server-side endpoints
- **Home**: `home/` directory for landing page components
- **Root Files**: `layout.tsx`, `page.tsx`, `not-found.tsx`

### Component Architecture (`src/components/`)
- **Admin Components**: `admin/` - Dashboard, forms, and management interfaces
- **Analytics**: `analytics/` - Tracking and measurement components
- **Blog Components**: `blog/` - Post display, listing, and management
- **Layout Components**: `layout/` - Header, footer, navigation
- **UI Components**: `ui/` - Reusable design system components
- **Providers**: `providers.tsx`, `theme-context.tsx` for app-wide state

### Core Libraries (`src/lib/`)
- **Authentication**: `auth.ts` - NextAuth configuration
- **Database**: `prisma.ts` - Prisma client setup
- **Analytics**: `analytics.ts` - Tracking utilities
- **Utilities**: `utils.ts` - Common helper functions

### Data & Types (`src/data/`, `src/types/`)
- **Static Data**: `workData.ts` - Portfolio project information
- **Type Definitions**: TypeScript interfaces for work items, auth, and gtag
- **Global Types**: `next-auth.d.ts`, `gtag.d.ts`

### Styling (`src/styles/`)
- **Global Styles**: `globals.css` - Base styles and Tailwind imports
- **Admin Styles**: `admin.css` - Dashboard-specific styling

### Utilities (`src/utils/`)
- **Analytics**: `gtag.ts` - Google Analytics integration

## Database Structure (`prisma/`)
- **Schema**: `schema.prisma` - Database models and relationships
- **Migrations**: `migrations/` - Database version control
- **Seed Data**: `seed.mjs` - Initial data population
- **Database File**: `dev.db` - SQLite database (development)

## Public Assets (`public/`)
- **Images**: Logo, hero screenshots, demo videos
- **Icons**: Favicons and app icons
- **SEO Files**: `robots.txt`, `sitemap.xml`, `site.webmanifest`

## Scripts (`scripts/`)
- **Database Setup**: `setup-prisma.js`, `setup-prisma-safe.js`
- **Admin Creation**: `create-admin.js`, `create-admin.ts`
- **Asset Generation**: `generate-icons.js`, `generate-sitemap.js`

## Key Conventions
- **Path Aliases**: Use `@/` for imports from `src/`
- **File Naming**: kebab-case for directories, camelCase for TypeScript files
- **Component Structure**: Separate UI components from business logic
- **API Routes**: RESTful structure under `src/app/api/`
- **Environment Variables**: Prefix public vars with `NEXT_PUBLIC_`
- **Database Models**: PascalCase with descriptive relationships
- **Styling**: Tailwind classes with custom animations defined in config