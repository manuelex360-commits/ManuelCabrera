import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar película..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* RESULTADOS */}
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;