import "./MovieCard.css";
import { useMovieContext } from "./MovieContex";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

type Props = {
  movie: Movie;
};

function MovieCard({ movie }: Props) {
  const { addToFavorites, removeFromFavorites, isFavorite } =
    useMovieContext();

  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <button
          className={`favorite-btn ${favorite ? "active" : ""}`}
          onClick={onFavoriteClick}
        >
          ♥
        </button>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;