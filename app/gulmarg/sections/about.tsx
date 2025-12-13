"use client";

import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Snowflake, Mountain, Users, Shield, MapPin, Wifi, Power, Wind } from "lucide-react";

const features = [
  {
    icon: Mountain,
    title: "Incredible Terrain",
    description: "Access to world-class off-piste terrain from the Gulmarg Gondola, one of the highest cable cars in the world.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Avalanche mitigation and forecasting, first aid and rescue services within resort boundaries. Professional guides recommended.",
  },
  {
    icon: Users,
    title: "Learn to Ski",
    description: "Totally possible to learn skiing or snowboarding in Gulmarg. We work with Gulmarg's best guides and instructors.",
  },
  {
    icon: MapPin,
    title: "Resort Boundaries",
    description: "Important to understand that outside the resort boundaries there is no avalanche mitigation. We highly recommend skiing with a professional guide.",
  },
];

const expectations = [
  {
    icon: Wind,
    title: "Road Conditions",
    description: "Mixed road conditions and traffic jams between Tangmarg and Gulmarg. More on weekends.",
  },
  {
    icon: Power,
    title: "Power Cuts",
    description: "Frequent power cuts. Most decent hotels have generators but power cuts are regular.",
  },
  {
    icon: Wifi,
    title: "Internet",
    description: "Slow Internet on Hotel Wi-Fi. Irregular network connection even on 4G. Roaming on your SIM card may not connect.",
  },
  {
    icon: Snowflake,
    title: "Weather",
    description: "Occasional Gondola or chair lift closure due to weather (Strong winds or heavy snowfall).",
  },
];

export default function AboutGulmargSection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          topLine="About Gulmarg Ski Resort" 
          heading="Understanding Gulmarg Ski Resort" 
        />

        <div className="mt-12 space-y-12">
          {/* Main Description */}
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Gulmarg Ski Resort offers the same service a standard ski resort, namely, avalanche mitigation 
              and forecasting; first aid and rescue service; and some snow grooming. These services are offered 
              inside the Gulmarg Ski Resort boundaries. Gulmarg is not your typical ski resort because most of 
              the skiing is off-piste. That does not mean it is more dangerous.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mt-6">
              Most people come to Gulmarg Ski Resort for the incredible terrain access from the Gulmarg Gondola. 
              It is important to understand that outside the resort boundaries there is no avalanche mitigation 
              and any rescue need to come from your group. We highly recommend skiing Gulmarg with a professional 
              ski guide. It is totally possible to learn skiing or snowboarding in Gulmarg. We work with Gulmarg's 
              best guides and instructors.
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              What Makes Gulmarg Special
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* What to Expect */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              What to Expect When Visiting Gulmarg Ski Resort
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {expectations.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Card key={idx} className="border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <Icon className="w-8 h-8 text-primary shrink-0 mt-1" />
                        <div>
                          <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-lg p-6">
              <p className="text-gray-700">
                <strong>Note:</strong> Most hotels stop the heating system between 10pm and 7am; and 10am and 5pm or so. 
                No bars or alcohol in most hotels or restaurants. Guides & instructors are experienced, professional and safe. 
                They do not have as much formal training as in Canada, Europe, Australia, New Zealand, etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

