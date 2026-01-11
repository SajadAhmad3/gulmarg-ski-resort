"use client";

import { useState } from "react";
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, X , MessageCircle, Send } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { PHONE_NUMBER } from "@/data/constants";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

type PackageCategory = "all" | "beginner" | "powder" | "heliski" | "economic" | "comfort" | "deluxe";

const packages = [
  {
    id: "beginner-1",
    title: "Khaleel Beginner Ski Packages",
    category: "beginner" as PackageCategory,
    duration: "4 Nights / 3 Ski Days",
    price: "₹65,000",
    originalPrice: "₹85,000",
    discount: "24% OFF",
    description: "Our most affordable option to learn to ski or snowboard in Gulmarg. Hotel Khaleel Palace offers cosy rooms, great service and delicious food.",
    highlights: [
      "Ski equipment included",
      "Professional ski instructors",
      "Hotel Khaleel Palace stay",
      "Airport transfers",
      "Breakfast & dinner"
    ],
    bestSeller: true
  },
  {
    id: "beginner-2",
    title: "Hotel Hilltop Beginner Packages",
    category: "beginner" as PackageCategory,
    duration: "4 Nights / 3 Ski Days",
    price: "₹78,000",
    originalPrice: "₹98,000",
    discount: "20% OFF",
    description: "Great value package with spacious rooms and great service. Perfect for families learning to ski together.",
    highlights: [
      "Ski equipment included",
      "Professional ski instructors",
      "Hotel Hilltop stay",
      "Spacious rooms",
      "All meals included"
    ],
    bestSeller: false
  },
  {
    id: "beginner-3",
    title: "Highlands Park Beginner Packages",
    category: "beginner" as PackageCategory,
    duration: "4 Nights / 3 Ski Days",
    price: "₹82,000",
    originalPrice: "₹105,000",
    discount: "22% OFF",
    description: "Stay at the iconic Hotel Highlands Park with ski-in/ski-out access to beginner slopes.",
    highlights: [
      "Ski-in/ski-out access",
      "Professional instructors",
      "Iconic Highlands Park hotel",
      "Mountain views",
      "All meals included"
    ],
    bestSeller: false
  },
  {
    id: "powder-1",
    title: "Ski Bum Powder Packages",
    category: "powder" as PackageCategory,
    duration: "7 Nights / 6 Ski Days",
    price: "₹45,000",
    originalPrice: "₹60,000",
    discount: "25% OFF",
    description: "You're here to ski the Himalayas. Basic accommodation, expert guides, and access to the best powder zones.",
    highlights: [
      "Expert local guides",
      "Powder zone access",
      "Basic accommodation",
      "Gear storage",
      "Breakfast included"
    ],
    bestSeller: false
  },
  {
    id: "powder-2",
    title: "Economic Powder Packages",
    category: "powder" as PackageCategory,
    duration: "7 Nights / 6 Ski Days",
    price: "₹55,000",
    originalPrice: "₹72,000",
    discount: "24% OFF",
    description: "Simple, warm, comfortable rooms with good food and guides with formal training & years of experience.",
    highlights: [
      "Certified ski guides",
      "Comfortable accommodation",
      "Great food",
      "All transfers",
      "All meals included"
    ],
    bestSeller: true
  },
  {
    id: "powder-3",
    title: "Comfort Powder Packages",
    category: "powder" as PackageCategory,
    duration: "7 Nights / 6 Ski Days",
    price: "₹68,000",
    originalPrice: "₹88,000",
    discount: "23% OFF",
    description: "Nice place to relax after riding powder all day. Great riding, comfort, good food at a fair price!",
    highlights: [
      "Premium guides",
      "Comfortable hotels",
      "Great après-ski",
      "All meals",
      "Lift tickets included"
    ],
    bestSeller: false
  },
  {
    id: "powder-4",
    title: "Deluxe Powder Packages",
    category: "powder" as PackageCategory,
    duration: "7 Nights / 6 Ski Days",
    price: "₹95,000",
    originalPrice: "₹125,000",
    discount: "24% OFF",
    description: "Luxury accommodation with premium amenities. Experience the best of Gulmarg with top-tier hotels.",
    highlights: [
      "Luxury accommodation",
      "Premium guides",
      "5-star service",
      "Gourmet meals",
      "All inclusive"
    ],
    bestSeller: false
  },
  {
    id: "heliski-1",
    title: "Full Week Heliski Package",
    category: "heliski" as PackageCategory,
    duration: "7 Nights / 6 Ski Days",
    price: "Custom Pricing",
    originalPrice: "",
    discount: "",
    description: "Experience the ultimate adventure with a full week of heliskiing in the Himalayas. Includes accommodation, guides, and helicopter access.",
    highlights: [
      "Helicopter access",
      "Untracked powder",
      "Expert heliski guides",
      "Luxury accommodation",
      "All meals included"
    ],
    bestSeller: false
  },
  {
    id: "economic-1",
    title: "Economic Ski Packages",
    category: "economic" as PackageCategory,
    duration: "4 Nights / 3 Ski Days",
    price: "₹42,000",
    originalPrice: "₹55,000",
    discount: "24% OFF",
    description: "Budget-friendly packages with all essentials. Perfect for those who want to experience Gulmarg without breaking the bank.",
    highlights: [
      "Basic accommodation",
      "Ski guides",
      "Equipment rental",
      "Breakfast included",
      "Airport transfers"
    ],
    bestSeller: false
  },
  {
    id: "comfort-1",
    title: "Comfort Ski Packages",
    category: "comfort" as PackageCategory,
    duration: "5 Nights / 4 Ski Days",
    price: "₹58,000",
    originalPrice: "₹75,000",
    discount: "23% OFF",
    description: "Comfortable accommodation with good food and reliable guides. Great balance of comfort and value.",
    highlights: [
      "Comfortable hotels",
      "Good food",
      "Reliable guides",
      "All meals",
      "Lift tickets"
    ],
    bestSeller: true
  },
  {
    id: "deluxe-1",
    title: "Deluxe Ski Packages",
    category: "deluxe" as PackageCategory,
    duration: "7 Nights / 6 Ski Days",
    price: "₹1,15,000",
    originalPrice: "₹1,50,000",
    discount: "23% OFF",
    description: "Luxury experience with premium hotels, gourmet meals, and the best guides in Gulmarg.",
    highlights: [
      "Luxury hotels",
      "Premium guides",
      "Gourmet cuisine",
      "Spa facilities",
      "All inclusive"
    ],
    bestSeller: false
  }
];

const categories: { value: PackageCategory; label: string }[] = [
  { value: "all", label: "All Packages" },
  { value: "beginner", label: "Beginner Packages" },
  { value: "powder", label: "Powder Packages" },
  { value: "heliski", label: "Heliski Packages" },
  { value: "economic", label: "Economic Packages" },
  { value: "comfort", label: "Comfort Packages" },
  { value: "deluxe", label: "Deluxe Packages" },
];

export default function PackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>("all");
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPersons: "",
  });

  const filteredPackages = selectedCategory === "all" 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

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

    const handleRequestQuote = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!selectedPackage) return;
    
      setLoading(true);
    
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            numberOfPersons: formData.numberOfPersons,
    
            // Package details
            package_name: selectedPackage.title,
            duration: selectedPackage.duration,
            price: selectedPackage.price,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        );
    
        toast.success("Thank you! We’ll contact you shortly.");
        setIsDialogOpen(false);
    
        setFormData({
          name: "",
          email: "",
          phone: "",
          numberOfPersons: "",
        });
      } catch (error) {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
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
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: "url('/images/taj4.JPG')" }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Gulmarg Ski Packages
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Choose from our carefully curated ski packages designed for every skill level
            </p>
          </div>
        </section>

        {/* Packages Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto">
            <SectionHeading 
              topLine="Our Packages" 
              heading="Discover Gulmarg with Our Best Deals" 
            />

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-8 mb-12">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all cursor-pointer ${
                    selectedCategory === category.value
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white text-gray-700 border-2 border-gray-300 hover:border-primary hover:text-primary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Active Filter Display */}
            {selectedCategory !== "all" && (
              <div className="mb-8 flex items-center justify-center gap-2">
                <span className="text-gray-600">Showing:</span>
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <span className="font-semibold">
                    {categories.find(c => c.value === selectedCategory)?.label}
                  </span>
                  <button
                    onClick={() => setSelectedCategory("all")}
                    className="ml-2 hover:bg-primary/20 rounded-full p-1 cursor-pointer"
                    aria-label="Clear filter"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <span className="text-gray-600">
                  ({filteredPackages.length} {filteredPackages.length === 1 ? "package" : "packages"})
                </span>
              </div>
            )}
            
            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {filteredPackages.map((pkg) => (
                  <Card 
                    key={pkg.id} 
                    className={`relative border-2 hover:border-primary/50 transition-all hover:shadow-xl ${
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
                        <p className="font-semibold text-gray-900 mb-2 text-sm">Package Includes:</p>
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
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No packages found in this category.</p>
                <Button
                  onClick={() => setSelectedCategory("all")}
                  className="mt-4 bg-primary hover:bg-secondary text-white cursor-pointer"
                >
                  View All Packages
                </Button>
              </div>
            )}

            {/* Custom Package CTA */}
            <div className="mt-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border-2 border-primary/20 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Don&apos;t See What You&apos;re Looking For?
              </h3>
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                We can create a custom package tailored to your specific needs, preferences, and budget. 
                Contact us to design your perfect Gulmarg ski experience.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-secondary text-white md:px-8 px-4 md:py-6 py-4 md:text-lg text-sm md:font-bold font-medium cursor-pointer"
                onClick={() => window.location.href = "/contact-us"}
              >
                Request Custom Package
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />



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
                disabled={loading}
                className="w-full sm:flex-1 bg-primary hover:bg-secondary text-white font-bold py-5 sm:py-6 text-sm sm:text-base cursor-pointer"
              >
                <Send className="w-4 h-4 mr-2" />
                {loading ? "Requesting..." : "Request Quote"}
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
    </>
  )
}
