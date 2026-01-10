"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Snowflake, Mountain, Users } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const packages = [
  {
    id: "powder",
    title: "Powder Packages",
    description: "Coming to Gulmarg to ride powder? We have you covered. Airport shuttles, best guides, economic to luxury hotel! Choose the package that suits your needs.",
    icon: Snowflake,
    variants: [
      {
        name: "Ski Bum Powder Packages",
        price: "From $CAD",
        description: "You are in Gulmarg to ski the Himalayas. You do not care about too much comfort, you need a place to sleep and dry your gear. You want a guide to help you discover the secret spots.",
      },
      {
        name: "Economic Powder Packages",
        price: "From $768 CAD",
        description: "You want a simple, warm, comfortable room and good food; a guide with formal training & years of experience? You want everything taking care and running smoothly?",
      },
      {
        name: "Comfort Powder Packages",
        price: "From $868 CAD",
        description: "Imagine! You have been riding powder all day. You cannot stop smiling. You want a nice place to relax, sit and chat with fellow riders about the runs you did.",
      },
      {
        name: "Deluxe Powder Packages",
        price: "From $1128 CAD",
        description: "Luxury accommodation with premium amenities. Experience the best of Gulmarg with top-tier hotels and world-class guides.",
      },
    ],
  },
  {
    id: "beginner",
    title: "Beginner Packages",
    description: "Coming to Gulmarg to learn to Ski? We can help. Airport shuttles, ski equipment and great instructors. 3 choices of perfect hotels. Choose your package!",
    icon: Mountain,
    variants: [
      {
        name: "Khaleel Beginner Ski Packages",
        price: "From $918 CAD",
        description: "Our most affordable option to learn to ski or snowboard in Gulmarg. Hotel Khaleel Palace is a great little hotel not far from the Gondola or the beginner slopes.",
      },
      {
        name: "Hotel Hilltop Beginner Ski Packages",
        price: "From $1118 CAD",
        description: "Great Value. Hotel Hilltop is a great hotel not far from the Gondola or the beginner slopes. They offer spacious rooms, great service and delicious food.",
      },
      {
        name: "Highlands Park Beginner Ski Packages",
        price: "From $1188 CAD",
        description: "These packages include a stay at the iconic Hotel Highlands Park. Imagine yourself waking up and enjoying a delicious breakfast with a view on the Himalayas.",
      },
    ],
  },
  {
    id: "heliski",
    title: "Heliski Packages",
    description: "Want to Heliski the Himalayas! Make it a reality. Choose a full week Heliski Package. It is possible to add 1 or 2 heli runs, 1/2 or full day heli-Skiing to any Packages.",
    icon: Users,
    variants: [
      {
        name: "Full Week Heliski Package",
        price: "Custom Pricing",
        description: "Experience the ultimate adventure with a full week of heliskiing in the Himalayas. Includes accommodation, guides, and helicopter access to pristine powder zones.",
      },
    ],
  },
];

export default function PackagesSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-slate-50 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          topLine="Deals & Packages" 
          heading="Winter Packages for Gulmarg" 
        />
        
        <div className="space-y-16 mt-12">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div key={pkg.id} className="space-y-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                      {pkg.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    {pkg.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pkg.variants.map((variant, idx) => (
                    <Card 
                      key={idx} 
                      className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
                    >
                      <CardHeader>
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {variant.name}
                        </CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary mt-2">
                          {variant.price}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 leading-relaxed">
                          {variant.description}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-primary hover:bg-primary/90 cursor-pointer">
                          Choose Your Package
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

