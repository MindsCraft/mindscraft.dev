# Environment Variables in Next.js

This document explains how environment variables work in this Next.js project and what should be included in your `.env` and `.env.local` files.

## Environment Files

Next.js supports several types of environment files:

1. `.env`: Default environment variables for all environments
2. `.env.local`: Local environment variables that override the defaults (not committed to git)
3. `.env.development`: Environment variables for development environment
4. `.env.production`: Environment variables for production environment

For production deployment, we've provided an `.env.production.example` file that you can use as a template. Copy this file to `.env.production` and update the values with your production configuration.

## What to Include in Each File

### `.env`

The `.env` file should contain default values that are safe to commit to your repository. These are typically:

- Public environment variables (prefixed with `NEXT_PUBLIC_`) with default values
- Non-sensitive configuration that's the same across all environments
- Placeholder values for required variables

Example `.env` file:
```
# Public variables (accessible in the browser)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# NextAuth configuration (placeholder values)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=placeholder-secret-do-not-use-in-production
```

### `.env.local`

The `.env.local` file should contain:

- Sensitive information like API keys and secrets
- Environment-specific configuration
- Overrides for the default values in `.env`

This file should **not** be committed to your repository.

Example `.env.local` file:
```
# Override public variables with real values
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-YVGX6Q8GXE
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Real NextAuth configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=e8f5a9b3c7d1e2f4a6b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1

# Database configuration (if needed)
# DATABASE_URL=postgresql://username:password@localhost:5432/mydb
```

## Required Environment Variables

This project requires the following environment variables:

1. `NEXT_PUBLIC_GA_MEASUREMENT_ID`: Google Analytics Measurement ID
2. `NEXT_PUBLIC_SITE_URL`: The base URL of your site
3. `NEXTAUTH_URL`: The URL for NextAuth authentication
4. `NEXTAUTH_SECRET`: A secret key for NextAuth authentication

## Getting Started

1. Copy the `.env.example` file to create your own `.env` and `.env.local` files
2. Update the values in `.env.local` with your actual configuration
3. Make sure not to commit `.env.local` to your repository (it should be in `.gitignore`)

## Production Environment Variables

When deploying to production, you'll need to set up environment variables for your production environment:

1. Copy the `.env.production.example` file to create a `.env.production` file
2. Update the values with your production configuration
3. For hosting providers like Vercel or Netlify, set these variables in their dashboard instead

Important production variables to set:

- `NEXT_PUBLIC_SITE_URL`: Set this to your production domain (e.g., https://mindscraft.dev)
- `NEXTAUTH_URL`: Set this to the same value as NEXT_PUBLIC_SITE_URL
- `NEXTAUTH_SECRET`: Generate a new secure random string for production
- `DATABASE_URL`: If you're using a production database, set this to your database connection string

For more detailed information about deploying to production, see the [Deployment Guide](./docs/DEPLOYMENT.md).

## Notes on Environment Variables in Next.js

- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- Other variables are only available on the server side
- Environment variables are available at build time, not runtime
- Changes to environment variables require a server restart
