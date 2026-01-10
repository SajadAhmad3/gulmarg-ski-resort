"use client";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Twitter,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import navigationData from "@/data/nav.json";
import { useRouter } from "next/navigation";
import { PHONE_NUMBER, ALT_PHONE_NUMBER, ADDRESS, EMAIL } from "@/data/constants";

const Footer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact-us");
  };
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-[1300px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4 pb-4 gap-8 min-h-[400px] pt-10">
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Gulmarg Ski Resort
          </Link>

          <h2 className="text-xl font-semibold mb-4 text-white/90">
          Your Trusted Gulmarg Ski & Stay Experience
          </h2>
          <button
            className="max-w-[150px] bg-primary hover:bg-secondary transition duration-300 text-white px-6 py-3 rounded-lg text-sm font-bold cursor-pointer"
            onClick={handleClick}
          >
            Book A Trip
          </button>
        </div>

        <div>
          <h3 className="text-[20px] font-semibold ">Quick Links</h3>
          <div className="flex flex-col gap-4 py-4">
            {navigationData.map((item, index) => (
              <Link href={item.path} key={index}>
                <span className=" transition  duration-300  hover:text-primary text-md">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="">
          <h3 className="text-[20px] font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-5 pt-5">
            <div className="flex gap-4 items-center">
              <PhoneCall size={25} className="text-primary shrink-0" />
              <div>
                <Link href="/">
                  <p className="text-md">{PHONE_NUMBER}</p>
                </Link>
                {/* <Link href="/">
                  <p className="text-md">{ALT_PHONE_NUMBER}</p>
                </Link> */}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MessageCircle size={25} className="text-primary shrink-0" />
              <div>
                <Link href="/">
                  <p className="text-md">{PHONE_NUMBER}</p>
                </Link>
                {/* <Link href="/">
                  <p className="text-md">{ALT_PHONE_NUMBER}</p>
                </Link> */}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Mail size={25} className="text-primary shrink-0" />
              <div>
                <Link href="/">
                  <p className="text-md break-all">{EMAIL}</p>
                </Link>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MapPin size={25} className="text-primary shrink-0" />
              <div>
                <p className="text-md">
                  {ADDRESS}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  gap-5 ">
          <h3 className="text-[20px] font-semibold">Follow Us</h3>
          <div className="flex gap-5 cursor-pointer">
            <Instagram className=" transtion  duration-300 hover:-translate-y-1 hover:text-primary" />
            <Facebook className=" transtion  duration-300 hover:-translate-y-1 hover:text-primary" />
            <Twitter className=" transtion  duration-300 hover:-translate-y-1 hover:text-primary" />
          </div>
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto pb-10">
        <hr className="border-gray" />
        <p className="text-center pt-4 text-md text-white/70">
          Copyright &copy; <span className="text-primary font-semibold">Gulmarg Ski Resort</span> {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;