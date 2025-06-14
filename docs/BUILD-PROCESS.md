# Build Process Documentation

## Overview

This document explains the automated build process for the Mindscraft.dev project. The build process has been configured to run several steps automatically in the correct order.

## Automated Build Steps

When you run `npm run build`, the following steps are executed automatically in this order:

1. **Prebuild**: Runs the Prisma setup script
   - Generates the Prisma client
   - Runs migrations if the database doesn't exist
   - Seeds the database with initial data

2. **Build**: Runs the Next.js build process
   - Compiles the application
   - Optimizes assets
   - Generates static pages where possible

3. **Postbuild**: Generates the sitemap
   - Creates a sitemap.xml file for search engines

## How to Use

Simply run:

```bash
npm run build
```

All the steps will be executed automatically in the correct order.

## Manual Execution

If you need to run any of these steps manually:

- Prisma setup: `npm run prisma:setup`
- Next.js build: `next build`
- Generate sitemap: `npm run sitemap`

## Troubleshooting

If you encounter any issues during the build process:

1. **Prisma Errors**: 
   - Check the [Prisma Setup Guide](./PRISMA-SETUP.md)
   - Ensure your database is properly configured

2. **Build Errors**:
   - Check for TypeScript errors
   - Ensure all dependencies are installed correctly

3. **Sitemap Generation Errors**:
   - Check that the scripts/generate-sitemap.js file exists
   - Ensure the file has the correct permissions
