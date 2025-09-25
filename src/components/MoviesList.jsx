import { useEffect, useState } from "react";
import CardMovie from "./CardMovie";
import { getPopularMovies } from "../services/api";
import "./Movieslist.css";

function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPopularMovies();
        setMovies(data.results || []);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="movie-list-container">
      <h2>Popular Movies</h2>
      <div className="cards-grid">
        {movies.map((movie) => (
          <CardMovie
            key={movie.id}
            title={movie.title}
            year={movie.release_date?.slice(0, 4)}
            rating={movie.vote_average}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
