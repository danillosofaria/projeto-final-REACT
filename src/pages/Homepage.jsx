import MediaList from "../components/MediaList";
import MediaRow from "../components/MediaRow";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getPopularTV,
  getTopRatedMovies
} from "../services/api";
import "./Homepage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <MediaList title="Popular Movies" type="movie" fetchFunction={getPopularMovies} />
      <MediaRow title="Now Playing" type="tmovie" fetchFunction={getNowPlayingMovies} />
      <MediaRow title="Top Rated" type="movie" fetchFunction={getTopRatedMovies} />
      <MediaRow title="serie" type="tv" fetchFunction={getPopularTV} />
    </div>
  );
}

export default HomePage;
