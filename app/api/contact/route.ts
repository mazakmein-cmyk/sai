import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = 'contact@shrishirdisaisevatrust.org';

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        // 1. Send Admin Notification (To Trust)
        console.log(`Attempting to send admin email to ${CONTACT_EMAIL}...`);
        const adminEmail = await resend.emails.send({
            from: `Contact Form <${CONTACT_EMAIL}>`,
            to: 'shrishirdisaibabatemple02025@gmail.com', // Changed to Gmail to avoid self-sending blocks
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        console.log('Admin Email Response:', adminEmail);

        if (adminEmail.error) {
            console.error('Admin Email Error:', adminEmail.error);
            return NextResponse.json({ error: adminEmail.error }, { status: 400 });
        }

        // 2. Send User Confirmation (To User)
        console.log(`Attempting to send user confirmation email to ${email}...`);
        const userEmail = await resend.emails.send({
            from: `Shri Shirdi Sai Seva Trust <${CONTACT_EMAIL}>`,
            to: email,
            subject: 'Thank you for contacting Shri Shirdi Sai Seva Trust',
            html: `
        <h2>Sai Ram ${name},</h2>
        <p>Thank you for reaching out to us. We have received your message and will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <blockquote>${message}</blockquote>
        <br />
        <p>Best Regards,</p>
        <p><strong>Shri Shirdi Sai Seva Trust</strong></p>
        <p>Phone: +91-9113931148</p>
      `,
        });
        console.log('User Email Response:', userEmail);

        if (userEmail.error) {
            console.error('User Email Error:', userEmail.error);
        }

        return NextResponse.json({ success: true, admin: adminEmail, user: userEmail });
    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
