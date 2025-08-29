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
  },
  {
    id: 4,
    slug: "combi-vw-hippie-cucha",
    name: "Combi VW Hippie Cucha",
    category: "Camas Exclusivas",
    image: "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png",
    images: [
      "/luxury-pet-beds-car-shaped-premium-quality-ferrari.png"
    ],
    description: "Cucha estilo Combi VW hippie, pana aterciopelada. Diseño retro único que combina nostalgia y confort para tu mascota.",
    longDescription: "La Combi VW Hippie Cucha es un homenaje a la época dorada del hippismo y los viajes en van. Esta cama combina el estilo retro de la Combi Volkswagen con la comodidad moderna, creando un espacio acogedor y único para tu mascota. La pana aterciopelada no solo es suave al tacto, sino que también es resistente y fácil de mantener.",
    features: [
      "Estilo retro hippie",
      "Pana aterciopelada premium",
      "Diseño exclusivo Combi VW",
      "Lavable en máquina",
      "Relleno de alta densidad",
      "Acabados artesanales"
    ],
    specifications: {
      "Tamaño": "S, M, L",
      "Material": "Pana aterciopelada premium",
      "Relleno": "Espuma de alta densidad",
      "Lavable": "Sí, máquina",
      "Garantía": "1 año",
      "Peso máximo": "12 kg"
    },
    inStock: true,
    colors: ["Hippie", "Retro", "Vintage"],
    relatedProducts: [1, 2]
  },
  {
    id: 5,
    slug: "mochila-transportadora-premium",
    name: "Mochila Transportadora Premium",
    category: "Transportadoras",
    image: "/happy-dog-and-cat-with-premium-pet-products-modern.png",
    images: [
      "/happy-dog-and-cat-with-premium-pet-products-modern.png"
    ],
    description: "Mochila transportadora de alta calidad para gatos. Ventilación óptima y correas acolchadas para máxima seguridad y confort.",
    longDescription: "Nuestra mochila transportadora premium está diseñada pensando en la seguridad y comodidad de tu gato. Con múltiples puntos de ventilación, correas acolchadas y materiales resistentes, esta mochila te permite transportar a tu mascota de manera segura y cómoda. Ideal para viajes, visitas al veterinario o paseos cortos.",
    features: [
      "Ventilación óptima",
      "Correas acolchadas",
      "Material resistente",
      "Múltiples compartimentos",
      "Fácil de limpiar",
      "Diseño ergonómico"
    ],
    specifications: {
      "Tamaño": "S, M, L",
      "Material": "Nylon premium resistente",
      "Capacidad": "Hasta 8 kg",
      "Lavable": "Sí, manual",
      "Garantía": "1 año",
      "Dimensiones": "30 x 20 x 40 cm (M)"
    },
    inStock: true,
    colors: ["Negro", "Gris", "Azul"],
    relatedProducts: [1, 3]
  },
  {
    id: 6,
    slug: "alimento-dr-cossia-natural",
    name: "Alimento Dr. Cossia Natural",
    category: "Alimentos",
    image: "/happy-woman-with-yellow-sweater-holding-small-whit.png",
    images: [
      "/happy-woman-with-yellow-sweater-holding-small-whit.png"
    ],
    description: "Alimento natural premium línea Dr. Cossia. 100% natural, sin conservantes artificiales y nutrición completa para tu mascota.",
    longDescription: "El alimento Dr. Cossia Natural representa la máxima calidad en nutrición para mascotas. Formulado con ingredientes 100% naturales y sin conservantes artificiales, este alimento proporciona una nutrición completa y balanceada. Cada ingrediente es cuidadosamente seleccionado para garantizar la salud y vitalidad de tu mascota.",
    features: [
      "100% natural",
      "Sin conservantes artificiales",
      "Nutrición completa",
      "Ingredientes premium",
      "Hipoalergénico",
      "Apto para todas las edades"
    ],
    specifications: {
      "Presentación": "1 kg, 5 kg, 15 kg",
      "Tipo": "Seco premium",
      "Edad": "Todas las edades",
      "Conservación": "Ambiente seco",
      "Garantía": "2 años",
      "Certificaciones": "ISO 9001, HACCP"
    },
    inStock: true,
    colors: ["Natural", "Premium"],
    relatedProducts: [1, 2]
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
export const categories = ["Todos", "Rascadores", "Camas Exclusivas", "Transportadoras", "Alimentos"]
