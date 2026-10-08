function Filters({ movies, filters, onFiltersChange }) {
  // Lista de géneros sin repetir
  const genres = [...new Set(movies.map((movie) => movie.genre))];

  // Lista de años sin repetir, del más nuevo al más antiguo
  const years = [...new Set(movies.map((movie) => movie.year))].sort(
    (a, b) => b - a
  );

  return (
    <div className="filters">
      <select
        value={filters.genre}
        onChange={(event) =>
          onFiltersChange({ ...filters, genre: event.target.value })
        }
      >
        <option value="all">Todos los géneros</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <select
        value={filters.year}
        onChange={(event) =>
          onFiltersChange({ ...filters, year: event.target.value })
        }
      >
        <option value="all">Todos los años</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <select
        value={filters.minRating}
        onChange={(event) =>
          onFiltersChange({
            ...filters,
            minRating: Number(event.target.value),
          })
        }
      >
        <option value={0}>Cualquier calificación</option>
        <option value={7}>7 o más</option>
        <option value={8}>8 o más</option>
        <option value={9}>9 o más</option>
      </select>

      <label className="filters-checkbox">
        <input
          type="checkbox"
          checked={filters.onlyFavorites}
          onChange={(event) =>
            onFiltersChange({ ...filters, onlyFavorites: event.target.checked })
          }
        />
        Solo favoritas
      </label>
    </div>
  );
}

export default Filters;