"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/ui/section-heading";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Deepak Ramachandra",
    text: "Took my daughters, 6yr and 10yr to Gulmarg for the first time - was a little skeptical and apprehensive initially, but had an incredibly enjoyable experience. It's a gorgeous place, with limited infrastructure which is charming in its own way .. but I think what made it such a fantastic holiday was Yanik Sturgeon and his colleagues at SkiGulmarg. Incredibly professional, keen attention to detail, very thoughtful and fabulous service even before we set foot in Gulmarg.",
    rating: 5,
  },
  {
    name: "Li Siwei",
    text: "Snowboarding in Gulmarg Kashmir has always been on my bucketlist and Yanik helped me to realise the dream. He was very professional and patient throughout the whole process of planning the trip, gave very detailed information and everything went to plan beautifully. He even checked on me via email throughout the stay to make sure that everything was OK.",
    rating: 5,
  },
  {
    name: "Josh Venaccio",
    text: "Had a fantastic time in Gulmarg! Everyone I interacted with was incredibly professional and friendly, hope I get the chance to return someday.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          topLine="Testimonials & Customer's Comments" 
          heading="What Our Guests Say" 
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="hover:shadow-xl transition-shadow border-2">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold text-gray-900">— {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Browse our past reviews on Facebook and Tripadvisor.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold">
            See Reviews
          </button>
        </div>
      </div>
    </section>
  );
}

