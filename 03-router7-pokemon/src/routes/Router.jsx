import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import { ROUTES } from "../routes/paths";
import Home  from "../pages/Home";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";
import PokemonDetail from "../pages/PokemonDetail";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: ROUTES.HOME,
                element: <Home />,
            },
            {
                path: ROUTES.SEARCH,
                element: <Search />,
            },
            {
                path: ROUTES.FAVORITES,
                element: <Favorites />,
            },
            {
                path: ROUTES.POKEMON_DETAIL,
                element: <PokemonDetail />,
                //loader es una caracteristica de react-router-dom nueva
                //que permite cargar datos antes de que se renderice el componente
                loader: async ({ params }) => {
                    try{
                        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
                        if(!response.ok){
                            throw new Error('Pokemon not found');
                        }
                        return await response.json();
                    }catch(error){
                        console.log(error);
                    }
                    
                },
                errorElement: <ErrorPage />,

            },
        ],
    },
    {},
]);