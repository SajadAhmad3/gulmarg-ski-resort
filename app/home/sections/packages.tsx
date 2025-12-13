"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, CheckCircle, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { useRouter } from "next/navigation";

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

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          topLine="Our Packages" 
          heading="Gulmarg Ski Packages" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {packages.map((pkg) => (
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
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-secondary text-white font-bold">
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
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold"
            onClick={() => router.push("/packages")}
          >
            View All Packages
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
