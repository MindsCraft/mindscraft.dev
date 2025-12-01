import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nameOrCompany, email, service, budget, message, attachment } = body;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'MindsCraft Contact Form <contact@mindscraft.dev>',
      to: [process.env.CONTACT_EMAIL || 'anikpgp@gmail.com'],
      replyTo: email,
      subject: `New Project Inquiry: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; }
              body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
                line-height: 1.6;
                color: #1f2937;
                background-color: #f9fafb;
                padding: 40px 20px;
              }
              .email-container { 
                max-width: 600px;
                margin: 0 auto;
                background: #ffffff;
                border: 1px solid #e5e7eb;
              }
              .header {
                background: #101828;
                padding: 32px 40px;
                text-align: center;
              }
              .logo {
                color: #F3F4C0;
                font-size: 24px;
                font-weight: 700;
                letter-spacing: -0.5px;
                margin-bottom: 8px;
              }
              .header-subtitle {
                color: #9ca3af;
                font-size: 14px;
                font-weight: 400;
              }
              .content {
                padding: 40px;
              }
              .title {
                font-size: 20px;
                font-weight: 700;
                color: #111827;
                margin-bottom: 24px;
                padding-bottom: 16px;
                border-bottom: 2px solid #f3f4f6;
              }
              .field-group {
                margin-bottom: 24px;
              }
              .field-label {
                font-size: 12px;
                font-weight: 600;
                color: #6b7280;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
              }
              .field-value {
                font-size: 15px;
                color: #1f2937;
                line-height: 1.5;
              }
              .field-value a {
                color: #101828;
                text-decoration: none;
                font-weight: 500;
              }
              .field-value a:hover {
                text-decoration: underline;
              }
              .message-box {
                background: #f9fafb;
                border-left: 3px solid #101828;
                padding: 16px 20px;
                margin-top: 8px;
                white-space: pre-wrap;
                font-size: 15px;
                line-height: 1.6;
              }
              .footer {
                background: #f9fafb;
                padding: 24px 40px;
                border-top: 1px solid #e5e7eb;
                text-align: center;
              }
              .footer-text {
                font-size: 13px;
                color: #6b7280;
                line-height: 1.5;
              }
              @media only screen and (max-width: 600px) {
                .content { padding: 24px 20px; }
                .header { padding: 24px 20px; }
                .footer { padding: 20px; }
              }
            </style>
          </head>
          <body>
            <div class="email-container">
              <!-- Header -->
              <div class="header">
                <div class="logo">MindsCraft</div>
                <div class="header-subtitle">New Project Inquiry</div>
              </div>

              <!-- Content -->
              <div class="content">
                <div class="title">📬 New Enquery Request</div>

                <div class="field-group">
                  <div class="field-label">Name / Company</div>
                  <div class="field-value">${nameOrCompany}</div>
                </div>

                <div class="field-group">
                  <div class="field-label">Email Address</div>
                  <div class="field-value">
                    <a href="mailto:${email}">${email}</a>
                  </div>
                </div>

                <div class="field-group">
                  <div class="field-label">Service of Interest</div>
                  <div class="field-value">${service}</div>
                </div>

                ${budget ? `
                <div class="field-group">
                  <div class="field-label">Project Budget</div>
                  <div class="field-value">${budget}</div>
                </div>
                ` : ''}

                <div class="field-group">
                  <div class="field-label">Message</div>
                  <div class="message-box">${message}</div>
                </div>
              </div>

              <!-- Footer -->
              <div class="footer">
                <div class="footer-text">
                  This inquiry was submitted from your website contact form.<br>
                  Click "Reply" to respond directly to ${nameOrCompany}.
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
