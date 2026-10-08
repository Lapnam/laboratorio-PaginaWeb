import MovieCard from "./MovieCard";

function MovieList({
  movies,
  favorites,
  ratings,
  onSelect,
  onToggleFavorite,
}) {
  if (movies.length === 0) {
    return (
      <p className="no-results">
        No se encontraron películas con esos criterios.
      </p>
    );
  }

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          isFavorite={favorites.includes(movie.id)}
          userRating={ratings[movie.id] || 0}
          onSelect={onSelect}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  );
  
}

export default MovieList;