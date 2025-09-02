import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import assets from '../assets/assets';
import { path } from 'framer-motion/client';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const timeoutRef = useRef(null);

  const toggleSubmenu = (menu) => {
    setIsOpen(isOpen === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setIsOpen(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(null);
    }, 200); // Slightly reduced timeout for smoother UX
  };

  const handleSubmenuMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Keep submenu open when hovering over it
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsOpen(null); // Close any open submenus when toggling mobile menu
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    {
      name: 'About',path : '/about'
    },
    {
      name: 'Services',path : '/services',
    },
    { name: 'Careers', path: '/careers' },
    {
      name: 'Contact',
      subItems: [
        { name: 'Contact Us', path: '/contact' },
        { name: 'Track Consignment', path: '/track' },
        { name: 'Pickup Requests', path: '/pickup' },
        { name: 'Booking Console Sign Up', path: '/contact/signup' },
      ],
    },
  ];

  const logoUrl = assets.logo;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <img
              className=" w-20 sm:h-20 sm:w-40"
              src={logoUrl}
              alt="Roadways & Logistics Logo"
            />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subItems && handleMouseEnter(item.name)}
                onMouseLeave={() => item.subItems && handleMouseLeave()}
              >
                <Link
                  to={item.path || '#'}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition duration-300 ${
                    location.pathname === item.path
                      ? 'bg-yellow-100 text-sky-600'
                      : 'text-sky-600 hover:bg-yellow-100'
                  }`}
                  aria-expanded={item.subItems ? isOpen === item.name : undefined}
                >
                  {item.name}
                  {item.subItems && (
                    <span className="ml-1">
                      {isOpen === item.name ? <FaCaretUp /> : <FaCaretDown />}
                    </span>
                  )}
                </Link>
                {item.subItems && isOpen === item.name && (
                  <div
                    className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md py-2 z-20 transition-all duration-300 ease-in-out transform origin-top scale-y-100"
                    onMouseEnter={handleSubmenuMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    role="menu"
                    aria-label={`${item.name} submenu`}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block px-4 py-2 text-sm transition duration-200 ${
                          location.pathname === subItem.path
                            ? 'bg-yellow-100 text-sky-600'
                            : 'text-sky-600 hover:bg-yellow-100'
                        }`}
                        onClick={() => setIsOpen(null)}
                        role="menuitem"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-sky-600 hover:bg-yellow-100 p-2 rounded-md"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.name}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path || '#'}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.path
                        ? 'bg-yellow-100 text-sky-600'
                        : 'text-sky-600 hover:bg-yellow-100'
                    }`}
                    onClick={() => {
                      if (!item.subItems) {
                        setIsMobileMenuOpen(false); // Close mobile menu for non-submenu items
                      }
                    }}
                    aria-expanded={item.subItems ? isOpen === item.name : undefined}
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <button
                      onClick={() => toggleSubmenu(item.name)}
                      className="text-sky-600 px-3 py-2"
                      aria-label={`Toggle ${item.name} submenu`}
                    >
                      {isOpen === item.name ? <FaCaretUp /> : <FaCaretDown />}
                    </button>
                  )}
                </div>
                {item.subItems && isOpen === item.name && (
                  <div className="pl-4 space-y-1 transition-all duration-300">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block px-3 py-2 rounded-md text-sm ${
                          location.pathname === subItem.path
                            ? 'bg-yellow-100 text-sky-600'
                            : 'text-sky-600 hover:bg-yellow-100'
                        }`}
                        onClick={() => {
                          setIsOpen(null);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;