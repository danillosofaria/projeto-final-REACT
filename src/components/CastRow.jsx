import CastCard from "./CastCard";
import "./CastRow.css";

function CastRow({ title, cast = [] }) {
  if (!cast || cast.length === 0) return null;

  return (
    <div className="cast-row-container">
      <h2>{title}</h2>
      <div className="cast-row">
        {cast.map((person) => (
          <CastCard key={person.id} person={person} />
        ))}
      </div>
    </div>
  );
}

export default CastRow;
