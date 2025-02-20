import RootLayout from "../../layouts/RootLayout";
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import ProductPage from "../pages/ProductPage";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
  {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
          {
              index: true,
              element: <Login />,
          },
          {
              path: "register",
              element: <Register />,
          },
          {
              path: "products",
              element: <Products />,
          },
          {
              path: "products/:id",
              element: <ProductDetails/>,
          },
          {
            path: "products/create",
            element: (
              <ProtectedRoute>
                <ProductPage action="create"/>
              </ProtectedRoute>
            )
          },
          {
            path: "products/:id/edit",
            element: (
              <ProtectedRoute>
                <ProductPage action="edit"/>
              </ProtectedRoute>
            )
          },
      ]
  }
]);