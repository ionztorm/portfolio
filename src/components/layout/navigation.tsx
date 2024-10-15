"use client";

import { Logo } from "@/components/generic/logo";
import { useState } from "react";
import { useViweport } from "@/hooks/useViewport";
import { NAV_PATHS } from "@/lib/constants";
import { makeNavList } from "@/utils/makeNavList";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useViweport("sm");

  const navListMD = makeNavList(NAV_PATHS, "desktopMainNav");
  const navListMob = makeNavList(NAV_PATHS, "mobileMainNav");

  return (
    <nav className="relative mb-5 py-8 border-b border-b-slate-100">
      <div className="flex items-center justify-between">
        <Logo />

        {/* md+ menu */}
        {!isMobile && <ul className="hidden sm:flex gap-5">{navListMD}</ul>}

        {/* burgur button */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex items-center justify-center group sm:hidden"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-transform duration-300 ease-in-out before:content-[''] before:block before:absolute before:w-6 before:h-0.5 before:bg-gray-700 before:transition-transform before:duration-300 before:ease-in-out after:content-[''] after:block after:absolute after:w-6 after:h-0.5 after:bg-gray-700 after:transition-transform after:duration-300 after:ease-in-out ${
                isOpen
                  ? "rotate-45 before:rotate-90 before:-translate-y-0 after:-rotate-90 after:-translate-y-0"
                  : "before:-translate-y-2 after:translate-y-2"
              }`}
            />
          </button>
        )}
      </div>
      {/* mobile menu */}
      {isMobile && isOpen && (
        <ul className="sm:hidden absolute w-full mt-4 flex flex-col gap-4 rounded-sm shadow-lg p-5 z-10 bg-white">
          {navListMob}
        </ul>
      )}
    </nav>
  );
}
