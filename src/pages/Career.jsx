import React, { useState } from 'react';
import { motion } from 'framer-motion';
import assets from '../assets/assets';

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    fatherName: '',
    qualification: '',
    experience: '',
    mobile: '',
    email: '',
    address: '',
    state: '',
    city: '',
    licenseNumber: '',
    licenseType: '',
    requestNote: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      firstName: '',
      lastName: '',
      fatherName: '',
      qualification: '',
      experience: '',
      mobile: '',
      email: '',
      address: '',
      state: '',
      city: '',
      licenseNumber: '',
      licenseType: '',
      requestNote: '',
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Careers at Golden Roadways and Logistics</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto italic">
            “Pleasure in the job puts perfection in the work.” – Aristotle
          </p>
        </motion.div>
      </section>

      {/* Career Description Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-sky-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-8 text-center"
          >
            Career Opportunities
          </motion.h2>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-white p-8 rounded-xl shadow-lg border border-sky-200"
          >
            <motion.h3
              variants={childVariants}
              className="text-2xl font-semibold text-sky-800 mb-4 text-center"
            >
              Driver
            </motion.h3>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6"
            >
              We are seeking a Driver to efficiently transport goods in a comfortable, safe, and punctual manner. Responsibilities include arranging regular cleaning and maintenance services for the vehicle. To qualify for this position, you must possess a valid driver’s license and maintain a clean driving record free of traffic violations.
            </motion.p>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6"
            >
              We offer multiple incentives, including benefits for fuel consumption, tire and time coverage, and achievement of running targets. Additionally, we provide accidental insurance benefits, as well as PF (Provident Fund) and ESI (Employee State Insurance).
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Application Form Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-8 text-center"
          >
            Apply Now
          </motion.h2>
          <motion.div
            variants={cardVariants}
            className="bg-sky-50 p-8 rounded-xl shadow-lg border border-sky-200"
          >
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="fatherName">
                  Father’s Name *
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="qualification">
                  Qualification *
                </label>
                <input
                  type="text"
                  id="qualification"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="experience">
                  Total Years of Experience *
                </label>
                <input
                  type="number"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="mobile">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="email">
                  Email ID *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1 md:col-span-2">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="address">
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  rows="3"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="state">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="city">
                  City *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="licenseNumber">
                  Driving License Number *
                </label>
                <input
                  type="text"
                  id="licenseNumber"
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="licenseType">
                  License Type *
                </label>
                <select
                  id="licenseType"
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                >
                  <option value="">Select License Type</option>
                  <option value="LMV">LMV (Light Motor Vehicle)</option>
                  <option value="HMV">HMV (Heavy Motor Vehicle)</option>
                  <option value="Other">Other</option>
                </select>
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1 md:col-span-2">
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="requestNote">
                  Request Note
                </label>
                <textarea
                  id="requestNote"
                  name="requestNote"
                  value={formData.requestNote}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                  rows="4"
                />
              </motion.div>
              <motion.div variants={childVariants} className="col-span-1 md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-sky-800 transition duration-300 shadow-md"
                >
                  Submit Application
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Career;