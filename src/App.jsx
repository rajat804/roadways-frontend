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
import ScrollToTop from './components/ScrollToTop'; 
import AdminPanel from "./admin/AdminPanel";
import Layout from './components/Layout';
import AdminLayout from './admin/components/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import Login from './auth/Login';
const App = () => {
  return (
    <div>
      {/* ✅ This ensures page scrolls to top on every route change */}
      <ScrollToTop />


      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/track" element={<TrackConsignment />} />
          <Route path="/pickup" element={<PickupRequest />} />
          <Route path="/network" element={<Network />} />
          <Route path="/login" element={<Login />} />

        </Route>
      </Routes>

      <Routes>
        <Route path='/admin/dashboard' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

        </Route>
      </Routes>

    </div>
  );
};

export default App;
