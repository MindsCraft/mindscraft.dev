# Prisma Setup Guide

## Overview

This guide explains how to set up and troubleshoot Prisma in this project. Prisma is used as the ORM (Object-Relational Mapping) tool to interact with the database.

## Quick Setup

The easiest way to set up Prisma is to run:

```bash
npm run prisma:setup
```

This script will:
1. Generate the Prisma client
2. Run migrations if the database doesn't exist
3. Seed the database with initial data

## Manual Setup

If you prefer to run the commands manually, you can:

1. Generate the Prisma client:
   ```bash
   npx prisma generate
   ```

2. Run migrations (if needed):
   ```bash
   npx prisma migrate dev --name init
   ```

3. Seed the database:
   ```bash
   npm run prisma:seed
   ```

## Database Seeding

The project uses a JavaScript ES module file (`seed.mjs`) for database seeding instead of TypeScript. This is because the project is configured to use ES modules (`"type": "module"` in package.json), and there can be issues with running TypeScript files directly in this environment.

To seed the database:

```bash
npm run prisma:seed
```

If you need to modify the seed data, edit the `prisma/seed.mjs` file. For more details on how we resolved issues with the seeding process, see the [Prisma Seed Notes](./PRISMA-SEED-NOTES.md).

## Troubleshooting

### Error: @prisma/client did not initialize yet

If you see this error:

```
Error: @prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.
```

This means that the Prisma client hasn't been generated. Run:

```bash
npm run prisma:setup
```

Or manually:

```bash
npx prisma generate
```

### Database Connection Issues

If you're having trouble connecting to the database:

1. Check that the database file exists at `prisma/dev.db`
2. Ensure your environment variables are set correctly
3. Try running migrations:
   ```bash
   npx prisma migrate dev
   ```

### Schema Changes

If you've made changes to the Prisma schema (`prisma/schema.prisma`):

1. Generate the client again:
   ```bash
   npx prisma generate
   ```

2. Run migrations to apply the changes:
   ```bash
   npx prisma migrate dev --name your_change_description
   ```

## Prisma Studio

You can use Prisma Studio to view and edit your database:

```bash
npx prisma studio
```

This will open a web interface at http://localhost:5555 where you can manage your data.

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [Next.js with Prisma Guide](https://www.prisma.io/nextjs)
