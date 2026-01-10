"use client";

import { useState } from "react";
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, CheckCircle, X } from "lucide-react"
import SectionHeading from "@/components/ui/section-heading"

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

  const filteredPackages = selectedCategory === "all" 
    ? packages 
    : packages.filter(pkg => pkg.category === selectedCategory);

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
                    <CardContent>
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
                      <Button className="w-full bg-primary hover:bg-secondary text-white font-bold cursor-pointer">
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
    </>
  )
}
