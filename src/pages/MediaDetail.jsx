import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaHero from "../components/MediaHero";
import { getMovieDetails, getTVDetails } from "../services/api.js";

function MediaDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      if (!id) return;
      let data = await getMovieDetails(id);
      if (!data) data = await getTVDetails(id);

      setItem(data);
    }

    fetchDetails();
  }, [id]);

  if (!item) return <p>Carregando...</p>;

  return (
    <div className="media-detail-page">
      <MediaHero item={item} />
    </div>
  );
}

export default MediaDetail;
