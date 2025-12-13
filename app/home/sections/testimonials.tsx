"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, India",
    text: "Amazing experience! The team at Gulmarg Ski Resort made our skiing trip unforgettable. Everything was perfectly organized from start to finish.",
    rating: 5,
    image: "/images/home/peaks_banner.jpg"
  },
  {
    name: "Sarah Johnson",
    location: "London, UK",
    text: "The best travel experience we've had! The guides were knowledgeable, accommodations were excellent, and the scenery was breathtaking.",
    rating: 5,
    image: "/images/home/peaks_banner.jpg"
  },
  {
    name: "Amit Patel",
    location: "Delhi, India",
    text: "Highly recommended! Professional service, great value for money, and memories that will last a lifetime. Will definitely book again!",
    rating: 5,
    image: "/images/home/peaks_banner.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-white py-8  px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          topLine="Testimonials" 
          heading="What Our Travelers Say" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic text-sm md:text-base">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

