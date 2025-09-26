import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaHero from "../components/MediaHero";
import { getMovieDetails, getTVDetails } from "../services/api.js";

function MediaDetail() {
  const { id, type } = useParams(); // <- pega type também
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
    </div>
  );
}

export default MediaDetail;
