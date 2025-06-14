import { authOptions } from '@/lib/auth'
import NextAuth from 'next-auth'

export const dynamic = "force-static"

// This function is required for static export with dynamic routes
export function generateStaticParams() {
  return [
    { nextauth: ['signin'] },
    { nextauth: ['signout'] },
    { nextauth: ['session'] },
    { nextauth: ['csrf'] },
    { nextauth: ['providers'] },
    { nextauth: ['callback'] },
    { nextauth: ['verify-request'] },
    { nextauth: ['error'] }
  ]
}

// Debug: Log environment variables in the API route
console.log('API Route - NEXTAUTH_URL:', process.env.NEXTAUTH_URL)
console.log('API Route - NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? '***' : 'Not set')

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
