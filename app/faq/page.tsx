"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp, MessageCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"
import { useCart } from "@/contexts/cart-context"

const faqs = [
  {
    question: "¿Qué hace especial a HO Factory Pet?",
    answer: "HO Factory Pet se distingue por sus diseños exclusivos y patentados, como el 'Petrrari' y 'Merc3des'. Utilizamos materiales premium y procesos de fabricación de alta calidad para crear productos únicos que no encontrarás en ningún otro lugar."
  },
  {
    question: "¿Trabajan solo con mayoristas?",
    answer: "Sí, trabajamos principalmente con tiendas de mascotas, pet shops, veterinarias y distribuidores. Ofrecemos precios mayoristas competitivos y condiciones especiales para negocios establecidos."
  },
  {
    question: "¿Cuáles son los productos más populares?",
    answer: "Nuestros productos estrella incluyen las camas exclusivas Petrrari y Merc3des, rascadores de madera premium, y transportadoras de alta calidad. Todos son diseños propios con materiales superiores."
  },
  {
    question: "¿Ofrecen garantía en sus productos?",
    answer: "Absolutamente. Todos nuestros productos cuentan con garantía total. Si hay algún defecto de fabricación, lo reemplazamos sin costo. La calidad es nuestra prioridad."
  },
  {
    question: "¿Cuánto tiempo tarda el envío?",
    answer: "Los envíos se realizan en 24-48 horas hábiles para pedidos confirmados. Trabajamos con empresas de logística confiables para garantizar la entrega segura en todo el país."
  },
  {
    question: "¿Pueden personalizar productos?",
    answer: "Sí, ofrecemos servicios de personalización para pedidos grandes. Podemos adaptar colores, tamaños y algunos detalles según las necesidades específicas de tu negocio."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos transferencias bancarias, depósitos y pagos a través de plataformas digitales. Para clientes regulares, ofrecemos condiciones especiales de pago."
  },
  {
    question: "¿Tienen catálogo digital?",
    answer: "Sí, contamos con catálogo digital actualizado y también enviamos catálogos físicos a nuestros clientes mayoristas. Puedes solicitarlo a través de nuestro formulario de contacto."
  },
  {
    question: "¿Hacen envíos internacionales?",
    answer: "Actualmente nos enfocamos en el mercado nacional argentino, pero estamos evaluando la expansión internacional. Para consultas específicas, contáctanos directamente."
  },
  {
    question: "¿Cómo puedo convertirme en distribuidor?",
    answer: "Para convertirte en distribuidor, necesitamos conocer tu negocio y volumen de ventas esperado. Contáctanos y te enviaremos información sobre nuestros programas de distribución."
  }
]

const categories = [
  {
    title: "Productos",
    icon: "🏷️",
    questions: [0, 2, 5, 8]
  },
  {
    title: "Ventas",
    icon: "💰",
    questions: [1, 6, 9]
  },
  {
    title: "Servicio",
    icon: "🛠️",
    questions: [3, 4, 7]
  }
]

export default function FAQPage() {
  const [expandedItems, setExpandedItems] = useState<number[]>([])
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, updateCart } = useCart()

  const toggleFaq = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const getFilteredFaqs = () => {
    if (selectedCategory === "Todas") return faqs
    const category = categories.find(cat => cat.title === selectedCategory)
    return category ? category.questions.map(i => faqs[i]) : faqs
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header cart={cart} onCartOpen={() => setIsCartOpen(true)} />
      <CartSidebar cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateCart={updateCart} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#ce2a4d]/10 to-[#2d549b]/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Preguntas <span className="text-[#ce2a4d]">Frecuentes</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Resolvemos todas tus dudas sobre nuestros productos y servicios. 
            Encuentra respuestas rápidas a las preguntas más comunes.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Categorías
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                variant={selectedCategory === "Todas" ? "default" : "outline"}
                onClick={() => setSelectedCategory("Todas")}
                className={selectedCategory === "Todas" ? "bg-[#ce2a4d] hover:bg-[#b8243e]" : ""}
              >
                Todos
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.title}
                  variant={selectedCategory === category.title ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.title)}
                  className={selectedCategory === category.title ? "bg-[#ce2a4d] hover:bg-[#b8243e]" : ""}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="max-w-4xl mx-auto space-y-4">
            {getFilteredFaqs().map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    {expandedItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-[#ce2a4d] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-[#ce2a4d] flex-shrink-0" />
                    )}
                  </button>
                  {expandedItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              ¿No encontraste tu respuesta?
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos directamente y te responderemos lo antes posible.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#ce2a4d]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-[#ce2a4d]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Llamada
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">
                    Habla directamente con nuestro equipo
                  </p>
                  <a 
                    href="tel:1144775070"
                    className="text-[#ce2a4d] font-medium hover:underline"
                  >
                    11 4477-5070
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-[#2d549b]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-[#2d549b]" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">
                    Envíanos un mensaje detallado
                  </p>
                  <a 
                    href="mailto:hofactorypetcar@gmail.com"
                    className="text-[#2d549b] font-medium hover:underline"
                  >
                    hofactorypetcar@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    WhatsApp
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mb-4">
                    Respuesta rápida y personalizada
                  </p>
                  <a 
                    href="https://wa.link/send?phone=5491144775070&text=¡Hola! Tengo una consulta sobre HO Factory Pet 🐾"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 font-medium hover:underline"
                  >
                    Enviar mensaje
                  </a>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-[#ce2a4d] hover:bg-[#b8243e] text-white px-8 py-4">
                  Formulario de Contacto
                </Button>
              </Link>
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
