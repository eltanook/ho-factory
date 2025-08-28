"use client"

import { Award, Heart, Shield, Truck, Users, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"
import { useCart } from "@/contexts/cart-context"
import { useState } from "react"

export default function NosotrosPage() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, updateCart } = useCart()

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header cart={cart} onCartOpen={() => setIsCartOpen(true)} />
      <CartSidebar cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateCart={updateCart} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#ce2a4d]/10 to-[#2d549b]/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre <span className="text-[#ce2a4d]">HO Factory Pet</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Somos una empresa familiar dedicada a crear productos premium para mascotas. 
            Nuestros diseños exclusivos nacen del amor por nuestras propias mascotas y la búsqueda constante de la máxima calidad.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-400 mb-6">
                HO Factory Pet nació de la pasión por las mascotas y la búsqueda de productos que realmente 
                satisfagan las necesidades de nuestros compañeros peludos. Comenzamos como una pequeña empresa 
                familiar y hemos crecido hasta convertirnos en un referente en productos premium para mascotas.
              </p>
              <p className="text-lg text-gray-600 dark:text-slate-400 mb-6">
                Trabajamos directamente con tiendas de mascotas, pet shops y veterinarias, ofreciendo productos 
                que combinan funcionalidad, durabilidad y diseño único. Cada producto que creamos está pensado 
                para mejorar la calidad de vida de las mascotas y la satisfacción de sus dueños.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-[#ce2a4d]" />
                  <span className="text-sm font-medium">Más de 5 años de experiencia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-[#2d549b]" />
                  <span className="text-sm font-medium">+100 clientes satisfechos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/happy-woman-with-curly-hair-holding-small-dog-prem.png" 
                alt="Equipo HO Factory Pet" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#ce2a4d]">100%</div>
                  <div className="text-sm text-gray-600 dark:text-slate-400">Satisfacción</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada producto que creamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#ce2a4d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-[#ce2a4d]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Amor por las Mascotas
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Cada producto está diseñado pensando en el bienestar y la felicidad de las mascotas
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#2d549b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#2d549b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Calidad Premium
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Utilizamos solo los mejores materiales y procesos de fabricación
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#ce2a4d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#ce2a4d]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Innovación Constante
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Siempre buscamos nuevas formas de mejorar nuestros productos
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-[#2d549b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-[#2d549b]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Servicio al Cliente
                </h3>
                <p className="text-gray-600 dark:text-slate-400">
                  Nos comprometemos a brindar la mejor experiencia a nuestros clientes
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
              Un grupo apasionado por las mascotas y comprometido con la excelencia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-gradient-to-br from-[#ce2a4d] to-[#2d549b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">HF</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Fundador & CEO
                </h3>
                <p className="text-gray-600 dark:text-slate-400 mb-4">
                  Apasionado por las mascotas y la innovación en productos pet
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#ce2a4d] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#2d549b] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ce2a4d] rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-gradient-to-br from-[#2d549b] to-[#ce2a4d] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">DP</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Diseñador Principal
                </h3>
                <p className="text-gray-600 dark:text-slate-400 mb-4">
                  Creador de los diseños exclusivos que nos distinguen
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#2d549b] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ce2a4d] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#2d549b] rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-0">
                <div className="w-24 h-24 bg-gradient-to-br from-[#ce2a4d] to-[#2d549b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">QC</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Control de Calidad
                </h3>
                <p className="text-gray-600 dark:text-slate-400 mb-4">
                  Garantiza que cada producto cumpla con nuestros estándares
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-[#ce2a4d] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#2d549b] rounded-full"></div>
                  <div className="w-2 h-2 bg-[#ce2a4d] rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Te gustaría conocer más sobre nosotros?
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Estamos aquí para responder todas tus preguntas y ayudarte a encontrar los mejores productos para tu negocio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/productos">
                <Button size="lg" className="bg-[#ce2a4d] hover:bg-[#b8243e] text-white px-8 py-4">
                  Ver Productos
                </Button>
              </Link>
              <Link href="/contacto">
                <Button size="lg" variant="outline" className="px-8 py-4">
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
