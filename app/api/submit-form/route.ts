import { NextRequest, NextResponse } from 'next/server';
import redis from '@/lib/redis';
import { sendEmail } from '@/lib/email';

interface EmailAPIResponse {
  status: string; // "1" or "2"
  msg: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      fatherName,
      contactNo,
      whatsappNo,
      fatherContact,
      fatherWhatsapp,
      email,
      parentEmail,
      schoolCollege,
      knowAbout,
      teacherName,
      teacherContact,
    } = body;

    // Required validation
    if (!firstName || !lastName || !email || !parentEmail) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate submission ID
    const submissionId = `registration:${Date.now()}:${Math.random()
      .toString(36)
      .substring(2, 11)}`;

    // Data to save
    const submissionData = {
      firstName,
      lastName,
      fatherName,
      contactNo,
      whatsappNo,
      fatherContact,
      fatherWhatsapp,
      email,
      parentEmail,
      schoolCollege,
      knowAbout,
      teacherName,
      teacherContact,
      submittedAt: new Date().toISOString(),
    };

    // Save to Redis
    await redis.set(
      submissionId,
      JSON.stringify(submissionData),
      'EX',
      30 * 24 * 60 * 60
    );

    // Email HTML
    const htmlBody = `
      <html>
      <body style="font-family: Arial">
        <h2>Thank You for Registering!</h2>
        <p>Dear ${firstName} ${lastName},</p>
        <p>Your registration for TRIDENT JEE Main Challenge 2026 has been received.</p>
      </body>
      </html>
    `;

    // Send email
    const res = await sendEmail({
      recipient: email,
      recipientName: `${firstName} ${lastName}`,
      subject: 'Registration Confirmation - TRIDENT JEE Main Challenge 2026',
      htmlBody,
    });

    const emailText = await res.text();
    console.log('Email Response ::', emailText);

    // PARSE JSON SAFELY 
    let emailResult: EmailAPIResponse;

    try {
      emailResult = JSON.parse(emailText) as EmailAPIResponse;
    } catch {
      return NextResponse.json(
        {
          message: 'Email API returned invalid JSON',
          raw: emailText,
          submissionId,
        },
        { status: 500 }
      );
    }

    // Email API success check
    if (emailResult.status !== '1') {
      return NextResponse.json(
        {
          message: 'Form saved but email sending failed',
          error: emailResult.msg,
          submissionId,
        },
        { status: 200 }
      );
    }

    // SUCCESS FULL RESPONSE
    return NextResponse.json(
      { message: 'Registration submitted successfully', submissionId },
      { status: 200 }
    );

  } catch (error) {
    const err = error as Error;

    console.error('Form submission error:', err);

    return NextResponse.json(
      {
        message: 'Failed to process registration',
        error: err.message,
      },
      { status: 500 }
    );
  }
}
