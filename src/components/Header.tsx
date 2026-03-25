"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060f22]/80 backdrop-blur-md py-1"
          : "bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="relative h-7 w-28">
            <Image
              alt="Nomo Labs"
              src="/assets/nomo.png"
              fill
              priority
              className="object-contain object-left"
              sizes="112px"
            />
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-sm text-white/70 md:flex">
          <a className="hover:text-white" href="#">
            Features
          </a>
          <a className="hover:text-white" href="#">
            Technology
          </a>
          <a className="hover:text-white" href="#">
            Waitlist
          </a>
          <a className="hover:text-white" href="#">
            Resources
          </a>
        </nav>

        <a
          className="inline-flex items-center justify-center rounded-lg bg-[#589CFF] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(99,166,255,0.25)] hover:bg-[#579cff]"
          href="#"
        >
          Join the Waitlist
        </a>
      </div>
    </header>
  );
}
