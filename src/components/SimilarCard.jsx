import "./SimilarCard.css";

export default function SimilarCard({ item, size = "w500" }) {
  if (!item?.poster_path) return null;

  const imageUrl = `https://image.tmdb.org/t/p/${size}${item.poster_path}`;

  return (
    <div className="similar-card">
      <img src={imageUrl} alt={item.title || item.name} />
    </div>
  );
}
