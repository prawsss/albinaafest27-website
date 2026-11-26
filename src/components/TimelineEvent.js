'use client';
import React, { useState, useEffect } from 'react';

// ==================== DATA CONFIGURATION ====================
const timelineData = [
  { 
    name: "Technical Meeting", 
    label: "05 Feb", 
    pos: "col-start-4 col-end-5", 
    color: "from-blue-900/80 to-indigo-950/80 border-blue-500/40 text-white",
    imgActive: "/images/tm.png",
    deskripsi: "Technical Meeting bersama perwakilan seluruh tim secara daring untuk membahas regulasi, jadwal tanding, dan pembagian bagan kompetisi.",
    status: "none"
  },
  { 
    name: "Opening Alfest", 
    label: "10 Jan 2027", 
    pos: "col-start-5 col-end-6", 
    color: "from-emerald-900/80 to-teal-950/80 border-emerald-500/40 text-white",
    imgActive: "/images/opening.png",
    deskripsi: "Upacara pembukaan megah Albinaa Festival 2027 di Gedung Mustaqbal. Dimeriahkan oleh penampilan seni, parade kontingen, dan peresmian simbolis.",
    status: "none"
  },
  { 
    name: "Alfest Bazar & Art Exhibition", 
    label: "10 - 12 Jan", 
    pos: "col-start-5 col-end-8", 
    color: "from-purple-950/80 to-indigo-950/80 border-purple-500/40 text-white",
    imgActive: "/images/bazar.png",
    deskripsi: "Festival kuliner, pameran barang antik, lelang karya, dan stand interaktif di Lapangan Aljasadul Wahid selama 3 hari penuh.",
    status: "arrow"
  },
  { 
    name: "Alimpiad & Alympic Match", 
    label: "10 - 13 Jan", 
    pos: "col-start-5 col-end-9", 
    color: "from-red-950/80 to-rose-950/80 border-red-500/40 text-white",
    imgActive: "/images/final.png",
    deskripsi: "Pelaksanaan perlombaan utama tingkat nasional baik secara luring maupun daring untuk cabang Olahraga, Ilmiah, dan Alympic SD/SMA.",
    status: "arrow"
  },
  { 
    name: "Alfest Talk & Closing", 
    label: "13 Jan 2027", 
    pos: "col-start-9 col-end-10", 
    color: "from-amber-500 to-yellow-600 border-gold text-slate-950 font-semibold",
    imgActive: "/images/closing.png",
    deskripsi: "Talkshow inspiratif bersama guest star (Prof. Zulys, Ulyn Nuha Muslim, Dr. Andy Octavian Latief, Sadam Permana), penutupan resmi, serta penganugerahan piala juara umum.",
    status: "none"
  }
];

const timelineColumns = [
  { label: "20/11 - 4/12" },
  { label: "4/12 - 27/12" },
  { label: "28/12 - 27/1" },
  { label: "05/02" },
  { label: "10/01" },
  { label: "11/01" },
  { label: "12/01" },
  { label: "13/01" },
  { label: "21-22 Apr" },
  { label: "Ramadhan" }
];

export default function TimelineEvent() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [todayPosition, setTodayPosition] = useState('48%');

  useEffect(() => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();

    if (currentMonth === 11) {
      setTodayPosition('5%');
    } else if (currentMonth === 12) {
      setTodayPosition('20%');
    } else if (currentMonth === 1) {
      setTodayPosition('35%');
    } else if (currentMonth === 4) {
      setTodayPosition('85%');
    } else {
      setTodayPosition('50%');
    }
  }, []);

  return (
    <div className="w-full text-[var(--text-main)] py-6 font-sans relative">
      <div className="w-full bg-[var(--bg-main)]/90 rounded-xl border border-[var(--gold)]/30 p-4 md:p-6 overflow-x-auto backdrop-blur-sm relative shadow-2xl">
        <div className="min-w-[1000px] relative">
          
          {/* BACKGROUND GRID LINES */}
          <div className="absolute inset-0 grid grid-cols-10 pointer-events-none z-0 opacity-15">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="border-r border-dashed border-[var(--gold)] h-full w-full"></div>
            ))}
          </div>

          {/* DINAMIS POINTER HARI INI */}
          <div 
            style={{ left: todayPosition }}
            className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--gold-light)] via-[var(--gold)] to-transparent pointer-events-none z-30 shadow-[0_0_15px_var(--gold-light)] flex flex-col items-center transition-all duration-1000"
          >
            <div className="w-3 h-3 rounded-full bg-[var(--gold-light)] border-2 border-white shadow-[0_0_10px_white] animate-ping"></div>
            <div className="bg-[var(--gold)] text-[9px] text-slate-950 font-sans font-bold px-2 py-0.5 rounded shadow-lg mt-1 whitespace-nowrap tracking-wider border border-[var(--gold-light)]">
              LIVE NOW
            </div>
          </div>

          {/* Header Tanggal */}
          <div className="grid grid-cols-10 gap-2 border-b border-[var(--gold)]/20 pb-4 mb-6 text-center text-xs tracking-wider relative z-10">
            {timelineColumns.map((col, idx) => (
              <div key={idx} className="bg-[var(--bg-card)] py-3 px-1 rounded-sm border border-[var(--gold)]/20 flex items-center justify-center shadow-inner">
                <div className="font-bold text-[var(--gold)] text-xs md:text-sm tracking-wide drop-shadow">{col.label}</div>
              </div>
            ))}
          </div>

          {/* Baris Grid Event */}
          <div className="space-y-5 relative z-10">
            {timelineData.map((event, idx) => {
              const isActive = selectedEvent?.name === event.name;

              return (
                <div key={idx} className="grid grid-cols-10 gap-2 items-center">
                  <div 
                    onClick={() => setSelectedEvent(event)}
                    style={{ clipPath: 'polygon(0% 0%, 97% 0%, 100% 50%, 97% 100%, 0% 100%)' }}
                    className={`p-3 bg-gradient-to-r ${event.color} border ${event.pos} shadow-xl hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-between pr-8 relative overflow-hidden group ${
                      isActive ? 'ring-2 ring-[var(--gold-light)] scale-[1.01] z-20 brightness-125' : 'border-l-4 border-white/40'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></div>

                    <div className="truncate text-left">
                      <div className="font-bold font-sans text-sm truncate drop-shadow-md tracking-wide">
                        {event.name}
                      </div>
                      <div className="text-[11px] opacity-90 font-medium tracking-tight mt-0.5">{event.label}</div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      {event.status === "ended" && (
                        <span className="text-[9px] bg-black/60 text-red-400 border border-red-500/50 font-black px-1.5 py-0.5 rounded tracking-widest uppercase shadow-md animate-pulse">
                          ENDED
                        </span>
                      )}
                      {event.status === "arrow" && (
                        <span className="text-[var(--gold-light)] font-black text-sm drop-shadow-[0_0_5px_var(--gold)] animate-bounce">
                          ➔
                        </span>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* MODAL DETAIL POPUP */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[var(--bg-card)] border border-white/20 max-w-md w-full rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.8)] animate-in fade-in zoom-in-95 duration-150">
            
            <div className="w-full h-44 bg-slate-950 relative">
              <img 
                src={selectedEvent.imgActive} 
                alt={selectedEvent.name} 
                className="w-full h-full object-cover opacity-90"
                onError={(e) => { e.target.src = "/favicon.png" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-black/20"></div>
              
              <div className="absolute bottom-3 left-4 right-4">
                <span className="text-[10px] font-black font-sans text-slate-950 bg-[var(--gold-light)] px-2 py-0.5 rounded border border-[var(--gold)] tracking-wider uppercase">
                  {selectedEvent.label}
                </span>
                <h3 className="text-xl font-black mt-1.5 text-[var(--text-main)] tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {selectedEvent.name}
                </h3>
              </div>
            </div>

            <div className="p-6 text-left">
              <p className="text-sm text-[var(--text-muted)] leading-relaxed min-h-[70px] pl-3">
                {selectedEvent.deskripsi}
              </p>
              
              <button 
                onClick={() => setSelectedEvent(null)}
                className="mt-6 w-full py-3 bg-gradient-to-r from-[var(--gold)] to-[var(--gold-light)] hover:brightness-110 text-slate-950 font-black text-sm rounded-xl shadow-lg border-b-4 active:scale-[0.98] transition-all tracking-widest text-center uppercase"
              >
                OK
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}