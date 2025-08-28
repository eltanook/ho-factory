"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight } from "lucide-react"
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
    description: "Rascador 100% madera alfombrada, diseño exclusivo HO Factory Pet",
    features: ["Madera premium", "Alfombrado resistente", "Diseño exclusivo"],
    inStock: true,
  },
  {
    id: 2,
    name: "Petrrari Moisés Auto",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    description: "Cama exclusiva en forma de auto deportivo, pana sublimada premium",
    features: ["Pana sublimada", "Diseño exclusivo", "Anti-desgarro"],
    inStock: true,
  },
  {
    id: 3,
    name: "Merc3des Pet Bed",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    description: "Cama de lujo inspirada en Mercedes, calidad super premium",
    features: ["Calidad super premium", "Anti-manchas", "Diseño único"],
    inStock: true,
  },
  {
    id: 4,
    name: "Combi VW Hippie Cucha",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    description: "Cucha estilo Combi VW hippie, pana aterciopelada",
    features: ["Estilo retro", "Pana aterciopelada", "Lavable"],
    inStock: true,
  },
  {
    id: 5,
    name: "Mochila Transportadora Premium",
    category: "Transportadoras",
    image: "/happy-dog-and-cat-with-premium-pet-products-modern.png",
    description: "Mochila transportadora de alta calidad para gatos",
    features: ["Ventilación óptima", "Correas acolchadas", "Resistente"],
    inStock: true,
  },
  {
    id: 6,
    name: "Alimento Dr. Cossia Natural",
    category: "Alimentos",
    image: "/happy-woman-with-yellow-sweater-holding-small-whit.png",
    description: "Alimento natural premium línea Dr. Cossia",
    features: ["100% natural", "Sin conservantes", "Nutrición completa"],
    inStock: true,
  },
]

const categories = ["Todos", "Rascadores", "Camas Exclusivas", "Transportadoras", "Alimentos"]

export default function ProductosPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, updateCart } = useCart()

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Header cart={cart} onCartOpen={() => setIsCartOpen(true)} />
      <CartSidebar cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateCart={updateCart} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-[#ce2a4d]/10 to-[#2d549b]/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestros <span className="text-[#ce2a4d]">Productos</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-slate-400 max-w-3xl mx-auto">
            Descubre nuestra línea completa de productos premium para mascotas. 
            Diseños exclusivos, calidad superior y funcionalidad excepcional.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ce2a4d] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-[#ce2a4d] hover:bg-[#b8243e]" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-[#ce2a4d]">{product.category}</Badge>
                  {product.inStock ? (
                    <Badge className="absolute top-2 left-2 bg-green-500">En Stock</Badge>
                  ) : (
                    <Badge className="absolute top-2 left-2 bg-red-500">Agotado</Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-slate-400 text-sm mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-700 dark:text-slate-300 mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <li key={index} className="text-xs text-gray-600 dark:text-slate-400 flex items-center">
                          <div className="w-1 h-1 bg-[#ce2a4d] rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-slate-400">
                      {product.inStock ? "Disponible" : "No disponible"}
                    </span>
                    <Link href={`/productos/${product.id}`}>
                      <Button size="sm" className="bg-[#2d549b] hover:bg-[#1e3a6f] text-white">
                        Ver Detalles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Contáctanos para consultas personalizadas o productos especiales. 
              Estamos aquí para ayudarte a encontrar la solución perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-[#ce2a4d] hover:bg-[#b8243e] text-white px-8 py-4">
                  Contactar
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" className="px-8 py-4">
                  Ver FAQ
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
