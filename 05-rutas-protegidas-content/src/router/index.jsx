import {createBrowserRouter} from 'react-router-dom'
import RootLayout from '../layout/RootLayout';
import { ProtectedRoute } from '../components/ProtectedRoute';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Users from '../pages/Users';
import Products from '../pages/Products';
import AdminLayout from '../layout/AdminLayout';
import ErrorPage from '../pages/ErrorPage';
import Setting from '../pages/Setting';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login/>
      },
      {
        path: "admin",
        element:(
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            index: true, 
            element: <Dashboard />,
          },
          {
            path: "users",
            element: <Users />
          },
          {
            path: "products",
            element: <Products />,
          },
          {
            path: "setting",
            element: <Setting />, 
          },
            
          
        ]
      },
    ],
  },
]);