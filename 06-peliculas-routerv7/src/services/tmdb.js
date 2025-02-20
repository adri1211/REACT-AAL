const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
const BASE_IMAGE_URL = import.meta.env.VITE_BASE_IMAGE_URL;

// TAMAÑOS de las imágenes
export const SIZE = {
  POSTER: "w500",
  ORIGINAL: "original",
};

// Función para hacer fetch a la API URL, opciones
const fetchFromAPI = async (endpoint, options = {}) => {
  //https://api.themoviedb.org/3/movie/popular?api_key=286d519a9b3eaaf78c9a51acfd010c7f&language=es-ES
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}?api_key=${API_KEY}&language=es-ES&${new URLSearchParams(
        options
      )}`
    );
    if (!response.ok) {
      throw new Error("Error en la petición");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Función para obtener las películas populares
export const getPopularMovies = async (page = 1, options = {}) => {
  return await fetchFromAPI("/discover/movie", {
    language: "es-ES",
    page,
    sort_by: options.sort_by,
    "vote_count.gte": 100  // Ensure we get movies with enough votes
  });
};

export const getMovieDetail = async (id) => {
  return await fetchFromAPI(`/movie/${id}`);
};

export const getImageURL = (path, size = SIZE.POSTER) => {
  return `${BASE_IMAGE_URL}/${size}${path}`;
};

export const getMovieVideos = async (id) => {
  return await fetchFromAPI(`/movie/${id}/videos`);
};

export const searchMovies = async (query, page) => {
  return await fetchFromAPI("/search/movie", { query, page });
}