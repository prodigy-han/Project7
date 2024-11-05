import React, { useState } from 'react';
import { supabase } from '../client';
import { useNavigate } from 'react-router-dom';

function CreateCrewmateForm() {
  const [name, setName] = useState('');
  const [attribute, setAttribute] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from('crewmates').insert([{ name, attribute }]);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Attribute:
        <input type="text" value={attribute} onChange={(e) => setAttribute(e.target.value)} required />
      </label>
      <button type="submit">Add Crewmate</button>
    </form>
  );
}

export default CreateCrewmateForm;