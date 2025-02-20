

import { useState, useEffect } from "react";
import { useFetch } from "../hook/useFetch";
import { getPopularMovies } from "../services/tmdb";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieCard from "../components/moviecard";

const MovieList = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  
  const { data, loading, error } = useFetch(
    () => getPopularMovies(page, { sort_by: sortBy }), 
    [page, sortBy]
  );
  
  // Reset to page 1 when sort changes
  useEffect(() => {
    setPage(1);
  }, [sortBy]);
  
  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(newPage);
  };
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };
  
  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error al cargar las películas: {error}</p>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-sky-900">Películas Populares</h1>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="popularity.desc">Más populares</option>
          <option value="popularity.asc">Menos populares</option>
          <option value="vote_average.desc">Mejor valoradas</option>
          <option value="vote_average.asc">Peor valoradas</option>
          <option value="release_date.desc">Más recientes</option>
          <option value="release_date.asc">Más antiguas</option>
        </select>
      </div>
  
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data?.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
  
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600"
            >
              Anterior
            </button>
            <span className="flex items-center">
              Página {page} de {data?.total_pages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === data?.total_pages}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600"
            >
              Siguiente
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieList;