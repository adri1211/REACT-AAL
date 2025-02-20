import { createContext, useState, useEffect } from "react";
import { useToast } from "./ToastContext";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState(() => {
        const savedReviews = localStorage.getItem('reviews');
        return savedReviews ? JSON.parse(savedReviews) : [];
    });
    const { showToast } = useToast();

    useEffect(() => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }, [reviews]);

    const addReview = (review) => {
        setReviews([...reviews, review]);
        showToast("¡Reseña añadida exitosamente!", "success");
    };

    const deleteReview = (reviewId) => {
        setReviews(reviews.filter(review => review.id !== reviewId));
        showToast("¡Reseña eliminada exitosamente!", "success");
    };

    const getMovieReviews = (movieId) => {
        return reviews.filter(review => review.movieId === movieId);
    };

    return (
        <ReviewContext.Provider value={{
            reviews,
            addReview,
            deleteReview,
            getMovieReviews
        }}>
            {children}
        </ReviewContext.Provider>
    );
};

export default ReviewContext;