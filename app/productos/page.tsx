"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ArrowRight, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"
import { useCart } from "@/contexts/cart-context"
import { products, categories, getColorValue } from "@/lib/products-data"

export default function ProductosPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cart, updateCart, addToCart } = useCart()

  // Obtener parámetros de URL
  const categoriaFromUrl = searchParams.get('categoria')
  const searchFromUrl = searchParams.get('search') || ''

  // Estado local sincronizado con URL
  const [selectedCategory, setSelectedCategory] = useState(categoriaFromUrl || "Todos")
  const [searchTerm, setSearchTerm] = useState(searchFromUrl)

  // Sincronizar estado con URL cuando cambien los parámetros
  useEffect(() => {
    if (categoriaFromUrl !== selectedCategory) {
      setSelectedCategory(categoriaFromUrl || "Todos")
    }
  }, [categoriaFromUrl])

  // Sincronizar búsqueda con URL
  useEffect(() => {
    if (searchFromUrl !== searchTerm) {
      setSearchTerm(searchFromUrl)
    }
  }, [searchFromUrl])

  // Función para cambiar categoría
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    const params = new URLSearchParams()
    if (category !== "Todos") {
      params.set('categoria', category)
    }
    if (searchTerm) {
      params.set('search', searchTerm)
    }
    
    const queryString = params.toString()
    const newUrl = queryString ? `?${queryString}` : '/productos'
    router.replace(newUrl, { scroll: false })
  }

  // Función para cambiar búsqueda
  const handleSearchChange = (search: string) => {
    setSearchTerm(search)
  }

  // Debounce para actualizar URL de búsqueda
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const params = new URLSearchParams()
      if (selectedCategory !== "Todos") {
        params.set('categoria', selectedCategory)
      }
      if (searchTerm) {
        params.set('search', searchTerm)
      }
      
      const queryString = params.toString()
      const newUrl = queryString ? `?${queryString}` : '/productos'
      router.replace(newUrl, { scroll: false })
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, selectedCategory, router])

  const filteredProducts = products.filter((product) => {
    let matchesCategory = false;
    if (selectedCategory === "Todos") {
      matchesCategory = true;
    } else if (selectedCategory === "Transportadores") {
      matchesCategory = product.category === "Transportadores";
    } else if (selectedCategory === "Colchoneta") {
      matchesCategory = product.category === "Colchoneta" || product.category === "Colchoneta almohadón";
    } else {
      matchesCategory = product.category === selectedCategory;
    }
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
      <section className="py-20 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          {/* Filtros y búsqueda adaptados para lg (<1024px) */}
          <div className="flex flex-col gap-4 mb-8 lg:mb-4">
            <div className="w-full lg:w-1/2 lg:mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#ce2a4d] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => handleCategoryChange(category)}
                  className={selectedCategory === category ? "bg-[#ce2a4d] hover:bg-[#b8243e] text-white" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory !== "Todos" || searchTerm) && (
            <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Filtros activos:</span>
                  {selectedCategory !== "Todos" && (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      Categoría: {selectedCategory}
                    </Badge>
                  )}
                  {searchTerm && (
                    <Badge variant="secondary" className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                      Búsqueda: "{searchTerm}"
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("Todos")
                    setSearchTerm("")
                    router.replace('/productos', { scroll: false })
                  }}
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  Limpiar filtros
                </Button>
              </div>
            </div>
          )}

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
                  <Badge className="absolute top-2 right-2 bg-[#ce2a4d] text-white">{product.category}</Badge>
                  {product.inStock ? (
                    <Badge className="absolute top-2 left-2 bg-green-500 text-white">En Stock</Badge>
                  ) : (
                    <Badge className="absolute top-2 left-2 bg-red-500 text-white">Agotado</Badge>
                  )}
                </div>
                <CardContent className="p-4 flex flex-col h-full">
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

                  {/* Colores disponibles */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-gray-700 dark:text-slate-300 mb-2">
                        Colores disponibles ({product.colors.length}):
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.slice(0, 4).map((color, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-1"
                            title={color}
                          >
                            <div
                              className="w-4 h-4 rounded-full border border-gray-300"
                              style={{
                                backgroundColor: getColorValue(color)
                              }}
                            />
                            <span className="text-xs text-gray-600 dark:text-slate-400">
                              {color}
                            </span>
                          </div>
                        ))}
                        {product.colors.length > 4 && (
                          <span className="text-xs text-gray-500 dark:text-slate-500">
                            +{product.colors.length - 4} más
                          </span>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-end mt-auto">
                    {/* Eliminado estado de disponibilidad visual */}
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        className="bg-[#ce2a4d] hover:bg-[#b8243e] text-white"
                        onClick={() => {
                          addToCart({
                            id: product.id,
                            name: product.name,
                            image: product.image,
                            price: 0
                          })
                        }}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Agregar
                      </Button>
                      <Link href={`/productos/${product.slug}`}>
                        <Button size="sm" variant="outline" className="border-[#2d549b] text-[#2d549b] dark:text-white hover:bg-[#2d549b] hover:text-white">
                          Ver Detalles
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
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
                  Ver Preguntas frecuentes
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
