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
    UttarPradeshDelivery: [
      { location: "Azamgarh", name: "Amit", address: "Qyampur Kotwa Near Kartikya Dharam Kata Azamgarh", contacts: "8573028531 / 9670002153" },
      { location: "Ballia", name: "Amarinder", address: "Near Sanichari Mandir Bichala Ghat Police Chowki, Bande Par, Ballia", contacts: "6393398663 / 7355495329" },
      { location: "Basti", name: "Shubam Singh", address: "Shubam TPT.Company Opp. Railway Mall Godown Nirmli Kund Basti", contacts: "9598313110 / 9838032391" },
      { location: "Mohammdabad Gohna", name: "Pandit", address: "Near Calendar Tiraha Opp. BSNL Office Ps Mohammadabad Gohna", contacts: "9415261075 / 7985528915" },
      { location: "Mubarakpur", name: "Pandit", address: "Near MP School Jaumpur Road Ali Nagar Chauraha Mubarakpur", contacts: "6387445904 / 9453414184" },
      { location: "Nautanwa", name: "Pandit", address: "Near Ram Manohar Lohia Degree Collage, Kuneserwa, Nautanwa", contacts: "9120948700" },
      { location: "Chairayakot", name: "Pandit", address: "Near Chandni Chowk Mohammadabad Gohna Road Chairayakot", contacts: "9453414184 / 9415261075" },
      { location: "Belthara Road", name: "Ramu Gupta", address: "Bus Stand Near Belthara Road", contacts: "8738967375 / 9369126097" },
      { location: "Faizabad", name: "Amit Pandey", address: "Amit Roadline Transport Nagar Faizabad", contacts: "9453999958" },
      { location: "Gopiganj", name: "Himanshu Mishra", address: "Gopiganj Service Road", contacts: "8318702406" },
      { location: "Deoria", name: "Salish Morhi", address: "Morhi Transport Service, CC Road Pashuram Chowk", contacts: "9452628520 / 9953639285" },
      { location: "Salempur", name: "Inderjeet Morhi", address: "Morhi Transport Bapu Inter Collage Salempur", contacts: "9984018502 / 7071445790" },
      { location: "Mungra Badshahpur", name: "Inderjeet Morhi", address: "Jai Shree Bageshwar Bala Ji, Station Road, Ram chander Karina Store Opp.", contacts: "7523041232 / 6307060745" },
      { location: "Gorakhpur", name: "Manish Singh", address: "Plot No.110, Near Golden Gas Service TPT Nagar, Gorakhpur", contacts: "9936409920 / 9336402820" },
      { location: "Ghazipur", name: "Manish Pathak", address: "Katholi Jangirpur Road, Ghazipur", contacts: "9653091197" },
      { location: "Jaunpur", name: "Vimlesh Singh", address: "Naiganj Near Dubey Dabha, Jaunpur", contacts: "9140583858" },
      { location: "Kanpur", name: "Manoj Singh", address: "133/369 A Dhakna Purwa Transport Nagar", contacts: "9935039899" },
      { location: "Lucknow", name: "Sanjay Sharma", address: "Aishbagh Malvea Nagar Chauraha Gupta Market, Godown.No.4 Lucknow", contacts: "9918536880 / 8090408899" },
      { location: "Mau", name: "PN Singh", address: "UP Transport organization, Dhiti Mau", contacts: "9839662682 / 9648110080" },
      { location: "Machhalishar", name: "PN Singh", address: "UP Transport organization, Dhiti Mau", contacts: "9839662682 / 9648110080" },
      { location: "Prayagraj", name: "Ashish Yadav", address: "Golden Roadways and Logistics Pvt Ltd, 161B, Transport Nagar Prayagraj", contacts: "9956260183 / 6307649750" },
      { location: "Rasara", name: "Anjani Gupta", address: "Ghoda Chauraha, Dhundehrawa, Rasara", contacts: "8738967375 / 9369126097" },
      { location: "Sultanpur", name: "Ashish Singh", address: "Singh Transport, Shop no. - 4, Transport nagar, Lucknow Road, Sultanpur", contacts: "8957009006 / 7007202258" },
      { location: "Varanasi", name: "Rajinder Tiwari", address: "Ray Compound Lahartara Transport Nagar, Varanasi", contacts: "8318006032 / 9451447199" },
      { location: "Yusufpur", name: "Golu Yadav", address: "Salempur Mod Shiv Mandir, Gazipur- 233227", contacts: "8318498756 / 8176834552" },
    ],
    BiharDelivery: [
      { location: "Arrah", name: "Prashant", address: "Near Bus Stand, Bypass Road, Arrah", contacts: "7004714121 / 9955902500" },
      { location: "Araria Court", name: "Amarnath Jha", address: "Bus Stand Road Opp. LIC Office Near Sanjay Mishra Petrol Pump, Araria", contacts: "8002008495" },
      { location: "Aurangabad", name: "Shivpujan", address: "Singha College Mod Old G.T Road Aurangabad, Parwati Sadan, Bihar", contacts: "8210277984 / 7870295974" },
      { location: "Bhagalpur", name: "Vivek", address: "Near Muslim High School Tatarpur Opp. Railway Fatak", contacts: "9110132717" },
      { location: "Brahmapur", name: "Naryan Dutt", address: "Chandra Dev Complex, Near Ojha Mobile Nine, Brahmpur Road, Chaurasta", contacts: "8521336869" },
      { location: "Begusarai", name: "Ramanand Mahto", address: "Ratanpur, Teliya Pokhra Road, G.D Maleda ke Piche", contacts: "8789280916 / 8877690526" },
      { location: "Bhabhua", name: "Avinash Pandey", address: "Near Maruti Suzuki Agency Bhabua Road, Mohaniya-821109", contacts: "7564940582 / 9905909226" },
      { location: "Biharsharif", name: "Hasib Khan", address: "City Palace Hotel, Opp. Near Thana Lihari, Biharsarif-803101", contacts: "8235844242 / 9431061573" },
      { location: "Bihiya", name: "Nagendra Ojha", address: "Lotus School Sahib Tola Dock Bangla Road, Raja Bazar Bihiya", contacts: "7677618842 / 7070813494" },
      { location: "Buxer", name: "Ravi Singh", address: "Main Road, Near by Power House, Charitra Van, Buxer", contacts: "9431083952 / 7903584873" },
      { location: "Chhapra", name: "Abhishek Dubey", address: "Garkha Dhala Road, Near DAV School Newaji Tola Road, Chhapra", contacts: "7004978897 / 9471289402" },
      { location: "Darbhanga", name: "A.K. Ojha", address: "Shivdhara Chowk, Gehumi Road Near Highway Over Bridge, Darbhanga", contacts: "9430063337 / 7324972257" },
      { location: "Daudnagar", name: "Sarfu Din Ansari", address: "Bhkhrwan Mod, Near Agarwal Arra Machine, Daudnagar Bihar-824113", contacts: "9934918807 / 9955846775" },
      { location: "Dheri On Son", name: "Naeem Bhai", address: "Shahbad Kanta, Jakki Bigha Dehri On Son", contacts: "7004423430 / 7004178486" },
      { location: "Dumroan", name: "Vinod Singh", address: "Sumitra Collage Road, Near by Tiwari Computer", contacts: "7488544044 / 6202670918" },
      { location: "Forbisganj", name: "Mintu Thakur", address: "Godhiyare chok, Forbesganj", contacts: "9199490887 / 9262754705" },
      { location: "Gaya", name: "Tannu Bhai", address: "BN Jha Road Murarpur, Near Masjid, Distt. Gaya", contacts: "9122333000 / 9153587719" },
      { location: "Gopal Ganj", name: "Dharmender", address: "Yadavpur Chowk, Near Saraswati Cinema Hall, Gopal Ganj", contacts: "9431407567" },
      { location: "Hajipur", name: "Manoj Singh", address: "Anjanpir Chowk Near Madina Masjid Sachipati Hajipur By Pass Road", contacts: "6200632326" },
      { location: "Jay Nagar", name: "Abhay Kumar", address: "Maxi Stand, Nearest Honda Agency, Bus Stand Road, Jai Nagar-847226", contacts: "9097638196" },
      { location: "Kishanganj", name: "Raj Kumar", address: "MRF Tyre showroom Behind Caltex Chowk NH-31, Kishan Ganj, KNE", contacts: "8972148637 / 7604021111" },
      { location: "Katihar", name: "K.P Singh", address: "D.S Collage Road, Near Radiant Hospital", contacts: "7257072818 / 8825112518" },
      { location: "Kochas", name: "Hemant", address: "Near Indian Oil Petrol Pump & Akahand Medical Hospital, Denara Road", contacts: "7050645934 / 9461533567" },
      { location: "Madhubani", name: "K.K.Ojha", address: "Meena Bazar Madhubani", contacts: "9931803001 / 8210470557" },
      { location: "Mohaniya", name: "Avinash Pandey", address: "Near Maruti Suzuki Agency Bhabua Road, Mohaniya-821109", contacts: "7564940582 / 9905909226" },
      { location: "Madhepura", name: "Ranjeet Kumar Singh", address: "State Bank Road Near Hindustan General Store", contacts: "7903486400" },
      { location: "Muzaffarpur", name: "Nav Ratan Lal Mishra", address: "Akhara Ghat Road, Old F.C.I. Near Ratna Banquet Hall, Muzaffarpur", contacts: "9431474737 / 7367959546" },
      { location: "Nawada", name: "Abdul Quadir", address: "Ranchi Patna Road, Ambedkar Nagar Near Sadhavna Hotel", contacts: "8804532569 / 9534567331" },
      { location: "Patna", name: "Jamil Akhter", address: "Metro Pillar no. - 172, Gaya Road Bus Stand Near Umro Banquet Hall Patna", contacts: "7003158671 / 7070980786" },
      { location: "Gulabbagh", name: "Dulal Das", address: "Gulabbagh, Zero Mile (PF Campas)", contacts: "9973321390" },
      { location: "Purnia", name: "Dulal Das", address: "Gulabbagh, Zero Mile (PF Campas)", contacts: "9973321390" },
      { location: "Samastipur", name: "Dipu Sinha", address: "Pithiya Gachhi Samastipur", contacts: "7631829706 / 6204028102" },
      { location: "Sasaram", name: "Vijay Singh", address: "Panchshil Bhawan, Near Mahendra Tractor Agency, Bolia Road, Sasaram", contacts: "7491948659 / 8825187993" },
      { location: "Sherghati", name: "Adil Hussain", address: "Kamla Market, Near Over Bridge, Sherghati", contacts: "9534567331 / 8864051672" },
      { location: "Sitamarhi", name: "Avishek Kumar", address: "Riga Road, Infront Of Sri Dwarika Vivah Bhawan, Sitamarhi", contacts: "9540860425 / 9267992951" },
      { location: "Siwan", name: "Biresh Tiwari", address: "Behind Tuntun Babu Petrol Pump Nirgun Puram, Adarsh Nagar, Siwan", contacts: "9955046792" },
      { location: "Saharsa", name: "Ishtiaque Ahmed", address: "Station Road, Chandni chok, Sangham Bihar Hotel", contacts: "9430468528 / 9939092236" },
      { location: "Supaul", name: "Ishtiaque Ahmed", address: "Station Road, Chandni chok, Sangham Bihar Hotel", contacts: "9430468528 / 9939092236" },
      { location: "Jogbani", name: "Shashi Kant Mishra", address: "Near Railway Crossing, Netaji Chowk, Dhruv Babu Compund Jogbani", contacts: "6206595246" },
      { location: "Vikramganj", name: "Abilash Kumar", address: "Sararam Road Water Tanki Near Mahavir Mander Vikramganj", contacts: "8271079043 / 7667687436" },
      { location: "Bettiah", name: "Alok Kumar", address: "Rajdevri Near Najar Bagh Park", contacts: "7759091055" },
      { location: "Bihariganj", name: "Akhilesh Kumar", address: "Vishkarma Chowk Bihariganj", contacts: "9852660870" },
      { location: "Murliganj", name: "Akhilesh Kumar", address: "Indian Oil Petrol Pump Murliganj Pin Code-852122", contacts: "9852660870" },
    ],
    JharkhandDelivery: [
      { location: "Barhi", name: "Rahul", address: "Gaya Road Barhi, Jharkhand", contacts: "8285873749" },
      { location: "Chas", name: "Rana Singh", address: "Purulia Road, Near Jagdamba Mandir Tara Nagar, Chas, Jharkhand", contacts: "9334210559 / 7667152562 / 7903255863" },
      { location: "Lohardga", name: "Sunil", address: "Kishno More Santi Nagar, Lohardga", contacts: "8789582299 / 9334770575" },
      { location: "Daltenganj", name: "Niklesh", address: "Mushlim Mohalla River Side Ward No.30, Daltenganj", contacts: "8709083006 / 7488090923" },
      { location: "Deoghar", name: "Ganesh Gupta", address: "KKN Stadium Castier Town B Deoghar, Jharkhand-818112", contacts: "9122594401 / 9431306176" },
      { location: "Dhanbad", name: "Vikash Pandey", address: "Godhar Power House, Opp. Indian Oil Pump, Dhanbad", contacts: "8409010935 / 9065833558" },
      { location: "Garhwa", name: "Pardeep", address: "Rohila Road Garhwa, Sonpurwa", contacts: "7371074701" },
      { location: "Giridih", name: "Kaushal", address: "I.C.R Road Old Shivalaya Mandir Giridih PinCode-815301 Jharkhand", contacts: "9472772711 / 7903610711" },
      { location: "Gumla", name: "Sunil", address: "Lohar Dagha Road, Gumla Thana Chowk Vina Cinema Hall, Gumla", contacts: "8789582299 / 9608531115" },
      { location: "Hazaribagh", name: "Shyam Bihari Singh", address: "Malviya Marg Near Shksham Hotel Hazaribagh", contacts: "7258966345" },
      { location: "Jamshedpur", name: "Prince", address: "Near Hero Service Centre, Kasidih DSM School Compound, Jamshedpur", contacts: "7004316132 / 7870137531" },
      { location: "Jhariya", name: "Akash Kumar", address: "Bakri Hath K.C Girls School", contacts: "9334889935" },
      { location: "Jhumritaliya", name: "D.N.Jha", address: "Opposite Adityavision Ranchi Patna Road, Jhumritelaiya Kodrma", contacts: "7004248635" },
      { location: "Madhupur", name: "Danish", address: "Kasum Bhawan Panah Kola Road, Madhupur-815353", contacts: "8825351408" },
      { location: "Ramgarh", name: "Randhir Singh", address: "New Bus Stand Ramgarh Cantt", contacts: "9572170887" },
      { location: "Ranchi", name: "Anil Tiwari", address: "Gaddi Khana Chowk Near Lal Batti Sarkari School Ranchi", contacts: "9199988811 / 8804532046" },
      { location: "Simdega", name: "Ranjeet Singh", address: "Golden Roadways & Logistics Pvt. Ltd. Idgah Muhalla Infront Of Makka Maszid Simdega (Jharkhand)", contacts: "7463036606 / 7858888800" },
    ],
    WestBengalDelivery: [
      { location: "Asansol", name: "Zahid Malik", address: "49 G.T Road, Mallick Mansion Near Gujrati School the Horizone Block-B, By pass road, Lalbandh, Lalbazar, Bankura 722101", contacts: "08768000055 / 9851990270 / 7602148274" },
      { location: "Bankura", name: "Arghya Tiwari", address: "49 G.T Road, Mallick Mansion Near Gujrati School the Horizone Block-B, By pass road, Lalbandh, Lalbazar, Bankura 722101", contacts: "08768000055 / 9851990270 / 7602148274" },
      { location: "Burdwan", name: "Rabindra Shaw", address: "Telipukur Mirchoba Ram Mudi Colony Purba Duragapur Burdwan 713103", contacts: "9333766059 / 9800025900 / 7808135414 / 9851990270" },
      { location: "Alipurduar", name: "Shyamal Dutta", address: "Marwari Patti, Maya Chokis Road, Alipurduar", contacts: "8609786861 / 7384441375" },
      { location: "Coochbehar", name: "Sanjay Yadav", address: "S.N. Road, Durgabari, Near Ekta Marble House", contacts: "8373070474 / 8016972072" },
      { location: "Malda", name: "Inderjeet Gupta", address: "Post -2 No. Govt. Colony Sub Way Gate", contacts: "9749618665" },
      { location: "Dalkola", name: "Paritosh", address: "Malikpur, Uttam Dinajpur, West Bengal, Pin -733201", contacts: "8250860792 / 9563650663" },
      { location: "Dhupguri", name: "Shankar Banik", address: "Falakata Road, Near Tilakchand Maheshwari Gali, Dhupguri", contacts: "8972400128" },
      { location: "Falakata", name: "Subrata Sen", address: "Thana Road, Falakata", contacts: "9832036844 / 7001734957" },
      { location: "Islampur", name: "Chandan", address: "Puratan Pally, Mandal Gola, Near Coparati Cinema Hall, Islampur", contacts: "8617035502 / 9851050152 / 9800368222" },
      { location: "Jalpaiguri", name: "Shambhu Dayal Agarwal", address: "Rabindra Bhawan Road, Jalpaiguri", contacts: "9932921079" },
      { location: "Maynaguri", name: "Samrat Saha", address: "Subhash Nagar, Mayanaguri", contacts: "9733154414" },
      { location: "Tufanganj", name: "Tapan Paul", address: "Ready Made Patti Tufanganj", contacts: "9647810383 / 9800253791" },
      { location: "Silliguri", name: "Rajesh / Raghav", address: "Suman Tea Warehouse, Sevoke Road", contacts: "9476384243 / 9635799592" },
      { location: "Raiganj", name: "Sushen Das", address: "Godown FCI More Near Bajaj Showroom", contacts: "8101903160" },
    ],
    AssamDelivery: [
      { location: "Guwahati - Beltola", name: "Bhola", address: "N.P.S. School Bye Lane, Opp. G.G. Parking, Lalungoan, Beltola-37", contacts: "9718709257 / 9678618334" },
      { location: "Silapathar", name: "Bablu Khan", address: "Gandhi Nagar Near R K Hardware Silapathar", contacts: "9864465083" },
      { location: "North Lakhimpur", name: "Bablu Khan", address: "Gandhi Nagar Near R K Hardware Silapathar", contacts: "9864465083" },
      { location: "Golaghat", name: "Gurpal/Satish", address: "Law Collage Road Begena Khowa Golaghat", contacts: "6001426445" },
      { location: "Jorhat", name: "Gupta Ji", address: "Faasi Ali Jorhat", contacts: "8011509025" },
      { location: "Tinsukiya", name: "Shayam Singh Rathore", address: "Shree Balaji Goods Carrier Tokri gola Makum Road Tinsukia", contacts: "9435531378 / 9395656063" },
      { location: "Shiv Sagar", name: "Balwan Singh", address: "Dhali Near Darbar Field Tin Ali Ward No.1, Shiv Sagar", contacts: "7002505252 / 9085499228" },
      { location: "Dibrugarh", name: "Raju Ji", address: "Assam Udyog Compound Near Police Regin, Dibrugarh", contacts: "9435033113" },
      { location: "Bilasipara", name: "Sukumar Dutta", address: "Ward No.3 Near Shiva Lodge Bilasipara", contacts: "9435848358" },
      { location: "Bongaigoan", name: "Santosh Kumar", address: "Pagla Sathan Krishna Mill Compound Bongaigaon", contacts: "7002321826 / 9435021816" },
      { location: "Barpeta Road", name: "Sujit Saha", address: "Simlaguri Barpeta Road", contacts: "7002310595" },
      { location: "Nalbari", name: "Monu Shaikh", address: "Nailbari Bhagatpara Road Ward No.2", contacts: "8638710690" },
      { location: "Dhubri", name: "B.N.Jha", address: "Lal Mill Compound Ward No. 3 Baluchar Dhubri-783301", contacts: "8638662023" },
      { location: "Goalpara", name: "Pandit", address: "Near Boro Bazar Thakur Bari Goalpara", contacts: "7002089858 / 6000388190" },
      { location: "Krishna", name: "Pandit", address: "Near Boro Bazar Thakur Bari Goalpara", contacts: "7002089858 / 6000388190" },
      { location: "Kokrajhar", name: "Satya Deo Mandal", address: "Bazar Road Kokrajhar", contacts: "9435643569" },
      { location: "Karimganj", name: "Biplab Dey", address: "Near Dass Public School Karimganj Market", contacts: "7399634771" },
      { location: "Silchar", name: "Tapash", address: "Bilpar Road Silchar", contacts: "9954099619" },
    ],
    TripuraDelivery: [
      { location: "Dharam Nagar", name: "Kaushik Roy", address: "Market Road Dharm Nagar", contacts: "9863707274" },
      { location: "Agartala", name: "Arun Kumar Ghosh", address: "Sree Krishna Roadways, Ramthakur Sanga Opp. Fire Station, M.G. Bazar, West Tripura, Agartala", contacts: "9436167508 / 9366376012" },
    ],
  };

  const bookingRegions = ["Delhi", "UttarPradesh", "Haryana", "Punjab"];
  const deliveryRegions = ["UttarPradeshDelivery", "BiharDelivery", "JharkhandDelivery", "WestBengalDelivery", "AssamDelivery", "TripuraDelivery"];

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
            Click a location to view office details across our booking offices in Delhi, Uttar Pradesh, Haryana, and Punjab, and delivery offices in Uttar Pradesh, Bihar, Jharkhand, West Bengal, Assam, and Tripura.
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
          {/* Booking Offices */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-sky-900 mb-6 text-center">Booking Offices</h2>
            {bookingRegions.map((region) => (
              <div key={region} className="mb-8">
                <h3 className="text-2xl font-semibold text-sky-800 mb-4 text-center">
                  {region === "UttarPradesh" ? "Uttar Pradesh" : region}
                </h3>
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
          </div>

          {/* Delivery Offices */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-sky-900 mb-6 text-center">Delivery Offices</h2>
            {deliveryRegions.map((region) => (
              <div key={region} className="mb-8">
                <h3 className="text-2xl font-semibold text-sky-800 mb-4 text-center">
                  {region === "UttarPradeshDelivery" ? "Uttar Pradesh" :
                   region === "BiharDelivery" ? "Bihar" :
                   region === "JharkhandDelivery" ? "Jharkhand" :
                   region === "WestBengalDelivery" ? "West Bengal" :
                   region === "AssamDelivery" ? "Assam" :
                   region === "TripuraDelivery" ? "Tripura" : region}
                </h3>
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
          </div>

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