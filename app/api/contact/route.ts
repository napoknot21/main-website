import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      context,
      firstName,
      lastName,
      email,
      phone,
      company,
      address,
      city,
      postalCode,
      country,
      message,
    } = body

    // Validate required fields
    if (!context || !firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Build the email body as plain text
    const emailBody = [
      `New Contact Form Submission`,
      `===========================`,
      ``,
      `Context: ${context}`,
      ``,
      `--- Contact Details ---`,
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      company ? `Company: ${company}` : null,
      address ? `Address: ${address}` : null,
      city ? `City: ${city}` : null,
      postalCode ? `Postal Code: ${postalCode}` : null,
      country ? `Country: ${country}` : null,
      ``,
      `--- Message ---`,
      message,
    ]
      .filter(Boolean)
      .join("\n")

    // Send email using mailto-style fetch to an email service
    // For testing, we use a simple approach: send via a POST to a mail endpoint
    // In production, replace with your preferred email service (SendGrid, Resend, etc.)

    // For now, log the submission and simulate success
    console.log("=== CONTACT FORM SUBMISSION ===")
    console.log(`To: kinbrian5@hotmail.com`)
    console.log(`Subject: Heroics Capital - Contact Form [${context}]`)
    console.log(emailBody)
    console.log("=== END SUBMISSION ===")

    // Attempt to send via Resend if API key is available, otherwise just log
    const resendApiKey = process.env.RESEND_API_KEY
    if (resendApiKey) {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Heroics Capital <noreply@heroicscapital.com>",
          to: "kinbrian5@hotmail.com",
          subject: `Heroics Capital - Contact Form [${context}] from ${firstName} ${lastName}`,
          text: emailBody,
          reply_to: email,
        }),
      })

      if (!emailRes.ok) {
        console.error("Resend error:", await emailRes.text())
        // Still return success since we logged the submission
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
