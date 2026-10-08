import { useState } from "react";
import "./App.css";
import { movies } from "./data/movies";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Favorites from "./components/Favorites";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function App() {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    genre: "all",
    year: "all",
    minRating: 0,
    onlyFavorites: false,
  });
  const [favorites, setFavorites] = useState([]);
  const [ratings, setRatings] = useState({});
  const [selectedId, setSelectedId] = useState(null);

  function toggleFavorite(id) {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favoriteId) => favoriteId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  }

  
  function rateMovie(id, stars) {
    setRatings({ ...ratings, [id]: stars });
  }

  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesGenre =
      filters.genre === "all" || movie.genre === filters.genre;
    const matchesYear =
      filters.year === "all" || movie.year === Number(filters.year);
    const matchesRating = movie.rating >= filters.minRating;
    const matchesFavorite =
      !filters.onlyFavorites || favorites.includes(movie.id);

    return (
      matchesQuery &&
      matchesGenre &&
      matchesYear &&
      matchesRating &&
      matchesFavorite
    );
  });

  const favoriteMovies = movies.filter((movie) => favorites.includes(movie.id));

  const selectedMovie = movies.find((movie) => movie.id === selectedId);

  return (
    <div className="app">
      <Header query={query} onQueryChange={setQuery} />
      <Filters
        movies={movies}
        filters={filters}
        onFiltersChange={setFilters}
      />
      <Favorites
        movies={favoriteMovies}
        onSelect={setSelectedId}
        onToggleFavorite={toggleFavorite}
      />
      <MovieList
        movies={filteredMovies}
        favorites={favorites}
        ratings={ratings}
        onSelect={setSelectedId}
        onToggleFavorite={toggleFavorite}
      />

      {selectedMovie && (
        <MovieDetail
          movie={selectedMovie}
          rating={ratings[selectedMovie.id] || 0}
          onRate={rateMovie}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}

export default App;