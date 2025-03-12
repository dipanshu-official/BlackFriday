import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import TrackOrderPage from './pages/TrackOrderPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/TrackOrder" element={<TrackOrderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
