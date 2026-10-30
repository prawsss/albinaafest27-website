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
  description: "Albinaa Festival 2027", 
}

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