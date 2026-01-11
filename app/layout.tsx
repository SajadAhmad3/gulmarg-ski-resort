import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gulmarg Ski Resort - The Most Complete Website about Gulmarg Ski Resort",
  description: "Experience the best of Gulmarg Ski Resort with our ski packages, accommodation, and expert guides. Powder packages, beginner packages, and heliski adventures in the Himalayas.",
  authors: [{ name: "Gulmarg Ski Resort" }],
  openGraph: {
    title: "Snowveil Adventures – Explore Kashmir Tours & Adventures",
    description:
      "Unforgettable travel experiences in Kashmir. Scenic landscapes, lakes, mountains & cultural tours.",
    url: "https://www.gulmarg-ski.com",
    siteName: "Gulmarg Ski Resort",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
