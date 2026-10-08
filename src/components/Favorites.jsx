function Favorites({ movies, onSelect, onToggleFavorite }) {
  return (
    <section className="favorites">
      <h2>Mis favoritas</h2>

      {movies.length === 0 ? (
        <p className="favorites-empty">
          Aún no has agregado películas a favoritas.
        </p>
      ) : (
        <div className="favorites-list">
          {movies.map((movie) => (
            <div key={movie.id} className="favorite-item">
              <img
                src={movie.image}
                alt={movie.title}
                onClick={() => onSelect(movie.id)}
              />
              <p>{movie.title}</p>
              <button onClick={() => onToggleFavorite(movie.id)}>Quitar</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
  
}

export default Favorites;