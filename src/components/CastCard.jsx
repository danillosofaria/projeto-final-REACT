import "./CastCard.css";

function CastCard({ person }) {
  const profileUrl = person.profile_path
    ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  return (
    <div className="cast-card">
      <div className="cast-photo">
        <img src={profileUrl} alt={person.name} />
      </div>
      <h3>{person.name}</h3>
      <p>{person.character}</p>
    </div>
  );
}

export default CastCard;
