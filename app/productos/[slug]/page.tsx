"use client"

import { useState, useEffect, use, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowLeft, Play, ShoppingCart } from "lucide-react"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CartSidebar from "@/components/cart-sidebar"
import { useCart } from "@/contexts/cart-context"

// Mock data for products (sin precios)
const products = [
  {
    id: 1,
    slug: "rascador-premium-madera",
    name: "Rascador Premium Madera",
    category: "Rascadores",
    image: "/wooden-cat-scratching-posts-premium-quality-modern.png",
    images: [
      "/wooden-cat-scratching-posts-premium-quality-modern.png"
    ],
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
    relatedProducts: [2, 3]
  },
  {
    id: 2,
    slug: "petrrari-moises-auto",
    name: "Petrrari Moisés Auto",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    images: [
      "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png"
    ],
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
    relatedProducts: [1, 3]
  },
  {
    id: 3,
    slug: "merc3des-pet-bed",
    name: "Merc3des Pet Bed",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    images: [
      "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png"
    ],
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
    relatedProducts: [1, 2]
  }
]

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [addedToCart, setAddedToCart] = useState(false)
  const { cart, updateCart, addToCart } = useCart()

  // Refs para las miniaturas
  const thumbsContainerRef = useRef<HTMLDivElement>(null)
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([])

  // Función para verificar si es video
  const isVideo = (src: string) => {
    return src.match(/\.(mp4|webm|ogg|mov)$/i)
  }

  // Obtener array de imágenes del producto
  const productImages = product?.images || [product?.image].filter(Boolean) || []

  useEffect(() => {
    const productSlug = resolvedParams.slug as string
    const foundProduct = products.find(p => p.slug === productSlug)
    setProduct(foundProduct)
    setLoading(false)
  }, [resolvedParams])

  // Scroll automático a la miniatura seleccionada
  useEffect(() => {
    if (thumbRefs.current[selectedImage] && thumbsContainerRef.current) {
      const thumb = thumbRefs.current[selectedImage]
      const container = thumbsContainerRef.current
      
      if (thumb && container) {
        const thumbLeft = thumb.offsetLeft
        const containerWidth = container.clientWidth
        const thumbWidth = thumb.clientWidth
        
        container.scrollTo({
          left: thumbLeft - (containerWidth / 2) + (thumbWidth / 2),
          behavior: 'smooth'
        })
      }
    }
  }, [selectedImage])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
        <Header cart={cart} onCartOpen={() => setIsCartOpen(true)} />
        <CartSidebar cart={cart} isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} onUpdateCart={updateCart} />
        <div className="pt-24 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ce2a4d] mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-slate-400">Cargando producto...</p>
        </div>
      </div>
    )
  }

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
              <div className="h-[50vh] overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 w-full relative group">
                <img
                  src={product.images?.[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125 cursor-zoom-in"
                />
              </div>
              {/* Miniaturas */}
              <div
                ref={thumbsContainerRef}
                className="flex gap-2 overflow-y-hidden overflow-x-auto p-1 min-w-0"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    ref={(el) => {
                      thumbRefs.current[index] = el;
                    }}
                    onClick={() => setSelectedImage(index)}
                    aria-pressed={selectedImage === index}
                    className={`relative h-auto w-28 sm:w-32 shrink-0 aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ce2a4d]
          ${
            selectedImage === index
              ? "border-[#ce2a4d] shadow-lg scale-105"
              : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
          }`}
                  >
                    {isVideo(img) ? (
                      <div className="relative w-full h-full">
                        <video
                          src={img}
                          className="w-full h-full object-cover"
                          muted
                          playsInline
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={img}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                        )}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                {/* Breadcrumb */}
                <div className="mb-3">
                  <nav className="flex items-center space-x-2 text-sm">
                    <Link 
                      href="/productos"
                      className="text-gray-500 hover:text-[#ce2a4d] transition-colors"
                    >
                      Productos
                    </Link>
                    <span className="text-gray-400">/</span>
                    <Link 
                      href={`/productos?categoria=${encodeURIComponent(product.category)}`}
                      className="text-[#ce2a4d] hover:text-[#b8243e] transition-colors"
                    >
                      {product.category}
                    </Link>
                  </nav>
                </div>
                
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
                <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">{product.description}</p>
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

              {/* Add to Cart Actions */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="bg-[#ce2a4d] hover:bg-[#b8243e] text-white w-full"
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      image: product.image,
                      price: 0, // Los productos no tienen precio por ahora
                      quantity: 1
                    })
                    setAddedToCart(true)
                    setTimeout(() => setAddedToCart(false), 2000)
                  }}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Agregar al carrito
                </Button>
                {addedToCart && (
                  <div className="text-center p-3 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 rounded-lg">
                    ✓ Producto agregado al carrito
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Specifications Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Características Principales
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-[#ce2a4d] flex-shrink-0" />
                    <span className="text-gray-700 dark:text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Especificaciones
              </h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => {
                  if (!value || value === '') return null;
                  return (
                    <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-slate-700">
                      <span className="text-gray-600 dark:text-slate-400 font-medium">{key}:</span>
                      <span className="text-gray-900 dark:text-white">{String(value)}</span>
                    </div>
                  );
                })}
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
          <div className="grid md:grid-cols-4 gap-6">
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
