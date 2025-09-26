import MediaList from "../components/MediaList";
import MediaRow from "../components/MediaRow";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies
} from "../services/api";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <MediaList title="Popular Movies" fetchFunction={getPopularMovies} />
      <MediaRow title="Now Playing" fetchFunction={getNowPlayingMovies} />
      <MediaRow title="Top Rated" fetchFunction={getTopRatedMovies} />
    </div>
  );
}

export default HomePage;
