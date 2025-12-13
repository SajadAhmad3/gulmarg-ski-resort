"use client";

import React from "react";
import SectionHeading from "@/components/ui/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Video, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GallerySection() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          topLine="Gulmarg Gallery" 
          heading="Photos & Videos" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card className="hover:shadow-xl transition-shadow border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <ImageIcon className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Gulmarg Photos</CardTitle>
              </div>
              <CardDescription className="text-base">
                Great Photo Gallery. Click our Photos link to view photos of Gulmarg Village 
                and ski and snowboard shots at Gulmarg Ski Resort.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="h-64 rounded-lg bg-cover bg-center mb-4"
                style={{ backgroundImage: "url('/images/home/peaks_banner.jpg')" }}
              />
              <Button className="w-full bg-primary hover:bg-primary/90">
                View Gallery
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-shadow border-2">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Video className="w-8 h-8 text-primary" />
                <CardTitle className="text-2xl">Gulmarg Videos</CardTitle>
              </div>
              <CardDescription className="text-base">
                Want to see what it's really like to Ski Gulmarg? There are plenty of powder days, 
                and we have the video to prove it. Browse our video selection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div 
                className="h-64 rounded-lg bg-cover bg-center mb-4 flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-600"
              >
                <Video className="w-16 h-16 text-white/50" />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                Watch Videos
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Gulmarg in Winter</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Discover the best time to ski Gulmarg — explore our comprehensive guide to 
                winter conditions, weather patterns, and optimal skiing periods.
              </p>
              <Button variant="outline" className="bg-white text-slate-900 hover:bg-white/90">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

