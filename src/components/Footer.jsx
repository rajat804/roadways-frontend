import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import assets from '../assets/assets';

const Footer = () => {
  const footerLinkVariants = {
    initial: { y: 0, color: '#F3F4F6' }, // gray-100
    hover: { y: -2, color: '#EAB308', transition: { duration: 0.2, ease: 'easeInOut' } }, // yellow-600
  };

  const socialIconVariants = {
    initial: { scale: 1, color: '#F3F4F6' }, // gray-100
    hover: { scale: 1.2, color: '#EAB308', transition: { duration: 0.3, ease: 'easeInOut' } }, // yellow-600
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-sky-900 to-cyan-700 text-white py-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <img src={assets.logo2} className='w-32 ' alt="" />
            <h3 className="text-2xl font-bold mb-4 text-yellow-300">Golden Roadways and Logistics</h3>
            <p className="text-gray-100 text-sm leading-relaxed max-w-xs text-center md:text-left">
              Your trusted partner for reliable and efficient logistics solutions across India. We deliver with precision and care.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Network', path: '/network' },
                { name: 'Services', path: '/services' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <motion.li
                  key={link.name}
                  variants={footerLinkVariants}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link to={link.path} className="text-gray-100 hover:text-yellow-600 transition duration-200">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Contact Us</h3>
            <ul className="space-y-2 text-center md:text-left">
              <motion.li
                variants={footerLinkVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center justify-center md:justify-start"
              >
                <FaMapMarkerAlt className="mr-2 text-yellow-300" />
                <span className="text-gray-100">31-32, 2nd Floor, Khanna Market, Opp. Tis Hazari Court, Delhi-110054.</span>
              </motion.li>
              <motion.li
                variants={footerLinkVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center justify-center md:justify-start"
              >
                <FaPhone className="mr-2 text-yellow-300" />
                <a href="tel:+912345678900" className="text-gray-100 hover:text-yellow-600 transition duration-200">
                  +91-9350167349
                </a>
              </motion.li>
              <motion.li
                variants={footerLinkVariants}
                initial="initial"
                whileHover="hover"
                className="flex items-center justify-center md:justify-start"
              >
                <FaEnvelope className="mr-2 text-yellow-300" />
                <a href="mailto:info@goldenroadways.in" className="text-gray-100 hover:text-yellow-600 transition duration-200">
                  info.grlogistics@gmail.com
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-semibold mb-4 text-yellow-300">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: FaFacebookF, href: 'https://facebook.com' },
                { icon: FaTwitter, href: 'https://twitter.com' },
                { icon: FaLinkedinIn, href: 'https://linkedin.com' },
                { icon: FaInstagram, href: 'https://instagram.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-gray-100 text-2xl"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-sky-800 text-center"
        >
          <p className="text-gray-100 text-sm">
            &copy; {new Date().getFullYear()} Golden Roadways and Logistics. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;