import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// These are the paths that require authentication
const protectedPaths = ['/admin', '/api/admin']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if the current path requires protection
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path))
  
  // We don't want to protect the login API itself if we decide to move it under /api/admin in the future
  const isAuthApi = pathname.startsWith('/api/auth')

  // Option 3 Implementation: Local-Only Admin block
  // If this code is running in production, instantly return 404 for any admin route
  if (isProtectedPath && process.env.NODE_ENV !== 'development') {
    return new NextResponse(
      JSON.stringify({ error: 'This route is disabled in production.' }),
      { status: 404, headers: { 'content-type': 'application/json' } }
    )
  }
  
  if (isProtectedPath && !isAuthApi) {
    // Check for our secure, HTTP-only cookie
    const authCookie = request.cookies.get('mindscraft_admin_session')
    
    if (!authCookie || authCookie.value !== 'authenticated') {
      // If no valid cookie is found, redirect to the standalone login page
      const loginUrl = new URL('/login', request.url)
      
      // If it's an API route that was unauthorized, return a 401 instead of a redirect
      if (pathname.startsWith('/api/')) {
        return NextResponse.json({ error: 'Unauthorized Access' }, { status: 401 })
      }
      
      return NextResponse.redirect(loginUrl)
    }
  }
  
  return NextResponse.next()
}

// Optimization: Only run proxy on /admin and /api paths to save edge execution limits
export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
}
