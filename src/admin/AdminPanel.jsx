import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'booking', name: 'Booking Offices', icon: '🏢' },
    { id: 'delivery', name: 'Delivery Offices', icon: '🚚' },
    { id: 'add-booking', name: 'Add Booking Office', icon: '➕' },
    { id: 'add-delivery', name: 'Add Delivery Office', icon: '🚛' },
    { id: 'contacts', name: 'Contacts', icon: '📞' },
    { id: 'settings', name: 'Settings', icon: '⚙️' },
  ];

  // Render different pages based on activePage
  const renderPage = () => {
    switch(activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'booking':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Booking Offices</h2>
            <p className="text-gray-500 mt-2">Booking offices section coming soon...</p>
          </div>
        );
      case 'delivery':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Delivery Offices</h2>
            <p className="text-gray-500 mt-2">Delivery offices section coming soon...</p>
          </div>
        );
      case 'add-booking':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Add Booking Office</h2>
            <p className="text-gray-500 mt-2">Add booking office form coming soon...</p>
          </div>
        );
      case 'add-delivery':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Add Delivery Office</h2>
            <p className="text-gray-500 mt-2">Add delivery office form coming soon...</p>
          </div>
        );
      case 'contacts':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Contacts</h2>
            <p className="text-gray-500 mt-2">Contacts section coming soon...</p>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
            <p className="text-gray-500 mt-2">Settings section coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <div className={`fixed md:relative z-30 bg-gradient-to-b from-sky-900 to-sky-800 h-screen transition-all duration-300 flex flex-col shadow-xl
        ${sidebarOpen ? 'w-64' : 'w-20'} 
        ${!sidebarOpen ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}`}
      >
        {/* Logo */}
        <div className="p-4 md:p-5 border-b border-sky-700">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🚚</div>
            {sidebarOpen && (
              <h1 className="text-white font-bold text-lg truncate">Golden Roadways</h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:block ml-auto text-white hover:bg-sky-700 p-1 rounded"
            >
              {sidebarOpen ? '◀' : '▶'}
            </button>
          </div>
          {sidebarOpen && <p className="text-sky-300 text-xs mt-1">Admin Panel</p>}
        </div>

        {/* Menu */}
        <nav className="flex-1 py-4 md:py-6 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                if (window.innerWidth < 768) setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 md:px-5 py-2.5 md:py-3 mb-1 transition-colors mx-2 rounded-lg ${
                activePage === item.id ? "bg-sky-700 text-white" : "text-sky-200 hover:bg-sky-700/50"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {sidebarOpen && <span className="font-medium text-sm md:text-base">{item.name}</span>}
            </button>
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

      {/* Overlay for mobile */}
      {!sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden" onClick={() => setSidebarOpen(true)} />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
          <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <h1 className="text-lg md:text-xl font-semibold text-gray-800">Golden Roadways Admin</h1>
            </div>

            {/* Search Bar */}
            {(activePage === 'booking' || activePage === 'delivery') && (
              <div className="hidden md:block flex-1 max-w-md mx-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                  />
                  <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            )}

            {/* Right Section */}
            <div className="flex items-center gap-3 md:gap-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold">A</div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-gray-700">Admin User</p>
                  <p className="text-xs text-gray-500">administrator</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Search */}
          {(activePage === 'booking' || activePage === 'delivery') && (
            <div className="px-4 pb-3 md:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 text-sm"
                />
                <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          )}
        </header>

        {/* Page Content - Dashboard will render here */}
        <main className="flex-1 overflow-y-auto">
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;