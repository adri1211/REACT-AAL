import { Link } from "react-router-dom";
import { useFavourites } from "../contexts/FavouritesContext";
import { getImageURL } from "../services/tmdb";


const Favourites = () => {
  const {favourites, removeFromFavorites} = useFavourites();
  if(favourites.length === 0){
    return(
      <div>
        <p>No tienes peliculas favoritos</p>
        <Link to='/' className="text-blue-500 hover:underline block mt-4">
          Volver al inicio
        </Link>
      </div>
    )
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-sky-950">Tus películas favoritas</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {favourites.map((pelicula)=>(
          <div key={pelicula.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg">
          <div className="relative group">
          <img
            src={getImageURL(pelicula.poster_path, "original")}
            alt={pelicula?.title}
            className="w-full h-full object-cover rounded-lg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1280x720?text=No+Image';
            }}
          />
            <h2 className="text-xl font-bold capitalize text-center mt-4">{pelicula.title}</h2>
            <div className="space-y-2 mt-4 ">
              <button
                className="bg-blue-500 w-full text-center text-white px-4 py-2 rounded hover:bg-slate-900"
                onClick={() => removeFromFavorites(pelicula.id)}
              >
                Eliminar de Favoritos
              </button>
              <Link
                className="bg-green-500 block w-full text-center text-white px-4 py-2 rounded hover:bg-slate-900"
                to={`/movie/${pelicula.id}`}
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

export default Favourites