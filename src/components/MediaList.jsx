import { useEffect, useState } from "react";
import CardMovie from "./CardMovie";
import "./Movieslist.css";

function MediaList({ title, fetchFunction, type = "movie" }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFunction();
        setItems(data.results || []);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }
    fetchData();
  }, [fetchFunction]);

  return (
    <div className="movie-list-container">
      <h2>{title}</h2>
      <div className="cards-grid">
        {items.map((item) => (
          <CardMovie
            key={item.id}
            id={item.id}
            title={type === "movie" ? item.title : item.name}
            year={
              type === "movie"
                ? item.release_date?.slice(0, 4)
                : item.first_air_date?.slice(0, 4)
            }
            rating={item.vote_average}
            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}

export default MediaList;
