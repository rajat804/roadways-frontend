import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt } from 'react-icons/fa';
import assets from '../assets/assets';

const TrackConsignment = () => {
  const [consignmentNumber, setConsignmentNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [trackingData, setTrackingData] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setConsignmentNumber(e.target.value.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consignmentNumber) return;

    setLoading(true);
    setError('');
    setTrackingData(null);

    try {
      const response = await fetch(
        `https://greentrans.in:444/API/Tracking/GRTracking?ClientId=fVGbTPGf/0sWEfGL7vPJHA==&GRNo=${consignmentNumber}`,
        { signal: AbortSignal.timeout?.(15000) }
      );

      if (!response.ok) {
        if (response.status >= 500) throw new Error('server');
        throw new Error('network');
      }

      const contentType = response.headers.get('content-type');
      let parsedData;

      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();
        if (data.status !== '1') {
          throw new Error(`notfound:${data.message || 'Consignment not found'}`);
        }

        const detail = data.consignmentdetail || {};
        const activities = data.consignmentactivitylist || [];

        parsedData = {
          grno: detail.grno || '-',
          grdt: detail.grdt || '-',
          origin: detail.origin || '-',
          destname: detail.destname || '-',
          pckgs: detail.pckgs ?? '-',
          cweight: detail.cweight ?? '-',
          goods: detail.goods || '-',
          grtype: detail.grtype || '-',
          activities: activities.map((act) => ({
            date: act.date || '',
            activity: act.activity || '',
            details: act.details || '',
            shortdetails: act.shortactivitydetails || '',
          })),
        };
      } else {
        const text = await response.text();
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');

        if (xmlDoc.querySelector('parsererror')) throw new Error('server');

        const status = xmlDoc.querySelector('status')?.textContent;
        const message = xmlDoc.querySelector('message')?.textContent || 'Unknown error';

        if (status !== '1') throw new Error(`notfound:${message}`);

        const detail = xmlDoc.querySelector('consignmentdetail');
        const activities = [];
        xmlDoc.querySelectorAll('ActivityDetailModel').forEach((act) => {
          activities.push({
            date: act.querySelector('date')?.textContent?.trim() || '',
            activity: act.querySelector('activity')?.textContent?.trim() || '',
            details: act.querySelector('details')?.textContent?.trim() || '',
            shortdetails: act.querySelector('shortactivitydetails')?.textContent?.trim() || '',
          });
        });

        parsedData = {
          grno: detail?.querySelector('grno')?.textContent?.trim() || '-',
          grdt: detail?.querySelector('grdt')?.textContent?.trim() || '-',
          origin: detail?.querySelector('origin')?.textContent?.trim() || '-',
          destname: detail?.querySelector('destname')?.textContent?.trim() || '-',
          pckgs: detail?.querySelector('pckgs')?.textContent?.trim() || '-',
          cweight: detail?.querySelector('cweight')?.textContent?.trim() || '-',
          goods: detail?.querySelector('goods')?.textContent?.trim() || '-',
          grtype: detail?.querySelector('grtype')?.textContent?.trim() || '-',
          activities,
        };
      }

      setTrackingData(parsedData);
    } catch (err) {
      if (err.name === 'TimeoutError' || err.message === 'server') {
        setError('The tracking server is currently unavailable. Please try again later.');
      } else if (err.message?.startsWith('notfound:')) {
        setError(err.message.slice(9) || 'Consignment not found. Please check the number.');
      } else {
        setError('Network error. Please check your connection and try again.');
      }
    } finally {
      setLoading(false);
      setConsignmentNumber('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-64 sm:h-80 md:h-96 flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.truck})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-sky-900/70 to-cyan-700/60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">Track Consignment</h1>
          <p className="text-sm sm:text-base md:text-lg font-medium opacity-90">
            Services across 24 States & 5 Union Territories
          </p>
        </motion.div>
      </section>

      {/* Form Section */}
      <section className="py-10 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-800 text-center mb-8"
          >
            Consignment Tracking
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-sky-100 p-6 sm:p-10"
          >
            <div className="flex justify-center mb-6">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="text-sky-600 text-5xl sm:text-6xl"
              >
                <FaMapMarkedAlt />
              </motion.div>
            </div>

            <p className="text-center text-gray-600 mb-8 text-base sm:text-lg">
              Enter your Consignment/LR Number to track your shipment in real-time.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="consignmentNumber" className="block text-sky-800 font-semibold mb-2 text-center sm:text-left">
                  Consignment/LR Number *
                </label>
                <input
                  type="text"
                  id="consignmentNumber"
                  value={consignmentNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. 2545731"
                  className="w-full px-5 py-4 text-base border border-sky-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-yellow-300 transition"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-10 py-4 bg-sky-700 hover:bg-sky-800 disabled:bg-sky-500 text-white font-bold text-lg rounded-xl shadow-lg transition transform hover:scale-105 disabled:scale-100"
                >
                  {loading ? 'Tracking...' : 'Track Now'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Loading */}
      {loading && (
        <div className="py-12 text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-yellow-500 mb-4"></div>
          <p className="text-xl text-sky-700 font-medium">Fetching tracking details...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="max-w-2xl mx-auto px-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-300 text-red-700 p-6 rounded-xl text-center"
          >
            <p className="font-semibold text-lg">{error}</p>
          </motion.div>
        </div>
      )}

      {/* Tracking Results */}
      {trackingData && (
        <section className="py-10 sm:py-16 px-4 bg-sky-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-sky-800 text-center mb-10">
              Tracking Details - GR No: <span className="text-yellow-600">{trackingData.grno}</span>
            </h2>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {[
                { label: 'From', value: trackingData.origin },
                { label: 'To', value: trackingData.destname },
                { label: 'Packages', value: trackingData.pckgs },
                { label: 'Current Status', value: trackingData.activities[trackingData.activities.length - 1]?.activity || 'Booked', highlight: true },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-xl shadow-md p-5 text-center"
                >
                  <p className="text-gray-600 text-sm sm:text-base">{item.label}</p>
                  <p className={`text-lg sm:text-xl font-bold mt-2 ${item.highlight ? 'text-green-600' : 'text-sky-700'}`}>
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-10 text-center">
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-semibold">Goods:</span> {trackingData.goods} <br className="sm:hidden" />
                <span className="font-semibold mx-2">•</span> <span className="font-semibold">Weight:</span> {trackingData.cweight} kg <br className="sm:hidden" />
                <span className="font-semibold mx-2">•</span> <span className="font-semibold">Booking Date:</span> {trackingData.grdt} <br className="sm:hidden" />
                <span className="font-semibold mx-2">•</span> <span className="font-semibold">Type:</span> {trackingData.grtype}
              </p>
            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-sky-800 text-center mb-8">Journey Timeline</h3>
              <div className="space-y-8">
                {trackingData.activities.map((act, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 text-white font-bold rounded-full flex items-center justify-center text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1 bg-sky-50 border border-sky-200 rounded-xl p-5 w-full text-center sm:text-left">
                      <p className="font-bold text-sky-900 text-lg">{act.activity}</p>
                      <p className="text-gray-700 mt-2">{act.details}</p>
                      <p className="text-sm text-gray-500 mt-3 bg-white inline-block px-4 py-1 rounded-full">
                        {act.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default TrackConsignment;