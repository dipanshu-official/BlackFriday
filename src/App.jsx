import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import TrackOrderPage from './pages/TrackOrderPage';
import CustomerSupportPage from './pages/CustomerSupportPage';
import NeedHelpPage from './pages/NeedHelpPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/TrackOrder" element={<TrackOrderPage />} />
        <Route path="/CustomerSupportPage" element={<CustomerSupportPage />} />
        <Route path="/NeedHelp" element={<NeedHelpPage />} />


      </Routes>
    </Router>
  );
};

export default App;
