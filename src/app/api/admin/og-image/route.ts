import { NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

const OG_IMAGE_PATH = path.join(process.cwd(), 'public/images/og-image.png')
const MAX_SIZE = 5 * 1024 * 1024 // 5MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp']

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ error: 'File type not allowed. Use JPEG, PNG, or WebP.' }, { status: 400 })
    }

    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: 'File too large. Max size is 5MB.' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    await writeFile(OG_IMAGE_PATH, buffer)

    return NextResponse.json({
      success: true,
      url: `/images/og-image.png?t=${Date.now()}`,
    })
  } catch (error) {
    console.error('OG image upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
