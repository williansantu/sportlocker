import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CartProvider } from './contexts/CartContext.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import {RouterProvider} from "react-router-dom";
import router from './router.tsx'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <RouterProvider router={router} />
        <App />
      </CartProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
