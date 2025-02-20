import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import PostDetail from '../pages/PostDetail';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "post/:id",
                element: <PostDetail />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register/>,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "product/:id",
                element: <ProductDetail />,
            },
            {
                path: "cart",
                element: <Cart />,
            }
        ]
    }
]);