"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import { useRouter } from "next/navigation";

const destinations = [
  {
    id: "apharwat-peak",
    name: "Apharwat Peak",
    description: "The highest skiing point at 4,390m, accessible via Gondola Phase II. Challenging expert terrain with incredible powder.",
    image: "/images/taj4.JPG",
    highlights: ["4,390m Elevation", "Expert Terrain", "Phase II Access"]
  },
  {
    id: "gondola-phase-2",
    name: "Gondola Phase II",
    description: "Extends from Kongdori to near Apharwat Peak at 3,980m. Steep and challenging terrain for advanced skiers.",
    image: "/images/client.jpg",
    highlights: ["3,980m Elevation", "Advanced Slopes", "Steep Terrain"]
  },
  {
    id: "gondola-phase-1",
    name: "Gondola Phase I (Kongdori)",
    description: "Connects Gulmarg to Kongdori at 3,050m. Gentle slopes perfect for beginners and intermediate skiers.",
    image: "/images/client3.JPG",
    highlights: ["3,050m Elevation", "Beginner Friendly", "Intermediate Runs"]
  },
  {
    id: "marys-shoulder",
    name: "Mary's Shoulder",
    description: "Accessible via chairlift, reaching 3,600m. Popular intermediate area with great progression terrain.",
    image: "/images/chairlift.jpg",
    highlights: ["3,600m Elevation", "Intermediate", "Chairlift Access"]
  },
  {
    id: "khilanmarg",
    name: "Khilanmarg",
    description: "Located 6km from Gulmarg, offering diverse winter ski runs with panoramic views of the Kashmir Valley.",
    image: "/images/gulmarg4.JPG",
    highlights: ["Valley Views", "Varied Terrain", "Scenic Runs"]
  },
  {
    id: "main-bowl",
    name: "Main Gondola Bowl",
    description: "The primary skiing area accessible from the gondola, offering diverse terrain for all levels.",
    image: "/images/taj3.JPG",
    highlights: ["Powder Zones", "Varied Terrain", "Guided Tours"]
  },
  {
    id: "babyslope",
    name: "Bunny Slopes / Babyslope",
    description: "Perfect beginner area in the meadows with button lifts, ideal for learning to ski and snowboard.",
    image: "/images/baby.JPG",
    highlights: ["Beginner Friendly", "Button Lifts", "Lessons Available"]
  },
  {
    id: "backcountry",
    name: "Backcountry Zones",
    description: "Expert terrain outside resort boundaries, requiring professional guides for safety and navigation.",
    image: "/images/heliski.JPG",
    highlights: ["Expert Only", "Untracked Powder", "Guide Required"]
  }
];

export default function DestinationsSection() {
  const router = useRouter();

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-8  px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          topLine="Ski Areas" 
          heading="Explore Gulmarg's Ski Terrain" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {destinations.map((destination) => (
            <Card 
              key={destination.id}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl cursor-pointer p-0"
              onClick={() => router.push(`/gulmarg#${destination.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${destination.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-bold text-xl text-white mb-1">{destination.name}</h3>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>Gulmarg</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="pt-4 px-4">
                <p className="text-gray-600 text-sm mb-3">{destination.description}</p>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg font-bold"
            onClick={() => router.push("/gulmarg")}
          >
            Learn More About Gulmarg
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
