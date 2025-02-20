

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReviewContext from '../contexts/ReviewContext';
import { getImageURL } from '../services/tmdb';

const Reviews = () => {
  const { reviews } = useContext(ReviewContext);

  // Agrupar reseñas por película
  const movieReviews = reviews.reduce((acc, review) => {
    if (!acc[review.movieId]) {
      acc[review.movieId] = [];
    }
    acc[review.movieId].push(review);
    return acc;
  }, {});

  if (reviews.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">No hay reseñas todavía</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Volver al inicio para explorar películas
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-sky-900 mb-8">Todas las Reseñas</h1>
      <div className="space-y-8">
        {Object.entries(movieReviews).map(([movieId, movieReviews]) => (
          <div key={movieId} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-start gap-6">
              <img
                src={getImageURL(movieReviews[0]?.moviePoster, "w500")}
                alt={movieReviews[0]?.movieTitle}
                className="w-32 h-48 object-cover rounded"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/128x192?text=No+Image';
                }}
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-sky-900 mb-4">
                  {movieReviews[0]?.movieTitle}
                </h2>
                <div className="space-y-4">
                  {movieReviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl font-bold">{review.rating}/5</span>
                        <span className="text-yellow-400">
                          {'⭐'.repeat(review.rating)}
                        </span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(review.date).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/movie/${movieId}`}
                  className="inline-block mt-4 text-blue-500 hover:underline"
                >
                  Ver detalles de la película
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;