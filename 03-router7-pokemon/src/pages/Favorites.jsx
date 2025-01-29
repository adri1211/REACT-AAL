import { Link } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import { ROUTES } from "../routes/paths";

const Favorites = () => {
  const {removeFromFavorites, favorites} = usePokemon();
  if(favorites.length === 0){
    return(
      <div>
        <p>No tienes pokemons favoritos</p>
        <Link to={ROUTES.HOME} className="text-blue-500 hover:underline block mt-4">
          Volver al inicio
        </Link>
      </div>
    )
 
  }
    return (
      <div>
        {/**traemos los pokemons que tenemos en favoritos */}
        <h1 className="text-3xl font-bold text-center">Pokemons Favoritos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((pokemon) => (
            <div key={pokemon.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg">
              <div className="relative group">
                <img
                  className="mx-auto w-16"
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={pokemon.name}
                />
                <h2 className="text-xl font-bold capitalize text-center mt-4">{pokemon.name}</h2>
                <div className="space-y-2 mt-4 ">
                  <button
                    className="bg-blue-500 w-full text-center text-white px-4 py-2 rounded hover:bg-slate-900"
                    onClick={() => removeFromFavorites(pokemon.id)}
                  >
                    Eliminar de Favoritos
                  </button>
                  <Link
                    className="bg-green-500 block w-full text-center text-white px-4 py-2 rounded hover:bg-slate-900"
                    to={`${ROUTES.SEARCH}/${pokemon.name}`}
                  >
                    Ver Detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
          
      </div>
    )
  

}

export default Favorites