import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFilePdf } from 'react-icons/fa';
import assets from '../assets/assets';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    option: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', option: '' });
  };

  const handleDownloadClick = (e) => {
    const fileUrl = '/files/branch-list.pdf';
    try {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = 'branch-list.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error initiating download:', error);
      alert('Sorry, the file could not be downloaded. Please check if the file exists or contact support.');
    }
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Get in touch with Golden Roadways and Logistics for seamless logistics solutions.
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
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
            Request Free Consultation
          </motion.h2>
          <motion.div
            variants={cardVariants}
            className="bg-white p-8 rounded-xl shadow-lg border border-sky-200 max-w-lg mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={childVariants}>
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="name">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants}>
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="email">
                  Email *
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
              <motion.div variants={childVariants}>
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                />
              </motion.div>
              <motion.div variants={childVariants}>
                <label className="block text-sky-800 font-semibold mb-2" htmlFor="option">
                  Select an Option
                </label>
                <select
                  id="option"
                  name="option"
                  value={formData.option}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200"
                >
                  <option value="">Select an option</option>
                  <option value="general-parcel">General Parcel</option>
                  <option value="courier-service">Courier Service</option>
                  <option value="ftl">Full Truckload Services</option>
                  <option value="outdoor-branding">Outdoor Branding</option>
                </select>
              </motion.div>
              <motion.div variants={childVariants}>
                <button
                  type="submit"
                  className="w-full bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-sky-800 transition duration-300 shadow-md"
                >
                  Submit
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Get In Touch Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-8 text-center"
          >
            Get In Touch
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-sky-50 p-8 rounded-xl shadow-lg border border-sky-200"
            >
              <motion.h3
                variants={childVariants}
                className="text-2xl font-semibold text-sky-800 mb-6"
              >
                Reach Us
              </motion.h3>
              <motion.div variants={childVariants} className="space-y-4">
                <div className="flex items-center">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="text-sky-600 text-2xl mr-3"
                  >
                    <FaMapMarkerAlt />
                  </motion.div>
                  <p className="text-gray-700">
                    31-32, 2nd Floor, Khanna Market, Opp. Tis Hazari Court, Delhi-110054
                  </p>
                </div>
                <div className="flex items-center">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="text-sky-600 text-2xl mr-3"
                  >
                    <FaEnvelope />
                  </motion.div>
                  <div>
                    <p className="text-gray-700">
                      <a href="mailto:info.grlogistics@gmail.com" className="hover:text-yellow-400 transition duration-200">
                        info.grlogistics@gmail.com
                      </a>
                    </p>
                    <p className="text-gray-700">
                      <a href="mailto:mayank.grlogistics@gmail.com" className="hover:text-yellow-400 transition duration-200">
                        mayank.grlogistics@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="text-sky-600 text-2xl mr-3"
                  >
                    <FaPhone />
                  </motion.div>
                  <p className="text-gray-700">
                    <a href="tel:+919350167349" className="hover:text-yellow-400 transition duration-200">
                      +91-9350167349
                    </a>
                  </p>
                </div>
                <div className="flex items-center">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="text-sky-600 text-2xl mr-3"
                  >
                    <FaFilePdf />
                  </motion.div>
                  <p className="text-gray-700">
                    <a
                      href="#"
                      onClick={handleDownloadClick}
                      className="hover:text-yellow-400 transition duration-200"
                    >
                      Download Branch List (PDF)
                    </a>
                  </p>
                </div>
              </motion.div>
            </motion.div>
            {/* Google Map */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-4 rounded-xl shadow-lg border border-sky-200"
            >
              <motion.h3
                variants={childVariants}
                className="text-2xl font-semibold text-sky-800 mb-4 text-center"
              >
                Our Location
              </motion.h3>
              <motion.div variants={childVariants}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.551075446848!2d77.21966351508331!3d28.67000128239896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5a5a5a5a5a%3A0x5a5a5a5a5a5a5a5a!2sTis%20Hazari%20Court!5e0!3m2!1sen!2sin!4v1696341234567!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactUs;