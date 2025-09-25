import MediaList from "../components/MediaList"; // <- necessário importar
import { getPopularTV } from "../services/api";
import "./Homepage.css";

function TVshow() {
  return (
    <div className="HomePage">
      <MediaList title="Popular tv" fetchFunction={getPopularTV} />
    </div>
  );
}

export default TVshow;
