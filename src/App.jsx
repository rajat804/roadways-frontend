import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Career from './pages/Career';
import ContactUs from './pages/Contact';
import TrackConsignment from './pages/Track';
import PickupRequest from './pages/Pickup';
import Network from './pages/Network';
import ScrollToTop from './components/ScrollToTop'; // ✅ Import here

const App = () => {
  return (
    <div>
      <Navbar />
      {/* ✅ This ensures page scrolls to top on every route change */}
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/track" element={<TrackConsignment />} />
        <Route path="/pickup" element={<PickupRequest />} />
        <Route path="/network" element={<Network />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
