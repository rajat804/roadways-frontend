import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const DeliveryOffices = () => {
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingOffice, setEditingOffice] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [formData, setFormData] = useState({
    location: '',
    name: '',
    address: '',
    contacts: '',
    region: 'Uttar Pradesh',
    pincode: '',
    landmark: '',
    alternatePhone: ''
  });

  const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
  const API_URL = `${BACKEND_URI}/api/delivery`;

  const regions = [
    'Uttar Pradesh',
    'Western Uttar Pradesh',
    'Bihar', 
    'Jharkhand',
    'West Bengal',
    'Assam',
    'Punjab',
    'Haryana',
    'Delhi',
    'Gujarat'
  ];

  // Fetch all delivery offices
  const fetchOffices = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');
      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`
        },
        withCredentials: true
      });
      
      if (response.data.success) {
        setOffices(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching delivery offices:', error);
      if (error.response?.status === 401) {
        window.location.href = '/login';
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffices();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const openAddModal = () => {
    setEditingOffice(null);
    setFormData({
      location: '',
      name: '',
      address: '',
      contacts: '',
      region: 'Uttar Pradesh',
      pincode: '',
      landmark: '',
      alternatePhone: ''
    });
    setShowModal(true);
  };

  const openEditModal = (office) => {
    setEditingOffice(office);
    setFormData({
      location: office.location,
      name: office.name || '',
      address: office.address,
      contacts: office.contacts,
      region: office.region,
      pincode: office.pincode || '',
      landmark: office.landmark || '',
      alternatePhone: office.alternatePhone || ''
    });
    setShowModal(true);
  };

  // Add or Update office
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('adminToken');
      
      if (editingOffice) {
        // Update existing office
        const response = await axios.put(`${API_URL}/${editingOffice._id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        
        if (response.data.success) {
          await fetchOffices();
          setShowModal(false);
          setEditingOffice(null);
        }
      } else {
        // Add new office
        const response = await axios.post(API_URL, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        
        if (response.data.success) {
          await fetchOffices();
          setShowModal(false);
        }
      }
    } catch (error) {
      console.error('Error saving office:', error);
      alert(error.response?.data?.message || 'Failed to save office');
    }
  };

  // Delete office
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this delivery office?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const response = await axios.delete(`${API_URL}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true
        });
        
        if (response.data.success) {
          await fetchOffices();
        }
      } catch (error) {
        console.error('Error deleting office:', error);
        alert(error.response?.data?.message || 'Failed to delete office');
      }
    }
  };

  // Filter offices
  const filteredOffices = offices.filter(office => {
    const matchesSearch = 
      office.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      office.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      office.contacts?.includes(searchTerm) ||
      office.pincode?.includes(searchTerm);
    const matchesRegion = selectedRegion === 'all' || office.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  // Group offices by region
  const groupedOffices = filteredOffices.reduce((acc, office) => {
    if (!acc[office.region]) {
      acc[office.region] = [];
    }
    acc[office.region].push(office);
    return acc;
  }, {});

  // Get region counts
  const getRegionCount = (region) => {
    return offices.filter(o => o.region === region).length;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="text-gray-500 mt-4">Loading delivery offices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Delivery Offices</h2>
          <p className="text-gray-500 text-sm mt-1">Manage all delivery office locations across India</p>
        </div>
        <button
          onClick={openAddModal}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center gap-2 shadow-md"
        >
          <span className="text-xl">➕</span>
          Add New Delivery Office
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by location, name, contact or pincode..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <div className="w-full md:w-64">
            <label className="block text-sm font-medium text-gray-700 mb-1">Filter by Region</label>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="all">All Regions</option>
              {regions.map(region => (
                <option key={region} value={region}>{region}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-green-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-green-600">{offices.length}</p>
          <p className="text-xs text-gray-600">Total Offices</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-blue-600">{regions.length}</p>
          <p className="text-xs text-gray-600">Active States</p>
        </div>
        <div className="bg-purple-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-purple-600">
            {offices.filter(o => o.name && o.name !== '').length}
          </p>
          <p className="text-xs text-gray-600">With Contact Person</p>
        </div>
        <div className="bg-orange-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-orange-600">
            {offices.filter(o => o.pincode).length}
          </p>
          <p className="text-xs text-gray-600">With Pincode</p>
        </div>
      </div>

      {/* Offices List */}
      {Object.keys(groupedOffices).length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-6xl mb-4">🚚</div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">No delivery offices found</h3>
          <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          <button
            onClick={openAddModal}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Add Your First Delivery Office
          </button>
        </div>
      ) : (
        Object.keys(groupedOffices).sort().map(region => (
          <div key={region} className="mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4 pb-2 border-b border-green-200 flex items-center gap-2">
              <span>📍</span> {region}
              <span className="text-sm text-gray-500 ml-2">({groupedOffices[region].length} offices)</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md min-w-[900px]">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">S.No</th>
                    <th className="px-4 py-3 text-left">Location</th>
                    <th className="px-4 py-3 text-left">Contact Person</th>
                    <th className="px-4 py-3 text-left">Address</th>
                    <th className="px-4 py-3 text-left">Landmark</th>
                    <th className="px-4 py-3 text-left">Pincode</th>
                    <th className="px-4 py-3 text-left">Contact No.</th>
                    <th className="px-4 py-3 text-left">Alternate No.</th>
                    <th className="px-4 py-3 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedOffices[region].map((office, idx) => (
                    <motion.tr
                      key={office._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="px-4 py-3">{idx + 1}</td>
                      <td className="px-4 py-3 font-medium">{office.location}</td>
                      <td className="px-4 py-3">{office.name || '-'}</td>
                      <td className="px-4 py-3 max-w-xs">
                        <div className="truncate" title={office.address}>
                          {office.address}
                        </div>
                      </td>
                      <td className="px-4 py-3">{office.landmark || '-'}</td>
                      <td className="px-4 py-3">{office.pincode || '-'}</td>
                      <td className="px-4 py-3 text-sm">{office.contacts}</td>
                      <td className="px-4 py-3 text-sm">{office.alternatePhone || '-'}</td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => openEditModal(office)}
                            className="px-3 py-1 bg-yellow-500 text-white rounded text-sm hover:bg-yellow-600 transition"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(office._id)}
                            className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {editingOffice ? 'Edit Delivery Office' : 'Add New Delivery Office'}
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Region <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      {regions.map(region => (
                        <option key={region} value={region}>{region}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location/City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="e.g., Patna, Gorakhpur, Siliguri"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Jamil Akhter"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Pincode
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleInputChange}
                      placeholder="e.g., 800001"
                      maxLength="6"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Number(s) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contacts"
                      value={formData.contacts}
                      onChange={handleInputChange}
                      placeholder="e.g., 9876543210 / 9876543211"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Alternate Phone Number
                    </label>
                    <input
                      type="text"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleInputChange}
                      placeholder="e.g., 9876543212"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Complete Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="2"
                      placeholder="Full address with street name and area"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      name="landmark"
                      value={formData.landmark}
                      onChange={handleInputChange}
                      placeholder="e.g., Near Bus Stand, Near Railway Station"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    {editingOffice ? 'Update Office' : 'Add Office'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DeliveryOffices;