
import useFetch from "../hook/useFetch";
import { searchMovies } from "../services/tmdb";
import MovieCard from "./MovieCard";
import LoadingSpinner from "./LoadingSpinner";
import { useState } from "react";

const SearchBox = () => {
  
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);
    const { data, loading, error } = useFetch(
      () => query ? searchMovies(query, page) : null,
      [query, page]
    );
  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(e.target.value);
  };
  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPage(newPage);
  };
  return (
    <div className="space-y-6">
      <div className="max-w-2xl mx-auto">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Buscar películas..."
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <div className="text-center text-red-500">
          Error al buscar películas: {error}
        </div>
      ) : data?.results?.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <div className="flex justify-center gap-4 py-6">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600"
            >
              Anterior
            </button>
            <span className="flex items-center">
              Página {page} de {data.total_pages}
            </span>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === data.total_pages}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 hover:bg-blue-600"
            >
              Siguiente
            </button>
          </div>
        </>
      ) : query && (
        <div className="text-center text-gray-500">
          No se encontraron resultados para "{query}"
        </div>
      )}
    </div>
  );
};

export default SearchBox;