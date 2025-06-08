import { authOptions } from '@/lib/auth'
import NextAuth from 'next-auth'

// Debug: Log environment variables in the API route
console.log('API Route - NEXTAUTH_URL:', process.env.NEXTAUTH_URL)
console.log('API Route - NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? '***' : 'Not set')

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
