"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowLeft, MessageCircle, Phone, Mail } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"
import { useCart } from "@/contexts/cart-context"

// Mock data for products (sin precios)
const products = [
  {
    id: 1,
    name: "Rascador Premium Madera",
    category: "Rascadores",
    image: "/wooden-cat-scratching-posts-premium-quality-modern.png",
    description: "Rascador 100% madera alfombrada, diseño exclusivo HO Factory Pet. Fabricado con materiales premium y acabados perfectos para el bienestar de tu gato.",
    longDescription: "Nuestro rascador premium de madera es el resultado de años de investigación y desarrollo. Cada pieza está cuidadosamente seleccionada y procesada para garantizar la máxima durabilidad y funcionalidad. El diseño exclusivo no solo es estéticamente atractivo, sino que también proporciona múltiples superficies de rascado para satisfacer las necesidades naturales de tu gato.",
    features: [
      "Madera premium seleccionada",
      "Alfombrado resistente anti-desgarro",
      "Diseño exclusivo y patentado",
      "Múltiples niveles de rascado",
      "Base estable y segura",
      "Fácil de limpiar y mantener"
    ],
    specifications: {
      "Altura": "120 cm",
      "Base": "60 x 40 cm",
      "Material": "Madera maciza + Alfombra premium",
      "Peso máximo": "25 kg",
      "Edad recomendada": "6+ meses",
      "Garantía": "2 años"
    },
    inStock: true,
    colors: ["Natural", "Marrón", "Negro"],
    relatedProducts: [2, 3, 4]
  },
  {
    id: 2,
    name: "Petrrari Moisés Auto",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    description: "Cama exclusiva en forma de auto deportivo, pana sublimada premium. Diseño único inspirado en autos de lujo.",
    longDescription: "La cama Petrrari es nuestra creación más emblemática. Inspirada en los autos deportivos más exclusivos del mundo, esta cama combina elegancia, confort y funcionalidad. La pana sublimada premium no solo es suave al tacto, sino que también es resistente a manchas y fácil de limpiar.",
    features: [
      "Pana sublimada premium",
      "Diseño exclusivo y patentado",
      "Anti-desgarro y anti-manchas",
      "Relleno de alta densidad",
      "Fácil de lavar",
      "Múltiples tamaños disponibles"
    ],
    specifications: {
      "Tamaño": "S, M, L, XL",
      "Material": "Pana sublimada premium",
      "Relleno": "Espuma de alta densidad",
      "Lavable": "Sí, máquina",
      "Garantía": "1 año",
      "Peso máximo": "15 kg"
    },
    inStock: true,
    colors: ["Rojo Ferrari", "Negro", "Azul"],
    relatedProducts: [1, 3, 5]
  },
  {
    id: 3,
    name: "Merc3des Pet Bed",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    description: "Cama de lujo inspirada en Mercedes, calidad super premium. Elegancia y confort en cada detalle.",
    longDescription: "La cama Merc3des representa la máxima expresión de lujo y calidad. Inspirada en la elegancia de los automóviles Mercedes-Benz, esta cama ofrece un confort excepcional con materiales de la más alta calidad. Cada detalle está cuidadosamente diseñado para proporcionar la mejor experiencia para tu mascota.",
    features: [
      "Calidad super premium",
      "Anti-manchas avanzado",
      "Diseño único y elegante",
      "Materiales hipoalergénicos",
      "Estructura reforzada",
      "Acabados de lujo"
    ],
    specifications: {
      "Tamaño": "M, L, XL",
      "Material": "Tela premium anti-manchas",
      "Relleno": "Espuma viscoelástica",
      "Lavable": "Sí, máquina",
      "Garantía": "2 años",
      "Peso máximo": "20 kg"
    },
    inStock: true,
    colors: ["Plateado", "Negro", "Blanco"],
    relatedProducts: [1, 2, 4]
  }
]

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, updateCart, addToCart } = useCart()

  useEffect(() => {
    const productId = parseInt(params.id as string)
    const foundProduct = products.find(p => p.id === productId)
    setProduct(foundProduct)
  }, [params.id])

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <Header cart={cart} onCartOpen={() => setIsCartOpen(true)} />
        <CartSidebar cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateCart={updateCart} />
        <div className="pt-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Producto no encontrado</h1>
          <Link href="/productos">
            <Button className="mt-4">Volver a Productos</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header cart={cart} onCartOpen={() => setIsCartOpen(true)} />
      <CartSidebar cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateCart={updateCart} />

      {/* Back Button */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4">
          <Link href="/productos">
            <Button variant="ghost" className="text-gray-600 dark:text-gray-400 hover:text-[#ce2a4d]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Productos
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[product.image, product.image, product.image, product.image].map((img, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-3 bg-[#ce2a4d]">{product.category}</Badge>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
                <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Características Principales
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-[#ce2a4d] flex-shrink-0" />
                      <span className="text-gray-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Especificaciones
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500 dark:text-slate-500">Material:</span>
                    <p className="text-gray-900 dark:text-white">{product.material}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-slate-500">Dimensiones:</span>
                    <p className="text-gray-900 dark:text-white">{product.dimensions}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-slate-500">Peso:</span>
                    <p className="text-gray-900 dark:text-white">{product.weight}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500 dark:text-slate-500">Colores:</span>
                    <div className="flex space-x-2">
                      {product.colors.map((color: string) => (
                        <Badge key={color} variant="outline" className="px-3 py-1">
                          {color}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.inStock 
                    ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                    : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                }`}>
                  {product.inStock ? "En Stock" : "Agotado"}
                </span>
                {product.inStock && (
                  <span className="text-sm text-gray-500 dark:text-slate-400">
                    Disponible para envío inmediato
                  </span>
                )}
              </div>

              {/* Contact Actions */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  ¿Te interesa este producto?
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    size="lg"
                    className="bg-green-600 hover:bg-green-700 text-white flex-1"
                    onClick={() => window.open(`https://wa.link/send?phone=5491144775070&text=¡Hola! Me interesa el producto: ${product.name} 🐾`, "_blank")}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Consultar por WhatsApp
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="flex-1"
                    onClick={() => window.open(`tel:+5491144775070`)}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Llamar
                  </Button>
                </div>
                <Button
                  size="lg"
                  variant="ghost"
                  className="w-full"
                  onClick={() => window.open(`mailto:info@hofactorypet.com?subject=Consulta sobre ${product.name}`)}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Enviar Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Productos Relacionados
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {product.relatedProducts.slice(0, 3).map((relatedId: number) => {
              const relatedProduct = products.find(p => p.id === relatedId)
              if (!relatedProduct) return null
              return (
                <div key={relatedId} className="group cursor-pointer">
                  <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 mb-4">
                    <img
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-slate-400 line-clamp-2">
                    {relatedProduct.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
