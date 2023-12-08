import React, { createContext, useContext, useReducer } from "react";
import ICartItem from "../interfaces/cartItem";
import { useQuery } from "react-query";

interface CartContextProps {
    cartItems: ICartItem[]
    addToCart: (item: ICartItem) => void
    clearCart: () => void
    getTotal: () => number;
}

interface CartState {
  cartItems: ICartItem[];
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: ICartItem }
  | { type: 'CLEAR_CART' };

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'CLEAR_CART':
      return { ...state, cartItems: [] };
    default:
      return state;
  }
};

const CartContext = createContext<CartContextProps | undefined>(undefined)

interface CartProviderProps {
    children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });
  
    useQuery({
      queryKey: ['get-cart'],
      queryFn: () => { return JSON.parse(localStorage.getItem('cartItems') || '') },
      onSuccess(data) {
        dispatch({ type: 'ADD_TO_CART', payload: data });
      }
    })
  
    const addToCart = (item: ICartItem) => {
      dispatch({ type: 'ADD_TO_CART', payload: item });
      localStorage.setItem('cartItems', JSON.stringify([...state.cartItems, item]))
    }

    const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' });
      localStorage.removeItem('cartItems')
    }

    const getTotal = () => {
      const total = state.cartItems.reduce((total, item) => total + Number(item.price), 0);
      return parseFloat(total.toFixed(2));
    };
  
    return (
      <CartContext.Provider value={{ ...state, addToCart, clearCart, getTotal }}>
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