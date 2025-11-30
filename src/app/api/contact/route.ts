import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nameOrCompany, email, service, budget, message, attachment } = body;

        // Send email using Resend
        const { data, error } = await resend.emails.send({
            from: 'MindsCraft Contact Form <onboarding@resend.dev>', // You'll change this after domain verification
            to: [process.env.CONTACT_EMAIL || 'your-email@example.com'], // Your email address
            replyTo: email,
            subject: `New Project Inquiry: ${service}`,
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #101828; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #374151; margin-bottom: 5px; }
              .value { color: #1f2937; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1 style="margin: 0; font-size: 24px;">New Project Inquiry</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name / Company:</div>
                  <div class="value">${nameOrCompany}</div>
                </div>
                
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${email}">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="label">Service of Interest:</div>
                  <div class="value">${service}</div>
                </div>
                
                ${budget ? `
                <div class="field">
                  <div class="label">Project Budget:</div>
                  <div class="value">${budget}</div>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="value" style="white-space: pre-wrap;">${message}</div>
                </div>
                
                <div class="footer">
                  <p>This inquiry was submitted from the MindsCraft contact form.</p>
                  <p>Reply directly to this email to respond to ${nameOrCompany}.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, data }, { status: 200 });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again.' },
            { status: 500 }
        );
    }
}
