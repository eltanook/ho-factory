"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Award, Truck, Shield, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"
import { useCart } from "@/contexts/cart-context"

const heroSlides = [
  {
    title: "Cuidamos a tus Pequeñas Mascotas",
    subtitle: "Productos premium con diseños exclusivos y calidad superior",
    cta: "Ver Productos",
    image: "/happy-dog-and-cat-with-premium-pet-products-modern.png",
    },
    {
      title: "Petrrari & Merc3des Collection",
      subtitle: "Camas de lujo inspiradas en autos deportivos",
      cta: "Productos Exclusivos",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    },
    {
      title: "Rascadores de Madera Premium",
      subtitle: "100% madera alfombrada, diseño propio",
      cta: "Ver Rascadores",
    image: "/wooden-cat-scratching-posts-premium-quality-modern.png",
    },
  ]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, updateCart } = useCart()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header cart={cart} onCartOpen={() => setIsCartOpen(true)} />
      <CartSidebar cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateCart={updateCart} />

      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-100/80 via-orange-50/60 to-blue-100/80 dark:from-slate-900/80 dark:via-slate-800/60 dark:to-slate-900/80" />
            </div>
            <div className="relative h-full flex items-center justify-center text-center">
              <div className="max-w-4xl px-4">
                <p className="text-[#ce2a4d] font-medium mb-4 text-lg">Nuestros Mejores Servicios</p>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white font-serif leading-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  {slide.subtitle}
                </p>
                <Link href="/productos">
                  <Button
                    size="lg"
                    className="bg-[#ce2a4d] hover:bg-[#b8243e] text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                  >
                  {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-slate-800/20 backdrop-blur-sm"
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-900 dark:text-white hover:bg-white/20 dark:hover:bg-slate-800/20 backdrop-blur-sm"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-[#ce2a4d] scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Por qué elegir HO Factory Pet?
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              Ofrecemos productos únicos y de alta calidad para el bienestar de tus mascotas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#ce2a4d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#ce2a4d]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Calidad Premium
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Materiales de primera calidad y acabados perfectos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#2d549b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#2d549b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Diseño Exclusivo
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Productos únicos con diseños propios y patentados
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#ce2a4d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-[#ce2a4d]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Envío Rápido
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Entrega en todo el país con seguimiento en tiempo real
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#2d549b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#2d549b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Garantía Total
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Respaldamos la calidad de todos nuestros productos
                </p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#ce2a4d] to-[#2d549b]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para darle lo mejor a tu mascota?
            </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Descubre nuestra colección exclusiva de productos premium diseñados especialmente para el bienestar de tus compañeros peludos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Ver Productos
                  </Button>
            </Link>
            <Link href="/contacto">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-[#ce2a4d]">
                Contactar
                    </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
