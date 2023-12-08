import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./pages/components/DefaultLayout";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout/>,
      children: [
        {
          path: '/',
          element: <ProductList/>
        },
        {
          path: '/product-details/:id',
          element: <ProductDetails/>
        },
        {
            path: '/cart',
            element: <Cart/>
        }
      
      ]
    }
])

export default router