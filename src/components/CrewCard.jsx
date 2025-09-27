import "./CrewCard.css";

function CrewCard({ person }) {
  return (
    <div className="crew-card">
      <h3>{person.name}</h3>
      <p>{person.job}</p>
    </div>
  );
}

export default CrewCard;
