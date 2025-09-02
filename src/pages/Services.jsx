import React from 'react';
import { motion } from 'framer-motion';
import { FaTruck, FaBox, FaRoad, FaAd } from 'react-icons/fa';

const Services = () => {
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Services</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Large Scale Operations with Quality, Reliability, and On-Time Delivery
          </p>
          <p className="text-lg font-light">Covering 24 States & 5 Union Territories with 1245 Branches & Franchisees</p>
        </motion.div>
      </section>

      {/* General Parcel Section */}
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
            General Parcel
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
              className="text-sky-600 text-5xl mb-4 flex justify-center"
            >
              <FaBox />
            </motion.div>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6 text-center"
            >
              General Parcel forms the core of Golden Roadways and Logistics' business, involving pan-Indian movement of consignments of varying size and weight across the country on a Less than Truck Load (LTL) godown-to-godown basis. We also provide door collection and door delivery options at a cost. Our Priority Cargo business involves door-to-door delivery.
            </motion.p>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6 text-center"
            >
              We operate across 24 States and 5 Union Territories, covering all major cities and towns in India through a network of 1245 branches and franchisees. Our wide service network and company-owned vehicles ensure the safest possible movement for consignments with minimal theft, pilferage, or damage.
            </motion.p>
            <motion.ul
              variants={childVariants}
              className="list-disc list-inside text-gray-700 space-y-2"
            >
              <li>Surface transportation for best last-mile connectivity</li>
              <li>Online track & trace facility</li>
              <li>Dedicated company-owned vehicles</li>
              <li>24x7x365 days operations</li>
              <li>Consignment size ranging from 1 kg to 40 tons</li>
              <li>Door pick-up and door delivery facility</li>
              <li>Dedicated customer care window</li>
              <li>On-time delivery</li>
              <li>Extensive nationwide network</li>
              <li>Best-in-class service record</li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Courier Service Section */}
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
            Courier Service
          </motion.h2>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-sky-50 p-8 rounded-xl shadow-lg border border-sky-200"
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="text-sky-600 text-5xl mb-4 flex justify-center"
            >
              <FaTruck />
            </motion.div>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6 text-center"
            >
              We offer courier services for time-sensitive documents and packages, primarily within Karnataka, with select out-of-state locations serviced through partnerships. Our courier business operates in over 130 towns and cities, catering to walk-in customers and providing direct pick-up and delivery services.
            </motion.p>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6 text-center"
            >
              In compliance with Indian laws, we do not provide service for mail and letters. Our offerings include time-certain deliveries and local ground transport for hand-deliveries.
            </motion.p>
            <motion.ul
              variants={childVariants}
              className="list-disc list-inside text-gray-700 space-y-2"
            >
              <li>Door-to-door time-bound service</li>
              <li>Multi-modal connectivity</li>
              <li>Time-bound deliveries</li>
              <li>Special service to and from remote locations</li>
              <li>Topay / COD facilities on delivery</li>
              <li>Return / reverse pick-ups</li>
              <li>Late pick-ups and early connections</li>
              <li>Cash management and L.C. service for banks</li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Full Truckload Services Section */}
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
            Full Truckload Services (FTL)
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
              className="text-sky-600 text-5xl mb-4 flex justify-center"
            >
              <FaRoad />
            </motion.div>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6 text-center"
            >
              Our Full Truckload (FTL) services leverage our network of select branches and independent brokerage agents to provide door-to-door transport. Goods are loaded at the customer's premises and delivered to the specified destination, ideal for manufacturers with large quantities of goods.
            </motion.p>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6 text-center"
            >
              We offer FTL services to optimize vehicle capacity or provide attractive margins, supported by our long-standing partnerships with brokerage agents.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Outdoor Branding Section */}
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
            Outdoor Branding
          </motion.h2>
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="bg-sky-50 p-8 rounded-xl shadow-lg border border-sky-200"
          >
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
              className="text-sky-600 text-5xl mb-4 flex justify-center"
            >
              <FaAd />
            </motion.div>
            <motion.p
              variants={childVariants}
              className="text-lg text-gray-700 mb-6 text-center"
            >
              Golden Roadways and Logistics permits the usage of its vehicles for branding. Reputed corporates such as Mahindra & Mahindra, Bosch, Maruti, Michelin, Hindustan Petroleum, United India Insurance, and National India Insurance have partnered with us. Our vehicles traverse Indian highways, offering significant value addition and great brand recall for your products.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;