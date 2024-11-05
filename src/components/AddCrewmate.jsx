import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import AttributeSelector from './AttributeSelector';

function AddCrewmate() {
  const [name, setName] = useState('');
  const [attributes, setAttributes] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('crewmates')
      .insert([{ name, attributes: attributes.join(',') }]);
    if (!error) navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <AttributeSelector selectedAttributes={attributes} setAttributes={setAttributes} />
      <button type="submit">Add Crewmate</button>
    </form>
  );
}

export default AddCrewmate;