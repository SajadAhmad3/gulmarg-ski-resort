"use client";

import { useState } from "react";
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Video, MapPin, Snowflake } from "lucide-react"

const galleryImages = [
  { id: 1, title: "Gulmarg Gondola", category: "Skiing", image: "/images/gandola.jpg" },
  { id: 2, title: "Powder Skiing", category: "Skiing", image: "/images/client.jpg" },
  { id: 3, title: "Apharwat Peak", category: "Mountains", image: "/images/gulmarg5.jpg" },
  { id: 4, title: "Winter Landscape", category: "Winter", image: "/images/gulmarg4.jpg" },
  { id: 5, title: "Ski Runs", category: "Skiing", image: "/images/client2.jpg" },
  { id: 7, title: "Snow Covered Mountains", category: "Mountains", image: "/images/gulmarg4.jpg" },
  { id: 8, title: "Hotels", category: "Accommodation", image: "/images/gulmarg3.jpg" },
  { id: 9, title: "Backcountry Skiing", category: "Skiing", image: "/images/heliski.jpg" },
  { id: 10, title: "Gondola Phase 2", category: "Skiing", image: "/images/taj4.jpg" },
  { id: 11, title: "Beginner Slopes", category: "Skiing", image: "/images/baby.jpg" },
  { id: 12, title: "Mountain Views", category: "Mountains", image: "/images/gulmarg.jpg" },
  { id: 13, title: "Huts", category: "Accommodation", image: "/images/hut.JPG" },
]

const categories = ["All", "Skiing", "Mountains", "Winter", "Accommodation"]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/home/peaks_banner.jpg')" }}
          />
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Gulmarg Gallery
            </h1>
            <p className="text-xl md:text-2xl text-gray-700">
              Explore the breathtaking beauty of Gulmarg Ski Resort through our photo collection
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full border-2 transition-all font-semibold ${
                    selectedCategory === category
                      ? "border-primary bg-primary text-white"
                      : "border-gray-300 hover:border-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            {filteredImages.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredImages.map((item) => (
                  <Card 
                    key={item.id} 
                    className="group overflow-hidden border-2 hover:border-primary/50 transition-all hover:shadow-xl cursor-pointer p-0"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4" />
                            <span>Gulmarg</span>
                            <span className="mx-2">•</span>
                            <Snowflake className="w-4 h-4" />
                            <span>{item.category}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">No images found in this category.</p>
              </div>
            )}

            {/* Video Section */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Experience Gulmarg in Motion
                </h2>
                <p className="text-lg text-gray-600">
                  Watch our videos to see the real beauty of Gulmarg Ski Resort
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                      <Video className="w-16 h-16 text-white/50" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                      Gulmarg Ski Resort Guide
                    </h3>
                    <p className="text-gray-600">
                      A comprehensive guide to skiing and snowboarding in Gulmarg
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                      <Video className="w-16 h-16 text-white/50" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                      Winter in Gulmarg
                    </h3>
                    <p className="text-gray-600">
                      Experience the magical winter wonderland and powder skiing in Gulmarg
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                      <Video className="w-16 h-16 text-white/50" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                      Gulmarg Gondola Experience
                    </h3>
                    <p className="text-gray-600">
                      Ride the highest cable car in the world and access incredible ski terrain
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-2 hover:border-primary/50 transition-all hover:shadow-xl">
                  <CardContent className="pt-6">
                    <div className="relative h-64 bg-gradient-to-br from-slate-800 to-slate-600 rounded-lg flex items-center justify-center">
                      <Video className="w-16 h-16 text-white/50" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-2">
                      Powder Skiing in Gulmarg
                    </h3>
                    <p className="text-gray-600">
                      Watch expert skiers ride the best powder in the Himalayas
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
