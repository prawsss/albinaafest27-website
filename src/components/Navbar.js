"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-5xl rounded-4xl bg-linear-to-tl from-[#a08000]/60 to-black/50 backdrop-blur-[4px] shadow-gold-glow px-6 py-3.5 flex items-center justify-between transition-all duration-300">

        {/* DESKTOP MENU (Rata Tengah Penuh) */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-3">
          {["Home", "Competition", "Philanthropy", "Sponsorship"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="px-5 py-2.5 rounded-full font-display text-xs md:text-sm font-semibold tracking-widest text-white/90 hover:text-gold hover:bg-white/30 transition-all duration-200 uppercase"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA BUTTON (Desktop) */}
        <div className="hidden md:block">
          <button
            href="/competition"
            className="rounded-full bg-gradient-to-r from-gold to-gold-light px-6 py-4 font-display text-xs font-bold tracking-wider text-[#070913] hover:opacity-95 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all uppercase"
          >
            Daftar Sekarang
          </button>
        </div>

        {/* MOBILE PILL TOGGLE BUTTON (Di Kanan) */}
        <div className="md:hidden flex items-center justify-end w-full">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-gold/15 text-gold font-display text-xs font-semibold tracking-wider uppercase shadow-[0_0_15px_rgba(212,175,55,0.2)] active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span>Menu</span>
            <div className="flex flex-col justify-center items-center w-4 h-4 gap-0.5">
              <span className={`h-0.5 w-4 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`h-0.5 w-4 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-4 bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>
        </div>

        {/* MOBILE DROPDOWN MENU */}
        <div className={`
          absolute top-full left-0 right-0 mt-3 p-6 rounded-2xl
          bg-[#070913]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(212,175,55,0.2)]
          flex flex-col gap-3 transition-all duration-300 origin-top
          ${isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible pointer-events-none"}
        `}>
          {["Home", "Competition", "Philanthropy", "Sponsorship"].map((item, i) => (
            <Link
              key={i}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="px-5 py-3.5 rounded-xl font-display text-sm font-semibold tracking-widest text-white hover:bg-gold/15 hover:text-gold transition-colors uppercase text-center"
            >
              {item}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/competition"
              onClick={() => setIsOpen(false)}
              className="block text-center rounded-xl bg-gradient-to-r from-gold to-gold-light px-5 py-3 font-display text-xs font-bold tracking-wider text-[#070913] hover:opacity-95 uppercase shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              Daftar Sekarang
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
}