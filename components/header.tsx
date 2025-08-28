"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Menu, X, Sun, Moon } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import Link from "next/link"
import { useTheme } from "next-themes"

interface HeaderProps {
  cart: any[]
  onCartOpen: () => void
}

export default function Header({ cart, onCartOpen }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Fixed Header */}
      <header className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 relative">
            {/* Logo - Centered on mobile/tablet, left on desktop */}
            <Link href="/" className="flex items-center lg:static absolute left-1/2 -translate-x-1/2 lg:left-auto lg:transform-none">
              <div className="w-18 h-auto">
                <svg viewBox="0 0 390.03 257.09" className="w-full h-full">
                  <path
                    className="fill-[#ce2a4d]"
                    d="M170.78.27c13.75-1.98,15.47,7.23,17.12,18.36,3.04,20.49-3.97,40.43-2.93,59.91.48,8.93,8.86,11.98,9.12,17.99s-5.46,6.86-6.12,13.93c-2.2,23.81,6.8,47.22,7.62,70.62-36.55,9.1-32.43-42.11-38.07-65.07-2.14-8.72-4.75-15.41-15.14-15.94-26.51-1.33-12.45,38.38-12.3,53.4.02,2.22-.86,13.3-1.99,14.1-2.29,1.62-10.05-.33-12.85-1.28-21.82-7.38-17.75-41.75-19.23-59.77-.42-5.1-3.03-11.41-3.06-16.02-.03-6.23,4.15-13.12,4.15-19,.01-17.22-6.96-45.17,3.7-60.21,7.48-10.55,29.39-7.53,32,5.45,1.51,7.52-7.04,29.46-7.64,39.89-.37,6.35.58,16.78,6.14,20.61,4.17,2.87,18.07,5.94,21.64,1.17,6.55-8.74,3.2-45.59,4.05-57.95.69-9.95,2.34-18.55,13.8-20.2Z"
                  />
                  <path
                    className="fill-[#ce2a4d]"
                    d="M257.79,43.29c26-2.74,47.52,25.37,49.21,49.23,3.69,52.16-58.96,92.69-95.4,46.4-28.25-35.88,5.82-91.37,46.19-95.64ZM252.76,74.25c-10.69,1.76-21.8,25.52-21.81,35.26-.01,8.89,9.55,27.14,19.59,27.57s21.11-10.53,24.98-19.07,5.82-27.42.51-35.51c-4.05-6.17-16.33-9.39-23.27-8.25Z"
                  />
                  <path
                    className="fill-[#2d549b]"
                    d="M289.03,216.01c4.79-3.25,6.75-17.82,14.45-17.02,1.42.15,3.39,1.41,3.13,3.07-.63,3.91-7.09,13.07-8.79,17.25-2.13,5.24-2.08,10.52-3.49,15.51-2.47,8.69-8.35,23.4-19.61,20-4.01-1.21-6.26-12.09-.18-11.91,3.3.1,5.55,4.93,8.72-2.16,4.38-9.78-.93-12.67-2.17-20.29-.47-2.88-1.58-17.8-.92-19.8s4.3-2.13,6.19-1.48c4.28,1.46,2.19,13,2.68,16.84Z"
                  />
                  <path
                    className="fill-[#2d549b]"
                    d="M212.02,211.01c20.15-2.14,12.46,9.78-2,7.99l2.05,33.56c.02,4.08-4.31,6.17-7.1,3-3.73-4.23-2.16-28.67-3.95-35.55-3.26,1.41-12.56,3.94-11.74-2.34.77-5.92,9.47-3.7,12.2-7.71,2.98-4.37.33-19.09,5.46-20.51,15.06-4.19,2.61,14.47,5.08,21.56Z"
                  />
                  <path
                    className="fill-[#2d549b]"
                    d="M124.85,188.16c1.64,2.67-.53,6.01-3.57,6.65-5.26,1.11-9.16-2.59-14.26-2.79-1.1,1.16,1.62,20.6,3.09,21.89,1.33,1.16,12.91-1.59,13.89,1.61,1.65,5.37-9.9,4.12-10.85,5.63-3.19,5.08,7.01,13.99,2.4,18.91-8.49,9.06-10.46-13.68-13.05-16.04-1.67-1.52-6.27-1.27-6.56-2.61-.96-4.46,4.82-5.78,5-8.84.29-5.06-8.08-22.44-2.36-26.49,3.21-2.27,24.15-1.36,26.26,2.08Z"
                  />
                  <path
                    className="fill-[#2d549b]"
                    d="M150.97,242.97c-2.55,2.07-4.78-2.55-6.34-3.16-5.1-1.99-14.87-.26-17.17-7.76-4.56-14.86,9.88-18.69,21.56-18.05,1.86-12.77-13.13-1.63-16.01-3.44-1.03-.65-2.28-3.64-1.91-4.9,1.33-4.55,20.62-7.8,23.46,1.29,1.03,3.3-2.19,34.87-3.6,36.02ZM146.89,221.12c-2.18-1.4-17.81,1.7-13.39,8.9,1.39,2.26,10.88,4.2,12.42,2.88.55-.47,2.78-10.62.97-11.78Z"
                  />
                  <path
                    className="fill-[#2d549b]"
                    d="M161.36,233.67c-5.71-5.73-5.23-15.76-1.74-22.56,2.8-5.45,16.05-18.02,22.45-13.65s-8.21,9.9-9.98,11.11c-13.33,9.19-5.5,27,7.22,23.23,1.27-.38,10.72-9.1,9.3-1.74-2.32,12.07-20.42,10.47-27.25,3.61Z"
                  />
                  <path
                    className="fill-[#2d549b]"
                    d="M260.03,208.01c4.4.66,6.13-6.02,8.68-6.81,2.99-.93,7.87-.76,7.35,3.27-.87,6.78-15.89,9.43-14.1,23.08.3,2.28,1.84,3.49,2.07,5.04.68,4.61-4.07,11.17-8.6,7.52-2.27-1.82-1.93-17.54-2.42-21.59-.55-4.54-5.1-14.79-1.41-17.43,5.07-3.64,8.68,2.16,8.43,6.92Z"
                  />
                  <path
                    className="fill-[#2d549b]"
                    d="M236.66,199.26c8.15-.89,12.33,13.14,10.92,19.81-3.85,18.15-22.64,13.4-22.63-2.56,0-4.93,7.05-16.74,11.72-17.25ZM238.89,209.15c-6.48-3.97-11.2,14.83-.59,11.69,4.57-1.35,2.25-10.67.59-11.69Z"
                  />
                  <path
                    className="fill-[#ce2a4d]"
                    d="M379.01,69.99l-45.99,35.01c-.5-2.76,1.32-3.88,2.98-5.51,11.75-11.54,28.37-21.03,40.54-32.47l2.47,2.97Z"
                  />
                  <path
                    className="fill-[#ce2a4d]"
                    d="M56.01,92.01c-1.99,2.18-21.52-20.93-23.48-23.01-4.51-4.8-10.45-9.53-14.52-14.48-3.36-4.09-1.74-5.06,2.55-2.55,3.15,1.84,27.83,28.18,31.42,32.58.93,1.14,5.19,6.19,4.02,7.47Z"
                  />
                  <path
                    className="fill-[#ce2a4d]"
                    d="M53.02,130.01c.42,1.92-.98,2.39-2.09,3.4-6.87,6.25-16.68,11.54-23.92,18.08-2.12,1.92-9.26,10.67-9.95,11.05-1.72.94-1.96.11-3.03-1.05-.39-1.72.61-2.4,1.45-3.53,3.33-4.43,28.15-24.89,32.97-27.02,1.58-.7,2.71-1.28,4.57-.92Z"
                  />
                  <path
                    className="fill-[#ce2a4d]"
                    d="M390.03,117.01v2.99c-7.81,1.16-15.67.52-23.5,1.01s-16.7,2.05-24,2.07c-2.04,0-4.12.32-5.5-1.59-.46-2.51,1.96-1.32,3.51-1.45,16.43-1.37,32.99-2.19,49.48-3.03Z"
                  />
                  <path
                    className="fill-[#ce2a4d]"
                    d="M375.02,164c-8.25.13-16.59-2.45-24.24-5.25-3.52-1.29-14.7-5.75-17.13-7.68-.95-.75-.81-2.87-.62-3.07,1.08-1.09,19.96,7.88,23.48,9.01,4.82,1.55,12.12,2.18,16.1,3.9,1.51.65,2.79,1.09,2.41,3.08Z"
                  />
                  <path
                    className="fill-[#ce2a4d]"
                    d="M6.76,106c5.92.68,6.56.79,12.8.96,7.83.22,16.03.71,23.97,1.04,1.54.07,3.96-.94,3.48,1.48-1.16,1.77-2.68,1.42-4.44,1.57-13.78,1.13-28.81-1.24-42.55-2.06-.41-3.42,4.21-3.29,6.73-3Z"
                  />
                </svg>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-16">
              <Link href="/" className="text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium">
                Inicio
              </Link>
              <Link href="/nosotros" className="text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium">
                Nosotros
              </Link>
              <Link href="/productos" className="text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium">
                Productos
              </Link>
              <Link href="/faq" className="text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium">
                Preguntas frecuentes
              </Link>
              <Link href="/contacto" className="text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium">
                Contacto
              </Link>
            </nav>

            {/* Left Side - Menu Button (only on mobile/tablet) */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className="text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={onCartOpen}
                className="relative text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-[#ce2a4d] text-white text-xs">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden ${!isMenuOpen ? 'pointer-events-none' : ''}`}>
        <div 
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)} 
        />
        <div 
          className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-900 p-6 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-lg font-bold text-[#ce2a4d] font-serif">Menú</span>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <nav className="space-y-4">
            <Link
              href="/"
              className="block py-3 text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="block py-3 text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/productos"
              className="block py-3 text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/faq"
              className="block py-3 text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Preguntas frecuentes
            </Link>
            <Link
              href="/contacto"
              className="block py-3 text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
          </Link>
          </nav>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/5491144775070?text=¡Hola! Me estoy contactando desde la página web de HO Factory."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </Button>
      </a>
    </>
  )
}
