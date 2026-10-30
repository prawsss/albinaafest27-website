"use client";

import TimelineEvent from '../components/TimelineEvent';
import Image from "next/image"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ContactWidget from "../components/ContactWidget";
import EventGrid from "../components/EventGrid";
import GalleryCarousel from "../components/GalleryCarousel";

export default function Home() {
  const TARGET_DATE = "2027-01-09T00:00:00";

  const [timeLeft, setTimeLeft] = useState({
    Hari: "00",
    Jam: "00",
    Menit: "00",
    Detik: "00",
  });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const target = new Date(TARGET_DATE).getTime();

    const elementsToAnimate = document.querySelectorAll('.fade-up-element');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        } else {
          entry.target.classList.remove('appear');
        }
      });
    }, observerOptions);

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        Hari: d < 10 ? `0${d}` : `${d}`,
        Jam: h < 10 ? `0${h}` : `${h}`,
        Menit: m < 10 ? `0${m}` : `${m}`,
        Detik: s < 10 ? `0${s}` : `${s}`,
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      elementsToAnimate.forEach(element => observer.unobserve(element));
    };
  }, []);

  const eventsData = [
    { 
      nama: "Alimpiad ILMIAH", 
      desc: "Kompetisi akademik untuk siswa SMA", 
      imgKey: "olimpiade_sma",
      sectionId: "alimpiad-sma"
    },
    { 
      nama: "Alimpiad SPORT", 
      desc: "Kompetisi olahraga untuk siswa SMA", 
      imgKey: "cover_futsal",
      sectionId: "sport"
    },
    { 
      nama: "Alympic", 
      desc: "Kompetisi akademik dan sport untuk siswa SD", 
      imgKey: "olimpiade_sd",
      sectionId: "alympic-sd"
    },
  ];

  return (
    <main className="min-h-screen w-full text-text-main relative">
      
      {/* 1. HERO SECTION */}
      <div className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden z-10">
        <Image
          src="/hero_anjay.webp" 
          alt="Alfest 2027 Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-1/70 via-bg-1/40 to-bg-1/90 backdrop-blur-[2px]" />

        <div className="relative z-10 flex flex-col items-center gap-6 px-4 w-full max-w-4xl pt-16">
          <p className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-display font-semibold">
            WELCOME TO
          </p>

          <div className="select-none">
            <h1 className="font-display text-4xl md:text-7xl lg:text-8xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-600 drop-shadow-md mb-2">
              ALBINAA FESTIVAL
            </h1>
          </div>

          <h2 className="font-display text-xl md:text-2xl font-bold text-gold/80 tracking-widest uppercase">
            - 2027 -
          </h2>

          <p className="text-sand text-base md:text-xl max-w-md font-display italic tracking-wider">
            "Chase The Gold, Shine The World"
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              href="/competition"
              className="bg-linear-to-r from-gold to-gold-light text-bg-1 px-8 py-3.5 rounded-full font-display font-bold tracking-wider uppercase text-xs cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-gold-glow inline-block text-center"
            >
              Daftar Sekarang
            </Link>
            <button
              onClick={() => {
                const element = document.getElementById("tentang-kami");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-sand border border-gold/40 px-8 py-3.5 rounded-full font-display font-semibold tracking-wider uppercase text-xs cursor-pointer transition-all duration-300 transform hover:scale-105 inline-block text-center"
            >
              Tentang Kami
            </button>
          </div>

          <a
            href="https://maps.app.goo.gl/cr8cgRvFsaWW2uZP9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-muted hover:text-gold-light transition-all duration-300 group mt-2"
          >
            <span className="transition-transform duration-300 group-hover:scale-125">
              🗺️
            </span>
            <span className="text-sm font-sans tracking-wide underline underline-offset-4 decoration-text-muted/30 group-hover:decoration-gold-light">
              Albinaa IBS, Bekasi
            </span>
          </a>

          {/* COUNTDOWN TIMER */}
          <div className="flex flex-col items-center gap-3 mt-4">
            <span className="font-display text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gold">
              COUNTDOWN TO ALBINAA FESTIVAL 2027
            </span>

            <div className="flex gap-4 md:gap-8 bg-linear-to-t from-[#957b00]/40 to-black/50 backdrop-blur-xl border border-white/30 rounded-2xl px-6 py-4 md:px-10 shadow-2xl">
              {[
                [isMounted ? timeLeft.Hari : "00", "Hari"],
                [isMounted ? timeLeft.Jam : "00", "Jam"],
                [isMounted ? timeLeft.Menit : "00", "Menit"],
                [isMounted ? timeLeft.Detik : "00", "Detik"],
              ].map(([val, label]) => (
                <div key={label} className="flex flex-col items-center min-w-[50px]">
                  <span className="text-3xl md:text-4xl font-bold text-gold-light font-display tracking-normal">
                    {val}
                  </span>
                  <span className="text-[10px] text-text-muted uppercase tracking-widest mt-1 font-sans font-semibold">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* 2. ABOUT SECTION (Menggunakan Card Sand Terang / Foreground Kontras) */}
      <section id="tentang-kami" className="relative py-28 px-6 md:px-12 z-20">
        <div className="max-w-6xl mx-auto rounded-[2.5rem] bg-sand text-bg-1 p-8 md:p-16 shadow-card-sand">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-amber-800 text-xs md:text-sm tracking-[0.3em] uppercase font-display font-bold">
                Tentang Kami
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-bg-1 tracking-wide">
                What's Alfest?
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm md:text-base font-sans">
                Albinaa Festival adalah ajang kompetisi bergengsi tingkat nasional yang mempertemukan pelajar tingkat SD dan SMA dari berbagai daerah di Indonesia. Bertujuan untuk menjadi sarana bagi para siswa mengasah potensi, menguji ketangkasan, memupuk jiwa sportivitas, serta membangun iklim kompetisi yang sehat dan islami.
              </p>
              <p className="font-display text-amber-900 text-2xl md:text-3xl font-bold italic">
                "Chase the Gold, Shine the World"
              </p>
            </div>

            <div className="w-full overflow-hidden rounded-2xl shadow-lg">
              <GalleryCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* 2B. YOUTUBE TRAILER SECTION */}
      <section className="relative py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="text-center">
            <p className="text-gold text-xs font-display tracking-[0.3em] uppercase mb-2">Official Media</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-main">
              Albinaa Festival Trailer
            </h2>
          </div>
          
          <div className="w-full aspect-video rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-black/40 backdrop-blur-xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/t_D1HQrHCFg"
              title="Alfest Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 2C. OUR SPONSORS SECTION */}
      <section className="relative py-16 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-text-main tracking-widest uppercase">
              Our Sponsors
            </h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4 opacity-60" />
          </div>

          <div className="w-full bg-black/30 backdrop-blur-md rounded-3xl border border-gold/20 p-8 md:p-12 shadow-xl flex justify-center items-center overflow-hidden">
            <img
              src="/sponsors_compiled.webp"
              alt="Alfest Event Sponsors"
              className="w-full h-auto object-contain max-h-48 md:max-h-64 filter brightness-90 contrast-125"
            />
          </div>
        </div>
      </section>

      {/* 3. OUR EVENTS SECTION */}
      {/* 3. OUR EVENTS SECTION */}
{/* 3. OUR EVENTS SECTION */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
          <div className="text-center">
            <p className="text-gold text-xs font-display tracking-[0.3em] uppercase mb-2">Championship Categories</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text-main">
              Our Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-center">
            {eventsData.map((event) => (
              <div 
                key={event.nama} 
                className="relative w-full h-96 rounded-3xl overflow-hidden group cursor-pointer bg-[#0d1322] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(212,175,55,0.3)]"
              >
                <Link href={`/competition#${event.sectionId}`} className="block w-full h-full relative z-0">
                  {/* Background Image dengan efek transparan halus */}
                  <img 
                    src={`/${event.imgKey}.webp`}
                    alt={event.nama}
                    className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  {/* Gradien Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-[#070913]/70 to-transparent" />
                  
                  {/* Konten Card */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8 z-10 text-center gap-4">
                    {/* Logo / Icon Bulat dengan efek Glow */}
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center overflow-hidden backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.2)] mb-2 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300">
                      <img 
                        src={`/logo_${event.imgKey}.png`} 
                        alt="Icon" 
                        className="w-9 h-9 object-contain"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>

                    <h3 className="font-display text-gold-light font-bold text-2xl tracking-wide">
                      {event.nama}
                    </h3>
                    <p className="text-text-muted text-xs md:text-sm max-w-xs font-sans leading-relaxed">
                      {event.desc}
                    </p>

                    <span className="mt-2 inline-flex items-center gap-1 text-xs font-display font-semibold tracking-wider text-gold uppercase group-hover:translate-x-1 transition-transform">
                      Lihat Detail &rarr;
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="w-full">
            <EventGrid />
          </div>
        </div>

        {/* SEKSI TIMELINE */}
        <div className="w-full mt-20">
          <TimelineEvent /> 
        </div>
      </section> 

      {/* READY SECTION */}
      <div className="select-none text-center py-16">
        <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-yellow-600">
          READY FOR ALBINAA FESTIVAL?
        </h2>
      </div>

      <ContactWidget />
    </main>
  );
}