import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()
    
    // Check against the environment variable password
    // Fallback to 'mindscraft2026' only for local development 
    const adminPassword = process.env.ADMIN_PASSWORD || 'mindscraft2026'
    
    if (password === adminPassword) {
      // Create a response object
      const response = NextResponse.json({ success: true, message: 'Authenticated successfully' })
      
      // Set an HTTP-Only, Secure cookie that lives for 30 days
      response.cookies.set({
        name: 'mindscraft_admin_session',
        value: 'authenticated', // In a larger system this would be a signed JWT
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
        path: '/',
      })
      
      return response
    }
    
    // Password mismatch
    return NextResponse.json(
      { success: false, error: 'Invalid password' },
      { status: 401 }
    )
    
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Authentication processing failed' },
      { status: 500 }
    )
  }
}
