function MovieCard({
  movie,
  isFavorite,
  userRating,
  onSelect,
  onToggleFavorite,
}) {
  return (
    <div className="movie-card" onClick={() => onSelect(movie.id)}>
      <img src={movie.image} alt={movie.title} />
      <div className="movie-card-info">
        <h3>{movie.title}</h3>
        <p>
          {movie.genre} · {movie.year}
        </p>
        <p>⭐ {movie.rating}</p>
        <p>{movie.description}</p>

        {userRating > 0 && (
          <p className="user-rating">
            Tu valoración: {"★".repeat(userRating)} ({userRating}/5)
          </p>
        )}

        <button
          className="favorite-button"
          onClick={(event) => {
            event.stopPropagation();
            onToggleFavorite(movie.id);
          }}
        >
          {isFavorite ? "♥ Quitar de favoritas" : "♡ Agregar a favoritas"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;