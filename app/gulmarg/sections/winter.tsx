"use client";

import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Snowflake, 
  Calendar, 
  Thermometer, 
  Mountain, 
  Users, 
  Shield, 
  MapPin, 
  Wind,
  Cloud,
  Sun,
  AlertCircle,
  CheckCircle,
  Info
} from "lucide-react";

const winterMonths = [
  {
    month: "December",
    description: "Early season. Limited snow coverage. Best for beginners on groomed slopes.",
    conditions: "Variable",
    temperature: "-5°C to 5°C",
    snow: "Moderate"
  },
  {
    month: "January",
    description: "Peak winter conditions. Excellent powder. Best for intermediate and expert skiers.",
    conditions: "Excellent",
    temperature: "-10°C to 0°C",
    snow: "Heavy"
  },
  {
    month: "February",
    description: "Prime skiing month. Deepest snow, best powder conditions. Ideal for all levels.",
    conditions: "Perfect",
    temperature: "-8°C to 2°C",
    snow: "Heavy"
  },
  {
    month: "March",
    description: "Late winter. Still great conditions with longer days. Best overall month.",
    conditions: "Excellent",
    temperature: "-5°C to 5°C",
    snow: "Moderate to Heavy"
  },
  {
    month: "April",
    description: "Spring skiing. Warmer weather, good for beginners. Conditions start to deteriorate.",
    conditions: "Good",
    temperature: "0°C to 10°C",
    snow: "Moderate"
  }
];

const skiAreas = [
  {
    id: "babyslope",
    name: "Babyslope",
    level: "Beginner",
    description: "Perfect for learning with surface lifts and gentle slopes. Ideal for first-time skiers and snowboarders.",
    features: ["Surface Lifts", "Beginner Terrain", "Ski School", "Safe Learning Area"],
    icon: Users
  },
  {
    id: "gondola-phase1",
    name: "Gondola Phase 1",
    level: "Intermediate",
    description: "Access to intermediate terrain at Kongdoori. Great for progressing skiers with varied slopes.",
    features: ["Gondola Access", "Intermediate Runs", "Groomed Trails", "Restaurant"],
    icon: Mountain
  },
  {
    id: "gondola-phase2",
    name: "Gondola Phase 2",
    level: "Expert",
    description: "Advanced terrain at Apharwat Peak. Access to world-class powder and off-piste skiing.",
    features: ["High Altitude", "Powder Zones", "Expert Terrain", "Backcountry Access"],
    icon: Snowflake
  },
  {
    id: "backcountry",
    name: "Backcountry Zones",
    level: "Expert Only",
    description: "Untracked powder outside resort boundaries. Requires professional guides and avalanche safety equipment.",
    features: ["Untracked Powder", "Guide Required", "Avalanche Safety", "Advanced Only"],
    icon: Shield
  }
];

const winterTips = [
  {
    icon: Thermometer,
    title: "Dress in Layers",
    description: "Temperatures can vary significantly. Wear thermal base layers, insulating mid-layers, and waterproof outerwear."
  },
  {
    icon: Shield,
    title: "Safety Equipment",
    description: "Always carry avalanche safety equipment when skiing off-piste. Helmets are highly recommended for all skiers."
  },
  {
    icon: Users,
    title: "Hire a Guide",
    description: "Professional guides know the terrain, weather patterns, and can ensure your safety in the mountains."
  },
  {
    icon: Calendar,
    title: "Book in Advance",
    description: "Winter is peak season. Book accommodations, guides, and equipment rentals well in advance."
  }
];

export default function GulmargInWinterSection() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/home/peaks_banner.jpg')" }}
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Gulmarg in Winter
          </h1>
          <p className="text-xl md:text-2xl text-gray-700">
            Discover the magic of winter in the Himalayas
          </p>
        </div>
      </section>

      {/* Best Time to Visit */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            topLine="Best Time to Visit" 
            heading="When to Experience Gulmarg in Winter" 
          />
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {winterMonths.map((month, idx) => (
                <Card key={idx} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{month.month}</h3>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                        month.conditions === "Perfect" ? "bg-green-100 text-green-700" :
                        month.conditions === "Excellent" ? "bg-blue-100 text-blue-700" :
                        month.conditions === "Good" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {month.conditions}
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{month.description}</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <div className="flex items-center justify-center gap-1">
                          <Thermometer className="w-3 h-3" />
                          <span>{month.temperature}</span>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <Snowflake className="w-3 h-3" />
                          <span>{month.snow}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Best Conditions</h4>
                  <p className="text-gray-700">
                    <strong>Beginners:</strong> Mid-December to April 15<br />
                    <strong>Intermediates and Experts:</strong> January 1 to March 31<br />
                    <strong>Best conditions:</strong> Late January to mid-March
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ski Areas */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            topLine="Ski Areas" 
            heading="Explore Gulmarg's Winter Terrain" 
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {skiAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card key={area.id} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            area.level === "Beginner" ? "bg-green-100 text-green-700" :
                            area.level === "Intermediate" ? "bg-blue-100 text-blue-700" :
                            "bg-red-100 text-red-700"
                          }`}>
                            {area.level}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4">{area.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {area.features.map((feature, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Winter Conditions & Expectations */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            topLine="What to Expect" 
            heading="Winter Conditions in Gulmarg" 
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-2 border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  What's Great
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>World-class powder skiing conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Access to incredible high-altitude terrain via Gondola</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Professional ski guides and instructors available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Beautiful winter landscapes and mountain views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Less crowded than European ski resorts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-l-4 border-l-amber-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-amber-500" />
                  Things to Know
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Mixed road conditions and traffic between Tangmarg and Gulmarg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Frequent power cuts (most hotels have generators)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Slow internet and irregular network connectivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Gondola may close due to strong winds or heavy snowfall</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <span>Most hotels stop heating between 10pm-7am and 10am-5pm</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Winter Tips */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            topLine="Winter Tips" 
            heading="Essential Tips for Winter in Gulmarg" 
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {winterTips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <Card key={idx} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                  <CardContent className="pt-6 text-center">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{tip.title}</h3>
                    <p className="text-gray-600 text-sm">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weather Information */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeading 
            topLine="Weather" 
            heading="Winter Weather in Gulmarg" 
          />
          
          <div className="mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
                <CardContent className="pt-6 text-center">
                  <Cloud className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Snowfall</h3>
                  <p className="text-gray-700">
                    Average snowfall: 3-5 meters per season<br />
                    Peak months: January - February<br />
                    Best powder: Late January to mid-March
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
                <CardContent className="pt-6 text-center">
                  <Thermometer className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Temperature</h3>
                  <p className="text-gray-700">
                    Daytime: -5°C to 5°C<br />
                    Nighttime: -10°C to -5°C<br />
                    Wind chill can make it feel much colder
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200">
                <CardContent className="pt-6 text-center">
                  <Wind className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Wind & Visibility</h3>
                  <p className="text-gray-700">
                    Strong winds can close Gondola<br />
                    Visibility varies with weather<br />
                    Clear days offer stunning mountain views
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

