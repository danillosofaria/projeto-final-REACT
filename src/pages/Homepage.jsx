import MediaList from "../components/MediaList";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from "../services/api";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <MediaList title="Popular Movies" fetchFunction={getPopularMovies} />
      <MediaList title="Now Playing" fetchFunction={getNowPlayingMovies} />
      <MediaList title="Top Rated" fetchFunction={getTopRatedMovies} />
    </div>
  );
}

export default HomePage;
