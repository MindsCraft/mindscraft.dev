# Deployment Guide for Mindscraft.dev

This guide explains how to deploy the Mindscraft.dev project to various hosting environments and what environment variables you need to configure.

## Environment Variables for Production

When deploying to production, you'll need to set up the following environment variables:

### Required Environment Variables

1. `NEXT_PUBLIC_SITE_URL`: The URL of your production site (e.g., https://mindscraft.dev)
2. `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Your Google Analytics Measurement ID
3. `NEXTAUTH_URL`: The URL of your production site (same as NEXT_PUBLIC_SITE_URL)
4. `NEXTAUTH_SECRET`: A secure random string for NextAuth authentication (generate a new one for production)

### How to Set Environment Variables

Different hosting providers have different ways to set environment variables:

#### Vercel
- Go to your project settings
- Navigate to the "Environment Variables" tab
- Add each variable and its value
- Deploy your project

#### Netlify
- Go to your site settings
- Navigate to "Build & deploy" > "Environment"
- Add each variable and its value
- Redeploy your site

#### Self-hosted
- Create a `.env.production` file with your production values
- Make sure this file is included in your deployment but not in your repository

## Database Setup for Production

The project currently uses SQLite with a file-based database, which is not ideal for production. Here are your options:

### Option 1: Continue Using SQLite (Not Recommended for High-Traffic Sites)

If you choose to continue using SQLite in production:

1. Make sure the `prisma/dev.db` file is included in your deployment
2. Ensure the server has write permissions to this file
3. Be aware that this approach doesn't scale well and may cause issues with concurrent access

### Option 2: Switch to a Production Database (Recommended)

For a more robust solution, switch to PostgreSQL, MySQL, or a managed database service:

1. Update the `prisma/schema.prisma` file to use a different provider:
   ```prisma
   datasource db {
     provider = "postgresql" // or "mysql"
     url      = env("DATABASE_URL")
   }
   ```

2. Add the `DATABASE_URL` environment variable to your production environment:
   ```
   DATABASE_URL="postgresql://username:password@hostname:port/database"
   ```

3. Run migrations on your production database:
   ```bash
   npx prisma migrate deploy
   ```

4. Seed your production database if needed:
   ```bash
   npm run prisma:seed
   ```

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

Vercel is the easiest platform for deploying Next.js applications:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import your repository in Vercel
3. Configure your environment variables
4. Deploy

Note: You'll need to modify the `next.config.ts` file to remove `output: 'export'` for API routes to work on Vercel:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the output: 'export' line for Vercel deployment
  trailingSlash: true,
  images: {
    domains: ['your-domain.com'], // Replace with your domain
  },
};

export default nextConfig;
```

### Option 2: Netlify

Netlify is another great option for static sites:

1. Push your code to a Git repository
2. Import your repository in Netlify
3. Configure your build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
4. Configure your environment variables
5. Deploy

### Option 3: Static Export (Any Static Hosting)

The project is configured for static export with `output: 'export'` in `next.config.ts`. This means you can deploy it to any static hosting service:

1. Build the project:
   ```bash
   npm run build
   ```

2. The output will be in the `out` directory
3. Upload the contents of the `out` directory to your hosting service

Note: With static export, server-side features like API routes and server components won't work. You'll need to adapt your application to be fully client-side or use external APIs.

## Build Process for Deployment

The build process is automated with npm scripts:

```bash
npm run build
```

This will:
1. Run the Prisma setup script (prebuild)
2. Build the Next.js application
3. Generate a sitemap (postbuild)

For more details on the build process, see the [Build Process Documentation](./BUILD-PROCESS.md).

## Continuous Deployment

For continuous deployment, configure your CI/CD pipeline to:

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Deploy the built files to your hosting provider

Most hosting providers (Vercel, Netlify, etc.) will handle this automatically when you push to your repository.

## Troubleshooting

### Database Connection Issues

If you're having trouble connecting to your database:

1. Check that your `DATABASE_URL` is correct
2. Ensure your database server is accessible from your hosting environment
3. Check for any firewall rules that might be blocking connections

### Build Failures

If your build is failing:

1. Check the build logs for specific errors
2. Ensure all dependencies are installed
3. Verify that your environment variables are set correctly

### Authentication Issues

If NextAuth is not working in production:

1. Verify that `NEXTAUTH_URL` is set to your production URL
2. Ensure `NEXTAUTH_SECRET` is set to a secure random string
3. Check that your database is properly configured for storing sessions
