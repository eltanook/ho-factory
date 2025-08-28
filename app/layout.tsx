import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/contexts/cart-context"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "HO Factory Pet - Productos Premium para Mascotas | Mayorista",
  description:
    "Productos premium para mascotas con diseños exclusivos. Rascadores, camas Petrrari y Merc3des, transportadoras. Venta mayorista para pet shops y veterinarias.",
  keywords:
    "productos mascotas, pet shop mayorista, rascadores gatos, camas premium mascotas, transportadoras, Petrrari, Merc3des, HO Factory Pet",
  authors: [{ name: "HO Factory Pet" }],
  openGraph: {
    title: "HO Factory Pet - Productos Premium para Mascotas",
    description: "Diseños exclusivos y calidad superior para tu pet shop",
    type: "website",
    locale: "es_AR",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${poppins.variable} antialiased`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ce2a4d" />
      </head>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <CartProvider>
            {children}
            <Toaster position="top-right" />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
