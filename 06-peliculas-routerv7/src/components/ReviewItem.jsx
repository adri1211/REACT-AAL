import { useContext } from 'react';
import ReviewContext from '../contexts/ReviewContext';

const ReviewItem = ({ review }) => {
  const { deleteReview } = useContext(ReviewContext);
  const formattedDate = new Date(review.date).toLocaleDateString();

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">{review.rating}/5</span>
            <span className="text-yellow-400">
              {'⭐'.repeat(review.rating)}
            </span>
          </div>
          <p className="mt-2 text-gray-700">{review.comment}</p>
          <p className="text-sm text-gray-500 mt-2">{formattedDate}</p>
        </div>
        <button
          onClick={() => deleteReview(review.id)}
          className="text-red-500 hover:text-red-700"
          title="Eliminar reseña"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;