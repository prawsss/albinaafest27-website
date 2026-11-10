"use client";

import React from "react";
import Image from "next/image";
import ContactWidget from "@/components/ContactWidget";

export default function PhilanthropyPage() {
  // Array data foto untuk galeri otomatis. 
  const galleryImages = [
    { src: "/baksos (1).webp", alt: "Penyaluran Sembako Albinaa Festival" },
    { src: "/baksos (2).webp", alt: "Interaksi Bersama Anak Yatim" },
    { src: "/baksos (3).webp", alt: "Pembagian Alat Tulis Kreatif" },
    { src: "/baksos (1).webp", alt: "Penyaluran Sembako Albinaa Festival" },
  ];

  return (
    <div className="relative min-h-screen text-[#f5f0e8] px-4 sm:px-6 pt-28 md:pt-36 pb-16 md:pb-24 font-sans overflow-hidden">
      
      {/* GLOBAL PACKAGED BACKGROUND SYSTEM */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/stardust.webp"
          alt="Page Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      {/* Main Container Content Wrapper */}
      <div className="relative z-10 max-w-4xl mx-auto space-y-16">
        
        {/* 1. HERO HEADER WITH SHIMMER */}
        <div className="text-center space-y-5">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-[#d4af37] uppercase bg-white/5 border border-white/10 px-4 py-1.5 rounded-full inline-block">
            Social & Community Development Albinaa Festival 2027
          </span>
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#d4af37] py-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            BAKTI SOSIAL ALBINAA FESTIVAL 
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Bentuk kepedulian nyata panitia dan seluruh peserta Albinaa Festival untuk berbagi kebahagiaan bersama saudara-saudara kita yang membutuhkan di wilayah lingkar luar masyarakat.
          </p>
        </div>

        {/* 2. AUTOMATICALLY ROLLING GALLERY (FIXED: Added flex & w-max) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <h4 className="text-sm font-bold tracking-wider text-[#f3e5ab] uppercase font-display" style={{ fontFamily: "var(--font-display)" }}>
              Dokumentasi Aksi Nyata
            </h4>
          </div>
          
          {/* Container Luar dengan Masking Gradient Blur Kiri & Kanan */}
          <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-[#070913] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-[#070913] after:to-transparent">
            {/* PERBAIKAN DI SINI: Ditambahkan flex dan w-max agar menyamping */}
            <div className="flex w-max animate-scroll gap-4 py-2">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  className="relative w-64 h-40 md:w-80 md:h-48 rounded-2xl overflow-hidden border border-white/10 bg-black/40 shrink-0 shadow-lg group hover:border-[#d4af37]/40 transition-colors"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10">
                    <p className="text-xs md:text-sm text-slate-100 font-medium">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. STATS / INFO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Card 1 */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center min-h-[160px] flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(212,175,55,0.15)]">
            <div className="space-y-2">
              <div className="relative w-7 h-7 mx-auto opacity-80">
                <Image 
                  src="/persons.png"
                  alt="persons Icon"
                  fill
                  className="object-contain invert brightness-200"
                />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Target Penyaluran
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center pt-3">
              <p className="text-lg font-bold text-slate-100 leading-snug">
                Yatim Piatu & Dhuafa
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center min-h-[160px] flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(212,175,55,0.15)]">
            <div className="space-y-2">
              <div className="relative w-7 h-7 mx-auto opacity-80">
                <Image 
                  src="/target.png"
                  alt="target Icon"
                  fill
                  className="object-contain invert brightness-200"
                />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Fokus Bantuan
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center pt-3">
              <p className="text-lg font-bold text-slate-100 leading-snug">
                Sembako & Alat Tulis
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center min-h-[160px] flex flex-col justify-between shadow-[0_10px_30px_-10px_rgba(212,175,55,0.15)]">
            <div className="space-y-2">
              <div className="relative w-7 h-7 mx-auto opacity-80">
                <Image 
                  src="/location.png"
                  alt="Location Icon"
                  fill
                  className="object-contain invert brightness-200" 
                />
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Lokasi Kegiatan
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center pt-3">
              <p className="text-lg font-bold text-slate-100 leading-snug">
                Pebayuran, Bekasi dan Daerah lainnya di Indonesia 
              </p>
            </div>
          </div>

        </div>

        {/* 4. DETAILS EXPANSION */}
        <div className="w-full flex flex-col items-center justify-center text-center py-6 px-4">
          <div className="max-w-2xl w-full flex flex-col items-center justify-center text-center space-y-4">
            
            <h3 
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-wide text-center" 
              style={{ fontFamily: "var(--font-display)" }}
            >
              Pengabdian pada Masyarakat
            </h3>
            
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed opacity-95 text-center max-w-xl font-sans">
             Pengabdian pada masyarakat atau P2M adalah salah satu rangkaian dari acara bakti sosial dimana anggota dari Jam’iyyah Tholabah (OSIS) terjun langsung ke tengah masyarakat dan memberikan pengabdian berupa mengajar, melayani dan mengabdi pada masyarakat selama 2 hari 1 malam dan berlokasi di Kecamatan Cabangbungin, Kabupaten Bekasi, Jawa Barat. Kami berharap Dengan Pelaksanaan kegiatan ini dapat memberi pengalaman dan pelajaran mengenai kehidupan masyarakat secara lansgung dapat memberi juga menyalurkan bantuan kepada masyarakat sekitar lokasi kegiatan ini berlangsung.
            </p>

            <h3 
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-wide text-center mt-6" 
              style={{ fontFamily: "var(--font-display)" }}
            >
              JAMTHOL BERBAGI
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed opacity-95 text-center max-w-xl font-sans">
             Jam’iyyah Tholabah berbagi adalah salah satu rangkaian bakti sosial dimana para penggurus Jam’iyyah Tholabah (OSIS) disebar ke tujuh region di dalam maupun luar negeri. Dilaksanakan pada saat bulan ramadhan bertempat di region masing masing penggurus, Jam’iyyah Tholabah Berbagi bertujuan menebar kebaikan di bulan penuh berkah. Harapannya Jam’iyyah Tholabah dapat memainkan peran penting dan memahami kondisi masyarakat di sekitar tempat tinggalnya.
            </p>

          </div>
        </div>

        {/* 5. DONATION METRICS & INTERACTIVE QRIS SECTION 
        <div className="bg-black/50 border border-white/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-[0_10px_30px_-10px_rgba(212,175,55,0.2)] relative backdrop-blur-md">
          <div className="border-b border-white/10 pb-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-[#d4af37] font-display" style={{ fontFamily: "var(--font-display)" }}>Salurkan Donasi Anda</h3>
            <p className="text-sm text-slate-300 mt-1">Setiap kontribusi kecil Anda membawa senyuman dan harapan besar bagi kehidupan mereka.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 group hover:border-[#d4af37]/30 transition-all">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Bank Transfer (Bank Syariah Indonesia / BSI)</p>
                <p className="text-2xl font-black text-slate-100 mt-1.5 tracking-wide group-hover:text-[#f3e5ab] transition-colors">7123 4567 89</p>
                <p className="text-sm text-slate-400 mt-0.5">a.n. Panitia Albinaa Festival Philanthropy</p>
              </div>
              
              <div className="text-sm text-slate-300 leading-relaxed bg-[#d4af37]/10 p-4 rounded-xl border border-[#d4af37]/20">
                <span className="font-bold text-[#f3e5ab] block mb-1">💡 Catatan Konfirmasi Penting:</span> 
                Mohon tambahkan kode unik <span className="text-white font-bold">012</span> di akhir nominal transfer Anda (Contoh: <span className="text-[#f3e5ab] font-bold">Rp 100.012</span>). Kode ini digunakan untuk memisahkan dana pendaftaran lomba umum dengan saldo kemanusiaan baksos.
              </div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative p-3 bg-white rounded-2xl w-full max-w-[220px] aspect-square shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-white/10">
                <Image
                  src="/qris-donasi.webp"
                  alt="QRIS Albinaa Festival Philanthropy"
                  fill
                  sizes="(max-width: 768px) 100vw, 220px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <p className="text-xs md:text-sm text-slate-300 text-center tracking-wider font-semibold uppercase">
                ▲ Scan QRIS menggunakan e-wallet & m-banking
              </p>
            </div>
          </div>
        </div> */}

      </div>
      <ContactWidget />
    </div>
  );
}