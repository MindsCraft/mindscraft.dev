# Vercel Deployment & Database Setup Guide

Follow these steps to deploy your project to Vercel with a free PostgreSQL database.

## 1. Create a Vercel Project
1.  Go to [vercel.com](https://vercel.com) and log in.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your GitHub repository (`MindsCraft/mindscraft.dev`).
4.  **Do not deploy yet** (or let it fail, it's fine). We need to set up the database first.

## 2. Create a Vercel Postgres Database
1.  In your Vercel project dashboard, go to the **"Storage"** tab.
2.  Click **"Connect Store"**.
3.  Select **"Postgres"** -> **"Create New"**.
4.  Accept the terms and click **"Create"**.
5.  Select your region (choose the one closest to your users, e.g., `Washington, D.C. (iad1)`).
6.  Click **"Create"**.

## 3. Connect Database to Project
1.  Once created, Vercel will ask to connect it to your project. Click **"Connect"**.
2.  Vercel will automatically add the necessary environment variables (`POSTGRES_PRISMA_URL`, `POSTGRES_URL_NON_POOLING`, etc.) to your project's deployment settings.

## 4. Local Development Setup (Important!)
To run the project locally with the new database:
1.  In the Vercel Storage tab, find the **".env.local"** snippet.
2.  Copy the contents (it will contain `POSTGRES_PRISMA_URL`, etc.).
3.  Paste them into your local `.env` file, replacing the old `DATABASE_URL`.
4.  Run the migration to create the tables in the new DB:
    ```bash
    npx prisma db push
    ```

## 5. Deploy
1.  Push your changes to GitHub:
    ```bash
    git add .
    git commit -m "chore: configure for vercel postgres"
    git push
    ```
2.  Vercel will automatically detect the push and start a new deployment.
3.  The build command `prisma generate && next build` will run, generating the client and building the app.

## 6. Verify
1.  Visit your deployed URL.
2.  Go to `/admin` and try to log in (you may need to seed the database or create a user manually via Prisma Studio `npx prisma studio` locally).
