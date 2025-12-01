// COMMENTED OUT FOR STATIC EXPORT - Database functionality disabled for Vercel deployment
// import { PrismaClient } from '@prisma/client'

// // This is needed because in development we don't want to restart
// // the server with every change, but we want to make sure we don't
// // create a new connection to the DB with every change either.
// // In production we create a new connection with each request.
// const globalForPrisma = global as unknown as { prisma: PrismaClient }

// let prismaClient: PrismaClient

// try {
//   prismaClient =
//     globalForPrisma.prisma ||
//     new PrismaClient({
//       log: ['query'],
//     })

//   if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prismaClient
// } catch (error) {
//   console.error('Failed to initialize Prisma Client:', error)
//   throw new Error('Please run "npx prisma generate" and restart the server')
// }

// export const prisma = prismaClient

export const prisma = null // Placeholder for static export
