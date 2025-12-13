"use client";
import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Shield, MapPin, Users, Heart, Star, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Verified Stays",
    icon: Shield,
    description:
      "Experience comfort and safety with our carefully selected and verified accommodations. Every stay is personally inspected to ensure quality and reliability.",
  },
  {
    title: "Customized Packages",
    icon: MapPin,
    description:
      "Tailored tour packages designed specifically for your preferences. From adventure seekers to peace lovers, we create the perfect Kashmir experience for you.",
  },
  {
    title: "Expert Guides",
    icon: Users,
    description:
      "Travel with confidence alongside our experienced local guides who know every hidden gem and secret spot in Kashmir. Your safety and satisfaction are our priority.",
  },
  {
    title: "24/7 Support",
    icon: Heart,
    description:
      "Round-the-clock assistance throughout your journey. From booking to your return, we're here to ensure your Gulmarg ski trip is seamless and memorable.",
  },
];

const whyChooseUs = [
  "Up to 60% Value on Best Deals",
  "Verified & Trusted Accommodations",
  "Customized Ski Packages",
  "Expert Ski Guides",
  "24/7 Customer Support",
  "Best Price Guarantee",
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-8  px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading topLine="Why Choose Us" heading="Experience Gulmarg Ski Resort with Comfort, Care & Professional Service" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Card
                key={idx}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary transition-colors">
                      <Icon className="w-12 h-12 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-bold text-2xl mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Gulmarg Ski Resort?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We bring you the best of Gulmarg Ski Resort with unmatched service and value
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/80 rounded-lg p-4">
                <CheckCircle className="w-6 h-6 text-primary shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
