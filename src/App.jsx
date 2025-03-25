import React from 'react';
import { Routes, Route } from 'react-router-dom';
import JobDetails from './Pages/JobDetails';
import Home from './Pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/job/:id" element={<JobDetails />} />
    </Routes>
  );
};

export default App;
