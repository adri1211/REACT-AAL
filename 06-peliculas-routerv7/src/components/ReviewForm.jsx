

import { useState, useContext } from 'react';
import ReviewContext from '../contexts/ReviewContext';

const ReviewForm = ({ movieId, movieData }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const { addReview } = useContext(ReviewContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      id: Date.now(),
      movieId,
      rating,
      comment,
      date: new Date().toISOString(),
      movieTitle: movieData.title,
      moviePoster: movieData.poster_path // Add the poster path
    };

    addReview(newReview);
    setRating(5);
    setComment('');
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Puntuación (1-5)
        </label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Comentario
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          rows="3"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Enviar Reseña
      </button>
    </form>
  );
};

export default ReviewForm;