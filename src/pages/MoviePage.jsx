import MediaList from "../components/MediaList";
import MediaRow from "../components/MediaRow";
import {
  getAiringTodayTV,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies
} from "../services/api";
import "./Homepage.css";

function MoviePage() {
  return (
    <div className="HomePage">
      <MediaList title="Popular Movies" type="movie" fetchFunction={getPopularMovies} />
      <MediaRow title="Now Playing" type="movie" fetchFunction={getNowPlayingMovies} />
      <MediaRow title="Top Rated" type="movie" fetchFunction={getTopRatedMovies} />
      <MediaRow title="Airing Today" type="tv" fetchFunction={getAiringTodayTV} />
    </div>
  );
}

export default MoviePage;
