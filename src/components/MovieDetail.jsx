import StarRating from "./StarRating";

function MovieDetail({ movie, rating, onRate, onClose }) {
  return (
    <div className="detail-overlay">
      <div className="detail-box">
        <button className="detail-close" onClick={onClose}>
          ✕ Cerrar
        </button>

        <div className="detail-content">
          <img src={movie.image} alt={movie.title} />
          <div className="detail-info">
            <h2>{movie.title}</h2>
            <p>
              {movie.genre} · {movie.year}
            </p>
            <p>⭐ {movie.rating}</p>
            <p>{movie.description}</p>

            <h3>Tu valoración</h3>
            <StarRating
              rating={rating}
              onRate={(stars) => onRate(movie.id, stars)}
            />
            <p>
              {rating > 0
                ? `Le diste ${rating} de 5 estrellas`
                : "Todavía no has calificado esta película"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;