import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// Authentication has been temporarily removed as per README-admin.md
// import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  // Authentication has been temporarily removed as per README-admin.md
  // const token = await getToken({ req: request })
  const { pathname } = request.nextUrl

  // Authentication has been temporarily removed as per README-admin.md
  // No redirects or protection for admin routes

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
