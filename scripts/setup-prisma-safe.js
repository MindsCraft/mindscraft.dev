// scripts/setup-prisma-safe.js
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

// Function to check if prisma client files are locked
function checkPrismaClientLock() {
  const prismaClientPath = path.join(process.cwd(), 'node_modules', '.prisma', 'client');

  // Check if directory exists
  if (!fs.existsSync(prismaClientPath)) {
    return false; // Not locked if directory doesn't exist
  }

  try {
    // Try to write a test file to check permissions
    const testFilePath = path.join(prismaClientPath, 'test-lock.tmp');
    fs.writeFileSync(testFilePath, 'test');
    fs.unlinkSync(testFilePath); // Clean up
    return false; // Not locked
  } catch (error) {
    console.log('Prisma client directory is locked:', error.message);
    return true; // Locked
  }
}

// Function to run a command with retries
async function runCommandWithRetry(command, maxRetries = 5, delay = 2000) {
  let retries = 0;

  while (retries < maxRetries) {
    try {
      // First check if prisma client is locked
      if (checkPrismaClientLock()) {
        console.log(`Prisma client is locked. Waiting ${delay/1000} seconds before retry...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        retries++;
        continue;
      }

      return new Promise((resolve, reject) => {
        console.log(`Running command: ${command}`);
        const childProcess = exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error(`Command execution error: ${error.message}`);
            reject(error);
            return;
          }

          console.log(stdout);
          if (stderr) console.error(stderr);
          resolve(stdout);
        });
      });
    } catch (error) {
      console.error(`Attempt ${retries + 1} failed: ${error.message}`);
      if (retries >= maxRetries - 1) {
        throw new Error(`Failed to run command after ${maxRetries} attempts: ${error.message}`);
      }

      console.log(`Retrying in ${delay/1000} seconds...`);
      await new Promise(resolve => setTimeout(resolve, delay));
      retries++;
    }
  }
}

async function setupPrisma() {
  console.log('Setting up Prisma safely...');

  try {
    // Try to generate the Prisma client with retries
    await runCommandWithRetry('npx prisma generate');
    console.log('Prisma client generated successfully!');

    // Optional: Check if we need to push the schema
    if (process.env.PRISMA_PUSH_SCHEMA === 'true') {
      await runCommandWithRetry('npx prisma db push');
      console.log('Prisma schema pushed successfully!');
    }

    // Optional: Check if we need to seed the database
    if (process.env.PRISMA_SEED_DB === 'true') {
      await runCommandWithRetry('node prisma/seed.mjs');
      console.log('Database seeded successfully!');
    }

    console.log('Prisma setup completed successfully!');
  } catch (error) {
    console.error('Failed to set up Prisma:', error.message);
    process.exit(1); // Exit with error code
  }
}

// Run the setup function
setupPrisma();
