import { Link } from "react-router-dom";
import { getImageURL } from "../services/tmdb";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie?.id}`} className="group block">
      <article className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 group-hover:scale-105">
        <div className="relative aspect-[2/3]">
          <img
            src={getImageURL(movie?.poster_path)}
            alt={movie?.title}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
            }}
          />
          <div className="absolute top-2 right-2 bg-black/75 text-white px-2 py-1 rounded-lg">
            ⭐{Number(movie?.vote_average).toFixed(1)}
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-sky-900 group-hover:text-gray-700">
            {movie.title}
          </h3>
          <p className="text-sm font-bold text-gray-800 mt-1">
            {movie.release_date.split("-")[0]}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;