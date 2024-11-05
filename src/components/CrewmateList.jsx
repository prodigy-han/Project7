import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import CrewmateCard from './CrewmateCard';

function CrewmateList() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    const fetchCrewmates = async () => {
      const { data, error } = await supabase.from('crewmates').select('*');
      if (!error) setCrewmates(data);
    };
    fetchCrewmates();
  }, []);

  const handleDelete = async (id) => {
    const { error } = await supabase.from('crewmates').delete().eq('id', id);
    if (!error) {
      setCrewmates(crewmates.filter(crewmate => crewmate.id !== id));
    }
  };

  return (
    <div>
      <Link to="/add">Add Crewmate</Link>
      <ul>
        {crewmates.map((crewmate) => (
          <li key={crewmate.id}>
            <CrewmateCard crewmate={crewmate} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrewmateList;