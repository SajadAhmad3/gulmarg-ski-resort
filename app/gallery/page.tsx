"use client";

import { useState, useRef } from "react";
import Header from "@/components/common/header"
import Footer from "@/components/common/footer"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Snowflake } from "lucide-react"

const galleryImages = [
  { id: 1, title: "Gulmarg Gondola", category: "Skiing", image: "/images/gandola.JPG" },
  { id: 2, title: "Powder Skiing", category: "Skiing", image: "/images/client.JPG" },
  { id: 3, title: "Apharwat Peak", category: "Mountains", image: "/images/gulmarg5.JPG" },
  { id: 4, title: "Winter Landscape", category: "Winter", image: "/images/gulmarg4.JPG" },
  { id: 5, title: "Ski Runs", category: "Skiing", image: "/images/client2.JPG" },
  { id: 7, title: "Snow Covered Mountains", category: "Mountains", image: "/images/gulmarg4.JPG" },
  { id: 8, title: "Hotels", category: "Accommodation", image: "/images/gulmarg3.JPG" },
  { id: 9, title: "Backcountry Skiing", category: "Skiing", image: "/images/heliski.JPG" },
  { id: 10, title: "Gondola Phase 2", category: "Skiing", image: "/images/taj4.JPG" },
  { id: 11, title: "Beginner Slopes", category: "Skiing", image: "/images/baby.JPG" },
  { id: 12, title: "Mountain Views", category: "Mountains", image: "/images/gulmarg.JPG" },
  { id: 13, title: "Huts", category: "Accommodation", image: "/images/hut.JPG" },
]

const categories = ["All", "Skiing", "Mountains", "Winter", "Accommodation"]

const galleryVideos = [
  { 
    id: 1, 
    title: "Gulmarg Ski Resort Experience", 
    description: "Experience the beauty and excitement of Gulmarg Ski Resort",
    video: "/images/videos/IMG_1796.MP4" 
  },
  { 
    id: 2, 
    title: "Winter Adventures in Gulmarg", 
    description: "Watch the stunning winter landscapes and skiing adventures",
    video: "/images/videos/IMG_1797.MP4" 
  },
  { 
    id: 3, 
    title: "Gulmarg Mountain Views", 
    description: "Breathtaking views of the mountains and snow-covered terrain",
    video: "/images/videos/IMG_1798.MP4" 
  },
  { 
    id: 4, 
    title: "Skiing in Gulmarg", 
    description: "Watch skiers enjoying the slopes in Gulmarg",
    video: "/images/videos/IMG_1799.MP4" 
  },
  { 
    id: 5, 
    title: "Gulmarg Moments", 
    description: "Capturing special moments at Gulmarg Ski Resort",
    video: "/images/videos/IMG_1800.MP4" 
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handleVideoPlay = (videoId: number) => {
    // Pause all other videos
    Object.keys(videoRefs.current).forEach((key) => {
      const id = parseInt(key);
      if (id !== videoId && videoRefs.current[id]) {
        videoRefs.current[id]?.pause();
      }
    });
  };

  return (
    <>
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/10">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/images/client.JPG')" }}
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
                {galleryVideos.map((video) => (
                  <Card key={video.id} className="border-2 hover:border-primary/50 transition-all hover:shadow-xl overflow-hidden p-0">
                    <CardContent className="p-0">
                      <div className="relative w-full bg-black rounded-t-lg overflow-hidden">
                        <video
                          ref={(el) => {
                            videoRefs.current[video.id] = el;
                          }}
                          className="w-full h-[300px] max-h-[300px] object-contain"
                          controls
                          preload="metadata"
                          playsInline
                          onPlay={() => handleVideoPlay(video.id)}
                          onFocus={() => handleVideoPlay(video.id) }
                        >
                          <source src={video.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {video.title}
                        </h3>
                        <p className="text-gray-600">
                          {video.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
