"use client";
import React, { useRef, useCallback, useEffect, useState } from "react";
import { slides } from "@/data/slidesData";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Phone, Calendar, Users, Send, MapPin, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { PHONE_NUMBER } from "@/data/constants";

const tripDurations = [
  { value: "2", label: "2 Nights 3 Days" },
  { value: "3", label: "3 Nights 4 Days" },
  { value: "4", label: "4 Nights 5 Days" },
  { value: "5", label: "5 Nights 6 Days" },
  { value: "6", label: "6 Nights 7 Days (Best Selling)" },
  { value: "7", label: "7 Nights 8 Days" },
  { value: "8", label: "8 Nights 9 Days" },
];

const peopleOptions = [
  { value: "1", label: "Solo Trip" },
  { value: "2", label: "2 Pax" },
  { value: "3", label: "3 Pax" },
  { value: "4", label: "4 Pax" },
  { value: "5", label: "5 Pax" },
  { value: "6", label: "6 Pax" },
  { value: "7", label: "7 Pax" },
  { value: "8", label: "8 Pax" },
  { value: "9", label: "9 Pax" },
  { value: "10", label: "10 Pax" },
  { value: "12+", label: "12 To More" },
];

export default function BannerSection() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [phone, setPhone] = useState("");
  const [days, setDays] = useState("");
  const [people, setPeople] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!phone) newErrors.phone = "Phone number is required";
    if (!days) newErrors.days = "Please select trip duration";
    if (!people) newErrors.people = "Please select number of people";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    router.push(`/contact-us?phone=${encodeURIComponent(phone)}&days=${days}&people=${people}`);
  };

  return (
    <div className="relative h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10"></div>
      </div>

      {/* Fixed Content Overlay */}
      <div className="relative z-20 h-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12 py-8 md:py-12">
        {/* Left Side - Hero Content */}
        <div className="flex-1 lg:pr-8 text-center lg:text-left text-white mb-8 lg:mb-0">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 
              key={`heading-${currentSlide}`}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 drop-shadow-2xl leading-tight animate-fade-in"
            >
              {slides[currentSlide].heading}
            </h1>
            <p 
              key={`desc-${currentSlide}`}
              className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 drop-shadow-xl text-white/95 animate-fade-in"
            >
              {slides[currentSlide].description}
            </p>
            <div className="flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <MapPin className="w-5 h-5" />
                <span className="text-sm md:text-base">Verified Stays</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm md:text-base">4.8/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5" />
                <span className="text-sm md:text-base">Expert Guides</span>
              </div>
            </div>
            <p className="text-base md:text-lg text-white/90 drop-shadow-lg">
              Join thousands of satisfied skiers who have experienced the best powder in the Himalayas with us
            </p>
          </div>
        </div>

        {/* Right Side - Booking Form */}
        <div className="w-full lg:w-[420px] xl:w-[480px]">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Plan Your Gulmarg Ski Trip
              </h3>
              <p className="text-sm text-gray-600">
                Get up to 60% off on best ski packages!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Phone Number */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-1" />
                  Phone Number
                </label>
                <div className="flex">
                  <select 
                    aria-label="Country code"
                    className="px-3 py-2.5 border border-r-0 rounded-l-lg bg-gray-50 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                  </select>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setErrors({ ...errors, phone: "" });
                    }}
                    placeholder="Enter phone number"
                    className={`flex-1 px-4 py-2.5 border rounded-r-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Number of Days */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="inline w-4 h-4 mr-1" />
                  No. of Days
                </label>
                <select
                  aria-label="Number of days"
                  value={days}
                  onChange={(e) => {
                    setDays(e.target.value);
                    setErrors({ ...errors, days: "" });
                  }}
                  className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.days ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select Duration</option>
                  {tripDurations.map((duration) => (
                    <option key={duration.value} value={duration.value}>
                      {duration.label}
                    </option>
                  ))}
                </select>
                {errors.days && (
                  <p className="text-red-500 text-xs mt-1">{errors.days}</p>
                )}
              </div>

              {/* Number of People */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Users className="inline w-4 h-4 mr-1" />
                  No. of People
                </label>
                <select
                  aria-label="Number of people"
                  value={people}
                  onChange={(e) => {
                    setPeople(e.target.value);
                    setErrors({ ...errors, people: "" });
                  }}
                  className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.people ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Select People</option>
                  {peopleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.people && (
                  <p className="text-red-500 text-xs mt-1">{errors.people}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white py-2.5 text-base font-bold rounded-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Request Quote
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-2.5 text-base font-bold rounded-lg"
                onClick={() => window.open("https://wa.me/"+PHONE_NUMBER.replace("+", ""), "_blank")}
              >
                Chat on WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 rounded-full p-2 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30 rounded-full p-2 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
              }
              intervalRef.current = setInterval(nextSlide, 5000);
            }}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
