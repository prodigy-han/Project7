import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddCrewmate from './components/AddCrewmate';
import CrewmateList from './components/CrewmateList';
import EditCrewmate from './components/EditCrewmate';
import CrewmateDetail from './components/CrewmateDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CrewmateList />} />
        <Route path="/add" element={<AddCrewmate />} />
        <Route path="/edit/:id" element={<EditCrewmate />} />
        <Route path="/crewmate/:id" element={<CrewmateDetail />} />
      </Routes>
    </Router>
  );
}

export default App;