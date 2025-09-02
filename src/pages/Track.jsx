import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt } from 'react-icons/fa';

const TrackConsignment = () => {
  const [consignmentNumber, setConsignmentNumber] = useState('');

  const handleInputChange = (e) => {
    setConsignmentNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Tracking consignment:', consignmentNumber);
    setConsignmentNumber('');
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

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-sky-900 to-cyan-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Track Consignment</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Services spread across 24 States & 5 Union Territories
          </p>
        </motion.div>
      </section>

      {/* Track Consignment Form Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-sky-50"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-8 text-center"
          >
            Consignment Tracking
          </motion.h2>
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
              <FaMapMarkedAlt />
            </motion.div>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6 text-center"
            >
              Enter your Consignment/LR Number to track your shipment in real-time.
            </motion.p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <motion.div variants={childVariants} className="flex-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="consignmentNumber">
                  Consignment/LR Number *
                </label>
                <input
                  type="text"
                  id="consignmentNumber"
                  name="consignmentNumber"
                  value={consignmentNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  placeholder="Enter Consignment/LR Number"
                />
              </motion.div>
              <motion.div variants={childVariants} className="flex items-end">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-sky-800 transition duration-300 shadow-md"
                >
                  Track
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default TrackConsignment;