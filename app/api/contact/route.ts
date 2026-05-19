import { NextResponse } from "next/server"
import tls from "node:tls"

const MAIL_TO = "rudraprasadsatapathy3506@gmail.com"

type ContactPayload = {
  name?: unknown
  email?: unknown
  message?: unknown
}

function asCleanString(value: unknown) {
  return typeof value === "string" ? value.trim() : ""
}

function encodeBase64(value: string) {
  return Buffer.from(value, "utf8").toString("base64")
}

function escapeHeader(value: string) {
  return value.replace(/[\r\n]/g, " ")
}

function buildEmail({ name, email, message }: { name: string; email: string; message: string }) {
  const safeName = escapeHeader(name)
  const safeEmail = escapeHeader(email)
  const from = process.env.MAIL_FROM || process.env.SMTP_USER || MAIL_TO

  return [
    `From: Portfolio Contact <${from}>`,
    `To: ${MAIL_TO}`,
    `Reply-To: ${safeName} <${safeEmail}>`,
    `Subject: New portfolio message from ${safeName}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
    "",
  ].join("\r\n")
}

async function sendSmtpMail(rawEmail: string) {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || 465)
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const from = process.env.MAIL_FROM || user

  if (!host || !user || !pass || !from) {
    throw new Error("Email service is not configured.")
  }

  await new Promise<void>((resolve, reject) => {
    const socket = tls.connect(port, host, { servername: host })
    const commands = [
      `EHLO ${host}`,
      "AUTH LOGIN",
      encodeBase64(user),
      encodeBase64(pass),
      `MAIL FROM:<${from}>`,
      `RCPT TO:<${MAIL_TO}>`,
      "DATA",
      `${rawEmail}\r\n.`,
      "QUIT",
    ]

    let commandIndex = 0
    let buffer = ""

    const cleanup = () => {
      socket.removeAllListeners()
      socket.end()
    }

    const fail = (error: Error) => {
      cleanup()
      reject(error)
    }

    socket.setTimeout(15000, () => fail(new Error("Email service timed out.")))
    socket.on("error", fail)

    socket.on("data", (chunk) => {
      buffer += chunk.toString("utf8")
      if (!buffer.endsWith("\r\n")) return

      const lines = buffer.trimEnd().split(/\r\n/)
      const lastLine = lines[lines.length - 1]
      buffer = ""

      if (!/^\d{3} /.test(lastLine)) return

      const code = Number(lastLine.slice(0, 3))
      if (code >= 400) {
        fail(new Error("Email service rejected the message."))
        return
      }

      if (commandIndex < commands.length) {
        socket.write(`${commands[commandIndex]}\r\n`)
        commandIndex += 1
        return
      }

      cleanup()
      resolve()
    })
  })
}

export async function POST(request: Request) {
  let payload: ContactPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const name = asCleanString(payload.name)
  const email = asCleanString(payload.email)
  const message = asCleanString(payload.message)

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 })
  }

  try {
    await sendSmtpMail(buildEmail({ name, email, message }))
    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send message."
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
