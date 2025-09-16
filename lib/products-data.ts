// Datos centralizados de productos para HO Factory Pet
// Este archivo es la única fuente de verdad para todos los productos

export interface Product {
  id: number
  slug: string
  name: string
  category: string
  image: string
  images: string[]
  description: string
  longDescription: string
  features: string[]
  specifications: Record<string, string>
  inStock: boolean
  colors?: string[]
  relatedProducts: number[]
}

export const products: Product[] = [
  {
    id: 1,
    slug: "rascador-premium-gato",
    name: "Rascador Premium Para Gato",
    category: "Rascadores",
    image: "/wooden-cat-scratching-posts-premium-quality-modern.png",
    images: ["/wooden-cat-scratching-posts-premium-quality-modern.png"],
    description: "Rascador 100% madera alfombrada, diseño exclusivo HO Factory Pet. Fabricado con materiales premium y acabados perfectos para el bienestar de tu gato.",
    longDescription: "Diseño sólido y estable: construidos con bases firmes que evitan movimientos y caídas. Diferentes diseños y alturas que se adecuan a cualquier ambiente. Multiples areas de rasgado recubiertas de cintas de algodón pesado, para evitar la  pérdida de pelos que puedan ser ingeridos por nuestra mascota. Y de máxima resistencia al rasgado. Plataformas y refugios pensados para un óptimo transito y uso de los espacios ideales para juego, descanso y observación. Tapizados resistentes y fáciles de limpiar, pensados para el uso diario-  Modelos verticales y compactos que se adaptan a cualquier espacio del hogar. Estética moderna, materiales y colores sobrios combinables con la decoración de la casa.",
    features: [
      "Madera maciza",
      "Alfombra premium",
      "Base firme",
      "Cintas de algodón pesado",
      "Plataformas y refugios",
      "Tapizados resistentes"
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
    colors: ["Gris", "Negro"],
    relatedProducts: []
  },
  {
    id: 2,
    slug: "cama-moises-mascota",
    name: "Cama Moisés para mascota",
    category: "Camas Premium",
    image: "/placeholder.jpg",
    images: ["/placeholder.jpg"],
    description: "Cama Moisés Rectangular. de Pana aterciopelada.",
    longDescription: "Anti desgarro con proceso Anti mancha. Rellena de Vellón Siliconado,  100% lavable. color inalterable. Mejor no hay, ya que la Pana aterciopelada es una caricia perfecta para garantizar un descanso confortable y un tacto inigualable que tu mascota percibe.",
    features: [
      "Pana aterciopelada",
      "Anti desgarro",
      "Anti mancha",
      "Relleno de vellón siliconado",
      "100% lavable",
      "Color inalterable"
    ],
    specifications: {
      "Tamaños": "S (50X40), M (60X48), L (70X56)"
    },
    inStock: true,
    colors: [],
    relatedProducts: []
  },
  {
    id: 3,
    slug: "cama-nido-mascota",
    name: "Cama Nido para mascota",
    category: "Camas Premium",
    image: "/placeholder.jpg",
    images: ["/placeholder.jpg"],
    description: "Cama Nido Oval de Pana aterciopelada.",
    longDescription: "Anti desgarro con proceso Anti mancha. Rellena de Vellón Siliconado,  100% lavable. color inalterable. Mejor no hay, ya que la Pana aterciopelada es una caricia perfecta para garantizar un descanso confortable y un tacto inigualable que tu mascota percibe.",
    features: [
      "Pana aterciopelada",
      "Anti desgarro",
      "Anti mancha",
      "Relleno de vellón siliconado",
      "100% lavable",
      "Color inalterable"
    ],
    specifications: {
      "Tamaños": "S (50X40), M (60X48), L (70X56)"
    },
    inStock: true,
    colors: [],
    relatedProducts: []
  },
  {
    id: 4,
    slug: "dormilon-pana-aterciopelada",
    name: "Dormilón de Pana aterciopelada",
    category: "Colchón Súper Premium",
    image: "/placeholder.jpg",
    images: ["/placeholder.jpg"],
    description: "Cama Dormilón de Pana aterciopelada, Anti desgarro. Ideal para interiores.",
    longDescription: "El mejor colchón para perros grandes, súper confortable, con funda anti desgarro, anti manchas, 100% lavable, de colores inalterables y con apertura velcro para extraer el relleno y lavar. Su interior con colchón de friselina 80 y relleno de copos de goma espuma que se adaptan a la posición de la mascota.",
    features: [
      "Pana aterciopelada",
      "Anti desgarro",
      "Anti manchas",
      "100% lavable",
      "Colores inalterables",
      "Apertura velcro"
    ],
    specifications: {
      "Tamaños": "XL de 95x70 y XXL de 115x80"
    },
    inStock: true,
    colors: [],
    relatedProducts: []
  },
  {
    id: 5,
    slug: "colchoneta-cordura-anti-desgarro",
    name: "Colchoneta Cordura anti desgarro",
    category: "Colchoneta",
    image: "/placeholder.jpg",
    images: ["/placeholder.jpg"],
    description: "Cama Colchoneta Cordura anti desgarro impermeable para interior y exterior.",
    longDescription: "La mejor colchoneta de cordura importada, impermeable, anti desgarro, 100% lavable a cepillo, con cierre velcro para extraer la placa de colchón poliester de alta densidad-",
    features: [
      "Cordura importada",
      "Impermeable",
      "Anti desgarro",
      "100% lavable a cepillo",
      "Cierre velcro"
    ],
    specifications: {
      "Tamaños": "XL de 95x70 y XXL de 115x80"
    },
    inStock: true,
    colors: [],
    relatedProducts: []
  },
  {
    id: 6,
    slug: "colchoneta-cordura-eco-anti-desgarro",
    name: "Colchoneta Cordura ECO anti desgarro",
    category: "Colchoneta almohadón",
    image: "/placeholder.jpg",
    images: ["/placeholder.jpg"],
    description: "Cama Colchoneta almohadón de Cordura anti desgarro impermeable para interior y exterior.",
    longDescription: "Colchoneta-almohadón con piso impermeable y superior de cordura anti desgarro , relleno de placa poliester y vellón siliconado. Lavado a cepillo.",
    features: [
      "Piso impermeable",
      "Cordura anti desgarro",
      "Relleno de placa poliester",
      "Vellón siliconado",
      "Lavado a cepillo"
    ],
    specifications: {},
    inStock: true,
    colors: [],
    relatedProducts: []
  },
  {
    id: 7,
    slug: "cama-petrrari",
    name: "Cama Petrrari",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    images: ["/luxury-pet-beds-car-shaped-premium-quality-ferrari.png"],
    description: "Cama exclusiva en forma de auto deportivo, pana sublimada premium.",
    longDescription: "Anti desgarro y con proceso anti mancha. Diseño único inspirado en autos de lujo. 100% lavable y de colores inalterables. Exterior en Pana aterciopelada, anti desgarro y sublimada con diseños exclusivos.",
    features: [
      "Pana sublimada premium",
      "Anti desgarro",
      "Anti mancha",
      "Diseño único",
      "100% lavable",
      "Colores inalterables"
    ],
    specifications: {
      "Tamaño": "S, M",
      "Material": "Pana sublimada premium",
      "Relleno": "Vellón siliconado y colchón extraíble de Espuma de alta densidad",
      "Lavable": "Sí",
      "Color": "Inalterable"
    },
    inStock: true,
    colors: ["Rojo Ferrari", "Negro", "Azul"],
    relatedProducts: []
  },
  {
    id: 8,
    slug: "cama-merc3des",
    name: "Cama Merc3des",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    images: ["/luxury-pet-beds-car-shaped-premium-quality-ferrari.png"],
    description: "Cama de lujo inspirada en Mercedes, calidad super premium. Anti desgarro y con proceso anti mancha. Elegancia y confort en cada detalle. 100% lavable y de colores inalterables",
    longDescription: "Anti desgarro y con proceso anti mancha. Diseño único inspirado en autos de lujo. 100% lavable y de colores inalterables. Exterior en Pana aterciopelada, anti desgarro y sublimada con diseños exclusivos.",
    features: [
      "Pana sublimada premium",
      "Anti desgarro",
      "Anti mancha",
      "Diseño único",
      "100% lavable",
      "Colores inalterables"
    ],
    specifications: {
      "Tamaño": "S, M",
      "Material": "Pana sublimada premium",
      "Relleno": "Vellón siliconado y colchón extraíble de Espuma de alta densidad",
      "Lavable": "Sí",
      "Color": "Inalterable"
    },
    inStock: true,
    colors: ["Plateado", "Negro", "Blanco"],
    relatedProducts: []
  },
  {
    id: 9,
    slug: "cucha-gato-combo-vw-hippie",
    name: "Cucha para Gato Combo VW hippie",
    category: "Camas Exclusivas",
    image: "/placeholder.jpg",
    images: ["/placeholder.jpg"],
    description: "Cucha - Cueva - estilo Combi VW hippie, pana aterciopelada. Diseño retro, único, que combina nostalgia y confort para tu mascota.",
    longDescription: "Las Cuchas estilo Combi VW Hippie de pana aterciopelada para gato o perros chicos son un excelente refugio confortable gracias a su colchón interior y relleno de goma espuma. Recrea las primeras Combis VW decoradas con el estilo POWER FLOWER en el festival de música en Woodstock 1969, EEUU y que dió inicio al Movimiento HIPPIE.",
    features: [
      "Pana aterciopelada premium",
      "Colchón interior extraíble",
      "Relleno de goma espuma",
      "Diseño retro hippie",
      "Lavable 100%"
    ],
    specifications: {
      "Tamaño": "Único, 52x26x32",
      "Material": "Pana aterciopelada premium",
      "Relleno": "Espuma de alta densidad y colchón interior extraíble",
      "Lavable": "100%"
    },
    inStock: true,
    colors: ["Hippie", "Retro", "Vintage"],
    relatedProducts: []
  },
  {
    id: 10,
    slug: "mochila-transportadora-premium",
    name: "Mochila Transportadora Premium",
    category: "Transportadores",
    image: "/happy-dog-and-cat-with-premium-pet-products-modern.png",
    images: ["/happy-dog-and-cat-with-premium-pet-products-modern.png"],
    description: "Mochila transportadora de alta calidad para gatos. Ideal para transporte en moto. 100% forradas.  Ventilación óptima y correas acolchadas para máxima seguridad y confort.",
    longDescription: "Tamaño: Unico. Base 33x30y42 de alto  Material: Cordura importada premium anti-desgarro, forrada. Piso rígido. Capacidad: Hasta  20 kg. Lavable: Sí, manual.",
    features: [
      "Cordura importada premium",
      "Anti desgarro",
      "Forrada",
      "Piso rígido",
      "Ventilación óptima",
      "Correas acolchadas"
    ],
    specifications: {
      "Tamaño": "Único. Base 33x30y42 de alto",
      "Material": "Cordura importada premium anti-desgarro, forrada",
      "Piso": "Rígido",
      "Capacidad": "Hasta 20 kg",
      "Lavable": "Sí, manual"
    },
    inStock: true,
    colors: ["Negro", "Gris", "Azul"],
    relatedProducts: []
  },
  {
    id: 11,
    slug: "bolso-transportador-premium",
    name: "Bolso Transportador Premium",
    category: "Transportadores",
    image: "/placeholder.jpg",
    images: ["/placeholder.jpg"],
    description: "Bolso transportador apertura doble. Ventilación óptima, piso rígido y cintas reforzadas. Interior 100% forrado. seguro y confortable",
    longDescription: "Tamaño: Unico. Base 22x42y30 de alto  Material: Cordura importada premium anti-desgarro, forrada. Piso rígido. Capacidad: Hasta  20 kg. Lavable: Sí, manual.",
    features: [
      "Cordura importada premium",
      "Anti desgarro",
      "Forrada",
      "Piso rígido",
      "Ventilación óptima",
      "Cintas reforzadas"
    ],
    specifications: {
      "Tamaño": "Único. Base 22x42y30 de alto",
      "Material": "Cordura importada premium anti-desgarro, forrada",
      "Piso": "Rígido",
      "Capacidad": "Hasta 20 kg",
      "Lavable": "Sí, manual"
    },
    inStock: true,
    colors: ["Natural", "Premium"],
    relatedProducts: []
  }
]

// Función helper para obtener valores de color
export const getColorValue = (colorName: string) => {
  const colorMap: { [key: string]: string } = {
    "Natural": "#D2B48C",
    "Marrón": "#8B4513",
    "Negro": "#000000",
    "Rojo Ferrari": "#FF0000",
    "Azul": "#0000FF",
    "Plateado": "#C0C0C0",
    "Blanco": "#FFFFFF",
    "Hippie": "#FF69B4",
    "Retro": "#FFA500",
    "Vintage": "#800080",
    "Gris": "#808080",
    "Premium": "#FFD700"
  }
  return colorMap[colorName] || "#CCCCCC"
}

// Función para obtener un producto por slug
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug)
}

// Función para obtener productos por categoría
export const getProductsByCategory = (category: string): Product[] => {
  if (category === "Todos") return products
  return products.filter(product => product.category === category)
}

// Función para obtener productos relacionados
export const getRelatedProducts = (productId: number): Product[] => {
  const product = products.find(p => p.id === productId)
  if (!product) return []
  
  return products.filter(p => 
    product.relatedProducts.includes(p.id)
  )
}

// Categorías disponibles
export const categories = ["Todos", "Rascadores", "Camas Exclusivas", "Transportadores", "Colchoneta"]
