"use client"

import { Button } from "@/components/ui/button"
import { X, Plus, Minus, MessageCircle } from "lucide-react"
import { toast } from "sonner"

interface CartSidebarProps {
  cart: any[]
  isOpen: boolean
  onClose: () => void
  onUpdateCart: (cart: any[]) => void
}

export default function CartSidebar({ cart, isOpen, onClose, onUpdateCart }: CartSidebarProps) {
  const removeFromCart = (productId: number) => {
    const newCart = cart.filter((item) => item.id !== productId)
    onUpdateCart(newCart)
    toast.success("Producto eliminado del carrito")
  }

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(productId)
      return
    }
    const newCart = cart.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    onUpdateCart(newCart)
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const generateWhatsAppMessage = () => {
    const message = `¡Hola HO Factory Pet! 🐾\n\nQuiero realizar el siguiente pedido:\n\n${cart
      .map((item) => `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString()}`)
      .join("\n")}\n\n*Total: $${getTotalPrice().toLocaleString()}*\n\n¡Gracias!`

    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.link/send?phone=5491144775070&text=${encodedMessage}`, "_blank")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-96 bg-white dark:bg-slate-900 p-6 overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white font-serif">Carrito de Compras</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="hover:bg-gray-100 dark:hover:bg-slate-800">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-slate-400 text-lg">Tu carrito está vacío</p>
            <p className="text-gray-400 dark:text-slate-500 text-sm mt-2">Agrega productos para comenzar</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 p-4 border border-gray-200 dark:border-slate-700 rounded-lg bg-gray-50 dark:bg-slate-800"
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white">{item.name}</h3>
                    <p className="text-[#ce2a4d] font-bold text-lg">${item.price.toLocaleString()}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent hover:bg-gray-100 dark:hover:bg-slate-700"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center font-medium text-gray-900 dark:text-white">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 bg-transparent hover:bg-gray-100 dark:hover:bg-slate-700"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-gray-900 dark:text-white">Total:</span>
                <span className="text-xl font-bold text-[#ce2a4d]">${getTotalPrice().toLocaleString()}</span>
              </div>
              <Button
                onClick={generateWhatsAppMessage}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Finalizar por WhatsApp
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
