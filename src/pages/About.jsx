import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTruck, FaWarehouse, FaNetworkWired, FaCogs, FaMicrochip, FaLeaf, FaChevronDown } from 'react-icons/fa';

const About = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.15, ease: 'easeOut' } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.05, rotate: 2, transition: { duration: 0.3, ease: 'easeInOut' } },
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

  const accordionVariants = {
    closed: { opacity: 0, maxHeight: 0 },
    open: { 
      opacity: 1, 
      maxHeight: 200, // Large enough to accommodate content
      transition: { 
        opacity: { duration: 0.2, ease: 'easeOut' },
        maxHeight: { duration: 0.3, ease: 'easeOut' },
      },
    },
  };

  const chevronVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { 
      question: 'Why is Golden Roadways reliable?', 
      answer: 'We deliver on our promises, ensuring your goods arrive safely and on time with a proven track record of reliability.' 
    },
    { 
      question: 'How do we tailor solutions for your business?', 
      answer: 'We offer customized logistics solutions designed to meet your specific needs, from specialized transport to integrated supply chain management.' 
    },
    { 
      question: 'What technology do we use?', 
      answer: 'We leverage cutting-edge technology for real-time tracking, route optimization, and data-driven decisions to ensure efficient and transparent logistics.' 
    },
    { 
      question: 'How extensive is our network?', 
      answer: 'Our robust network ensures nationwide coverage, enabling efficient and timely delivery across India.' 
    },
    { 
      question: 'How do we prioritize customers?', 
      answer: 'Our customer-centric approach means we work closely with you to exceed expectations and deliver solutions that align with your goals.' 
    },
    { 
      question: 'How do we commit to sustainability?', 
      answer: 'We are dedicated to eco-friendly practices, minimizing environmental impact through sustainable logistics solutions.' 
    },
  ];

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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Golden Roadways And Logistics</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">Your trusted partner for seamless logistics solutions across India.</p>
        </motion.div>
      </section>

      {/* About Us Section */}
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
            About Us
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed"
          >
            Welcome to Golden Roadways And Logistics, a leading domestic logistics provider in India, known for delivering reliable, efficient, and customer-focused solutions.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-lg border border-sky-200"
            >
              <motion.h3
                variants={childVariants}
                className="text-2xl font-semibold text-sky-800 mb-4"
              >
                Who We Are
              </motion.h3>
              <motion.p
                variants={childVariants}
                className="text-gray-700"
              >
                Golden Roadways and Logistics is a premier logistics provider founded on the belief that logistics should be seamless. We enable businesses to focus on their core operations while we handle their transportation and distribution needs with reliability and efficiency.
              </motion.p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-6 rounded-xl shadow-lg border border-sky-200"
            >
              <motion.h3
                variants={childVariants}
                className="text-2xl font-semibold text-sky-800 mb-4"
              >
                Our Mission
              </motion.h3>
              <motion.p
                variants={childVariants}
                className="text-gray-700"
              >
                Our mission is to simplify logistics for businesses by offering seamless, cost-effective, and tailored solutions. We aim to be a strategic partner, contributing to our clients' growth and success through timely deliveries, optimized supply chains, and secure warehousing.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-12 text-center"
          >
            What We Do
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed"
          >
            We specialize in providing comprehensive logistics solutions that streamline the movement of goods across India, catering to businesses of all sizes.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FaTruck, title: 'Comprehensive Road Transport', desc: 'Extensive road transport services catering to businesses of all sizes.' },
              { icon: FaWarehouse, title: 'Secure Warehousing Solutions', desc: 'Strategically located warehouses offering secure and flexible storage options.' },
              { icon: FaNetworkWired, title: 'Efficient Distribution Network', desc: 'Robust distribution services ensuring accurate and efficient delivery.' },
              { icon: FaCogs, title: 'Tailored Logistics Solutions', desc: 'Customized solutions designed to meet your specific logistics challenges.' },
              { icon: FaMicrochip, title: 'Advanced Technology Integration', desc: 'Leveraging technology for real-time tracking, route optimization, and data-driven decisions.' },
              { icon: FaLeaf, title: 'Commitment to Sustainability', desc: 'Dedicated to minimizing environmental impact through sustainable practices.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-sky-50 p-6 rounded-xl shadow-lg text-center border border-sky-200"
              >
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-sky-600 text-4xl mb-4 flex justify-center items-center"
                >
                  <item.icon />
                </motion.div>
                <motion.h3
                  variants={childVariants}
                  className="text-xl font-semibold text-sky-800 mb-2"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={childVariants}
                  className="text-gray-700"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section (Q&A Accordion) */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-white to-sky-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-3xl md:text-4xl font-extrabold text-sky-800 mb-12 text-center"
          >
            Why Choose Us
          </motion.h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-xl shadow-lg border border-sky-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 text-left text-sky-800 font-semibold text-lg focus:outline-none transition-colors duration-200 hover:bg-sky-50"
                >
                  <span>{item.question}</span>
                  <motion.div
                    variants={chevronVariants}
                    animate={openIndex === index ? 'open' : 'closed'}
                    className="text-sky-600"
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      variants={accordionVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      className="px-6 pb-6 text-gray-700 overflow-hidden"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;