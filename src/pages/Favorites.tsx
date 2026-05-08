
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../components/MovieContex";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>No hay películas favoritas</h2>
        <p>Agrega películas dando click al corazón ❤️</p>
      </div>
    );
  }

  return (
    <div className="movies-grid">
      {favorites.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  );
}

export default Favorites;