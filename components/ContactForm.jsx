"use client"

import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Loader2, Send } from "lucide-react"

export default function ContactForm() {
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: "", message: "" })

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setStatus({ type: "", message: "" })

    const formData = new FormData(event.currentTarget)
    const templateParams = {
      // These keys must match the variables in your EmailJS template.
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      )

      setStatus({ type: "success", message: "Message sent successfully." })
      formRef.current?.reset()
    } catch (error) {
      console.error("EmailJS send failed:", error)
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex h-full min-h-0 flex-col justify-between gap-4">
      {/* min-h-0 prevents the input stack from forcing overflow inside the full-height card. */}
      <div className="min-h-0 space-y-4">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-100">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder:text-gray-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-100">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="your.email@example.com"
            required
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder:text-gray-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-gray-900 dark:text-gray-100">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Your message..."
            required
            className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100 dark:placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Bottom group keeps feedback and the submit action anchored within the form card. */}
      <div className="space-y-4">
        {status.message && (
          <p
            role="status"
            aria-live="polite"
            className={
              status.type === "success"
                ? "rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:bg-green-950/40 dark:text-green-300"
                : "rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:bg-red-950/40 dark:text-red-300"
            }
          >
            {status.message}
          </p>
        )}

        <button
          type="submit"
          disabled={isSending}
          className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-700 hover:to-purple-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send Message
            </>
          )}
        </button>
      </div>
    </form>
  )
}
