"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY || "")

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Use default values for optional fields
    const name = data.name || "Anonymous"
    const subject = data.subject || "Website Contact Form"

    // Now that we have the Resend API key, let's actually send the email
    const { data: emailData, error } = await resend.emails.send({
      from: "Ayaan Website Contact <onboarding@resend.dev>",
      to: "trendsyolo@gmail.com",
      reply_to: data.email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${data.email}
        
        Message:
        ${data.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${data.email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    })

    if (error) {
      console.error("Resend API error:", error)
      throw new Error(error.message)
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    throw new Error("Failed to send email")
  }
}

