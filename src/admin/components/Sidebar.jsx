import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const menuItems = [
    { path: '/admin/dashboard', name: 'Dashboard', icon: '📊' },
    { path: '/admin/booking', name: 'Booking Offices', icon: '🏢' },
    { path: '/admin/delivery', name: 'Delivery Offices', icon: '🚚' },
    { path: '/admin/add-booking', name: 'Add Booking Office', icon: '➕' },
    { path: '/admin/add-delivery', name: 'Add Delivery Office', icon: '🚛' },
    { path: '/admin/contacts', name: 'Contacts', icon: '📞' },
    { path: '/admin/settings', name: 'Settings', icon: '⚙️' },
  ];

  // Close sidebar function
  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay - Click to close sidebar */}
      {sidebarOpen && window.innerWidth < 768 && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed md:relative z-30 bg-gradient-to-b from-sky-900 to-sky-800 h-screen transition-all duration-300 flex flex-col shadow-xl
          ${sidebarOpen ? 'w-64' : 'w-20'} 
          ${!sidebarOpen ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}`}
      >
        {/* Logo Section with Close Button for Mobile */}
        <div className="p-4 md:p-5 border-b border-sky-700">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🚚</div>
            {sidebarOpen && (
              <h1 className="text-white font-bold text-lg truncate">
                Golden Roadways
              </h1>
            )}
            
            {/* Desktop Toggle Button */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:block ml-auto text-white hover:bg-sky-700 p-1 rounded transition-colors"
            >
              {sidebarOpen ? '◀' : '▶'}
            </button>

            {/* Mobile Close Button - Only shows when sidebar is open on mobile */}
            {sidebarOpen && (
              <button
                onClick={() => setSidebarOpen(false)}
                className="md:hidden ml-auto text-white bg-red-600 hover:bg-red-700 p-1.5 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {sidebarOpen && (
            <p className="text-sky-300 text-xs mt-1">Admin Panel</p>
          )}
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-4 md:py-6 overflow-y-auto">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 md:px-5 py-2.5 md:py-3 mb-1 transition-colors mx-2 rounded-lg ${
                  isActive
                    ? "bg-sky-700 text-white"
                    : "text-sky-200 hover:bg-sky-700/50"
                }`
              }
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && (
                <span className="font-medium text-sm md:text-base">{item.name}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 md:p-5 border-t border-sky-700">
          {sidebarOpen ? (
            <div className="text-sky-300 text-xs">
              <p>GSTIN: 07AAGCG5997B1ZE</p>
              <p className="mt-1">SAC: 996791</p>
            </div>
          ) : (
            <div className="text-center text-sky-300 text-xs">v1.0</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;