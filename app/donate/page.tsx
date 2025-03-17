"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CreditCard, Gift, Heart, Copy, CheckCircle, ExternalLink } from "lucide-react"
import SectionObserver from "@/components/section-observer"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Previous donations data
const previousDonations = [
  { name: "Neha S.", amount: 20, date: "March 16, 2025", message: "Good job 👏" },
  { name: "John D.", amount: 25, date: "March 15, 2025", message: "Keep up the great work!" },
  { name: "Sarah M.", amount: 10, date: "March 10, 2025", message: "Love your Nintendo reviews!" },
  { name: "Anonymous", amount: 5, date: "March 5, 2025", message: "" },
  { name: "Mr. Rodriguez", amount: 20, date: "February 28, 2025", message: "For my favorite student" },
  { name: "Gaming Club", amount: 15, date: "February 20, 2025", message: "For the next tournament" },
  { name: "Emily K.", amount: 25, date: "February 15, 2025", message: "Happy birthday!" },
]

// Calculate total donations - hardcoded to $120 as requested
const totalDonations = 120

// PayPal donation link
const PAYPAL_DONATION_LINK =
  "https://www.paypal.com/donate/?business=ZE3GNPB653YXJ&no_recurring=0&item_name=Aditya+Dhamankar+dba+YoloTrends+LLC+engages+in+the+business+of+digital+media%2C+online+marketing%2C+revenue+generation.&currency_code=USD"

export default function DonatePage() {
  const [amount, setAmount] = useState<string>("10")
  const [customAmount, setCustomAmount] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [copied, setCopied] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would connect to a payment processor
    setSubmitted(true)
  }

  const handleAmountChange = (value: string) => {
    setAmount(value)
    if (value !== "custom") {
      setCustomAmount("")
    }
  }

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    })
  }

  if (submitted) {
    return (
      <div className="flex flex-col min-h-screen">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Thank You!</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your support means the world to me!
                </p>
              </div>
              <div className="flex items-center justify-center p-8">
                <Heart className="h-16 w-16 text-primary animate-pulse" />
              </div>
              <p className="text-muted-foreground max-w-[600px]">
                Your donation helps me continue creating content, working on projects, and pursuing my passions. I
                appreciate your generosity and support!
              </p>
              <Button onClick={() => setSubmitted(false)}>Make Another Donation</Button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-1 mb-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-gradient-to-r from-ayaan-yellow to-ayaan-teal bg-clip-text text-transparent">
                Ayaan Dhamankar
              </h1>
              <p className="text-muted-foreground md:text-lg">Student • Creator • Visionary</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support My Journey</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your donation helps me continue creating content and pursuing my passions
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionObserver>
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6 max-w-4xl">
            <Tabs defaultValue="payment-options" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-full">
                <TabsTrigger value="payment-options">Donation Options</TabsTrigger>
                <TabsTrigger value="donation-history">Donation History</TabsTrigger>
              </TabsList>

              <TabsContent value="payment-options" className="mt-6">
                <div className="flex flex-col gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Choose a Payment Method</CardTitle>
                      <CardDescription>Multiple options available for your convenience</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Tabs defaultValue="paypal">
                        <TabsList className="grid w-full grid-cols-3 max-w-full">
                          <TabsTrigger value="paypal">PayPal</TabsTrigger>
                          <TabsTrigger value="venmo">Venmo</TabsTrigger>
                          <TabsTrigger value="zelle">Zelle</TabsTrigger>
                        </TabsList>

                        <TabsContent value="zelle" className="mt-4 space-y-4">
                          <div className="space-y-2">
                            <Label>Zelle Email</Label>
                            <div className="flex">
                              <Input value="trendsyolo@gmail.com" readOnly className="rounded-r-none" />
                              <Button
                                variant="secondary"
                                className="rounded-l-none"
                                onClick={() => copyToClipboard("trendsyolo@gmail.com", "zelle")}
                              >
                                {copied === "zelle" ? (
                                  <CheckCircle className="h-4 w-4" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Open your banking app, select Zelle, and send to this email address
                            </p>
                          </div>
                          <div className="space-y-2">
                            <Label>Steps to Donate with Zelle</Label>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Open your banking app or Zelle app</li>
                              <li>Select "Send Money" or "Pay"</li>
                              <li>Enter the email address above</li>
                              <li>Enter the amount you wish to donate</li>
                              <li>Add a note (optional) with your name and message</li>
                              <li>Confirm and send your donation</li>
                            </ol>
                          </div>
                        </TabsContent>

                        <TabsContent value="venmo" className="mt-4 space-y-4">
                          <div className="flex flex-col items-center gap-4 mb-6">
                            <div className="relative w-48 h-80">
                              <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1102.JPG-grPPzMyQqD6mKN3jkSUo9ULL3laFf1.jpeg"
                                alt="Venmo QR Code for @YoloTrends"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                              Scan this QR code with your phone's camera to donate via Venmo
                            </p>
                          </div>

                          <div className="space-y-2">
                            <Label>Venmo Username</Label>
                            <div className="flex">
                              <Input value="@YoloTrends" readOnly className="rounded-r-none" />
                              <Button
                                variant="secondary"
                                className="rounded-l-none"
                                onClick={() => copyToClipboard("@YoloTrends", "venmo")}
                              >
                                {copied === "venmo" ? (
                                  <CheckCircle className="h-4 w-4" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Open the Venmo app and search for this username
                            </p>
                          </div>

                          <div className="space-y-2 mt-4">
                            <Label>Steps to Donate with Venmo</Label>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Open the Venmo app</li>
                              <li>Tap the "Pay or Request" button</li>
                              <li>Search for "@YoloTrends"</li>
                              <li>Enter the amount you wish to donate</li>
                              <li>Add a note with your name and message</li>
                              <li>Tap "Pay" to complete your donation</li>
                            </ol>
                          </div>
                          <Button variant="outline" className="w-full" asChild>
                            <a href="https://venmo.com" target="_blank" rel="noopener noreferrer">
                              Open Venmo <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </TabsContent>

                        <TabsContent value="paypal" className="mt-4 space-y-4">
                          <div className="flex flex-col items-center gap-4">
                            <div className="relative w-48 h-48">
                              <Image
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Paypal%20QR%20Code-j2auFX5LiCwFFncN9j4HMgv8eZleqD.png"
                                alt="PayPal QR Code"
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-sm text-muted-foreground text-center">
                              Scan this QR code with your phone's camera to donate via PayPal
                            </p>
                          </div>

                          <div className="flex flex-col gap-4 mt-4">
                            <Button className="w-full bg-[#0070ba] hover:bg-[#005ea6]" asChild>
                              <a href={PAYPAL_DONATION_LINK} target="_blank" rel="noopener noreferrer">
                                Donate with PayPal
                              </a>
                            </Button>
                            <p className="text-sm text-muted-foreground text-center">
                              Or click the button above to make a donation through PayPal's secure checkout
                            </p>
                          </div>

                          <div className="space-y-2 mt-4">
                            <Label>Steps to Donate with PayPal QR Code</Label>
                            <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                              <li>Open your phone's camera app</li>
                              <li>Point it at the QR code above</li>
                              <li>Tap the notification that appears</li>
                              <li>Enter the amount you wish to donate</li>
                              <li>Complete the payment process</li>
                            </ol>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4">
                      <div className="space-y-2 w-full">
                        <Label htmlFor="message">Leave a Message (Optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Your message of support..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Note: Please include your name in the payment note if you'd like to be recognized on the
                        donation list.
                      </p>
                    </CardFooter>
                  </Card>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold tracking-tighter">Why Donate?</h2>
                    <p className="text-muted-foreground">
                      Your support helps me create more content, invest in better equipment, and continue sharing my
                      journey with you.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                      <div className="flex flex-col items-start gap-4 bg-card p-6 rounded-lg border">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Gift className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Support New Projects</h3>
                          <p className="text-sm text-muted-foreground">
                            Help fund new creative projects and educational content
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-4 bg-card p-6 rounded-lg border">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Better Equipment</h3>
                          <p className="text-sm text-muted-foreground">
                            Invest in better cameras, microphones, and tools for higher quality content
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-4 bg-card p-6 rounded-lg border">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Heart className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Motivation</h3>
                          <p className="text-sm text-muted-foreground">
                            Your support encourages me to keep creating and sharing my journey
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="donation-history" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle>Recent Donations</CardTitle>
                        <CardDescription>Thank you to everyone who has supported my journey</CardDescription>
                      </div>
                      <div className="bg-muted p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-primary">${totalDonations}</div>
                        <div className="text-xs text-muted-foreground">Total Donations</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead className="hidden md:table-cell">Message</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {previousDonations.map((donation, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-medium">{donation.name}</TableCell>
                              <TableCell>{donation.date}</TableCell>
                              <TableCell>${donation.amount}</TableCell>
                              <TableCell className="hidden md:table-cell">
                                {donation.message || <span className="text-muted-foreground italic">No message</span>}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-muted-foreground">
                      Your name will appear on this list when you make a donation. Thank you for your support!
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </SectionObserver>

      <SectionObserver>
        <section className="w-full py-12 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Other Ways to Support</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  There are many ways you can help support my journey
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Subscribe</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Subscribe to my YouTube channel and turn on notifications to never miss a new video.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://www.youtube.com/@ayaanthenintendokid" target="_blank" rel="noopener noreferrer">
                        Visit Channel
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Share</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Share my content with friends and family who might be interested in my projects.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => copyToClipboard(window.location.origin, "website")}
                    >
                      {copied === "website" ? "Link Copied!" : "Copy Link"}
                    </Button>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Feedback</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Leave comments and feedback on my videos to help me improve and grow.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:contact@example.com">Send Feedback</a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </SectionObserver>
    </div>
  )
}

