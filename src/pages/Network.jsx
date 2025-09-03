import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Network = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const offices = {
    Delhi: [
      { location: "Khanna Market", name: "Mukesh", address: "Shop No. 31,32 Khanna Market Delhi", contacts: "01143502198 / 9211726773 / 9891146748" },
      { location: "Sadar Bazar", name: "Shankar Sharma", address: "Shop No.93, New Qutab Road Sadar Bazar Teliwara Delhi", contacts: "9313655806 / 8368201954 / 8368940461" },
      { location: "Khera Kalan", name: "DN Jha", address: "KH.No.47/22, Radhe Radhe Gali Kava Transport Khera Kalan", contacts: "8368940586 / 9650195301" },
      { location: "Bawana", name: "Deepak Sharma", address: "154/3, Firni Road, Opp. Indian Oil Petrol Pump, Bawana Industrial Area", contacts: "9212730655 / 9911443996" },
      { location: "Daya Basti", name: "Sandeep", address: "19/310 Old Rohtak Road, Daya Basti, Near Furkania Masjid Delhi", contacts: "9999674377 / 8447834204" },
      { location: "Gandhi Nagar", name: "Ashok", address: "Shop No.9/97, Shyam Block, Kailash Nagar Gandhi Nagar Delhi", contacts: "9717215225 / 8860257149" },
      { location: "Gandhi Nagar", name: "Ajay Anand", address: "Main Road Gandhi Nagar Near Punjab National Bank", contacts: "7834888503 / 9999884182" },
      { location: "Jamna Bazar", name: "Rahul Malhotra", address: "1860/1856, Jaat Fauji Dharamshala, Jamna Bazar Near Hanuman Mandir", contacts: "9310078977 / 9312650259" },
      { location: "Jhilmil", name: "Rajesh Chandak", address: "A-10/8, Jhilmil Industrial Area, A Block Delhi", contacts: "9310314729 / 7048956133 / 9312057899" },
      { location: "Kamla Market", name: "Vijay Shankar", address: "Shop No.196, Kamla Market Delhi", contacts: "01145002620 / 9354210948" },
      { location: "Kamla Market", name: "Ravinder Pandey", address: "Shop No.34, Punjabi Market Opp.227 Kamla Market Delhi", contacts: "9350983820 / 8929399702" },
      { location: "Karol Bagh", name: "S.K. Oberi", address: "953-956/4, A-J, Chamber Jain Mandir Marg Naiwala, Karol Bagh Delhi", contacts: "01141563899 / 9868781291" },
      { location: "Karol Bagh", name: "Nitish", address: "16/76, Gali No. 3, Faiz Road, Near Lal Mashid, Karol Bagh Delhi", contacts: "9716262379 / 7011725125 / 9310157739" },
      { location: "Kashmere Gate", name: "Pawan", address: "Shop No.1/782, Nicalson Road, Near Axis Bank, Kashmere Gate, Delhi", contacts: "01145105994 / 9313667456" },
      { location: "Kashmere Gate", name: "Ram Gopal", address: "Shop No.768, Chabbi Ganj Kashmere Gate, Delhi-110006", contacts: "9871340370 / 9654790370" },
      { location: "Mangolpuri", name: "Santosh Jha / Sachin", address: "C - 3 Oil Market, Industrial Area Phase-1 Mangolpuri Delhi", contacts: "9350848326 / 7982429176 / 9540366353" },
      { location: "Narela", name: "Raju Sharma", address: "Plot No.66-58, Sec.B-4, Pocket -11, New Punjabi Colony, Near Lal Chowk, Narela", contacts: "9212066361 / 9310066361" },
      { location: "New Lajpat Rai Market", name: "Ravi Anand", address: "Shop No. 243, New Lajpat Rai Market Delhi", contacts: "9910231765 / 9015476509" },
      { location: "Sanjay Gandhi TPT", name: "Parveen", address: "C-29/1, Near Delhi Dharam Kata, Bass Balli Market, Namank Godown", contacts: "9643619245 / 8744912011" },
      { location: "Shahdra", name: "Krishna Sirohi", address: "10/115, Patel Gali, Main 60Ft. Road Vishwas Nagar Shahdra Delhi", contacts: "9811353810 / 8076856250 / 9999178551" },
      { location: "Wazirpur", name: "S.K. Yadav", address: "Shop No.B-28, Industrial Area Wazirpur Delhi", contacts: "01146124777 / 9310036777" },
      { location: "Zakhira", name: "Govind", address: "Shop No. 69-70, Chara Mandi Zakhira Delhi", contacts: "9654499953 / 8595340137 / 8287280710" },
    ],
    UttarPradesh: [
      { location: "Agra", name: "Yogesh Sharma", address: "Naveen road Line, 21/35, Freeganj Road, Agra, Near VTC Transport Gorakhpur Godown", contacts: "9319967212 / 9319567678" },
      { location: "Aligarh", name: "Jitender Kumar", address: "Sarai Sultani, Near Woolen Market Behind Axis Bank ATM, Aligarh", contacts: "9837941122 / 8923569929" },
      { location: "Aligarh", name: "Mukesh Singh", address: "Tyagi Hospital Wali Gali, Opp. Vishwa Bharti School, Sasni Gate, Aligarh", contacts: "8218391549 / 8534930520" },
      { location: "Ghaziabad", name: "B.K Joshi", address: "K.R.S. Good Transport Co. Devi Mandir Road, Opp. Delhi Gate, Ghaziabad", contacts: "9212450050 / 7065430172" },
      { location: "Meerut", name: "Kamal Dingra", address: "Shop No. 234, Transport Nagar Meerut", contacts: "8791138138 / 9319233334" },
      { location: "Muradnagar", name: "Pawan", address: "Purani Goods Mandi Muradnagar Near PNB Bank", contacts: "8433202529 / 9012544299" },
      { location: "Noida", name: "Parveen Gupta", address: "Sector -5, Harola, Opp. Fire Station Noida", contacts: "9910093971" },
      { location: "Saharanpur", name: "Pradeep", address: "C-345, Transport Nagar Dheradhun Road, Saharanpur", contacts: "8279491175 / 9758585333" },
      { location: "Tronica City", name: "J.N.Jha", address: "Shop No.7, Panchlok, Pradhan Market Tronica City, Ghaziabad", contacts: "9718796134 / 9643667885" },
      { location: "UP. Border-Godown-1 (Bihar)", name: "Vikas Kumar", address: "Metro Pillar No 109 Gali No 2, Opposite Chaena Body Work, UP.Border", contacts: "8368940779 / 7503368732" },
      { location: "UP. Border-Godown-2 (UP, Jharkhand)", name: "Ajay Tiwari", address: "Near By Geeta Press Bharat Petrol Pump Metro Pillar No.158, Chikamberpur, U.P. Border", contacts: "8368940466 / 7701921876" },
      { location: "UP. Border-Godown-3 (Kosi + W.B + Assam)", name: "Vikas Kumar", address: "Bajwa Compound, UP.Border", contacts: "8368940559 / 7503368732" },
    ],
    Haryana: [
      { location: "Bhiwani", name: "S.K Yadav", address: "Bawre Gate Srkulr Road Near Parnami Mainder Bhiwani", contacts: "9310036777 / 9821051400" },
      { location: "Faridabad", name: "Roshan Kumar", address: "17/6, Mathura Road Sarpanch Colony, Near Shree Ganesh Service Station, Opp. Metro Piller no. 755 Neelam Chowk", contacts: "8376005778 / 9871634193" },
      { location: "Jaghadari", name: "Dinesh Sharma", address: "H.O. Gauri Shankar Link Road Behind Gupta Metal, Jagadhari", contacts: "9812215017 / 7082821728" },
      { location: "Panipat", name: "Narendra Malik", address: "Plot No.214, Sector-25, Transport Nagar, Panipat", contacts: "9813180050 / 8950103535" },
    ],
    Punjab: [
      { location: "Amritsar", name: "Jagdish", address: "Ghee Mandi Chowk, Opp. Bank Balmiki Mandir Amritsar", contacts: "9317706397 / 7009566675" },
      { location: "Chandigarh", name: "Ganesh Attreya", address: "4, Transport Area, Sector-26, Chandigarh", contacts: "8847462925 / 9876863807" },
      { location: "Jalandhar", name: "Vicky", address: "Plot no. 5, Industrial Area, Jalandhar", contacts: "9671689262" },
      { location: "Ludhiana", name: "Harcharn Singh", address: "Golden Roadways & Logistics Pvt. Ltd. Plot No. 2424 -D, Libra Compound, Opp. J.B.Kanta, Transport Nagar Ludhiana", contacts: "8595583535 / 0161-4663477" },
      { location: "Ludhiana City", name: "Bittu", address: "Shop No.-1, Near Nanaksar Gurudawara Khawaja Kothi Chowk, Ludhiana", contacts: "9356086111 / 6284144800" },
      { location: "Ludhiana Gill Road", name: "Abhishek", address: "592/2, Over Lock Road, Opp. B.R.M Tower Ludhiana", contacts: "9814916821 / 01614626821" },
      { location: "Malerkotla", name: "Mohit Kumar", address: "Pawan Transport Industrial Area, Steel-02, Malerkotla", contacts: "9041101520 / 9316537000" },
      { location: "Phagwara", name: "Sunil", address: "Tarsam Transport Company, Hosiyarpur Road, Balmiki Chowk, Phagwara", contacts: "9815000327 / 9988826128" },
    ],
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1, ease: 'easeOut' } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const panelVariants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-sky-900 to-cyan-700 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Network Map</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Click a location to view office details across Delhi, Uttar Pradesh, Haryana, and Punjab.
          </p>
        </motion.div>
      </section>

      {/* Map Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-sky-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.keys(offices).map((region) => (
            <div key={region} className="mb-8">
              <h2 className="text-2xl font-bold text-sky-800 mb-4 text-center">{region}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {offices[region].map((office, index) => (
                  <motion.button
                    key={index}
                    variants={childVariants}
                    onClick={() => setSelectedLocation(office)}
                    className="bg-sky-200 hover:bg-sky-300 text-sky-800 font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 cursor-pointer"
                  >
                    {office.location}
                  </motion.button>
                ))}
              </div>
            </div>
          ))}

          {/* Details Panel */}
          <AnimatePresence>
            {selectedLocation && (
              <motion.div
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-y-0 right-0 w-96 bg-white shadow-2xl p-6 z-50 overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedLocation(null)}
                  className="text-sky-600 hover:text-sky-800 font-bold mb-4 cursor-pointer"
                >
                  &larr; Back to Map
                </button>
                <motion.h3
                  variants={childVariants}
                  className="text-2xl font-semibold text-sky-800 mb-2"
                >
                  {selectedLocation.location} - {selectedLocation.name}
                </motion.h3>
                <motion.p
                  variants={childVariants}
                  className="text-gray-600 mb-4"
                >
                  {selectedLocation.address}
                </motion.p>
                <motion.p
                  variants={childVariants}
                  className="text-gray-700"
                >
                  <span className="font-medium">Contacts:</span> {selectedLocation.contacts}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
};

export default Network;