"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function GalleryCarousel() {
  const images = [1, 2, 3, 4, 5, 6];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  // Auto-play interval effect (berhenti sementara jika popup sedang dibuka)
  useEffect(() => {
    if (selectedImage !== null) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, selectedImage]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 group select-none">
      
      {/* Container Window */}
      <div className="overflow-hidden rounded-3xl border border-gold/20 h-[550px] md:h-[650px] relative w-full bg-bg-1/20 backdrop-blur-md flex items-center justify-center">
        
        {/* Sliding Strip Track */}
        <div 
          className="flex gap-6 h-full w-full items-center transition-transform duration-500 ease-out"
          style={{ 
            transform: `translateX(calc(50% - 35% - ${currentIndex * 70}% - ${currentIndex * 1.5}rem))` 
          }}
        >
          {images.map((i, index) => {
            const isActive = index === currentIndex;
            
            return (
              <div 
                key={i} 
                onClick={() => setSelectedImage(i)}
                className={`w-[70%] h-[90%] shrink-0 relative rounded-2xl overflow-hidden border transition-all duration-500 shadow-2xl cursor-pointer group/item
                  ${isActive 
                    ? "border-gold/40 scale-100 opacity-100" 
                    : "border-gold/10 scale-95 opacity-40 blur-[1px]"
                  }
                `}
              >
                <Image 
                  src={`/galeri_${i}.webp`} 
                  alt={`Dokumentasi Alfest ${i}`}
                  fill
                  priority={i === 1}
                  sizes="(max-width: 768px) 70vw, 800px"
                  className="object-cover transition-transform duration-300 group-hover/item:scale-105"
                />
                
                {/* Petunjuk Klik di Bagian Bawah Gambar */}
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[11px] md:text-xs text-gold/90 font-medium tracking-wide bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-xs">
                    Klik untuk memperbesar
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Operational Manual Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-6 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/60 border border-gold/20 text-gold hover:bg-gold hover:text-black hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md transition-all font-display text-lg font-bold cursor-pointer"
          aria-label="Previous Slide"
        >
          &lt;
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-6 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/60 border border-gold/20 text-gold hover:bg-gold hover:text-black hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md transition-all font-display text-lg font-bold cursor-pointer"
          aria-label="Next Slide"
        >
          &gt;
        </button>
      </div>

      {/* POPUP LIGHTBOX MODAL */}
      {selectedImage !== null && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 cursor-zoom-out"
        >
          {/* Kontainer Popup */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center gap-4 cursor-default"
          >
            {/* Gambar Rasio Asli / Proporsional */}
            <div className="relative w-full h-[75vh]">
              <Image 
                src={`/galeri_${selectedImage}.webp`}
                alt={`Dokumentasi Alfest ${selectedImage} Full`}
                fill
                className="object-contain rounded-2xl"
                sizes="100vw"
                priority
              />
            </div>

            {/* Tombol Close (Direposisi ke Tengah Bawah) */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="z-50 px-6 py-2.5 rounded-full bg-[#0d1322]/20 backdrop-blur-xl border border-white/20 text-gold hover:bg-gold hover:text-bg-1 font-display font-bold text-sm tracking-wider flex items-center gap-2 shadow-xl backdrop-blur-xl transition-all cursor-pointer"
            >
              <span>✕</span> Tutup
            </button>
          </div>
        </div>
      )}

    </div>
  );
}