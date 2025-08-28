"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Award, Truck, Shield, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"

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
  const [cart, setCart] = useState<any[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header cart={cart} onCartOpen={() => setIsCartOpen(true)} />
      <CartSidebar cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateCart={setCart} />

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
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-[#ce2a4d]" : "bg-white/50 dark:bg-slate-400/50"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white dark:bg-slate-700">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-gray-900 dark:text-white">Rascadores Premium</h3>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  Rascadores 100% madera alfombrada con diseños exclusivos que tus gatos amarán
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white dark:bg-slate-700">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-gray-900 dark:text-white">Cuidado Veterinario</h3>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  Productos desarrollados pensando en la salud y bienestar de las mascotas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white dark:bg-slate-700">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 font-serif text-gray-900 dark:text-white">Camas de Lujo</h3>
                <p className="text-gray-600 dark:text-slate-300 leading-relaxed">
                  Camas exclusivas como Petrrari y Merc3des con materiales premium
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="/happy-woman-with-curly-hair-holding-small-dog-prem.png" alt="Sobre nosotros" className="rounded-2xl shadow-lg w-full" />
            </div>
            <div>
              <p className="text-[#ce2a4d] font-medium mb-4 text-lg">Acerca de</p>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
                Nos Encanta Cuidar de tus Mascotas
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-300 mb-6 leading-relaxed">
                Somos una empresa familiar dedicada a crear productos premium para mascotas. Nuestros diseños exclusivos
                como el "Petrrari" y "Merc3des" nacen del amor por nuestras propias mascotas y la búsqueda constante de
                la máxima calidad.
              </p>
              <p className="text-lg text-gray-600 dark:text-slate-300 mb-8 leading-relaxed">
                Trabajamos directamente con tiendas de mascotas, pet shops y veterinarias, ofreciendo productos que
                combinan funcionalidad, durabilidad y diseño único.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-orange-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Personal Calificado</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Heart className="h-4 w-4 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Alimentos de Calidad</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-blue-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Mejores Veterinarios</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                    <Truck className="h-4 w-4 text-purple-500" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Cuidado 24/7</span>
                </div>
              </div>

              <Link href="/contacto">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all">
                  Contactanos
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-[#ce2a4d] font-medium mb-4 text-lg">Servicios</p>
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-serif">Lo Que Podemos Ofrecer</h2>
            <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos productos únicos en el mercado con la mejor relación calidad-precio para tu negocio
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { icon: Heart, title: "Cuidado Diario", color: "orange" },
              { icon: Shield, title: "Aseo", color: "blue" },
              { icon: Award, title: "Veterinario", color: "green" },
              { icon: Truck, title: "Hospedaje", color: "purple" },
              { icon: Star, title: "Suministros", color: "pink" },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-sm bg-white dark:bg-slate-700 group cursor-pointer"
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className={`h-8 w-8 text-${service.color}-500`} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white font-serif">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/productos">
              <Button
                size="lg"
                className="bg-[#ce2a4d] hover:bg-[#b8243e] text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Explorar Más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 dark:from-green-600 dark:to-green-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-green-100 font-medium mb-4 text-lg">Nuestro SMS es</p>
              <h2 className="text-4xl font-bold mb-6 text-white font-serif">Agenda tu Visita Hoy</h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                ¿Listo para llevar productos premium a tu negocio? Contáctanos y descubre nuestra línea completa de
                productos exclusivos.
              </p>
              <Link href="/contacto">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Agendar Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div>
              <img src="/happy-woman-with-yellow-sweater-holding-small-whit.png" alt="Agenda tu visita" className="rounded-2xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
