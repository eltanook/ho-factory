"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Users } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import CartSidebar from "@/components/cart-sidebar"
import { useCart } from "@/contexts/cart-context"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipo_negocio: "",
    mensaje: ""
  })
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, updateCart } = useCart()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí se enviaría el formulario
    console.log("Formulario enviado:", formData)
    // Redirigir a página de agradecimiento o mostrar mensaje de éxito
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header cart={cart} onCartOpen={() => setIsCartOpen(true)} />
      <CartSidebar cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateCart={updateCart} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#ce2a4d]/10 to-[#2d549b]/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="text-[#ce2a4d]">Contactanos</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            ¿Listo para llevar productos premium a tu negocio? ¡Hablemos! 
            Estamos aquí para ayudarte a encontrar las mejores soluciones para tus clientes.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 border-0 shadow-xl">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                    Envíanos un Mensaje
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Nombre *
                        </label>
                        <Input
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Teléfono
                        </label>
                        <Input
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Tu número de teléfono"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                          Tipo de Negocio
                        </label>
                        <select
                          name="tipo_negocio"
                          value={formData.tipo_negocio}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ce2a4d] focus:border-transparent"
                        >
                          <option value="">Seleccionar...</option>
                          <option value="pet_shop">Pet Shop</option>
                          <option value="veterinaria">Veterinaria</option>
                          <option value="distribuidor">Distribuidor</option>
                          <option value="tienda_mascotas">Tienda de Mascotas</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Mensaje *
                      </label>
                      <Textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full"
                        placeholder="Cuéntanos sobre tu negocio y qué productos te interesan..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#ce2a4d] hover:bg-[#b8243e] text-white py-3 text-lg"
                    >
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
              {/* Map Placeholder */}
            <div className="bg-gray-200 mt-12 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="h-96 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-500 dark:text-gray-400 mx-auto mb-4" />
                  
                </div>
              </div>
            </div>
            </div>
            

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Business Info */}
              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#ce2a4d]/10 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-[#ce2a4d]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                        Información Comercial
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-slate-400">
                        Precios mayoristas
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-slate-400 text-sm">
                    Trabajamos exclusivamente con mayoristas, pet shops y veterinarias. 
                    Ofrecemos precios competitivos y condiciones especiales para negocios establecidos.
                  </p>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                    Métodos de Contacto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#ce2a4d]/10 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-[#ce2a4d]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Teléfono</h4>
                        <a 
                          href="tel:1144775070"
                          className="text-[#ce2a4d] hover:underline"
                        >
                          11 4477-5070
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-[#2d549b]/10 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-[#2d549b]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                        <a 
                          href="mailto:hofactorypetcar@gmail.com"
                          className="text-[#2d549b] hover:underline"
                        >
                          hofactorypetcar@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                        <WhatsAppIcon className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">WhatsApp</h4>
                        <a 
                          href="https://wa.me/5491144775070?text=¡Hola! Me estoy contactando desde la página web de HO Factory."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-500 hover:underline"
                        >
                          Enviar mensaje
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#2d549b]/10 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#2d549b]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                        Horarios de Atención
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-slate-400">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes:</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados:</span>
                      <span>9:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingos:</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                    Síguenos
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com/ho_factory_pet" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#ce2a4d]/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#ce2a4d] transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-[#ce2a4d]" />
                    </a>
                    <a 
                      href="https://facebook.com/Hofactorypet" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#2d549b]/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#2d549b] transition-colors"
                    >
                      <Facebook className="w-5 h-5 text-[#2d549b]" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

            
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              ¿Necesitas una cotización rápida?
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Agenda una llamada y hablemos de tu proyecto. Te ayudaremos a encontrar 
              los productos perfectos para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5491144775070?text=¡Hola! Me estoy contactando desde la página web de HO Factory."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Agendar por WhatsApp
                </Button>
              </a>
              <Link href="/productos">
                <Button size="lg" variant="outline" className="px-8 py-4">
                  Ver Productos
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
