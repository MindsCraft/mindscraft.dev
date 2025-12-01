// Setup script for Prisma
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log('🔧 Setting up Prisma...');

// Get the directory name equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check if prisma directory exists
const prismaDir = path.join(__dirname, '..', 'prisma');
if (!fs.existsSync(prismaDir)) {
  console.error('❌ Prisma directory not found. Make sure you are running this script from the project root.');
  process.exit(1);
}

try {
  // Run prisma generate
  console.log('📦 Generating Prisma client...');
  execSync('npx prisma generate', { stdio: 'inherit' });

  // Check if database exists, if not run migrations
  const dbPath = path.join(prismaDir, 'dev.db');
  if (!fs.existsSync(dbPath)) {
    console.log('🗃️ Database not found, running migrations...');
    execSync('npx prisma migrate dev --name init', { stdio: 'inherit' });
  }

  // Run seed script if available
  try {
    console.log('🌱 Seeding database...');
    execSync('npm run prisma:seed', { stdio: 'inherit' });
  } catch (error) {
    console.warn('⚠️ Seeding failed, but setup can continue:', error.message);
  }

  console.log('✅ Prisma setup completed successfully!');
  console.log('');
  console.log('You can now start your application with:');
  console.log('npm run dev');
} catch (error) {
  console.error('❌ Error during Prisma setup:', error.message);
  process.exit(1);
}
