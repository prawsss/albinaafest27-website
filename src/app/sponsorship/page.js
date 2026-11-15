import React from "react";
import SponsorCard from "@/components/SponsorCard";
import ContactWidget from "@/components/ContactWidget";

export default function SponsorshipPage() {
  const sponsorTiers = [
    {
      title: (<i><u>MAIN SPONSOR</u></i>),
      desc: "Mitra utama dengan hak eksklusivitas tertinggi, pencantuman nama resmi, serta eksposur maksimal di seluruh rangkaian acara utama Albinaa Festival 2027.",
      textColor: "text-red-500",
      shadowColor: "hover:shadow-red-500/30",
      benefits: ["Kesempatan memberikan sambutan pada jeda acara Al Binaa Festival Talkshow.", "Pencantuman eksklusif pada nama resmi kegiatan.", "Pencantuman logo/nama perusahaan pada backdrop setiap kegiatan.", "Pencantuman logo/nama perusahaan pada setiap cabang lomba."],
    },
    {
      title: "Emerald",
      desc: "Paket kemitraan tingkat tinggi dengan prioritas penempatan logo dan berbagai keuntungan eksklusif untuk memperkuat eksposur merek Anda.",
      textColor: "text-emerald-400",
      shadowColor: "hover:shadow-emerald-400/30",
      benefits: ["Pencantuman logo/nama perusahaan pada backdrop setiap kegiatan.", "Pencantuman logo/nama perusahaan pada banner bazzar", "3.  Pencantuman logo/nama perusahaan pada setiap cabang lomba", "E-Sertifikat apresiasi"],
    },
    {
      title: "Diamond",
      desc: "Pilihan populer bagi korporasi yang menginginkan jangkauan audiens luas serta interaksi langsung melalui berbagai media promosi festival.",
      textColor: "text-indigo-400",
      shadowColor: "hover:shadow-purple-500/40",
      benefits: [],
    },
    {
      title: "Ruby",
      desc: "Kemitraan strategis dengan keuntungan branding premium untuk menonjolkan posisi merek Anda di area festival.",
      textColor: "text-rose-500",
      shadowColor: "hover:shadow-rose-400/40",
      benefits: [],
    },
    {
      title: "Platinum",
      desc: "Paket partnership kelas atas yang menawarkan visibilitas istimewa serta ruang promosi khusus di lokasi acara.",
      textColor: "text-neutral-100",
      shadowColor: "hover:shadow-neutral-200/50",
      benefits: [],
    },
    {
      title: "Gold",
      desc: "Kemitraan tingkat menengah yang efektif untuk memperkenalkan produk atau layanan kepada ribuan peserta dan pengunjung.",
      textColor: "text-yellow-500",
      shadowColor: "hover:shadow-yellow-500/50",
      benefits: [],
    },
    {
      title: "Silver",
      desc: "Pilihan kemitraan yang fleksibel dengan dukungan eksposur standar namun tetap memberikan dampak positif bagi citra merek.",
      textColor: "text-neutral-300",
      shadowColor: "hover:shadow-neutral-400/50",
      benefits: [],
    },
    {
      title: "Bronze",
      desc: "Paket dukungan awal yang ramah bagi UMKM atau instansi untuk turut berpartisipasi menyukseskan Albinaa Festival 2027.",
      textColor: "text-amber-700",
      shadowColor: "hover:shadow-amber-600/50",
      benefits: [],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl px-4 mx-auto text-center">
        {/* HEADER */}
        <h1 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-300 to-yellow-500 mb-4 pt-20">
          SPONSORSHIP AND PARTNERSHIP OPPORTUNITIES
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg mb-10">
          Bergabunglah sebagai mitra strategis Albinaa Festival 2027 dan hubungkan brand Anda dengan ribuan partisipan. Info: <u><b>sponsorship@albinaafestival.id</b></u>
        </p>

        {/* TOMBOL DOWNLOAD */}

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full justify-center mb-15 transform-gpu">
            <div className="relative group transform-gpu w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-color-gold to-color-gold-light rounded-full blur-md opacity-30 group-hover:opacity-80 group-hover:blur-xl transition duration-500 transform-gpu pointer-events-none" />
              <a
                href="/proposal.pdf"
                download="Proposal_Sponsorship_Albinaa Festival_2027.pdf"
                className="font-sans inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-1"              
                >
                Unduh Proposal (.pdf)
              </a>
            </div>
              <a
                href="https://api.whatsapp.com/send?phone=+62%20857-7776-5301&text=Halo%20Kak%20Hasyim%2C%20saya%20mau%20bertanya%20terkait%20sponsorship%20Alfest%202027..."
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gold to-gold-light hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-bold rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300 transform hover:-translate-y-1"              
                >
                Contact Sponsorship & Partnership
              </a>
          </div>
          <section className="w-full max-w-5xl mx-auto px-4 py-12 font-sans">
  <div className="bg-sand text-[#1a1a1a] rounded-3xl p-8 md:p-14 shadow-2xl border border-[#d4af37]/40 relative overflow-hidden">
    
    {/* Header Section */}
    <div className="text-center mb-12">
      <h2 className="font-display text-2xl md:text-4xl font-bold text-[#1a1a1a] uppercase tracking-wider">
        Alur Sponsorship dan Donatur
      </h2>
      <div className="w-20 h-0.5 bg-[#d4af37] mx-auto mt-4" />
    </div>

    {/* Steps List */}
    <ol className="space-y-6">
      <li className="flex gap-4 md:gap-6 items-start">
        <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#d4af37]/20 text-[#957b00] font-bold flex items-center justify-center text-sm md:text-base">
          1
        </span>
        <div className="text-base md:text-lg leading-relaxed text-justify">
          <strong className="font-bold text-[#111]">Konsultasi Awal:</strong> Pihak perusahaan atau instansi yang berminat berkontribusi dalam bentuk sponsorship atau donatur (silakan membaca <strong className="font-semibold text-[#957b00]">PROPOSAL SPONSORSHIP</strong> terlebih dahulu) Usbu’ Tsaqofy & ALBINAA Festival 2027 dapat berkonsultasi melalui contact person kami: <strong className="font-semibold">Hasyim (+62 857-7776-5301)</strong>, email: <strong className="font-semibold">sponsorship@albinaafestival.id</strong>, atau melalui Instagram <strong className="font-semibold">@albinaafestival</strong>.
        </div>
      </li>

      <li className="flex gap-4 md:gap-6 items-start">
        <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#d4af37]/20 text-[#957b00] font-bold flex items-center justify-center text-sm md:text-base">
          2
        </span>
        <div className="text-base md:text-lg leading-relaxed text-justify">
          <strong className="font-bold text-[#111]">Penandatanganan MoU:</strong> Bila terjadi kesepakatan mengenai paket dan tarif, pihak perusahaan/instansi menandatangani nota kesepakatan atau <strong className="font-semibold">Memorandum of Understanding (MoU) sponsorship</strong> yang menjadi landasan serta acuan yang mengikat antara pihak sponsor dengan panitia Usbu’ Tsaqofy 2027.
        </div>
      </li>

      <li className="flex gap-4 md:gap-6 items-start">
        <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#d4af37]/20 text-[#957b00] font-bold flex items-center justify-center text-sm md:text-base">
          3
        </span>
        <div className="text-base md:text-lg leading-relaxed text-justify">
          <strong className="font-bold text-[#111]">Pembayaran Kontribusi:</strong> Pihak sponsor membayar tarif sponsorship melalui rekening resmi yang telah disepakati bersama, yakni <strong className="font-bold text-[#957b00]">Bank Muamalat 3410030203</strong> a.n <strong className="font-semibold">YAYASAN ISLAM AL BINAA JAMTHOL</strong>.
        </div>
      </li>

      <li className="flex gap-4 md:gap-6 items-start">
        <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#d4af37]/20 text-[#957b00] font-bold flex items-center justify-center text-sm md:text-base">
          4
        </span>
        <div className="text-base md:text-lg leading-relaxed text-justify">
          <strong className="font-bold text-[#111]">Verifikasi & SK:</strong> Setelah melakukan pembayaran, pihak sponsor melakukan verifikasi kepada panitia dengan menyerahkan <strong className="font-semibold">bukti transfer</strong>, dan panitia akan menerbitkan <strong className="font-semibold">Surat Keputusan (SK) Sponsor</strong>.
        </div>
      </li>

      <li className="flex gap-4 md:gap-6 items-start">
        <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#d4af37]/20 text-[#957b00] font-bold flex items-center justify-center text-sm md:text-base">
          5
        </span>
        <div className="text-base md:text-lg leading-relaxed text-justify">
          <strong className="font-bold text-[#111]">Pengiriman Materi:</strong> Pihak sponsor mengirimkan <strong className="font-semibold">materi promosi</strong> yang akan ditampilkan selama kegiatan berlangsung.
        </div>
      </li>

      <li className="flex gap-4 md:gap-6 items-start">
        <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#d4af37]/20 text-[#957b00] font-bold flex items-center justify-center text-sm md:text-base">
          6
        </span>
        <div className="text-base md:text-lg leading-relaxed text-justify">
          <strong className="font-bold text-[#111]">Publikasi & Promosi:</strong> Pihak sponsor akan dipromosikan selama pelaksanaan <strong className="font-semibold">Usbu’ Tsaqofy 2027</strong> sesuai dengan benefit yang tertuang dalam formulir perjanjian dan proposal sponsorship.
        </div>
      </li>

      <li className="flex gap-4 md:gap-6 items-start">
        <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#d4af37]/20 text-[#957b00] font-bold flex items-center justify-center text-sm md:text-base">
          7
        </span>
        <div className="text-base md:text-lg leading-relaxed text-justify">
          <strong className="font-bold text-[#111]">Laporan Akhir:</strong> Di akhir penyelenggaraan Usbu’ Tsaqofy 2027, pihak panitia akan memberikan <strong className="font-semibold">laporan akhir penyelenggaraan</strong> kepada pihak sponsor sebagai bentuk transparansi.
        </div>
      </li>

      <li className="flex gap-4 md:gap-6 items-start">
        <span className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#d4af37]/20 text-[#957b00] font-bold flex items-center justify-center text-sm md:text-base">
          8
        </span>
        <div className="text-base md:text-lg leading-relaxed text-justify">
          <strong className="font-bold text-[#111]">Kontribusi Sosial:</strong> Sebesar <strong className="font-bold text-[#957b00]">20% dari paket sponsor</strong> yang diberikan oleh pihak sponsorship akan disalurkan langsung ke program <strong className="font-semibold">bakti sosial</strong>.
        </div>
      </li>
    </ol>

  </div>
</section>

        {/* SECTION BENTUK KERJSAMA / PARTNERSHIP INFO */}
        <div className="mb-20 text-left bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-10 backdrop-blur-md">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-200">
            Bentuk Kerjasama & Partisipasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-300 text-sm md:text-base">
            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
              <h3 className="font-bold font-sans text-amber-400 mb-2 text-lg">A. Donatur</h3>
              <p className="font-sans leading-relaxed">
                Donatur adalah penyumbang yang tidak terikat oleh aturan, dan secara sukarela memberikan sumbangan kepada panitia Usbu’ Tsaqofy 2027 dan Al Binaa festival sebagai bentuk partisipasi dalam kegiatan tersebut.
              </p>
            </div>
            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
              <h3 className="font-sans font-bold text-amber-400 mb-2 text-lg">B. Media Partner</h3>
              <p className="font-sans leading-relaxed">
                Sponsorship bagi instansi atau individu yang bersedia bekerja sama dalam bentuk dukungan promosi media melalui media massa atau digital, seperti iklan, liputan acara, atau postingan media sosial. Berhak atas keuntungan yang sesuai dari nilai barang/jasa atau melakukan kesepakatan lebih lanjut.
              </p>
            </div>
            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
              <h3 className="font-sans font-bold text-amber-400 mb-2 text-lg">C. In - Kind</h3>
              <p className="font-sans leading-relaxed">
                Sponsorship bagi instansi atau individu yang bersedia bekerja sama dalam bentuk penyediaan barang atau jasa. Berhak atas keuntungan yang sesuai dari nilai barang/jasa yang diberikan atau dapat melakukan kesepakatan lebih lanjut mengenai keuntungan yang diperoleh.
              </p>
            </div>
            <div className="bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
              <h3 className="font-bold font-sans text-amber-400 mb-2 text-lg">D. Custom</h3>
              <p className="font-sans text-justify leading-relaxed">
                Sponsorship bagi instansi atau individu yang bersedia bekerja sama dan memberi dukungan dengan mengadakan kesepakatan khusus bersama panitia terkait bentuk sponsor ataupun keuntungan yang didapatkan.
              </p>
            </div>
          </div>
        </div>

        {/* HEADER GRID CARD SPONSOR */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-200">
            Sponsorship
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-2">Pilih paket tier sponsorship yang sesuai dengan visi dan jangkauan brand Anda.</p>
        </div>

        {/* GRID CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {sponsorTiers.map((tier, index) => (
            <SponsorCard key={index} tier={tier} />
          ))}
        </div>
      </div>
      <ContactWidget />
    </div>
  );
}