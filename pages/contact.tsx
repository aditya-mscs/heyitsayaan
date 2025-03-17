"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle } from "lucide-react"
import { sendContactEmail } from "./actions"
import SectionObserver from "@/components/section-observer"

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!email.trim()) {
      setError("Email is required")
      return
    }

    if (!message.trim()) {
      setError("Message is required")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      await sendContactEmail({ name, email, subject, message })
      setIsSubmitted(true)
      setName("")
      setEmail("")
      setSubject("")
      setMessage("")
    } catch (err) {
      setError("There was an error sending your message. Please try again.")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-ayaan-yellow rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-ayaan-teal rounded-full filter blur-3xl"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-ayaan-yellow/10 text-ayaan-yellow">
              <Mail className="mr-1 h-4 w-4" /> Get in Touch
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Have a question or want to collaborate? Send me a message!
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionObserver>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-2xl">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below to get in touch with me.</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">
                  Fields marked with <span className="text-red-500">*</span> are required.
                </p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 rounded-full bg-green-100 p-3 dark:bg-green-900">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold">Message Sent!</h3>
                    <p className="mt-2 text-muted-foreground">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name (Optional)</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Your Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject (Optional)</Label>
                      <Input
                        id="subject"
                        placeholder="What is this regarding?"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Your message here..."
                        required
                        className="min-h-32"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                    {error && <p className="text-sm text-red-500">{error}</p>}
                  </form>
                )}
              </CardContent>
              {!isSubmitted && (
                <CardFooter>
                  <Button type="submit" className="w-full" onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" /> Send Message
                      </span>
                    )}
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </section>
      </SectionObserver>

      <SectionObserver>
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Other Ways to Connect</h2>
                <p className="text-muted-foreground">
                  You can also reach out to me through social media or check out my content on various platforms.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">YouTube</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Subscribe to my channel for Nintendo game reviews and more.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a
                          href="https://www.youtube.com/@ayaanthenintendokid"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit Channel
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Email</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">Send me an email directly at the address below.</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href="mailto:trendsyolo@gmail.com">trendsyolo@gmail.com</a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">How quickly do you respond to messages?</h4>
                    <p className="text-sm text-muted-foreground">
                      I typically respond to messages within 1-2 business days.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Are you available for collaborations?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes! I'm open to collaborating on projects, especially those related to gaming, science, or
                      educational content.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Can I request a specific Nintendo game review?</h4>
                    <p className="text-sm text-muted-foreground">
                      Feel free to suggest games you'd like to see me review on my channel.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  )
}

