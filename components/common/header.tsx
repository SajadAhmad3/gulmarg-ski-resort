"use client";

import { usePathname, useRouter } from "next/navigation";
import navigationData from "@/data/nav.json";
import Link from "next/link";
import Menu from "@/components/common/menu";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleContactUsClick = () => {
    router.push("/contact-us");
  };

  return (
    <div className="fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`relative z-10 mx-auto pl-4 md:pl-8 pr-5 md:pr-10 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-lg text-gray-900 h-20`}
      >
        <div className="flex items-center justify-between w-full mx-auto h-20">
          {/* <Link href="/" className="relative w-[120px] h-[50px] md:w-[180px] md:h-[80px]">
            <Image
              src="/images/wildways_logo.png"
              alt="logo"
              fill
              priority
              className="w-full h-full object-contain"
            />
          </Link> */}
            <Link href="/" className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
              Gulmarg Ski Resort
            </Link>

          <div className="flex items-center justify-between gap-4 md:gap-6">
            <ul className="lg:flex hidden h-20 items-center">
              {navigationData.map((item, index) => {
                const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path));
                return (
                  <li
                    className={
                      'nav-link-wrapper h-20 flex items-center' + (isActive ? ' active' : '')
                    }
                    key={index}
                  >
                    <Link href={item.path}>
                      <span className="nav-link-bg"></span>
                      <span className="nav-link-content text-sm md:text-base">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:block">
              <button
                className="bg-primary hover:bg-secondary transition duration-300 text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-bold cursor-pointer"
                onClick={handleContactUsClick}
              >
                Contact Us
              </button>
            </div>
            <Menu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
