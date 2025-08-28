"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Menu, X, Sun, Moon, MessageCircle } from "lucide-react"
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
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10">
                <svg viewBox="0 0 390.03 257.09" className="w-full h-full">
                  <path
                    className="fill-[#ce2a4d]"
                    d="M170.78.27c13.75-1.98,15.47,7.23,17.12,18.36,3.04,20.49-3.97,40.43-2.93,59.91.48,8.93,8.86,11.98,9.12,17.99s-5.46,6.86-6.12,13.93c-2.2,23.81,6.8,47.22,7.62,70.62-36.55,9.1-32.43-42.11-38.07-65.07-2.14-8.72-4.75-15.41-15.14-15.94-26.51-1.33-12.45,38.38-12.3,53.4.02,2.22-.86,13.3-1.99,14.1-2.29,1.62-10.05-.33-12.85-1.28-21.82-7.38-17.75-41.75-19.23-59.77-.42-5.1-3.03-11.41-3.06-16.02-.03-6.23,4.15-13.12,4.15-19,.01-17.22-6.96-45.17,3.7-60.21,7.48-10.55,29.39-7.53,32,5.45,1.51,7.52-7.04,29.46-7.64,39.89-.37,6.35.58,16.78,6.14,20.61,4.17,2.87,18.07,5.94,21.64,1.17,6.55-8.74,3.2-45.59,4.05-57.95.69-9.95,2.34-18.55,13.8-20.2Z"
                  />
                  <path
                    className="fill-[#2d549b]"
                    d="M289.03,216.01c4.79-3.25,6.75-17.82,14.45-17.02,1.42.15,3.39,1.41,3.13,3.07-.63,3.91-7.09,13.07-8.79,17.25-2.13,5.24-2.08,10.52-3.49,15.51-2.47,8.69-8.35,23.4-19.61,20-4.01-1.21-6.26-12.09-.18-11.91,3.3.1,5.55,4.93,8.72-2.16,4.38-9.78-.93-12.67-2.17-20.29-.47-2.88-1.58-17.8-.92-19.8s4.3-2.13,6.19-1.48c4.28,1.46,2.19,13,2.68,16.84Z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-[#ce2a4d] font-serif">HO Factory Pet</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium"
              >
                Inicio
              </Link>
              <Link
                href="/productos"
                className="text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium"
              >
                Productos
              </Link>
              <Link
                href="/contacto"
                className="text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium"
              >
                Contacto
              </Link>
            </nav>

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

              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-64 bg-white dark:bg-slate-900 p-6 shadow-xl">
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
                href="/productos"
                className="block py-3 text-gray-700 dark:text-slate-300 hover:text-[#ce2a4d] dark:hover:text-[#ce2a4d] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Productos
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
      )}

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.link/send?phone=5491144775070&text=¡Hola! Me interesa conocer más sobre los productos de HO Factory Pet 🐾"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40"
      >
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </a>
    </>
  )
}
