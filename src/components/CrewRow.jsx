import CrewCard from "./CrewCard";
import "./CrewRow.css";

function CrewRow({ title, crew = [] }) {
  if (!crew || crew.length === 0) return null;

  return (
    <div className="crew-row-container">
      <h2>{title}</h2>
      <div className="crew-row">
        {crew.map((person) => (
          <CrewCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default CrewRow;
