import "./globals.css"
import Navbar from "@/components/Navbar"
import { Cinzel, Lato } from "next/font/google"

const cinzel = Cinzel({ 
  subsets: ["latin"], 
  variable: "--font-display" 
})
const lato = Lato({ 
  subsets: ["latin"], 
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-sans" 
})

export const metadata = {
  title: "Albinaa Festival 2027",
  description: "Website resmi Albinaa Festival 2027. Ikuti berbagai cabang kompetisi bergengsi mulai dari Pidato, Speech, MHQ, MTQ, Science Exhibition, dan masih banyak lagi.",
  keywords: [
    "Albinaa Festival 2027", 
    "Alfest 2027", 
    "Lomba Nasional SD SMA", 
    "Olimpiade Albinaa", 
    "Kompetisi Pelajar", 
    "lomba sd", 
    "lomba sma", 
    "lomba jawa barat", 
    "lomba bekasi", 
    "sma it albinaa", 
    "lomba albinaa", 
    "bekasi lomba",
    // Otomatis mengambil cabang-cabang lomba dari data kamu agar SEO makin kuat
    "PIDATO", "SPEECH", "MHQ", "PUISI", "CIPTA CERPEN", "MTQ", "ADZAN", 
    "ALBINAA CERDAS CERMAT", "POSTER", "STORY TELLING", "ALBINAA SCIENCE EXHIBITION"
  ],
  openGraph: {
    title: "Albinaa Festival 2027",
    description: "Ajang kompetisi dan unjuk bakat pelajar tingkat Provinsi & Nasional SD & SMA di Albinaa.",
    url: 'https://albinaafestival.id',
    siteName: 'Albinaa Festival 2027',
    images: [
      {
        url: '/cover_alimpiad.webp', // Kamu bisa menyesuaikan path gambarnya
        width: 1200,
        height: 630,
        alt: 'Albinaa Festival 2027 Cover',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${cinzel.variable} ${lato.variable}`} style={{ scrollBehavior: "smooth" }}>
      <head>
        {/* Link Logo untuk Favicon Browser */}
        <link rel="icon" type="image/png" href="/logo.png" />
      </head>
      <body className="antialiased selection:bg-gold selection:text-bg-1">
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  )
}