import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaHero from "../components/MediaHero";
import CastRow from "../components/CastRow";
import { getMovieDetails, getTVDetails } from "../services/api.js";
import { getSimilarMovies, getSimilarTV } from "../services/api.js";
import "./MediaDetail.css";
import CrewRow from "../components/CrewRow.jsx";
import MediaRow from "../components/MediaRow.jsx";

function MediaDetail() {
  const { id, type } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      if (!id || !type) return;

      let data = null;
      if (type === "movie") {
        data = await getMovieDetails(id);
      } else if (type === "tv") {
        data = await getTVDetails(id);
      }

      setItem(data);
    }

    fetchDetails();
  }, [id, type]);

  if (!item) return <p>Carregando...</p>;

  return (
    <div className="media-detail-page">
      <MediaHero item={item} />

      <div className="media-content">
        <div className="overview">
          <h2>Overview</h2>
          <p>{item.overview || "Sem descrição disponível."}</p>
        </div>
        <CastRow title="Cast" cast={item.credits?.cast || []} />
        <CrewRow title="Crew" crew={item.credits?.crew || []} />
        <MediaRow
          title="More Like This"
          type={type}
          fetchFunction={
            type === "movie"
              ? () => getSimilarMovies(id)
              : () => getSimilarTV(id)
          }
          renderOnlyImage={true}
        />
      </div>
    </div>
  );
}

export default MediaDetail;
