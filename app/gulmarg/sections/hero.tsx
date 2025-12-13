"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const tripDurations = [
  { value: "4", label: "4 Nights - 3 Ski Days" },
  { value: "7", label: "7 Nights - 6 Ski Days" },
  { value: "10", label: "10 Nights - 9 Ski Days" },
  { value: "14", label: "14 Nights - 13 Ski Days" },
  { value: "custom", label: "Custom - Let us know" },
];

const packageCategories = [
  "Powder Packages",
  "Beginner Packages",
  "Heliski Packages",
  "Economic Packages",
  "Comfort Packages",
  "Deluxe Packages",
];

export default function HeroSection() {
  const router = useRouter();
  const [tripDuration, setTripDuration] = useState("");
  const [tripDates, setTripDates] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const generateDates = (duration: string) => {
    const dates: string[] = [];
    const startDate = new Date(2026, 0, 4); // January 4, 2026
    const nights = parseInt(duration) || 0;

    for (let i = 0; i < 12; i++) {
      const start = new Date(startDate);
      start.setDate(start.getDate() + i * 7);
      const end = new Date(start);
      end.setDate(end.getDate() + nights);
      
      const startStr = start.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      const endStr = end.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
      dates.push(`${startStr} to ${endStr}`);
    }
    return dates;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!tripDuration) newErrors.tripDuration = "This field is required";
    if (!tripDates) newErrors.tripDates = "This field is required";
    if (!category) newErrors.category = "This field is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Navigate to contact or booking page with query params
    router.push(`/contact-us?duration=${tripDuration}&dates=${encodeURIComponent(tripDates)}&category=${encodeURIComponent(category)}`);
  };

  const availableDates = tripDuration ? generateDates(tripDuration) : [];

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/home/peaks_banner.jpg')" }}
      />
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            To Active Travellers
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-2">
            Looking to Ski the Himalayas
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mt-6">
            We offer exactly what you need — simplicity, comfort and professionalism. 
            We have the answer you are looking for, and make it easy to book YOUR adventure.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white mt-8">
            The Most Complete Website about <span className="text-primary">Gulmarg Ski Resort</span>
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 mt-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Trip Duration */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Trip Duration <span className="text-red-500">*</span>
              </label>
              <select
                value={tripDuration}
                onChange={(e) => {
                  setTripDuration(e.target.value);
                  setTripDates("");
                  setErrors({ ...errors, tripDuration: "", tripDates: "" });
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.tripDuration ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">How many ski days?</option>
                {tripDurations.map((duration) => (
                  <option key={duration.value} value={duration.value}>
                    {duration.label}
                  </option>
                ))}
              </select>
              {errors.tripDuration && (
                <p className="text-red-500 text-sm mt-1">{errors.tripDuration}</p>
              )}
            </div>

            {/* Trip Dates */}
            {tripDuration && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Trip Dates <span className="text-red-500">*</span>
                </label>
                <select
                  value={tripDates}
                  onChange={(e) => {
                    setTripDates(e.target.value);
                    setErrors({ ...errors, tripDates: "" });
                  }}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.tripDates ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Please choose your trip duration</option>
                  {availableDates.map((date, idx) => (
                    <option key={idx} value={date}>
                      {date}
                    </option>
                  ))}
                </select>
                {errors.tripDates && (
                  <p className="text-red-500 text-sm mt-1">{errors.tripDates}</p>
                )}
              </div>
            )}

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  setErrors({ ...errors, category: "" });
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.category ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select Package Category</option>
                {packageCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-bold rounded-lg"
            >
              Book Now
            </Button>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center">
          <p className="text-lg">
            <strong>Your satisfaction is very important to us.</strong> We offer ski packages from:
          </p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong>Beginners:</strong> Mid-December to April 15
            </div>
            <div>
              <strong>Intermediates and Experts:</strong> January 1 to March 31
            </div>
            <div>
              <strong>Best conditions:</strong> Late January to mid-March
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

