function StarRating({ rating, onRate }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <button
          key={star}
          className={star <= rating ? "star star-filled" : "star"}
          onClick={() => onRate(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
  
}

export default StarRating;