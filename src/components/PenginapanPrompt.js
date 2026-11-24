'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PenginapanPrompt() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Sembunyikan prompt jika user sudah berada di halaman penginapan/akomodasi
    if (pathname?.includes('/competition/akomodasi') || pathname?.includes('/competition/akomodasi')) {
      setIsOpen(false);
      setIsMinimized(false);
      return;
    }

    // Cek apakah sebelumnya user pernah men-dismiss popup di sesi ini
    const dismissed = sessionStorage.getItem('alfest_penginapan_dismissed');
    if (dismissed === 'true') {
      setIsMinimized(true);
    } else {
      // Munculkan popup otomatis setelah 1.5 detik
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleDismiss = () => {
    setIsOpen(false);
    setIsMinimized(true);
    sessionStorage.setItem('alfest_penginapan_dismissed', 'true');
  };

  const handleReopen = () => {
    setIsMinimized(false);
    setIsOpen(true);
  };

  // Jangan render apa-apa jika sedang di halaman tujuannya
  if (pathname?.includes('/competition/akomodasi') || pathname?.includes('/competition/akomodasi')) {
    return null;
  }

  return (
    <>
      {/* 1. MODAL / POPUP UTAMA */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 font-sans">
          <div className="bg-bg-card border-2 border-gold/20 max-w-md w-full rounded-3xl p-6 md:p-8 shadow-[0_0_30px_rgba(212,175,55,0.25)] relative overflow-hidden text-text-main">
            
            {/* Tombol Close / Minimize (X) */}
            <button
              onClick={handleDismiss}
              aria-label="Tutup popup"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[var(--text-muted)] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>
            {/* Badge */}
            <a 
            href="https://maps.app.goo.gl/rzMCC1KU8oAqQ7496"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-950 bg-[var(--gold-light)] px-3 py-1 rounded-full mb-3">
              <u>Info Albinaa Inn klik disini‼️</u>
            </a>

            {/* Judul */}
            <h3 className="font-display text-xl md:text-2xl font-bold text-[var(--gold-light)] tracking-wide mb-2">
              Butuh Penginapan Selama Albinaa Festival 2027?
            </h3>

            {/* Deskripsi */}
            <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
              Panitia menyediakan fasilitas akomodasi <strong className="text-white">gratis (kuota terbatas 12 kamar)</strong> khusus kontingen Ikhwan dari luar daerah (jarak min. 50 km). Cek syarat, fasilitas, dan cara booking-nya sekarang!
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/competition/akomodasi"
                onClick={() => setIsOpen(false)}
                className="flex-1 py-3 px-4 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] hover:brightness-110 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl text-center shadow-lg transition-all"
              >
                Cek Info Penginapan
              </Link>
              <button
                onClick={handleDismiss}
                className="py-3 px-4 bg-white/5 hover:bg-white/10 border border-[var(--gold)]/30 text-[var(--text-muted)] hover:text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Nanti Saja
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. FLOATING BUTTON POJOK KIRI BAWAH (SAAT DI-DISMISS) */}
      {isMinimized && !isOpen && (
        <div className="fixed bottom-5 left-5 z-40 flex items-center gap-2 font-sans animate-in slide-in-from-bottom-5 duration-300">
          <Link
            href="/competition/akomodasi"
            className="flex items-center gap-2.5 bg-[var(--bg-card)]/95 hover:bg-[var(--bg-card)] text-[var(--gold-light)] border border-[var(--gold)]/60 hover:border-[var(--gold-light)] px-4 py-3 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all transform hover:scale-105 group"
          >
            <div className="text-left">
              <div className="text-[11px] font-bold uppercase tracking-wider leading-none text-white group-hover:text-[var(--gold-light)] transition-colors">
                Info Penginapan
              </div>
              <div className="text-[9px] text-[var(--text-muted)] mt-0.5">
                Kuota Terbatas • Klik untuk cek
              </div>
            </div>
          </Link>

          {/* Tombol kecil untuk buka ulang popup */}
          <button
            onClick={handleReopen}
            title="Lihat detail pengumuman"
            className="w-7 h-7 rounded-full bg-[var(--bg-card)] border border-[var(--gold)]/40 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-slate-950 flex items-center justify-center text-xs shadow-md transition-colors cursor-pointer"
          >
            ?
          </button>
        </div>
      )}
    </>
  );
}