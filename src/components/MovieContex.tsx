import { createContext, useContext, useState, type ReactNode,} from "react";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
};

type MovieContextType = {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const MovieContext = createContext<MovieContextType | null>(null);

export const useMovieContext = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("MovieContext error");
  }

  return context;
};

type Props = {
  children: ReactNode;
};

export const MovieProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFromFavorites = (id: number) => {
    setFavorites((prev) =>
      prev.filter((movie) => movie.id !== id)
    );
  };

  const isFavorite = (id: number) => {
    return favorites.some((movie) => movie.id === id);
  };

  return (
    <MovieContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};