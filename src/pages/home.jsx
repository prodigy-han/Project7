import React from 'react';
import { Link } from 'react-router-dom';
import CrewmateList from '../components/CrewmateList';

function Home() {
  return (
    <div>
      <h1>Crewmates</h1>
      <Link to="/add">Add New Crewmate</Link>
      <CrewmateList />
    </div>
  );
}

export default Home;