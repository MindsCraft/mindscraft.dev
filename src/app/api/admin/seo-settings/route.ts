import { NextResponse } from 'next/server'
import { readFile, writeFile } from 'fs/promises'
import path from 'path'

const SEO_FILE = path.join(process.cwd(), 'src/data/seo-settings.json')

export async function GET() {
  try {
    const raw = await readFile(SEO_FILE, 'utf-8')
    const data = JSON.parse(raw)
    return NextResponse.json(data)
  } catch (error) {
    console.error('SEO settings read error:', error)
    return NextResponse.json({ error: 'Failed to read SEO settings' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Validate required fields
    if (!body.siteTitle || !body.siteDescription || !body.siteUrl) {
      return NextResponse.json({ error: 'siteTitle, siteDescription, and siteUrl are required.' }, { status: 400 })
    }

    const updated = {
      ...body,
      updatedAt: new Date().toISOString(),
    }

    await writeFile(SEO_FILE, JSON.stringify(updated, null, 2), 'utf-8')
    return NextResponse.json({ success: true, data: updated })
  } catch (error) {
    console.error('SEO settings write error:', error)
    return NextResponse.json({ error: 'Failed to save SEO settings' }, { status: 500 })
  }
}
