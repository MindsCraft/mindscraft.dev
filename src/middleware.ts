import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const { pathname } = request.nextUrl

  // Check if the request is for an admin route
  if (pathname.startsWith('/admin')) {
    // Skip authentication check for the login page itself to avoid redirect loops
    // Use a more robust check that handles variations like trailing slashes
    if (pathname.startsWith('/admin/login') || pathname.includes('/api/auth')) {
      return NextResponse.next()
    }

    // If no token exists, redirect to login
    if (!token) {
      const url = new URL('/admin/login', request.url)
      url.searchParams.set('callbackUrl', encodeURI(pathname))
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (Auth API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api\/auth|_next\/static|_next\/image|favicon.ico).*)',
  ],
}
