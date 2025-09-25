import "./CardMovie.css";

function CardMovie({ title, year, rating, image }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating / 2); // converte nota 0-10 em 0-5 estrelas
    const halfStar = rating % 2 >= 1 ? 1 : 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full">★</span>);
    }
    if (halfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    while (stars.length < 5) {
      stars.push(<span key={`empty-${stars.length}`} className="star empty">★</span>);
    }

    return stars;
  };

  return (
    <div className="card-item">
      <img src={image} alt={title} className="poster" />
      <h3>{title}</h3>
      <p>{year}</p>
      <div className="star-rating">{renderStars()}</div>
    </div>
  );
}

export default CardMovie;
