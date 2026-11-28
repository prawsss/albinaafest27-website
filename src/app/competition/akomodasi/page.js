import React from 'react';
import ContactWidget from "@/components/ContactWidget";

export const metadata = {
  title: "Ketentuan & Tata Tertib Penginapan | Albinaa Festival 2027",
  description: "Informasi lengkap mengenai fasilitas, ketentuan, tata tertib, serta prosedur check-in dan check-out penginapan peserta Albinaa Festival 2027.",
};

export default function PenginapanPage() {
  return (
    <main className="min-h-screen bg-bg-main text-(--text-main) font-sans py-12 px-4 md:px-8">
      
      <div className="max-w-5xl mx-auto space-y-12">

        {/* HEADER SECTION */}
        <div className="text-center space-y-4">
          <a 
          href="https://maps.app.goo.gl/rzMCC1KU8oAqQ7496"
          target="_blank"
          rel="noopener noreferrer"
          className="text-md uppercase tracking-[0.3em] font-semibold text-gold block mt-20"
          >
            <u>info ALBINAA INN klik disini!!!</u>
          </a>
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wider text-gold-lightdrop-shadow-md">
            Ketentuan dan Tata Tertib Penginapan
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-sm md:text-base text-(--text-muted) max-w-2xl mx-auto text-justify md:text-center pt-2">
            Akomodasi penginapan disediakan bagi peserta selama pelaksanaan Albinaa Festival dengan ketersediaan unit terbatas sebanyak <strong className="text-gold">12 kamar</strong>.
          </p>
        </div>

        {/* KETENTUAN UMUM CARD */}
        <section className="bg-sand text-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-2xl border border-gold/40 relative overflow-hidden">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-[#1a1a1a] mb-6 border-b border-gold/30 pb-3">
            Ketentuan Umum Penginapan
          </h2>
          <ul className="space-y-4 text-base md:text-lg leading-relaxed text-justify">
            <li className="flex gap-4 items-start">
              <span className="text-(--gold-dark) font-bold">▪</span>
              <div>Prioritas alokasi penginapan diberikan kepada kontingen sekolah yang berdomisili atau <strong className="font-bold text-[#111]">berjarak minimal 50 km</strong> dari lokasi kegiatan.</div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-(--gold-dark) font-bold">▪</span>
              <div>Penempatan dan pembagian kamar sepenuhnya menjadi <strong className="font-bold text-[#111]">wewenang panitia pelaksana</strong>.</div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-(--gold-dark) font-bold">▪</span>
              <div>Penginapan ini khusus diperuntukkan bagi <strong className="font-bold text-[#111]">tamu laki-laki (Ikhwan)</strong>.</div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-(--gold-dark) font-bold">▪</span>
              <div>Setiap peserta dan pendamping diwajibkan melakukan registrasi <strong className="font-bold text-[#111]">check-in serta check-out</strong> sesuai ketentuan.</div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-(--gold-dark) font-bold">▪</span>
              <div>Fasilitas penginapan hanya dapat diakses oleh peserta yang telah menyelesaikan <strong className="font-bold text-[#111]">proses pendaftaran awal</strong>.</div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-(--gold-dark) font-bold">▪</span>
              <div>Hak penggunaan penginapan terbatas bagi peserta aktif beserta <strong className="font-bold text-[#111]">pembina atau official resmi</strong> yang terdaftar.</div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-(--gold-dark) font-bold">▪</span>
              <div>Peserta atau pendamping wajib memberikan <strong className="font-bold text-[#111]">konfirmasi kepada panitia</strong> bagian akomodasi apabila hendak meninggalkan lokasi lebih awal.</div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="text-(--gold-dark) font-bold">▪</span>
              <div>Jika kuota penginapan sudah penuh tetapi masih ada kontingen yang membutuhkan kamar, proses pemesanan dapat dilakukan secara langsung dengan <strong className="font-bold text-[#111]">menghubungi panitia bagian penginapan</strong>.</div>
            </li>
          </ul>
        </section>

        {/* FASILITAS PENGINAPAN */}
        <section className="bg-sand text-[#1a1a1a] rounded-3xl p-8 md:p-12 shadow-2xl border border-gold/40">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-[#1a1a1a] mb-6 border-b border-gold/30 pb-3">
            Fasilitas yang Disediakan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-(--gold-dark) uppercase tracking-wide">
                Fasilitas Dalam Kamar (In-Room Amenities)
              </h3>
              <ul className="space-y-2 text-base leading-relaxed text-justify">
                <li>• Tempat tidur & perlengkapan tidur (Single Bed / Twin / Double Bed tergantung tipe).</li>
                <li>• Seprai, bantal, serta selimut bersih standar guesthouse.</li>
                <li>• AC (Air Conditioner) split di setiap unit kamar.</li>
                <li>• TV untuk hiburan/siaran.</li>
                <li>• Lemari pakaian (wardrobe), meja & kursi kerja/rias lengkap dengan cermin.</li>
                <li>• Meja samping bed (nightstand).</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-(--gold-dark) uppercase tracking-wide">
                Kamar Mandi & Tambahan
              </h3>
              <ul className="space-y-2 text-base leading-relaxed text-justify">
                <li>• Kamar mandi dalam (Ensuite Bathroom) dengan kloset duduk & shower.</li>
                <li>• Perlengkapan mandi (Toiletries): Handuk bersih, sabun, dan sampo.</li>
                <li>• Stop kontak / colokan listrik dekat area tempat tidur.</li>
                <li>• Air mineral kemasan botol (complimentary) & tempat sampah.</li>
                <li>• Akses Wi-Fi gratis di area penginapan.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TATA TERTIB & CHECK IN / OUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* TATA TERTIB */}
          <section className="bg-sand text-[#1a1a1a] rounded-3xl p-8 shadow-2xl border border-gold/40 flex flex-col justify-between">
            <div>
              <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#1a1a1a] mb-4 border-b border-gold/30 pb-2">
                Tata Tertib
              </h2>
              <ul className="space-y-3 text-base leading-relaxed text-justify">
                <li><strong className="font-bold text-[#111]">Dilarang merokok</strong>, mengonsumsi minuman keras, maupun mengganggu keamanan atau kenyamanan acara.</li>
                <li>Wajib <strong className="font-bold text-[#111]">berpakaian sopan dan menutup aurat</strong> di lingkungan Albinaa.</li>
                <li>Barang pribadi menjadi <strong className="font-bold text-[#111]">tanggung jawab masing-masing</strong> penginap.</li>
                <li>Gunakan fasilitas <strong className="font-bold text-[#111]">sesuai fungsinya</strong>.</li>
                <li>Dilarang merusak, mencuri, atau <strong className="font-bold text-[#111]">melakukan vandalisme</strong> (bersanksi tegas).</li>
                <li>Dilarang berkata kotor atau <strong className="font-bold text-[#111]">membuat keributan</strong>.</li>
                <li>Wajib <strong className="font-bold text-[#111]">menjaga kebersihan</strong> dan kerapihan setiap saat.</li>
              </ul>
            </div>
          </section>

          {/* CHECK IN / OUT & OPERASIONAL */}
          <section className="bg-sand text-[#1a1a1a] rounded-3xl p-8 shadow-2xl border border-gold/40 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-bold uppercase tracking-wider text-[#1a1a1a] mb-4 border-b border-gold/30 pb-2">
                  Prosedur Check In & Check Out
                </h2>
                <ul className="space-y-3 text-base leading-relaxed text-justify">
                  <li><strong className="font-bold text-[#111]">Check-In:</strong> Registrasi ulang dan check-in dibuka pada <strong className="font-semibold text-(--gold-dark)">10 Januari 2027 pukul 14.00 WIB</strong>.</li>
                  <li><strong className="font-bold text-[#111]">Check-Out:</strong> Peserta wajib check-out pukul 12.00 WIB (melewati batas waktu akan dikenakan denda).</li>
                  <li>Diselesaikan secara langsung di <strong className="font-bold text-[#111]">Frontdesk</strong>.</li>
                  <li>Kunci kamar dan fasilitas pinjaman wajib dikembalikan dalam keadaan lengkap.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-base text-(--gold-dark) uppercase tracking-wide">
                  Jadwal Operasional
                </h3>
                <p className="text-base font-semibold text-[#111] mt-1">
                  Pukul 07:00 WIB — 22:00 WIB
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* INFO HUBUNGI PANITIA */}
        <section className="bg-gradient-to-r from-amber-950/90 to-yellow-950/90 text-white rounded-3xl p-8 text-center border-2 border-gold/20 shadow-2xl space-y-4">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-gold-light">
            Butuh Bantuan / Konfirmasi Kamar?
          </h2>
          <p className="text-sm md:text-base text-slate-200 max-w-xl mx-auto">
            Silakan hubungi panitia bagian penginapan atau contact person resmi Albinaa Festival 2027 untuk informasi lebih lanjut.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <span className="bg-black/50 border border-gold/10 text-gold-light px-6 py-2.5 rounded-full font-bold text-sm tracking-wide">
              nomor(Rafa)
            </span>
            <span className="bg-black/50 border border-gold/10 text-gold-light px-6 py-2.5 rounded-full font-bold text-sm tracking-wide">
              Nomor(Nouval)
            </span>
          </div>
        </section>
        <ContactWidget/>
      </div>
    </main>
  );
}