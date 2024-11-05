import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';

function CrewmateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from('crewmates').select().eq('id', id).single();
      setCrewmate(data);
    };
    fetchCrewmate();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase.from('crewmates').delete().eq('id', id);
    if (!error) navigate('/');
  };

  if (!crewmate) return <div>Loading...</div>;

  return (
    <div>
      <h2>{crewmate.name}</h2>
      <p>Attributes: {crewmate.attributes.split(',').join(', ')}</p>
      <p> Gender: </p>
      <p> Constellation: </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default CrewmateDetail;