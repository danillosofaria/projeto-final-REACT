import MediaList from "../components/MediaList"; // <- necessário importar
import MediaRow from "../components/MediaRow";
import { getPopularTV } from "../services/api";
import "./Homepage.css";

function TVshow() {
  return (
    <div className="HomePage">
      <MediaRow title="serie" type="tv" fetchFunction={getPopularTV} />
      <MediaList title="Popular tv" type="tv" fetchFunction={getPopularTV} />
    </div>
  );
}

export default TVshow;
