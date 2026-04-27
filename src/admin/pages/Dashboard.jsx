import React from 'react';

const Dashboard = ({ bookingCount, deliveryCount }) => {
  const stats = [
    { title: "Total Booking Offices", value: bookingCount, icon: "🏢", color: "bg-blue-500", change: "+12%" },
    { title: "Total Delivery Offices", value: deliveryCount, icon: "🚚", color: "bg-green-500", change: "+8%" },
    { title: "Active States", value: "7", icon: "🗺️", color: "bg-purple-500", change: "+2" },
    { title: "Total Contacts", value: bookingCount + deliveryCount, icon: "📞", color: "bg-orange-500", change: "+15%" },
  ];

  const recentActivities = [
    "New booking office added in Ahmedabad, Gujarat",
    "Delivery office updated in Patna, Bihar",
    "Contact information updated for Ludhiana office",
    "New route added for West Bengal delivery",
    "Seasonal discount offer added for North East regions",
  ];

  const quickLinks = [
    { name: "Add Booking Office", icon: "➕", color: "bg-sky-50", textColor: "text-sky-700", link: "/add-booking" },
    { name: "Add Delivery Office", icon: "🚚", color: "bg-green-50", textColor: "text-green-700", link: "/add-delivery" },
    { name: "View All Offices", icon: "🏢", color: "bg-purple-50", textColor: "text-purple-700", link: "/booking" },
    { name: "Generate Report", icon: "📊", color: "bg-orange-50", textColor: "text-orange-700", link: "#" },
  ];

  return (
    <div className="p-3 md:p-6">
      {/* Welcome Section */}
      <div className="mb-6 md:mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">Welcome Back, Admin!</h2>
        <p className="text-gray-500 text-sm md:text-base mt-1">Here's what's happening with your network today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-xs md:text-sm">{stat.title}</p>
                <p className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                <p className="text-green-600 text-xs md:text-sm mt-1 md:mt-2">{stat.change} from last month</p>
              </div>
              <div className={`${stat.color} w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-xl md:text-2xl shadow-sm`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Quick Links Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
        {/* Regional Stats */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
            <span>📊</span> Regional Distribution
          </h3>
          <div className="space-y-3 md:space-y-4">
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Delhi</span>
                <span>8 Offices</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: "35%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Uttar Pradesh</span>
                <span>6 Offices</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: "26%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Bihar</span>
                <span>4 Offices</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: "17%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Punjab</span>
                <span>3 Offices</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: "13%" }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Others</span>
                <span>2 Offices</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full" style={{ width: "9%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
            <span>⚡</span> Quick Actions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                className={`flex items-center gap-3 p-3 ${link.color} rounded-lg hover:shadow-md transition-all`}
              >
                <span className="text-xl">{link.icon}</span>
                <div className="text-left">
                  <p className={`font-medium ${link.textColor} text-sm md:text-base`}>{link.name}</p>
                  <p className="text-gray-500 text-xs">Click to {link.name.toLowerCase()}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow-md p-4 md:p-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
          <span>🕒</span> Recent Activities
        </h3>
        <div className="space-y-2 md:space-y-3">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center gap-3 p-2 md:p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p className="text-gray-600 text-sm md:text-base flex-1">{activity}</p>
              <span className="text-xs text-gray-400">{index + 2} hours ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;