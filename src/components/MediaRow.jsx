import { useEffect, useState } from "react";
import CardMovie from "./CardMovie";
import "./MediaRow.css";

function MediaRow({ title, fetchFunction, type = "movie" }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFunction();
        setItems(data.results || []);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [fetchFunction]);

  return (
    <div className="media-row-container">
      <h2>{title}</h2>
      <div className="media-row">
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
            type={type} // <- importante para o link
          />
        ))}
      </div>
    </div>
  );
}

export default MediaRow;
