import React from 'react';
import { Link } from 'react-router-dom';

function CrewmateCard({ crewmate, onDelete }) {
  return (
    <div className="crewmate-card">
      <h3>{crewmate.name}</h3>
      <p>Attribute: {crewmate.attributes}</p>
      <Link to={`/crewmate/${crewmate.id}`}>View Details  </Link>
      <Link to={`/edit/${crewmate.id}`}>  Edit  </Link>
      <button onClick={() => onDelete(crewmate.id)}>  Delete</button>
    </div>
  );
}

export default CrewmateCard;