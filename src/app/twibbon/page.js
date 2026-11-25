"use client";

import { useState, useRef, useEffect } from "react";

export default function TwibbonPage() {
  const [role, setRole] = useState("peserta");
  const [userImgObj, setUserImgObj] = useState(null); // Simpan objek Image yang sudah loaded
  const [frameImgObj, setFrameImgObj] = useState(null); // Simpan objek Frame yang sudah loaded
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const canvasRef = useRef(null);
  const lastPointerPos = useRef({ x: 0, y: 0 });

  const frameSrc =
    role === "peserta" ? "/twibbon_peserta.png" : "/twibbon_panitia.png";

  // 1. Preload gambar frame twibbon hanya saat role berubah (anti-flicker)
  useEffect(() => {
    const img = new Image();
    img.src = frameSrc;
    img.onload = () => setFrameImgObj(img);
  }, [frameSrc]);

  // 2. Render canvas secara instan dari objek gambar yang sudah di-cache di memori
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const size = 1080;

    if (canvas.width !== size) canvas.width = size;
    if (canvas.height !== size) canvas.height = size;

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "#FAF7F2";
    ctx.fillRect(0, 0, size, size);

    if (userImgObj) {
      const baseScale = Math.max(
        size / userImgObj.width,
        size / userImgObj.height
      );
      const finalScale = baseScale * scale;

      const drawWidth = userImgObj.width * finalScale;
      const drawHeight = userImgObj.height * finalScale;

      const offsetX = (size - drawWidth) / 2 + position.x;
      const offsetY = (size - drawHeight) / 2 + position.y;

      ctx.drawImage(userImgObj, offsetX, offsetY, drawWidth, drawHeight);
    }

    if (frameImgObj) {
      ctx.drawImage(frameImgObj, 0, 0, size, size);
    }
  }, [userImgObj, frameImgObj, scale, position]);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      img.onload = () => {
        setUserImgObj(img);
        setScale(1);
        setPosition({ x: 0, y: 0 });
      };
    };
    reader.readAsDataURL(file);
  };

  // 3. Mekanisme Drag berbasis Delta & Pointer Capture (1:1 akurat dengan jari/kursor)
  const handlePointerDown = (e) => {
    if (!userImgObj) return;
    e.currentTarget.setPointerCapture(e.pointerId); // Kunci pointer meski keluar area box
    setIsDragging(true);
    lastPointerPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e) => {
    if (!isDragging || !userImgObj || !canvasRef.current) return;

    // Hitung rasio skala asli canvas (1080) dibanding ukuran tampil di layar
    const rect = canvasRef.current.getBoundingClientRect();
    const ratio = 1080 / rect.width;

    // Hitung selisih perpindahan dari frame sebelumnya
    const deltaX = (e.clientX - lastPointerPos.current.x) * ratio;
    const deltaY = (e.clientY - lastPointerPos.current.y) * ratio;

    lastPointerPos.current = { x: e.clientX, y: e.clientY };

    setPosition((prev) => ({
      x: prev.x + deltaX,
      y: prev.y + deltaY,
    }));
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    e.currentTarget.releasePointerCapture(e.pointerId);
    setIsDragging(false);
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `twibbon-${role}-AlbinaaFestival2027.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <main className="min-h-screen bg-[#F5EFE6] text-neutral-800 font-sans py-10 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-md w-full text-center mb-6 mt-15">
        <a className="inline-block px-3 py-1 mb-2 text-xs font-semibold rounded-full bg-[#DDD6FE] border border-black/60">
          albinaafestival.id
        </a>
        <h1 className="text-3xl font-bold tracking-tight">Buat Twibbon‼️</h1>
        <p className="text-sm text-neutral-600 mt-1">
          Pilih kategori, ambil atau unggah foto, lalu atur posisinya.
        </p>
      </div>

      {/* Card Utama */}
      <div className="max-w-md w-full bg-[#FAF7F2] border-2 border-black/60 rounded-3xl p-5 shadow-[4px_4px_0px_rgba(0,0,0,0.6)] space-y-5">
        {/* Pilihan Role */}
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setRole("peserta")}
            className={`py-2.5 px-4 rounded-2xl font-semibold text-sm border border-black/60 transition cursor-pointer ${
              role === "peserta"
                ? "bg-[#FEF08A] shadow-[2px_2px_0px_rgba(0,0,0,0.6)]"
                : "bg-white/70 hover:bg-[#FEF08A]/40"
            }`}
          >
            Peserta
          </button>
          <button
            type="button"
            onClick={() => setRole("panitia")}
            className={`py-2.5 px-4 rounded-2xl font-semibold text-sm border border-black/60 transition cursor-pointer ${
              role === "panitia"
                ? "bg-[#DDD6FE] shadow-[2px_2px_0px_rgba(0,0,0,0.6)]"
                : "bg-white/70 hover:bg-[#DDD6FE]/40"
            }`}
          >
            Panitia
          </button>
        </div>

        {/* Preview Canvas */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          className="relative w-full aspect-square rounded-2xl overflow-hidden border-2 border-black/60 bg-[#EFE9DF] cursor-grab active:cursor-grabbing select-none touch-none"
        >
          <canvas ref={canvasRef} className="w-full h-full object-contain pointer-events-none" />
          {!userImgObj && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="bg-white/90 px-3 py-1.5 rounded-xl text-xs font-medium border border-black/60">
                pilih foto dulu!
              </span>
            </div>
          )}
        </div>

        {/* Kontrol Zoom & Reset */}
        {userImgObj && (
          <div className="bg-white/80 p-3 rounded-2xl border border-black/60 space-y-2">
            <div className="flex justify-between items-center text-xs font-semibold">
              <span>Perbesar / Perkecil (Zoom)</span>
              <div className="flex items-center gap-2">
                <span>{Math.round(scale * 100)}%</span>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-[11px] px-2 py-0.5 rounded-lg bg-neutral-200 hover:bg-neutral-300 border border-black/40 cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>
            <input
              type="range"
              min="0.5"
              max="2.5"
              step="0.02"
              value={scale}
              onChange={(e) => setScale(parseFloat(e.target.value))}
              className="w-full accent-neutral-800 cursor-pointer"
            />
            <p className="text-[11px] text-neutral-500 text-center">
              Geser langsung pada gambar untuk mengatur posisi foto
            </p>
          </div>
        )}

        {/* Tombol Aksi */}
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-2">
            <label className="py-3 px-3 rounded-2xl bg-[#FEF08A] hover:bg-[#FDE047] border border-black/60 font-semibold text-xs text-center cursor-pointer transition shadow-[2px_2px_0px_rgba(0,0,0,0.6)] active:translate-y-0.5 flex items-center justify-center">
              📸 Ambil Foto
              <input
                type="file"
                accept="image/*"
                capture="user"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>

            <label className="py-3 px-3 rounded-2xl bg-[#DDD6FE] hover:bg-[#C4B5FD] border border-black/60 font-semibold text-xs text-center cursor-pointer transition shadow-[2px_2px_0px_rgba(0,0,0,0.6)] active:translate-y-0.5 flex items-center justify-center">
              📁 Dari Galeri
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            disabled={!userImgObj}
            className="w-full py-3 px-4 rounded-2xl bg-neutral-900 text-white hover:bg-neutral-800 disabled:opacity-40 disabled:cursor-not-allowed border border-black/60 font-bold text-sm transition shadow-[2px_2px_0px_rgba(0,0,0,0.6)] active:translate-y-0.5 cursor-pointer"
          >
            Download Twibbon
          </button>
        </div>
      </div>
    </main>
  );
}