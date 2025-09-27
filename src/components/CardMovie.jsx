import { Link } from "react-router-dom";
import "./CardMovie.css";

function CardMovie({ id, title, year, rating, image, type = "movie" }) {
  const starPercentage = (rating / 10) * 100;

  return (
    <Link
      to={`/details/${type}/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card-item">
        <img src={image} alt={title} className="poster" />
        <h3>{title}</h3>
        <p>{year}</p>

        <div className="star-rating">
          <div className="stars-outer">
            <div
              className="stars-inner"
              style={{ width: `${starPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardMovie;
