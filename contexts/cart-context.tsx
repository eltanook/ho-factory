"use client"

import { createContext, useContext, useState, ReactNode, useEffect, useRef } from "react"
import { toast } from 'react-toastify'

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface ToastMessage {
  id: string
  type: 'success' | 'info'
  message: string
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  updateCart: (cart: CartItem[]) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  generateWhatsAppMessage: () => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [pendingToasts, setPendingToasts] = useState<ToastMessage[]>([])
  const lastAddTime = useRef<{ [key: number]: number }>({})
  const DEBOUNCE_TIME = 1000 // 1 segundo de debounce
  const isInitialized = useRef(false)
  const processedMessages = useRef<Set<string>>(new Set())

  // Efecto para manejar los toasts de manera segura
  useEffect(() => {
    if (!isInitialized.current) {
      isInitialized.current = true
      return
    }

    // Procesar toasts pendientes
    if (pendingToasts.length > 0) {
      const uniqueToasts = pendingToasts.filter(toastMsg => {
        const messageKey = `${toastMsg.type}-${toastMsg.message}`
        if (processedMessages.current.has(messageKey)) {
          console.log(`🚫 Toast duplicado filtrado: ${toastMsg.message}`)
          return false
        }
        processedMessages.current.add(messageKey)
        return true
      })

      console.log(`📤 Procesando ${uniqueToasts.length} toasts únicos de ${pendingToasts.length} totales`)

      uniqueToasts.forEach((toastMsg, index) => {
        console.log(`📨 Toast ${index + 1}: ${toastMsg.type} - ${toastMsg.message}`)
        if (toastMsg.type === 'success') {
          toast.success(toastMsg.message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        } else if (toastMsg.type === 'info') {
          toast.info(toastMsg.message, {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          })
        }
      })

      // Limpiar toasts procesados
      setPendingToasts([])
      
      // Limpiar mensajes procesados después de un delay
      setTimeout(() => {
        processedMessages.current.clear()
        console.log(`🧹 Mensajes procesados limpiados`)
      }, 5000)
    }
  }, [pendingToasts])

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    const now = Date.now()
    const lastAdd = lastAddTime.current[item.id] || 0
    
    // Verificar si se está llamando muy rápido para el mismo producto
    if (now - lastAdd < DEBOUNCE_TIME) {
      console.log(`Debounce: ${item.name} - muy rápido`)
      return
    }
    
    // Actualizar el tiempo de la última adición
    lastAddTime.current[item.id] = now

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id)
      if (existingItem) {
        // Agregar toast a la cola en lugar de llamarlo directamente
        setPendingToasts(prev => [...prev, {
          id: `add-${item.id}-${now}`,
          type: 'success',
          message: `Cantidad de "${item.name}" aumentada en el carrito`
        }])
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      }
      // Agregar toast a la cola en lugar de llamarlo directamente
      setPendingToasts(prev => [...prev, {
        id: `add-${item.id}-${now}`,
        type: 'success',
        message: `"${item.name}" agregado al carrito`
      }])
      return [...prevCart, { ...item, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const itemToRemove = prevCart.find((item) => item.id === productId)
      if (itemToRemove) {
        // Agregar toast a la cola en lugar de llamarlo directamente
        setPendingToasts(prev => [...prev, {
          id: `remove-${productId}-${Date.now()}`,
          type: 'info',
          message: `"${itemToRemove.name}" removido del carrito`
        }])
      }
      return prevCart.filter((item) => item.id !== productId)
    })
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId)
      return
    }
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) => (item.id === productId ? { ...item, quantity } : item))
      const updatedItem = updatedCart.find((item) => item.id === productId)
      if (updatedItem) {
        // Agregar toast a la cola en lugar de llamarlo directamente
        setPendingToasts(prev => [...prev, {
          id: `update-${productId}-${Date.now()}`,
          type: 'success',
          message: `Cantidad de "${updatedItem.name}" actualizada a ${quantity}`
        }])
      }
      return updatedCart
    })
  }

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalItems = () => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) {
      return "¡Hola HO Factory Pet! 🐾\n\nQuiero consultar sobre sus productos.\n\n¡Gracias!"
    }

    const itemsList = cart
      .map((item) => `• ${item.name} x${item.quantity}`)
      .join("\n")

    const message = `¡Hola HO Factory Pet! 🐾\n\nQuiero consultar precios de estos productos:\n\n${itemsList}\n\nTotal de items: ${getTotalItems()}\n\n¡Gracias!`

    return message
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateCart,
        clearCart,
        getTotalItems,
        getTotalPrice,
        generateWhatsAppMessage,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
