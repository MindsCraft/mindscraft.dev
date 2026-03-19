import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({ success: true, message: 'Logged out successfully' })
  
  // Clear the secure cookie by setting its maxAge to 0
  response.cookies.set({
    name: 'mindscraft_admin_session',
    value: '',
    httpOnly: true,
    maxAge: 0,
    path: '/',
  })
  
  return response
}
