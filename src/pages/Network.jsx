import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Network = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [bookingOffices, setBookingOffices] = useState({});
  const [deliveryOffices, setDeliveryOffices] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI || 'http://localhost:4000';

  // Fetch booking offices from backend
  const fetchBookingOffices = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${BACKEND_URI}/api/booking`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      
      if (response.data.success) {
        const offices = response.data.data;
        
        // Group offices by region
        const grouped = {};
        offices.forEach(office => {
          const region = office.region;
          if (!grouped[region]) {
            grouped[region] = [];
          }
          grouped[region].push({
            location: office.location,
            name: office.name || '',
            address: office.address,
            contacts: office.contacts,
            region: office.region,
            _id: office._id
          });
        });
        
        return grouped;
      }
      return {};
    } catch (err) {
      console.error('Error fetching booking offices:', err);
      if (err.response?.status === 401) {
        console.log('Unauthorized - please login again');
      }
      return {};
    }
  };

  // Fetch delivery offices from backend
  const fetchDeliveryOffices = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(`${BACKEND_URI}/api/delivery`, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      
      if (response.data.success) {
        const offices = response.data.data;
        
        // Group offices by region
        const grouped = {};
        offices.forEach(office => {
          const region = office.region;
          if (!grouped[region]) {
            grouped[region] = [];
          }
          grouped[region].push({
            location: office.location,
            name: office.name || '',
            address: office.address,
            contacts: office.contacts,
            region: office.region,
            pincode: office.pincode || '',
            landmark: office.landmark || '',
            alternatePhone: office.alternatePhone || '',
            _id: office._id
          });
        });
        
        return grouped;
      }
      return {};
    } catch (err) {
      console.error('Error fetching delivery offices:', err);
      if (err.response?.status === 401) {
        console.log('Unauthorized - please login again');
      }
      return {};
    }
  };

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch both booking and delivery offices in parallel
        const [bookingData, deliveryData] = await Promise.all([
          fetchBookingOffices(),
          fetchDeliveryOffices()
        ]);
        
        setBookingOffices(bookingData);
        setDeliveryOffices(deliveryData);
        
      } catch (err) {
        console.error('Error loading data:', err);
        setError('Failed to load network data. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  // Get all unique regions from both booking and delivery
  const allBookingRegions = Object.keys(bookingOffices).sort();
  const allDeliveryRegions = Object.keys(deliveryOffices).sort();

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1, ease: "easeOut" },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const panelVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-sky-900 to-cyan-700 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg">Loading network map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-r from-sky-900 to-cyan-700 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-6xl mb-4">⚠️</div>
          <p className="text-lg">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-white text-sky-700 rounded-lg hover:bg-gray-100 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-sky-900 to-cyan-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Network Map
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Explore our extensive network of booking and delivery offices across India
          </p>
        </motion.div>
      </section>

      {/* Map Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-sky-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Booking Offices */}
          {allBookingRegions.length > 0 && (
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-sky-900 mb-2">
                  📍 Booking Offices
                </h2>
                <p className="text-gray-600">Click on any location to view details</p>
              </div>
              
              {allBookingRegions.map((region) => {
                const offices = bookingOffices[region] || [];
                if (offices.length === 0) return null;
                
                return (
                  <div key={region} className="mb-10">
                    <h3 className="text-2xl font-semibold text-sky-800 mb-4 pb-2 border-b border-sky-200">
                      {region}
                      <span className="text-sm text-gray-500 ml-2">({offices.length} offices)</span>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                      {offices.map((office, index) => (
                        <motion.button
                          key={index}
                          variants={childVariants}
                          onClick={() => setSelectedLocation({...office, type: 'booking'})}
                          className="bg-sky-100 hover:bg-sky-200 text-sky-800 font-medium py-2.5 px-3 rounded-lg shadow-sm transition duration-300 cursor-pointer text-sm truncate border border-sky-200"
                          title={office.location}
                        >
                          {office.location}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Delivery Offices */}
          {allDeliveryRegions.length > 0 && (
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-800 mb-2">
                  🚚 Delivery Offices
                </h2>
                <p className="text-gray-600">Click on any location to view details</p>
              </div>
              
              {allDeliveryRegions.map((region) => {
                const offices = deliveryOffices[region] || [];
                if (offices.length === 0) return null;
                
                return (
                  <div key={region} className="mb-10">
                    <h3 className="text-2xl font-semibold text-green-700 mb-4 pb-2 border-b border-green-200">
                      {region}
                      <span className="text-sm text-gray-500 ml-2">({offices.length} offices)</span>
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                      {offices.map((office, index) => (
                        <motion.button
                          key={index}
                          variants={childVariants}
                          onClick={() => setSelectedLocation({...office, type: 'delivery'})}
                          className="bg-green-100 hover:bg-green-200 text-green-800 font-medium py-2.5 px-3 rounded-lg shadow-sm transition duration-300 cursor-pointer text-sm truncate border border-green-200"
                          title={office.location}
                        >
                          {office.location}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* No Data Message */}
          {allBookingRegions.length === 0 && allDeliveryRegions.length === 0 && (
            <div className="text-center py-16 bg-white rounded-lg shadow">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No offices found</h3>
              <p className="text-gray-500">Please add offices from the admin panel to display them here.</p>
            </div>
          )}

          {/* Details Panel */}
          <AnimatePresence>
            {selectedLocation && (
              <motion.div
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-y-0 right-0 w-96 bg-white shadow-2xl p-6 z-50 overflow-y-auto border-l-4 border-sky-500"
              >
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-sky-600 hover:text-sky-800 font-bold mb-4 cursor-pointer flex items-center gap-1"
                >
                  ← Back to Map
                </button>
                
                <div className="mb-4">
                  <div className="text-4xl mb-2">
                    {selectedLocation.type === 'booking' ? '📍' : '🚚'}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedLocation.location}
                  </h3>
                  {selectedLocation.region && (
                    <p className="text-sm text-sky-600 mt-1">{selectedLocation.region}</p>
                  )}
                </div>
                
                {selectedLocation.name && (
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-medium">Contact Person</p>
                    <p className="text-gray-800">{selectedLocation.name}</p>
                  </div>
                )}
                
                <div className="mb-4">
                  <p className="text-gray-500 text-sm font-medium">Address</p>
                  <p className="text-gray-600 text-sm">{selectedLocation.address}</p>
                </div>
                
                {selectedLocation.landmark && (
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-medium">Landmark</p>
                    <p className="text-gray-600 text-sm">{selectedLocation.landmark}</p>
                  </div>
                )}
                
                {selectedLocation.pincode && (
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-medium">Pincode</p>
                    <p className="text-gray-600 text-sm">{selectedLocation.pincode}</p>
                  </div>
                )}
                
                <div className="mb-4">
                  <p className="text-gray-500 text-sm font-medium">Contact Numbers</p>
                  <p className="text-gray-800 text-sm">{selectedLocation.contacts}</p>
                </div>
                
                {selectedLocation.alternatePhone && (
                  <div className="mb-4">
                    <p className="text-gray-500 text-sm font-medium">Alternate Number</p>
                    <p className="text-gray-800 text-sm">{selectedLocation.alternatePhone}</p>
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t">
                  <p className="text-xs text-gray-400">
                    Type: {selectedLocation.type === 'booking' ? 'Booking Office' : 'Delivery Office'}
                  </p>
                </div>
                
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="mt-4 w-full py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
                >
                  Close
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
};

export default Network;