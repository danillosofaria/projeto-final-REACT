import MediaList from "../components/MediaList";
import MediaRow from "../components/MediaRow";
import { getAiringTodayTV, getPopularTV, getTopRatedTV } from "../services/api";
import "./Homepage.css";

function TVshow() {
  return (
    <div className="HomePage">
      <MediaList title="Popular tv show" type="tv" fetchFunction={getPopularTV} />
      <MediaRow title="Top Rated" type="tv" fetchFunction={getTopRatedTV} />
      <MediaRow title="Airing Today" type="tv" fetchFunction={getAiringTodayTV} />
    </div>
  );
}

export default TVshow;
