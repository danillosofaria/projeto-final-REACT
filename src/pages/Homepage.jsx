import MediaList from "../components/MediaList"; // <- necessário importar
import { getPopularMovies } from "../services/api";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <MediaList title="Popular Movies" fetchFunction={getPopularMovies} />
    </div>
  );
}

export default HomePage;
