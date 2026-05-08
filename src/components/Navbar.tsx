import { Link } from "react-router-dom";

interface NavbarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function Navbar({ search, setSearch }: NavbarProps) {
  return (
    <nav className="bg-black text-red-600 px-8 py-4 flex justify-between items-center shadow">

      {/* LOGO */}
      <div className="text-2xl font-semibold tracking-tight">
        <Link
          to="/"
          className="hover:text-white transition-colors"
        >
          App Peliculas
        </Link>
      </div>

      {/* SEARCH */}
      <div className="hidden bg-amber-50 lg:flex items-center text-sm gap-2 border border-gray-500 px-3 rounded-full">
        
        <input
          className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-black"
          type="text"
          placeholder="Buscar pelicula..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.836 10.615 15 14.695"
            stroke="#7A7B7D"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <path
            clipRule="evenodd"
            d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
            stroke="#7A7B7D"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

      </div>

      {/* LINKS */}
      <div className="flex gap-8 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-white transition-colors"
        >
          Home
        </Link>

        <Link
          to="/favorites"
          className="hover:text-white transition-colors"
        >
          Favorites
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;