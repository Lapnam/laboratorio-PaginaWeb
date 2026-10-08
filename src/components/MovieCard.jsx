function MovieCard({
  movie,
  isFavorite,
  userRating,
  onSelect,
  onToggleFavorite,
}) {
  return (
    <div className="movie-card" onClick={() => onSelect(movie.id)}>
      <div className="movie-card-poster">
        <img src={movie.image} alt={movie.title} />
        <span className="movie-card-badge"> {movie.rating}</span>
      </div>

      <div className="movie-card-info">
        <h3>{movie.title}</h3>

        <div className="movie-card-meta">
          <span className="movie-card-genre">{movie.genre}</span>
          <span>{movie.year}</span>
        </div>

        <p className="movie-card-description">{movie.description}</p>

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
          {isFavorite ? " Quitar de favoritas" : " Agregar a favoritas"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;