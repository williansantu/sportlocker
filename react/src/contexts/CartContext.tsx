import React, { createContext, useContext, useState } from "react";
import ICartItem from "../interfaces/cartItem";
import { useQuery } from "react-query";

interface CartContextProps {
    cartItems: ICartItem[]
    addToCart: (item: ICartItem) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextProps | undefined>(undefined)

interface CartProviderProps {
    children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cartItems, setCartItems] = useState<ICartItem[]>([])
  
    useQuery({
        queryKey: ['get-cart'],
        queryFn: () => { return JSON.parse(localStorage.getItem('cartItems') || '') },
        onSuccess(data) {
            setCartItems(data)
        }
    })
  
    const addToCart = (item: ICartItem) => {
        setCartItems((prevItems) => [...prevItems, item])
        localStorage.setItem('cartItems', JSON.stringify([...cartItems, item]))
    }

    const clearCart = () => {
        localStorage.removeItem('cartItems')
        setCartItems([])
      }
  
    return (
      <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
        {children}
      </CartContext.Provider>
    )
  }
  
  export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
      throw new Error('useCart must be used within a CartProvider')
    }
    return context
  }