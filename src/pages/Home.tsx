import { useEffect, useState } from "react";
import { getMovies } from "../services/api";
import type { Movies } from "../interfaces/Movie";
import MovieCard from "../components/MovieCard";

interface HomeProps {
  search: string;
}

function Home({ search }: HomeProps) {

  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const peliculas = await getMovies();

        setMovies(peliculas.results);

      } catch (error) {
        console.log(error);
      }
    };

    loadMovies();
  }, []);

  // FILTRAR PELICULAS
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">

        {filteredMovies.length > 0 ? (

          filteredMovies.map((movie: Movies) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })

        ) : (

          <h2 className="text-white text-xl">
            No se encontraron películas
          </h2>

        )}

      </div>

    </div>
  );
}

export default Home;