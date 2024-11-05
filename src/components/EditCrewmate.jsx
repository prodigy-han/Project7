import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import AttributeSelector from './AttributeSelector';

function EditCrewmate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [attributes, setAttributes] = useState([]);

  useEffect(() => {
    const fetchCrewmate = async () => {
      const { data } = await supabase.from('crewmates').select().eq('id', id).single();
      if (data) {
        setName(data.name);
        setAttributes(data.attributes ? data.attributes.split(',') : []);
      }
    };
    fetchCrewmate();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('crewmates')
      .update({ name, attributes: attributes.join(',') })
      .eq('id', id);
    if (!error) {
      navigate('/');
    } else {
      console.error("Update failed:", error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <AttributeSelector selectedAttributes={attributes} setAttributes={setAttributes} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditCrewmate;