import { createContext, useState, useEffect, useContext } from "react";
import { useToast } from "./ToastContext";

const FavouritesContext = createContext();

export const useFavourites = () => {
    const context = useContext(FavouritesContext);
    if (!context) {
        throw new Error('useFavourites must be used within a FavouritesProvider');
    }
    return context;
};

export function FavouritesProvider({ children }) {
    const [favourites, setFavourites] = useState(() => {
        const savedFavourites = localStorage.getItem('favourites');
        return savedFavourites ? JSON.parse(savedFavourites) : [];
    });
    
    const { showToast } = useToast();

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);

    const addFavourites = (pelicula) => {
        if (isFavourite(pelicula.id)) {
            showToast("La película ya está en favoritos", "error");
            return;
        }
        
        setFavourites([...favourites, pelicula]);
        showToast("Película añadida a favoritos", "success");
    };
    
    const removeFromFavorites = (peliculaId) => {
        setFavourites((prevFavourites) => 
            prevFavourites.filter(favourite => favourite.id !== peliculaId)
        );
        showToast("Película eliminada de favoritos", "success");
    };

    const isFavourite = (peliculaId) => {
        return favourites.some(peli => peli.id === peliculaId);
    };

    const getFavourites = () => {
        return favourites;
    };

    return (
        <FavouritesContext.Provider 
            value={{
                favourites,
                addFavourites,
                removeFromFavorites,
                isFavourite,
                getFavourites
            }}
        >
            {children}
        </FavouritesContext.Provider>
    );
}


