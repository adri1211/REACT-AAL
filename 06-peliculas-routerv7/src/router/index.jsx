import { createBrowserRouter } from 'react-router-dom';
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage" 
import MovieDetail from '../pages/MovieDetail';
import Search from '../pages/Search';
import Reviews from '../pages/Reviews';
import Favourites from '../pages/Favourites';
import MovieList from '../pages/MovieList';
import RootLayout from '../layouts/RootLayout';

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
                path: "movies",
                element: <MovieList />,
            },
            {
                path: "movie/:id",
                element: <MovieDetail />,
            },
            {
                path: "search",
                element: <Search/>,
            },
            {
                path: "reviews",
                element: <Reviews />,
            },
            {
                path: "favorites",
                element: <Favourites />,
            }
        ]
    }
]);