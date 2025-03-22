import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import BrowsePlans from '../components/BrowsePlans';
import Pricing from '../components/Pricing';
import Features from '../components/Features';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> 

        {/* Define Routes for Each Page */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/browse-plans" element={<BrowsePlans />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
