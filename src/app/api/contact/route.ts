import { NextResponse } from "next/server"

const MAX_BODY_BYTES = 20_000
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 5
const ALLOWED_CONTEXTS = new Set(["customer", "press", "candidacy", "other"])

const submissionsByIp = new Map<string, { count: number; resetAt: number }>()

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const current = submissionsByIp.get(ip)

  if (!current || current.resetAt <= now) {
    submissionsByIp.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  current.count += 1
  return current.count > RATE_LIMIT_MAX_REQUESTS
}

function readString(value: unknown, maxLength: number, options?: { multiline?: boolean }) {
  if (typeof value !== "string") return ""

  const normalized = options?.multiline
    ? value.replace(/\r/g, "").trim()
    : value.replace(/[\r\n]+/g, " ").trim()

  return normalized.slice(0, maxLength)
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0)
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 })
    }

    const ip = getClientIp(request)
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    const rawBody = await request.text()
    if (new TextEncoder().encode(rawBody).length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Request too large" }, { status: 413 })
    }

    let parsedBody: unknown
    try {
      parsedBody = JSON.parse(rawBody)
    } catch {
      return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 })
    }

    const body =
      typeof parsedBody === "object" && parsedBody !== null
        ? (parsedBody as Record<string, unknown>)
        : {}

    const context = readString(body.context, 32)
    const firstName = readString(body.firstName, 80)
    const lastName = readString(body.lastName, 80)
    const email = readString(body.email, 254).toLowerCase()
    const phone = readString(body.phone, 40)
    const company = readString(body.company, 120)
    const address = readString(body.address, 160)
    const city = readString(body.city, 80)
    const postalCode = readString(body.postalCode, 20)
    const country = readString(body.country, 80)
    const message = readString(body.message, 5_000, { multiline: true })

    // Validate required fields
    if (!context || !firstName || !lastName || !email || !message || !ALLOWED_CONTEXTS.has(context)) {
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

    console.info("Contact form submission received", { context })

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
          from: "Heroics Capital <onboarding@resend.dev>",
          to: "c.martin@heroics-capital.com",
          subject: `Heroics Capital - Contact Form [${context}] from ${firstName} ${lastName}`,
          text: emailBody,
          reply_to: email,
        }),
      })

      if (!emailRes.ok) {
        console.error("Resend contact email failed", { status: emailRes.status })
        return NextResponse.json(
          { error: "Unable to send message right now" },
          { status: 502 }
        )
      }
    } else {
      console.warn("RESEND_API_KEY is not configured; contact email was not sent")
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
