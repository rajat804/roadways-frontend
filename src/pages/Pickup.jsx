import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaMotorcycle } from 'react-icons/fa';
import assets from '../assets/assets';

const PickupRequest = () => {
  const [formType, setFormType] = useState('parcel'); // Default to parcel form
  const [parcelFormData, setParcelFormData] = useState({
    gstNo: '',
    customerName: '',
    noOfPackages: '',
    approxWeight: '',
    contactPersonName: '',
    contactPersonMobile: '',
    email: '',
    originPincode: '',
    destinationPincode: '',
    pickupStreetAddress: '',
    pickupApartment: '',
    pickupCityName: '',
    receiverGstNo: '',
    receiverName: '',
    materialImage1: null,
    materialImage2: null,
  });

  const [twoWheelerFormData, setTwoWheelerFormData] = useState({
    fullName: '',
    email: '',
    contactPersonMobile: '',
    vehicleNo: '',
    twoWheelerCC: '',
    twoWheelerType: '',
    originPincode: '',
    destinationPincode: '',
    additionalRequests: '',
  });

  const handleParcelInputChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setParcelFormData({ ...parcelFormData, [name]: files[0] });
    } else {
      setParcelFormData({ ...parcelFormData, [name]: value });
    }
  };

  const handleTwoWheelerInputChange = (e) => {
    const { name, value } = e.target;
    setTwoWheelerFormData({ ...twoWheelerFormData, [name]: value });
  };

  const handleParcelSubmit = (e) => {
    e.preventDefault();
    console.log('Parcel Pickup Request Submitted:', parcelFormData);
    setParcelFormData({
      gstNo: '',
      customerName: '',
      noOfPackages: '',
      approxWeight: '',
      contactPersonName: '',
      contactPersonMobile: '',
      email: '',
      originPincode: '',
      destinationPincode: '',
      pickupStreetAddress: '',
      pickupApartment: '',
      pickupCityName: '',
      receiverGstNo: '',
      receiverName: '',
      materialImage1: null,
      materialImage2: null,
    });
  };

  const handleTwoWheelerSubmit = (e) => {
    e.preventDefault();
    console.log('2-Wheeler Pickup Request Submitted:', twoWheelerFormData);
    setTwoWheelerFormData({
      fullName: '',
      email: '',
      contactPersonMobile: '',
      vehicleNo: '',
      twoWheelerCC: '',
      twoWheelerType: '',
      originPincode: '',
      destinationPincode: '',
      additionalRequests: '',
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15, ease: 'easeOut' } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.03, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0, color: '#1E40AF' },
    hover: {
      scale: 1.2,
      rotate: 360,
      color: '#EAB308',
      transition: {
        rotate: { duration: 0.6, ease: 'linear' },
        scale: { duration: 0.3, ease: 'easeInOut' },
        color: { duration: 0.3, ease: 'easeInOut' },
      },
    },
  };

  const toggleVariants = {
    selected: { 
      backgroundColor: '#1E40AF', 
      color: '#ffffff', 
      scale: 1.05,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
    unselected: { 
      backgroundColor: '#e0f2fe', 
      color: '#1E40AF', 
      scale: 1,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${assets.truck})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-cyan-700 opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pickup Request</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Schedule a pickup for your parcels or 2-wheelers with ease.
          </p>
        </motion.div>
      </section>

      {/* Toggle and Form Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-sky-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Toggle Buttons */}
          <motion.div
            variants={childVariants}
            className="flex justify-center mb-8 space-x-4"
          >
            <motion.button
              variants={toggleVariants}
              animate={formType === 'parcel' ? 'selected' : 'unselected'}
              onClick={() => setFormType('parcel')}
              className="flex items-center px-6 py-3 rounded-lg font-semibold text-lg shadow-md"
            >
              <FaBox className="mr-2" /> Parcel Pickup
            </motion.button>
            <motion.button
              variants={toggleVariants}
              animate={formType === 'twoWheeler' ? 'selected' : 'unselected'}
              onClick={() => setFormType('twoWheeler')}
              className="flex items-center px-6 py-3 rounded-lg font-semibold text-lg shadow-md"
            >
              <FaMotorcycle className="mr-2" /> 2-Wheeler Pickup
            </motion.button>
          </motion.div>

          {/* Form Section */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-xl shadow-lg border border-sky-200"
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="text-sky-600 text-5xl mb-6 flex justify-center"
            >
              {formType === 'parcel' ? <FaBox /> : <FaMotorcycle />}
            </motion.div>
            <motion.h2
              variants={childVariants}
              className="text-2xl md:text-3xl font-semibold text-sky-800 mb-6 text-center"
            >
              {formType === 'parcel' ? 'Parcel Pickup Request' : '2-Wheeler Pickup Request'}
            </motion.h2>

            {formType === 'parcel' ? (
              <form onSubmit={handleParcelSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="gstNo">
                    GST Number *
                  </label>
                  <input
                    type="text"
                    id="gstNo"
                    name="gstNo"
                    value={parcelFormData.gstNo}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="customerName">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={parcelFormData.customerName}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="noOfPackages">
                    No of Packages *
                  </label>
                  <input
                    type="number"
                    id="noOfPackages"
                    name="noOfPackages"
                    value={parcelFormData.noOfPackages}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="approxWeight">
                    Approx Weight (Kgs) *
                  </label>
                  <input
                    type="number"
                    id="approxWeight"
                    name="approxWeight"
                    value={parcelFormData.approxWeight}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="contactPersonName">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    id="contactPersonName"
                    name="contactPersonName"
                    value={parcelFormData.contactPersonName}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="contactPersonMobile">
                    Contact Person Mobile No *
                  </label>
                  <input
                    type="tel"
                    id="contactPersonMobile"
                    name="contactPersonMobile"
                    value={parcelFormData.contactPersonMobile}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={parcelFormData.email}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="originPincode">
                    Origin Pincode *
                  </label>
                  <input
                    type="text"
                    id="originPincode"
                    name="originPincode"
                    value={parcelFormData.originPincode}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="destinationPincode">
                    Destination Pincode *
                  </label>
                  <input
                    type="text"
                    id="destinationPincode"
                    name="destinationPincode"
                    value={parcelFormData.destinationPincode}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1 md:col-span-2">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="pickupStreetAddress">
                    Pickup Street Address *
                  </label>
                  <input
                    type="text"
                    id="pickupStreetAddress"
                    name="pickupStreetAddress"
                    value={parcelFormData.pickupStreetAddress}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1 md:col-span-2">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="pickupApartment">
                    Pickup Apartment/Floor etc. (Optional)
                  </label>
                  <input
                    type="text"
                    id="pickupApartment"
                    name="pickupApartment"
                    value={parcelFormData.pickupApartment}
                    onChange={handleParcelInputChange}
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="pickupCityName">
                    Pickup City Name *
                  </label>
                  <input
                    type="text"
                    id="pickupCityName"
                    name="pickupCityName"
                    value={parcelFormData.pickupCityName}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="receiverGstNo">
                    Receiver GST Number
                  </label>
                  <input
                    type="text"
                    id="receiverGstNo"
                    name="receiverGstNo"
                    value={parcelFormData.receiverGstNo}
                    onChange={handleParcelInputChange}
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1 md:col-span-2">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="receiverName">
                    Receiver Name *
                  </label>
                  <input
                    type="text"
                    id="receiverName"
                    name="receiverName"
                    value={parcelFormData.receiverName}
                    onChange={handleParcelInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="materialImage1">
                    Upload Material Image 1
                  </label>
                  <input
                    type="file"
                    id="materialImage1"
                    name="materialImage1"
                    accept="image/*"
                    onChange={handleParcelInputChange}
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="materialImage2">
                    Upload Material Image 2
                  </label>
                  <input
                    type="file"
                    id="materialImage2"
                    name="materialImage2"
                    accept="image/*"
                    onChange={handleParcelInputChange}
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1 md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-sky-800 transition duration-300 shadow-md"
                  >
                    Submit Parcel Pickup Request
                  </button>
                </motion.div>
              </form>
            ) : (
              <form onSubmit={handleTwoWheelerSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="fullName">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={twoWheelerFormData.fullName}
                    onChange={handleTwoWheelerInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={twoWheelerFormData.email}
                    onChange={handleTwoWheelerInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="contactPersonMobile">
                    Contact Person Mobile No *
                  </label>
                  <input
                    type="tel"
                    id="contactPersonMobile"
                    name="contactPersonMobile"
                    value={twoWheelerFormData.contactPersonMobile}
                    onChange={handleTwoWheelerInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="vehicleNo">
                    Vehicle Number *
                  </label>
                  <input
                    type="text"
                    id="vehicleNo"
                    name="vehicleNo"
                    value={twoWheelerFormData.vehicleNo}
                    onChange={handleTwoWheelerInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="twoWheelerCC">
                    Two-Wheeler CC *
                  </label>
                  <select
                    id="twoWheelerCC"
                    name="twoWheelerCC"
                    value={twoWheelerFormData.twoWheelerCC}
                    onChange={handleTwoWheelerInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  >
                    <option value="">Select Two-Wheeler CC</option>
                    <option value="100-150cc">100-150cc</option>
                    <option value="150-250cc">150-250cc</option>
                    <option value="250cc+">250cc+</option>
                  </select>
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="twoWheelerType">
                    Two-Wheeler Type *
                  </label>
                  <select
                    id="twoWheelerType"
                    name="twoWheelerType"
                    value={twoWheelerFormData.twoWheelerType}
                    onChange={handleTwoWheelerInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  >
                    <option value="">Select Vehicle Type</option>
                    <option value="Motorcycle">Motorcycle</option>
                    <option value="Scooter">Scooter</option>
                    <option value="Moped">Moped</option>
                  </select>
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="originPincode">
                    Pickup Pincode *
                  </label>
                  <input
                    type="text"
                    id="originPincode"
                    name="originPincode"
                    value={twoWheelerFormData.originPincode}
                    onChange={handleTwoWheelerInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="destinationPincode">
                    Destination Location *
                  </label>
                  <input
                    type="text"
                    id="destinationPincode"
                    name="destinationPincode"
                    value={twoWheelerFormData.destinationPincode}
                    onChange={handleTwoWheelerInputChange}
                    required
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1 md:col-span-2">
                  <label className="block text-sky-800 font-semibold mb-2" htmlFor="additionalRequests">
                    Additional Requests
                  </label>
                  <textarea
                    id="additionalRequests"
                    name="additionalRequests"
                    value={twoWheelerFormData.additionalRequests}
                    onChange={handleTwoWheelerInputChange}
                    className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                    rows="4"
                  />
                </motion.div>
                <motion.div variants={childVariants} className="col-span-1 md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-sky-800 transition duration-300 shadow-md"
                  >
                    Submit 2-Wheeler Pickup Request
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default PickupRequest;