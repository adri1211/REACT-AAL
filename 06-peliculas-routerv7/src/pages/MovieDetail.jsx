import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { getImageURL, getMovieDetail, getMovieVideos } from "../services/tmdb";
import LoadingSpinner from "../components/LoadingSpinner";
import ReviewForm from "../components/ReviewForm";
import { useContext } from "react";
import ReviewContext from "../contexts/ReviewContext";
import { useFavourites } from "../contexts/FavouritesContext";
import ReviewItem from "../components/reviewitem";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(() => getMovieDetail(id), [id]);
  const { data:videos } = useFetch(() => getMovieVideos(id), [id]);
  const { getMovieReviews } = useContext(ReviewContext);
  const movieReviews = getMovieReviews(id);
  const {addFavourites} = useFavourites(); 

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-700">Error al cargar la película {error}</p>
      </div>
    );
  }
  if (loading) {
    return <LoadingSpinner />;
  }
  const trailer = videos?.results?.find((video) => video.type === "Trailer");
  return (
    <article className="max-w-4xl mx-auto px-4">
      <header className="relative h-96 mb-8">
        <img
          src={getImageURL(data.backdrop_path, "original")}
          alt={data?.title}
          className="w-full h-full object-cover rounded-lg"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1280x720?text=No+Image';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-2 text-white p-6">
            <h1 className="text-4xl font-bold">{data?.title}</h1>
          </div>
        </div>
      </header>
      {/* contenido principal */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* poster */}
        <div>
          <img
            className="w-full rounded-lg shadow-lg"
            src={getImageURL(data.poster_path)}
            alt={data?.title}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
            }}
          />
        </div>
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-4 text-sm text-gray-700">
            <span className="font-bold mt-4">
              {data?.release_date.split("-")[0]}
            </span>
            <span className="font-bold mt-4">{data?.runtime} minutos</span>
            <span className="font-bold mt-4">
              {Number(data?.vote_average).toFixed(1)}⭐
            </span>
          </div>
          <section>
            <h2 className="text-2xl font-bold mb-8">Generos</h2>
            <ul className="flex gap-4">
              {data?.genres.map((genre) => (
                <li className="font-bold mb-8" key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-8">Sinopsis</h2>
            <p>{data?.overview}</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-8">Seccion de videos</h2>
            <iframe
            src={`https://www.youtube.com/embed/${trailer?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-96"
            >
            </iframe>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-8">Comentarios</h2>
            <ReviewForm movieId={id} movieData={data} />
            <div className="mt-6 space-y-4">
              {movieReviews.map(review => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
          </section>
          <section>
            {/* boton para añadir a favoritos */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-slate-900"
            onClick={() => {
            addFavourites(data);
            }}>
            Añadir a favoritos
            </button>
          </section>
        </div>
      </div>
    </article>
  );
};

export default MovieDetail;