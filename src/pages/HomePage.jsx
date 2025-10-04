import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaTruck,
  FaBox,
  FaRoad,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";
import assets from "../assets/assets";
import { Link } from "react-router-dom";

const slides = [
  {
    image: assets.img1,
    title: "Welcome to Golden Roadways and Logistics",
    subtitle: "You Ask, We Deliver……..No Excuses",
  },
  {
    image: assets.img2,
    title: "Reliable Transportation Solutions",
    subtitle: "Swift, Safe, and On-Time Delivery Nationwide",
  },
  {
    image: assets.img3,
    title: "Your Logistics Partner",
    subtitle: "Tailored Solutions for Your Business Needs",
  },
];

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[39vh] overflow-hidden sm:h-screen">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900 to-cyan-700 opacity-50 z-10"></div>
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-20">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-4 drop-shadow-2xl shadow-black"
            >
              {slide.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-8 drop-shadow-2xl shadow-black"
            >
              {slide.subtitle}
            </motion.p>
            <Link to="/contact">
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-300 text-sky-900 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-bold hover:bg-yellow-400 transition duration-300 shadow-lg"
            >
              Enquire Now!
            </motion.a></Link>
          </div>
        </motion.div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-yellow-400" : "bg-white opacity-70"
            } hover:bg-yellow-300 transition duration-200`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", option: "" });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15, ease: "easeOut" },
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const progressVariants = {
    hidden: { strokeDashoffset: 100, opacity: 0 },
    visible: {
      strokeDashoffset: 0,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0, color: "#1E40AF" },
    hover: {
      scale: 1.2,
      rotate: 360,
      color: "#EAB308",
      transition: {
        rotate: { duration: 0.6, ease: "linear" },
        scale: { duration: 0.3, ease: "easeInOut" },
        color: { duration: 0.3, ease: "easeInOut" },
      },
    },
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section with Image Slider */}
      <section className="relative h-[39vh] overflow-hidden sm:h-screen">
        <ImageSlider />
      </section>

      {/* Contact Form Section */}
      <motion.section
        id="enquire"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-sky-50 to-cyan-50"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-4xl font-extrabold text-sky-800 mb-6 text-center tracking-tight"
          >
            Request a Free Quote
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto leading-relaxed"
          >
            At Golden Roadways and Logistics, we understand that every business
            has unique logistics needs. That’s why we offer personalized quotes
            tailored to your specific requirements. Whether you need road
            transport, warehousing, or a comprehensive logistics solution, we’re
            here to provide you with the most cost-effective and efficient
            service.
          </motion.p>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-2xl border border-sky-200 transform transition-all duration-300 hover:shadow-xl"
          >
            <motion.div variants={childVariants} className="mb-4">
              <label
                className="block text-sky-800 font-semibold mb-2"
                htmlFor="name"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div variants={childVariants} className="mb-4">
              <label
                className="block text-sky-800 font-semibold mb-2"
                htmlFor="email"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div variants={childVariants} className="mb-4">
              <label
                className="block text-sky-800 font-semibold mb-2"
                htmlFor="phone"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 ease-in-out"
              />
            </motion.div>
            <motion.div variants={childVariants} className="mb-6">
              <label
                className="block text-sky-800 font-semibold mb-2"
                htmlFor="option"
              >
                Select an Option
              </label>
              <select
                id="option"
                name="option"
                value={formData.option}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-200 ease-in-out"
              >
                <option value="">Select an option</option>
                <option value="road-transport">Road Transport</option>
                <option value="warehousing">Warehousing</option>
                <option value="logistics-solution">
                  Comprehensive Logistics Solution
                </option>
              </select>
            </motion.div>
            <motion.button
              variants={childVariants}
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-sky-700 text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-sky-800 transition duration-300 ease-in-out shadow-md"
            >
              Submit
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-sky-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-4xl font-extrabold text-sky-800 mb-12 text-center tracking-tight"
          >
            Our Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: 98, label: "Successful Deliveries" },
              { value: 97, label: "On-Time Performance" },
              { value: 98, label: "Customer Satisfaction" },
              { value: 100, label: "Nationwide Coverage" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-32 h-32 mb-4">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="10"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#1E3A8A"
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * stat.value) / 100}
                      strokeLinecap="round"
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                    <motion.text
                      x="50"
                      y="55"
                      textAnchor="middle"
                      fill="#1E3A8A"
                      className="text-2xl font-bold"
                      variants={childVariants}
                    >
                      {stat.value}%
                    </motion.text>
                  </svg>
                  <motion.div
                    variants={iconVariants}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 text-yellow-400 text-2xl"
                  >
                    <FaCheckCircle />
                  </motion.div>
                </div>
                <motion.p
                  variants={childVariants}
                  className="text-lg font-semibold text-sky-800"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-4xl font-extrabold text-sky-800 mb-8 text-center tracking-tight"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={childVariants}
            className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto leading-relaxed"
          >
            Golden Roadways and Logistics is a premier domestic logistics
            company in India, committed to delivering reliable and efficient
            transportation solutions to businesses nationwide. With a deep
            understanding of the complexities of logistics, we have built a
            reputation for excellence in service, driven by our mission to
            simplify the logistics process for our clients.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-sky-50 p-8 rounded-2xl shadow-2xl border border-sky-200 transform transition-all duration-300"
            >
              <motion.h3
                variants={childVariants}
                className="text-2xl font-semibold text-sky-800 mb-4"
              >
                Who We Are
              </motion.h3>
              <motion.p variants={childVariants} className="text-gray-700">
                Established with a vision to provide top-notch logistics
                services, Golden Roadways and Logistics has grown into a trusted
                partner for businesses across various sectors. From small
                enterprises to large corporations, our clients rely on us to
                ensure that their goods are transported safely, swiftly, and
                cost-effectively. Our experienced team of logistics
                professionals is dedicated to meeting and exceeding customer
                expectations by delivering tailored solutions that align with
                their specific needs.
              </motion.p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-sky-50 p-8 rounded-2xl shadow-2xl border border-sky-200 transform transition-all duration-300"
            >
              <motion.h3
                variants={childVariants}
                className="text-2xl font-semibold text-sky-800 mb-4"
              >
                Our Mission
              </motion.h3>
              <motion.p variants={childVariants} className="text-gray-700">
                Our mission is to empower businesses by providing comprehensive
                logistics services that streamline operations, reduce costs, and
                enhance supply chain efficiency. We strive to build lasting
                relationships with our clients by offering dependable,
                innovative, and customer-centric solutions that drive success.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-b from-white to-sky-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-4xl font-extrabold text-sky-800 mb-12 text-center tracking-tight"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FaTruck,
                title: "Reliability",
                desc: "We deliver on our promises, ensuring your goods arrive safely and on time.",
              },
              {
                icon: FaUserTie,
                title: "Expertise",
                desc: "Our team has the knowledge and skills to handle complex logistics challenges.",
              },
              {
                icon: FaBox,
                title: "Customer-Centric",
                desc: "We work closely with clients to deliver solutions that exceed expectations.",
              },
              {
                icon: FaRoad,
                title: "Innovation",
                desc: "We leverage technology for efficient, transparent logistics solutions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-2xl text-center cursor-pointer border border-sky-200 transform transition-all duration-300 flex flex-col items-center"
              >
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-sky-600 text-5xl mb-4 flex justify-center items-center"
                  style={{ transformOrigin: "center center" }}
                >
                  <item.icon />
                </motion.div>
                <motion.h3
                  variants={childVariants}
                  className="text-xl font-semibold text-sky-800 mb-2"
                >
                  {item.title}
                </motion.h3>
                <motion.p variants={childVariants} className="text-gray-700">
                  {item.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-sky-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={childVariants}
            className="text-4xl font-extrabold text-sky-800 mb-12 text-center tracking-tight"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaTruck,
                title: "Logistics Solutions",
                desc: "Comprehensive logistics services to transport goods across the country efficiently.",
              },
              {
                icon: FaBox,
                title: "Courier Service",
                desc: "Fast and reliable courier services for businesses and individuals.",
              },
              {
                icon: FaRoad,
                title: "Full Truckload Services",
                desc: "Door-to-door full truckload services tailored to your needs.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-8 rounded-2xl shadow-2xl text-center cursor-pointer border border-sky-200 transform transition-all duration-300 flex flex-col items-center"
              >
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-sky-600 text-5xl mb-4 flex justify-center items-center"
                  style={{ transformOrigin: "center center" }}
                >
                  <service.icon />
                </motion.div>
                <motion.h3
                  variants={childVariants}
                  className="text-xl font-semibold text-sky-800 mb-2"
                >
                  {service.title}
                </motion.h3>
                <motion.p variants={childVariants} className="text-gray-700">
                  {service.desc}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonial Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-20 bg-yellow-100"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            variants={childVariants}
            className="text-4xl font-extrabold text-sky-800 mb-8 tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.blockquote
            variants={childVariants}
            className="text-xl text-gray-700 italic mb-6 max-w-3xl mx-auto leading-relaxed"
          >
            “Golden Roadways and Logistics has been a game-changer for our
            supply chain. Their on-time delivery and excellent customer service
            have made them our go-to logistics partner. We’ve seen a significant
            improvement in our operations since we started working with them.”
          </motion.blockquote>
          <motion.p
            variants={childVariants}
            className="text-sky-800 font-semibold text-lg"
          >
            Ravi Sharma
          </motion.p>
        </div>
      </motion.section>

      
    </div>
  );
};

export default HomePage;
