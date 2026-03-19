import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import util from 'util';
import path from 'path';

const execPromise = util.promisify(exec);

export async function POST() {
  try {
    const scriptPath = path.join(process.cwd(), 'scripts/auto-blog.ts');
    
    // We run the script in the background
    // Since it can take ~30-60 seconds (Gemini + Scraping), 
    // we use a long-lived request or just inform the user that it started.
    
    // In a premium app, we should ideally use a queue, 
    // but for this MVP, we'll wait for the result or use a stream.
    
    const { stdout, stderr } = await execPromise(`npx tsx ${scriptPath}`);
    
    if (stderr && !stderr.includes('Debugger attached')) {
        console.error('AI Gen Error:', stderr);
    }

    return NextResponse.json({ 
        message: 'AI Post generation process completed!', 
        output: stdout,
        success: true 
    });
  } catch (error: any) {
    console.error('AI Generation Route Error:', error);
    return NextResponse.json({ 
        error: 'Failed to generate AI post', 
        details: error.message 
    }, { status: 500 });
  }
}
