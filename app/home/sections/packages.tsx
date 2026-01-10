"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, CheckCircle, ArrowRight, MessageCircle, Send } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { useRouter } from "next/navigation";
import { PHONE_NUMBER } from "@/data/constants";

const packages = [
  {
    id: "beginner-1",
    title: "Khaleel Beginner Ski Packages",
    duration: "4 Nights / 3 Ski Days",
    price: "₹65,000",
    originalPrice: "₹85,000",
    discount: "24% OFF",
    description: "Perfect for learning to ski or snowboard in Gulmarg with professional instructors.",
    highlights: [
      "Ski equipment included",
      "Professional instructors",
      "Hotel Khaleel Palace",
    ],
    bestSeller: true
  },
  {
    id: "powder-1",
    title: "Economic Powder Packages",
    duration: "7 Nights / 6 Ski Days",
    price: "₹55,000",
    originalPrice: "₹72,000",
    discount: "24% OFF",
    description: "Access the best powder zones with certified guides and comfortable accommodation.",
    highlights: [
      "Certified ski guides",
      "Powder zone access",
      "Comfortable hotels",
    ],
    bestSeller: false
  },
  {
    id: "powder-2",
    title: "Comfort Powder Packages",
    duration: "7 Nights / 6 Ski Days",
    price: "₹68,000",
    originalPrice: "₹88,000",
    discount: "23% OFF",
    description: "Great riding, comfort, and good food. Perfect balance for powder enthusiasts.",
    highlights: [
      "Premium guides",
      "Comfortable hotels",
      "Great après-ski",
    ],
    bestSeller: true
  },
  {
    id: "powder-3",
    title: "Deluxe Powder Packages",
    duration: "7 Nights / 6 Ski Days",
    price: "₹95,000",
    originalPrice: "₹1,25,000",
    discount: "24% OFF",
    description: "Luxury experience with premium hotels and the best guides in Gulmarg.",
    highlights: [
      "Luxury accommodation",
      "Premium guides",
      "5-star service",
    ],
    bestSeller: false
  },
  {
    id: "heliski-1",
    title: "Full Week Heliski Package",
    duration: "7 Nights / 6 Ski Days",
    price: "Custom Pricing",
    originalPrice: "",
    discount: "",
    description: "Ultimate heliskiing adventure with helicopter access to untracked powder.",
    highlights: [
      "Helicopter access",
      "Untracked powder",
      "Expert heliski guides",
    ],
    bestSeller: false
  },
  {
    id: "beginner-2",
    title: "Highlands Park Beginner Packages",
    duration: "4 Nights / 3 Ski Days",
    price: "₹82,000",
    originalPrice: "₹1,05,000",
    discount: "22% OFF",
    description: "Ski-in/ski-out access at the iconic Hotel Highlands Park.",
    highlights: [
      "Ski-in/ski-out access",
      "Iconic hotel",
      "Mountain views",
    ],
    bestSeller: false
  }
];

export default function PackagesSection() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPersons: "",
  });

  const handleBookNow = (pkg: typeof packages[0]) => {
    setSelectedPackage(pkg);
    setIsDialogOpen(true);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      numberOfPersons: "",
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRequestQuote = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Request Quote:", { package: selectedPackage, formData });
    alert("Thank you for your request! We'll get back to you soon.");
    setIsDialogOpen(false);
  };

  const handleWhatsApp = () => {
    if (!selectedPackage) return;
    
    const message = `Hi! I'm interested in booking: *${selectedPackage.title}*\n\n` +
      `Duration: ${selectedPackage.duration}\n` +
      `Price: ${selectedPackage.price}\n\n` +
      `My Details:\n` +
      `Name: ${formData.name || 'Not provided'}\n` +
      `Email: ${formData.email || 'Not provided'}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Number of Persons: ${formData.numberOfPersons || 'Not provided'}`;
    
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER.replace("+", "")}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="w-full bg-white py-8  px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          topLine="Our Packages" 
          heading="Gulmarg Ski Packages" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {packages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`relative border-2 hover:border-primary/50 transition-all hover:shadow-xl flex flex-col h-full ${
                pkg.bestSeller ? "ring-2 ring-primary/30" : ""
              }`}
            >
              {pkg.bestSeller && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold z-10">
                  BEST SELLER
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900">
                  {pkg.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-2 text-sm mt-2">
                  <Calendar className="w-4 h-4" />
                  {pkg.duration}
                </CardDescription>
                <div className="mt-4">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-2xl md:text-3xl font-bold text-primary">{pkg.price}</span>
                    {pkg.originalPrice && (
                      <>
                        <span className="text-base md:text-lg text-gray-500 line-through">{pkg.originalPrice}</span>
                        <span className="text-xs md:text-sm font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                          {pkg.discount}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-gray-600 mb-4 text-sm md:text-base">{pkg.description}</p>
                <div className="space-y-2">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleBookNow(pkg)}
                  className="w-full bg-primary hover:bg-secondary text-white font-bold cursor-pointer"
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold cursor-pointer"
            onClick={() => router.push("/packages")}
          >
            View All Packages
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[calc(100%-2rem)] sm:w-full max-w-2xl max-h-[95vh] sm:max-h-[95vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader className="pr-6 sm:pr-0">
            <DialogTitle className="text-xl sm:text-2xl font-bold text-gray-900">
              Book Package
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">
              Fill in your details to request a quote or contact us via WhatsApp
            </DialogDescription>
          </DialogHeader>

          {selectedPackage && (
            <div className="border-2 border-primary/20 rounded-lg p-3 sm:p-4 bg-linear-to-br from-primary/5 to-secondary/5 mb-2 sm:mb-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3">
                <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 wrap-break-word">
                      {selectedPackage.title}
                    </h3>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-3 flex-wrap">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                    <span>{selectedPackage.duration}</span>
                  </div>
                </div>
                {selectedPackage.bestSeller && (
                  <span className="bg-primary text-white px-2 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold shrink-0 self-start">
                    BEST SELLER
                  </span>
                )}
              </div>
              
              <div className="flex items-baseline gap-2 mb-3 flex-wrap">
                <span className="text-xl sm:text-2xl font-bold text-primary">{selectedPackage.price}</span>
                {selectedPackage.originalPrice && (
                  <>
                    <span className="text-sm sm:text-base text-gray-500 line-through">{selectedPackage.originalPrice}</span>
                    <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                      {selectedPackage.discount}
                    </span>
                  </>
                )}
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-3 leading-relaxed">{selectedPackage.description}</p>
            </div>
          )}

          <form onSubmit={handleRequestQuote} className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                Full Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleFormChange}
                required
                placeholder="Enter your full name"
                className="w-full text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                required
                placeholder="Enter your email"
                className="w-full text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                Phone Number *
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleFormChange}
                required
                placeholder="Enter your phone number"
                className="w-full text-sm sm:text-base"
              />
            </div>

            <div>
              <label htmlFor="numberOfPersons" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
                Number of Persons *
              </label>
              <Input
                id="numberOfPersons"
                name="numberOfPersons"
                type="number"
                min="1"
                value={formData.numberOfPersons}
                onChange={handleFormChange}
                required
                placeholder="Enter number of persons"
                className="w-full text-sm sm:text-base"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
              <Button
                type="submit"
                className="w-full sm:flex-1 bg-primary hover:bg-secondary text-white font-bold py-5 sm:py-6 text-sm sm:text-base cursor-pointer"
              >
                <Send className="w-4 h-4 mr-2" />
                Request Quote
              </Button>
              <Button
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-5 sm:py-6 text-sm sm:text-base cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
