import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Option 3 Implementation: Local-Only Admin
  // If this code is running in production or preview (Vercel server), block access
  if (process.env.NODE_ENV !== 'development') {
    // Check if the user is trying to access the admin UI or the admin API endpoints
    if (
      request.nextUrl.pathname.startsWith('/admin') ||
      request.nextUrl.pathname.startsWith('/api/admin')
    ) {
      // Return a 404 response to completely hide the existence of the admin routes
      return new NextResponse(
        JSON.stringify({ error: 'This route is disabled in production.' }),
        { status: 404, headers: { 'content-type': 'application/json' } }
      );
    }
  }

  return NextResponse.next();
}

// Config to optimize the middleware to exclusively run on these matching paths
export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
