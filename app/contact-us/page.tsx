"use client";

import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react"
import { PHONE_NUMBER, ALT_PHONE_NUMBER, ADDRESS, EMAIL } from "@/data/constants"
import { useSearchParams } from "next/navigation"
import { useState, Suspense } from "react"

function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: searchParams.get("phone") || "",
    days: searchParams.get("days") || "",
    people: searchParams.get("people") || "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for contacting us! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Card className="border-2 shadow-xl">
      <CardContent className="pt-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Send us a Message
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Trip Duration
              </label>
              <input
                type="text"
                name="days"
                value={formData.days}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., 5 Days"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of People
              </label>
              <input
                type="text"
                name="people"
                value={formData.people}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., 2 People"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Tell us about your travel plans..."
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-secondary text-white py-6 text-lg font-bold flex items-center justify-center gap-2 cursor-pointer"
          >
            <Send className="w-5 h-5" />
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[30vh] min-h-[250px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/home/peaks_banner.jpg')" }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Get in touch with us to plan your perfect Gulmarg trip
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <Suspense fallback={
                <Card className="border-2 shadow-xl">
                  <CardContent className="pt-6">
                    <div className="animate-pulse space-y-4">
                      <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-12 bg-gray-200 rounded"></div>
                      <div className="h-12 bg-gray-200 rounded"></div>
                      <div className="h-12 bg-gray-200 rounded"></div>
                    </div>
                  </CardContent>
                </Card>
              }>
                <ContactForm />
              </Suspense>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="border-2">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      Get in Touch
                    </h2>
                    <p className="text-gray-700 mb-8">
                      We&apos;re here to help you plan your perfect Gulmarg adventure. 
                      Reach out to us through any of the following channels.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                          <a href={`tel:${PHONE_NUMBER}`} className="text-primary hover:underline">
                            {PHONE_NUMBER}
                          </a>
                          <br />
                          <a href={`tel:${ALT_PHONE_NUMBER}`} className="text-primary hover:underline">
                            {ALT_PHONE_NUMBER}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                          <a href={`mailto:${EMAIL}`} className="text-primary hover:underline break-all">
                            {EMAIL}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                          <p className="text-gray-700">{ADDRESS}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <MessageCircle className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                          <a 
                            href={"https://wa.me/"+PHONE_NUMBER.replace("+", "")}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Chat with us on WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM</p>
                      <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
                      <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">
                      We&apos;re available 24/7 for emergencies and urgent inquiries.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

