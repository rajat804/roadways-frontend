import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Network = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const offices = {
    Delhi: [
      {
        location: "Khanna Market",
        name: "Mukesh",
        address: "Shop No. 31,32 Khanna Market Delhi",
        contacts: "01143502198 / 9211726773 / 9891146748",
      },
      {
        location: "Sadar Bazar",
        name: "Shankar Sharma",
        address: "Shop No.93, New Qutab Road Sadar Bazar Teliwara Delhi",
        contacts: "9313655806 / 8368201954 / 8368940461",
      },
      {
        location: "Khera Kalan",
        name: "DN Jha",
        address: "KH.No.47/22, Radhe Radhe Gali Kava Transport Khera Kalan",
        contacts: "8368940586 / 9650195301",
      },
      {
        location: "Bawana",
        name: "Deepak Sharma",
        address:
          "154/3, Firni Road, Opp. Indian Oil Petrol Pump, Bawana Industrial Area",
        contacts: "9212730655 / 9911443996",
      },
      {
        location: "Daya Basti",
        name: "Sandeep",
        address:
          "19/310 Old Rohtak Road, Daya Basti, Near Furkania Masjid Delhi",
        contacts: "9999674377 / 8447834204",
      },
      {
        location: "Gandhi Nagar",
        name: "Ashok / Himanshu Jha",
        address: "Shop No.9/97, Shyam Block, Kailash Nagar Gandhi Nagar Delhi",
        contacts: "9717215225 / 8860257149",
      },
      {
        location: "Gandhi Nagar",
        name: "Ajay Anand",
        address: "Main Road Gandhi Nagar Near Punjab National Bank",
        contacts: "7834888503 / 9999884182",
      },
      {
        location: "Jamna Bazar",
        name: "Rahul Malhotra",
        address:
          "1860/1856, Jaat Fauji Dharamshala, Jamna Bazar Near Hanuman Mandir",
        contacts: "9310078977 / 9312650259",
      },
      {
        location: "Jhilmil",
        name: "Rajesh Chandak",
        address: "A-10/8, Jhilmil Industrial Area, A Block Delhi",
        contacts: "9310314729 / 7048956133 / 9312057899",
      },
      {
        location: "Kamla Market",
        name: "Vijay Shankar",
        address: "Shop No.196, Kamla Market Delhi",
        contacts: "01145002620 / 9354210948",
      },
      {
        location: "Kamla Market",
        name: "Ravinder Pandey",
        address: "Shop No.34, Punjabi Market Opp.227 Kamla Market Delhi",
        contacts: "9350983820 / 8929399702",
      },
      {
        location: "Karol Bagh",
        name: "S.K. Oberi",
        address:
          "953-956/4, A-J, Chamber Jain Mandir Marg Naiwala, Karol Bagh Delhi",
        contacts: "01141563899 / 9868781291",
      },
      {
        location: "Karol Bagh",
        name: "Nitish",
        address:
          "16/76, Gali No. 3, Faiz Road, Near Lal Mashid, Karol Bagh Delhi",
        contacts: "9716262379 / 7011725125 / 9310157739",
      },
      {
        location: "Kashmere Gate",
        name: "Pawan",
        address:
          "Shop No.1/782, Nicalson Road, Near Axis Bank, Kashmere Gate, Delhi",
        contacts: "01145105994 / 9313667456",
      },
      {
        location: "Kashmere Gate",
        name: "Ram Gopal",
        address: "Shop No.768, Chabbi Ganj Kashmere Gate, Delhi-110006",
        contacts: "9871340370 / 9654790370 / 9540337728",
      },
      {
        location: "Mangolpuri",
        name: "Santosh Jha / Sachin",
        address: "C - 3 Oil Market, Industrial Area Phase-1 Mangolpuri Delhi",
        contacts: "9350848326 / 7982429176 / 9540366353",
      },
      {
        location: "Narela",
        name: "Raju Sharma",
        address:
          "Plot No.66-58, Sec.B-4, Pocket -11, New Punjabi Colony, Near Lal Chowk, Narela",
        contacts: "9212066361 / 9310066361",
      },
      {
        location: "New Lajpat Rai Market",
        name: "Ravi Anand",
        address: "Shop No. 243, New Lajpat Rai Market Delhi",
        contacts: "9910231765 / 9015476509",
      },
      {
        location: "Sanjay Gandhi TPT",
        name: "Parveen",
        address:
          "C-29/1, Near Delhi Dharam Kata, Bass Balli Market, Namank Godown",
        contacts: "9643619245 / 8744912011",
      },
      {
        location: "Shahdra",
        name: "Krishna Sirohi",
        address:
          "10/115, Patel Gali, Main 60Ft. Road Vishwas Nagar Shahdra Delhi",
        contacts: "9811353810 / 8076856250 / 9999178551 / 8882018141",
      },
      {
        location: "Wazirpur",
        name: "S.K. Yadav",
        address: "Shop No.B-28, Industrial Area Wazirpur Delhi",
        contacts: "01146124777 / 9310036777",
      },
      {
        location: "Zakhira",
        name: "Govind",
        address: "Shop No. 69-70, Chara Mandi Zakhira Delhi",
        contacts: "9654499953 / 8595340137 / 9891648444",
      },
    ],
    UttarPradesh: [
      {
        location: "Agra",
        name: "Yogesh Sharma",
        address:
          "Naveen road Line, 21/35, Freeganj Road, Agra, Near VTC Transport Gorakhpur Godown",
        contacts: "9319967212 / 9319567678",
      },
      {
        location: "Aligarh",
        name: "Ravi Singh",
        address:
          "Sarai Sultani, Near Woolen Market Behind Axis Bank ATM, Aligarh",
        contacts: "8077722689 / 8923569929",
      },
      {
        location: "Aligarh",
        name: "Mukesh Singh",
        address:
          "Tyagi Hospital Wali Gali, Opp. Vishwa Bharti School, Sasni Gate, Aligarh",
        contacts: "8218391549 / 8534930520",
      },
      {
        location: "Ghaziabad",
        name: "B.K Joshi",
        address:
          "K.R.S. Good Transport Co. Devi Mandir Road, Opp. Delhi Gate, Ghaziabad",
        contacts: "9212450050 / 7065430172",
      },
      {
        location: "Hathras",
        name: "Mukesh",
        address:
          "Front of Bankey Bhawan Near Roadways Bus Stand Agra Road Hathras.",
        contacts: "8218391549 / 9897192922",
      },
      {
        location: "Meerut",
        name: "Kamal Dingra",
        address: "Shop No. 234, Transport Nagar Meerut",
        contacts: "8791138138 / 9319233334",
      },
      {
        location: "Muradnagar",
        name: "Pawan",
        address: "Purani Goods Mandi Muradnagar Near PNB Bank",
        contacts: "8433202529 / 9012544299",
      },
      {
        location: "Noida",
        name: "Parveen Gupta",
        address: "Sector -5, Harola, Opp. Fire Station Noida",
        contacts: "9910093971",
      },
      {
        location: "Saharanpur",
        name: "Pradeep",
        address: "C-345, Transport Nagar Dheradhun Road, Saharanpur",
        contacts: "8279491175 / 9758585333",
      },
      {
        location: "Tronica City",
        name: "J.N.Jha",
        address: "Shop No.7, Panchlok, Pradhan Market Tronica City, Ghaziabad",
        contacts: "9718796134 / 9643667885",
      },
      {
        location: "UP. Border-Godown-1 (Bihar)",
        name: "Vikas Kumar",
        address:
          "Metro Pillar No 109 Gali No 2, Opposite Chaena Body Work, UP.Border",
        contacts: "8368940779 / 7503368732",
      },
      {
        location: "UP. Border-Godown-2 (UP, Jharkhand)",
        name: "Ajay Tiwari",
        address:
          "Near By Geeta Press Bharat Petrol Pump Metro Pillar No.158, Chikamberpur, U.P. Border",
        contacts: "8368940466 / 7701921876",
      },
      {
        location: "UP. Border-Godown-3 (Kosi + W.B + Assam)",
        name: "Vikas Kumar",
        address: "Bajwa Compound, UP.Border",
        contacts: "8368940559 / 7503368732",
      },
      {
        location: "UP. Border-Godown-1 (UP, Jharkhand)",
        name: "Ajay Tiwari",
        address:
          "Near By Geeta Press Bharat Petrol Pump Metro Pillar No.158, Chikamberpur, U.P. Border",
        contacts: "9218303755",
      },
      {
        location: "UP. Border-Godown-2 (Bihar G.T Road)",
        name: "Vikas Kumar",
        address:
          "Metro Pillar No. 109 Gali No-2, Opposite Chaena Body Work, U.P. Border",
        contacts: "9218014724",
      },
      {
        location: "UP. Border-Godown-3 (West Bengal)",
        name: "Vikas Kumar",
        address: "Metro Pillar No. 113 Gali No-3, Chakamberpur, U.P. Border",
        contacts: "9218014724",
      },
      {
        location: "UP. Border-Godown-4 (Bihar - Ganga Par Kosi + Assam)",
        name: "Vikas Kumar",
        address:
          "Metro Pillar No. 152, Opposite Indo Arya Compound, U.P. Border",
        contacts: "9218014724",
      },
    ],
    Haryana: [
      {
        location: "Karnal",
        name: "Ravi Singh ",
        address: "JSR Road Carrier S.L.O No. 26, Sec-3,HSIDC Karnal Haryana.",
        contacts: "9354113926",
      },
      {
        location: "Bhiwani",
        name: "S.K Yadav",
        address: "Bawre Gate Srkulr Road Near Parnami Mainder Bhiwani",
        contacts: "9310036777 / 9821051400",
      },
      {
        location: "Faridabad",
        name: "Roshan Kumar",
        address:
          "17/6, Mathura Road Sarpanch Colony, Near Shree Ganesh Service Station, Opp. Metro Piller no. 755 Neelam Chowk",
        contacts: "8376005778 / 9871634193",
      },
      {
        location: "Jaghadari",
        name: "Manoj Gulati",
        address: "H.O. Gauri Shankar Link Road Behind Gupta Metal, Jagadhari",
        contacts: "9812000058",
      },
      {
        location: "Panipat",
        name: "Narendra Malik",
        address: "Plot No.214, Sector-25, Transport Nagar, Panipat",
        contacts: "9813180050 / 8950103535",
      },
    ],
    Punjab: [
      {
        location: "Amritsar",
        name: "Jagdish",
        address: "Ghee Mandi Chowk, Opp. Bank Balmiki Mandir Amritsar",
        contacts: "9317706397 / 7009566675 / 90560991517",
      },
      {
        location: "Baddi",
        name: "Suresh",
        address: "90-91,Modern Complex Opp. Bhardwaj Hospital,Sai Road ,Baddi",
        contacts: "9318796573 / 7018267367",
      },
      {
        location: "Chandigarh",
        name: "Ganesh Attreya",
        address: "4, Transport Area, Sector-26, Chandigarh",
        contacts: "8847462925 / 9876863807",
      },
      {
        location: "Chandigarh",
        name: "Hargun Singh",
        address: "45, New Timber Market Sector-26, Chandigarh.",
        contacts: "9810078313 / 9569746573",
      },
      {
        location: "Solan",
        name: "Kiran Sharma",
        address: "Samti Road , Saproon Solan",
        contacts: "8988284426",
      },
      {
        location: "Parwanoo",
        name: "Grover",
        address: "Bal Mukand Complex Sec-2 Parwanoo",
        contacts: "9467970713",
      },
      {
        location: "Panchkula",
        name: "Sandeep",
        address: "Plot No. 340 Industrial Area Phase 1 Panchkula",
        contacts: "9463961346",
      },
      {
        location: "Barwala",
        name: "Ram",
        address: "Plot No. 112 Phase 1 HSIDC Alipur Barwala",
        contacts: "9996642215",
      },
      {
        location: "Zirakpur",
        name: "Manjeet",
        address: "Nagra Bulding Complex, Near J.P Hospital Ambala Chandigarh",
        contacts: "9205638435",
      },
      {
        location: "Mohali",
        name: "Sahil",
        address: "Balongi Mohali ",
        contacts: "8894865366",
      },
      {
        location: "Kala Amb.",
        name: "Sunny",
        address: "Nahan Road, Kala Amb, Sirmaur .",
        contacts: "8700553470",
      },
      {
        location: "Jalandhar",
        name: "Niranjan",
        address: "Plot no. 5, Industrial Area, Jalandhar",
        contacts: "9671689262",
      },
      {
        location: "Ludhiana",
        name: "Harcharn Singh",
        address:
          "Golden Roadways & Logistics Pvt. Ltd. Plot No. 2424 -D, Libra Compound, Opp. J.B.Kanta, Transport Nagar Ludhiana",
        contacts: "8595583535 / 8847092128",
      },
      {
        location: "Ludhiana City",
        name: "Chawla",
        address: "Plot No-683,Iqbal Ganj Road Ludhiana",
        contacts: "8847092128",
      },
      {
        location: "Ludhiana Gill Road",
        name: "Abhishek",
        address: "592/2, Over Lock Road, Opp. B.R.M Tower Ludhiana",
        contacts: "9814916821 / 01614626821",
      },
      {
        location: "Ludhiana Gosala",
        name: "Neetu",
        address: "Old Madhopuri Gali No.7 Opp Ram Mandir Ludhiana",
        contacts: "9417696544 / 7717219979",
      },
      {
        location: "Malerkotla",
        name: "Mohit Kumar",
        address: "Pawan Transport Industrial Area, Steel-02, Malerkotla",
        contacts: "9041101520 / 9316537000",
      },
      {
        location: "Phagwara",
        name: "Sunil",
        address:
          "Tarsam Transport Company, Hosiyarpur Road, Balmiki Chowk, Phagwara",
        contacts: "9815000327 / 9988826128",
      },
    ],
    Gujarat: [
      {
  location: "Ahmedabad / Asalai",
  name: "Rohtash Kumar",
  address: "Block No-1600B/2, Daga Estate, NH-8, Jetalpur, Ahmedabad",
  contacts: "9218303752",
}

    
    ],
    UttarPradeshDelivery: [
      {
        location: "Azamgarh",
        name: "Amit",
        address: "Qyampur Kotwa Near Kartikya Dharam Kata Azamgarh",
        contacts: "8573028531 / 9670002153",
      },
      {
        location: "Ballia",
        name: "Amarinder",
        address:
          "Near Sanichari Mandir Bichala Ghat Police Chowki, Bande Par, Ballia",
        contacts: "6393398663 / 7355495329",
      },
      {
        location: "Basti",
        name: "Shubam Singh",
        address:
          "Shubam TPT.Company Opp. Railway Mall Godown Nirmli Kund Basti",
        contacts: "9598313110 / 9838032391",
      },
      {
        location: "Bhadohi",
        name: "Mukesh Kumar",
        address: "Maryad Patti Bhadohi",
        contacts: "9451019063",
      },
      {
        location: "Mohammdabad Gohna",
        name: "Durgesh Tiwari",
        address: "Near Calendar Tiraha Opp. BSNL Office Ps Mohammadabad Gohna",
        contacts: "9415261075 / 7985528915",
      },
      {
        location: "Mubarakpur",
        name: "Ajju",
        address: "Ali Nagar Chowk Mubarakpur,Distt-Azamgarh.",
        contacts: "9838797151 / 9235338174",
      },
      {
        location: "Belthara Road",
        name: "Anjani Gupta",
        address: "Bus Stand Near Belthara Road",
        contacts: "8738967375 / 9369126097",
      },
      {
        location: "Faizabad",
        name: "Ashish",
        address: "Faizabad Road Lines.",
        contacts: "9415108075 / 8303306859",
      },
      {
        location: "Deoria",
        name: "Salish Morhi",
        address: "Morhi Transport Service, CC Road Pashuram Chowk",
        contacts: "9452628520 / 9953639285",
      },
      {
        location: "Salempur",
        name: "Inderjeet Morhi",
        address: "Morhi Transport Bapu Inter Collage Salempur",
        contacts: "9984018502 / 7071445790",
      },
      {
        location: "Barhalganj",
        name: "Balinder Singh",
        address: "Gemini Transport Agency Near TVS Agency Barhalganj",
        contacts: "9935303951 / 8299704552",
      },
      {
        location: "Gorakhpur",
        name: "Manish Singh",
        address: "Plot No.110, Near Golden Gas Service TPT Nagar, Gorakhpur",
        contacts: "9936409920 / 9336402820",
      },
      {
        location: "Ghazipur",
        name: "Manish Pathak",
        address: "Katholi Jangirpur Road, Ghazipur",
        contacts: "9653091197",
      },
      {
        location: "Ghosi",
        name: "Nitish Chaurasiya",
        address: "Shabnam Transport Agency Station Road Ghosi",
        contacts: "9336778875 / 9936771986",
      },
      {
        location: "Akbarpur/AmbedkarNagar",
        name: "Haji Mohd.Aleem",
        address: "Faizabad Road (Near Tamsa Marg) Akbarpur,Ambedkar Nagar.",
        contacts: "9838387414 / 9305301549",
      },
      {
        location: "Jalalpur",
        name: "Najim Mohd.",
        address: "Khan Transport Co",
        contacts: "9792243417 / 9648680312",
      },
      {
        location: "Tanda",
        name: "Imran Ahmed",
        address: "Chander Lok Palace Haspur Road Tanda.",
        contacts: "9721261909 / 8052863688",
      },
      {
        location: "Gosiganj",
        name: "Bishno Kumar ",
        address: "Bus Stand Gosiganj",
        contacts: "9984613438 / 9451429064",
      },
      {
        location: "Jaunpur",
        name: "Vimlesh Singh",
        address: "Naiganj Near Dubey Dabha, Jaunpur",
        contacts: "9140583858",
      },
      {
        location: "Kanpur",
        name: "Manoj Singh",
        address: "133/369 A Dhakna Purwa Transport Nagar",
        contacts: "9935039899",
      },
      {
        location: "Lucknow",
        name: "Sanjay Sharma",
        address:
          "Aishbagh Malvea Nagar Chauraha Gupta Market, Godown.No.4 Lucknow",
        contacts: "9305182357 / 8090408899",
      },
      {
        location: "Mau",
        name: "PN Singh",
        address: "UP Transport organization, Dhiti Mau",
        contacts: "9839662682 / 9648110080",
      },
      {
        location: "Machhalishar",
        name: "Virender Kumar",
        address: "Kolkhara Post Machhalishar.Distt-Jaunpur",
        contacts: "8318905833 / 7408353575",
      },
      {
        location: "Prayagraj",
        name: "Ashish Yadav",
        address:
          "Golden Roadways and Logistics Pvt Ltd, 161B, Transport Nagar Prayagraj",
        contacts: "9956260183 / 6307649750",
      },
      {
        location: "Rasara",
        name: "Anjani Gupta",
        address: "Ghoda Chauraha, Dhundehrawa, Rasara",
        contacts: "8738967375 / 9369126097",
      },
      {
        location: "Sultanpur",
        name: "Ashish Singh",
        address:
          "Singh Transport, Shop no. - 4, Transport nagar, Lucknow Road, Sultanpur",
        contacts: "8957009006 / 7007202258",
      },
      {
        location: "Varanasi",
        name: "Rajinder Tiwari",
        address: "Ray Compound Lahartara Transport Nagar, Varanasi",
        contacts: "8318006032 / 9451447199",
      },
      {
        location: "Yusufpur",
        name: "Golu Yadav",
        address: "Salempur Mod Shiv Mandir, Gazipur- 233227",
        contacts: "8318498756 / 8176834552",
      },
    ],
    BiharDelivery: [
      {
        location: "Arrah",
        name: "Prashant",
        address: "Near Bus Stand, Bypass Road, Arrah",
        contacts: "7004714121 / 8092129400",
      },
      {
        location: "Araria Court",
        name: "Amarnath Jha",
        address:
          "Bus Stand Road Opp.LIC Office Near Sanjay Mishra Petrol Pump, Araria",
        contacts: "8002008495",
      },
      {
        location: "Aurangabad",
        name: "Shivpujan",
        address:
          "Singha College Mod Old G.T Road Aurangabad, Parwati Sadan, Bihar",
        contacts: "8210277984 / 7870295974",
      },
      {
        location: "Bettiah",
        name: "Alok Kumar",
        address: "Rajdevri Near Najar Bagh Park",
        contacts: "7759091055",
      },
      {
        location: "Bhagalpur",
        name: "Bhawani Mishra",
        address: "Behind Muslim High School Tatarpur, Bhagalpur",
        contacts: "9304687607",
      },
      {
        location: "Brahmapur",
        name: "Naryan Dutt",
        address:
          "Chandra Dev Complex, Near Ojha Mobile Nine, Brahmpur Road, Chaurasta",
        contacts: "9523555626",
      },
      {
        location: "Begusarai",
        name: "Ramanand Mahto",
        address: "Ratanpur, Teliya Pokhra Road, G.D Maleda ke Piche",
        contacts: "8789280916 / 8877690526",
      },
      {
        location: "Bhabhua",
        name: "Avinash Pandey",
        address: "Near Maruti Suzaki Agency Bhabua Road, Mohaniya-821109",
        contacts: "7564940582 / 9905909226",
      },
      {
        location: "Buxer",
        name: "Ravi Singh",
        address: "Main Road, Near by Power House, Charitra Van, Buxer",
        contacts: "9431083952 / 7903584873",
      },
      {
        location: "Biharsharif",
        name: "Pintu",
        address: "Pillar no.58 Near Bharat Gas Godown Biharsharif",
        contacts: "8862830801",
      },
      {
        location: "Bihiya",
        name: "Nagendra Ojha",
        address: "Lotus School Sahib Tola Dock Bangla Road, Raja Bazar Bihiya",
        contacts: "7677618842 / 7070813494",
      },
      {
        location: "Nawada",
        name: "R.P Choudhary",
        address: "Jal Mandir Road Nawada-805110",
        contacts: "9304624234 / 7015938250",
      },
      {
        location: "Bihariganj",
        name: "Akhilesh Kumar",
        address: "Vishkarma Chowk Bihariganj",
        contacts: "9852660870",
      },
      {
        location: "Chhapra",
        name: "Abhishek Dubey",
        address: "Garkha Dhala Road, Near DAV School Newaji Tola Road, Chhapra",
        contacts: "7004978897 / 9471289402",
      },
      {
        location: "Darbhanga",
        name: "A.K. Ojha",
        address:
          "Shivdhara Chowk, Gehumi Road Near Highway Over Bridge, Darbhanga",
        contacts: "9430063337 / 7324972257",
      },
      {
        location: "Daudnagar",
        name: "Sarfu Din Ansari",
        address:
          "Bhkhrwan Mod, Near Agarwal Arra Machine, Daudnagar Bihar-824113",
        contacts: "9934918807 / 9955846775",
      },
      {
        location: "Dheri On Son",
        name: "Naeem Bhai",
        address: "Shahbad Kanta, Jakki Bigha Dehri On Son",
        contacts: "7004423430 / 7004178486",
      },
      {
        location: "Dumroan",
        name: "Vinod Singh",
        address: "Sumitra Collage Road, Near by Tiwari Computer",
        contacts: "7488544044 / 6202670918",
      },
      {
        location: "Forbisganj",
        name: "Mintu Thakur",
        address: "Godhiyare chok, Forbesganj",
        contacts: "9199490887 / 9262754705",
      },
      {
        location: "Gaya",
        name: "Tannu Bhai",
        address: "BN Jha Road Dr. Shiv Bachan Singh, Murarpur",
        contacts: "9122333000 / 9153587719 / 9431263328",
      },
      {
        location: "Gopal Ganj",
        name: "Dharmender",
        address: "Yadavpur Chowk, Near Saraswati Cinema Hall, Gopal Ganj",
        contacts: "9431407567",
      },
      {
        location: "Hajipur",
        name: "Manoj Singh",
        address:
          "Anjanpir Chowk Near Madina Masjid Sachipati Hajipur By Pass Road",
        contacts: "6200632326",
      },
      {
        location: "Jay Nagar",
        name: "Abhay Kumar",
        address:
          "Maxi Stand, Nearest Honda Agency, Bus Stand Road, Jai Nagar-847226",
        contacts: "9097638196",
      },
      {
        location: "Jamui",
        name: "Pawan Kumar",
        address: "Bithalpur Road Near Mahavir, Vatika Vivah Bhawan, Jamui",
        contacts: "9931671942",
      },
      {
        location: "Jhanjarpur",
        name: "Rushan Kumar",
        address: "Jhanjarpur Mohna Road near Indian Oil Petrol Pump",
        contacts: "8969757264 / 9097638196",
      },
      {
        location: "Lakhisarai",
        name: "Shivam Kumar",
        address: "Naya Bazar Astghaytti Pokhar, Lakhisarai",
        contacts: "7004348160",
      },
      {
        location: "Kishanganj",
        name: "Raj Kumar",
        address:
          "MRF Tyre showroom Behind Caltex Chowk NH-31, Kishan Ganj, KNE",
        contacts: "8972148637 / 7604021111",
      },
      {
        location: "Katihar",
        name: "K.P Singh",
        address: "D.S Collage Road, Near Radiant Hospital",
        contacts: "7257072818 / 8825112518",
      },
      {
        location: "Kochas",
        name: "Hemant",
        address:
          "Near Indian Oil Petrol Pump & Akahand Medical Hospital, Denara Road",
        contacts: "7050645934 / 9461533567",
      },
      {
        location: "Khagariya",
        name: "Robin Singh",
        address: "By Pass Road, Khargariya Near Haiyan Thana",
        contacts: "9939849201",
      },
      {
        location: "Madhubani",
        name: "K.K.Ojha",
        address: "Meena Bazar Madhubani",
        contacts: "9931803001 / 8210470557",
      },
      {
        location: "Mohaniya",
        name: "Avinash Pandey",
        address: "Near Maruti Suzuki Agency Bhabua Road, Mohaniya-821109",
        contacts: "7564940582 / 9905909226",
      },
      {
        location: "Madhepura",
        name: "Ranjeet Kumar Singh",
        address: "State Bank Road Near Hindustan General Store",
        contacts: "7903486400",
      },
      {
        location: "Muzaffarpur",
        name: "Nav Ratan Lal Mishra",
        address:
          "Akhara Ghat Road, Old F.C.I. Near Ratna Banquet Hall, Muzaffarpur",
        contacts: "9431474737 / 9334952779",
      },
      {
        location: "Murliganj",
        name: "Akhilesh Kumar",
        address: "Indian Oil Petrol Pump Murliganj Pin Code-852122",
        contacts: "9852660870",
      },
      {
        location: "Narkatiya Ganj",
        name: "Munna Shrivastava",
        address: "Behind Ramkant Gas Agency Narkatiya Ganj",
        contacts: "9534298933 / 9546987153",
      },
      {
        location: "Patna",
        name: "Jamil Akhter",
        address:
          "Metro Pillar no. - 172, Gaya Road Bus Stand Near Umro Banquet Hall Patna",
        contacts: "7003158671 / 7070980786",
      },
      {
        location: "Gulabbagh",
        name: "Dulal Das",
        address: "Gulabbagh, Zero Mile (PF Campas)",
        contacts: "9973321390",
      },
      {
        location: "Purnia",
        name: "Dulal Das",
        address: "Gulabbagh, Zero Mile (PF Campas)",
        contacts: "9973321390",
      },
      {
        location: "Samastipur",
        name: "Dipu Sinha",
        address: "Pithiya Gachhi Samastipur",
        contacts: "7631829706 / 6204028102",
      },
      {
        location: "Sasaram",
        name: "Vijay Singh",
        address:
          "Panchshil Bhawan, Near Mahendra Tractor Agency, Bolia Road, Sasaram",
        contacts: "7491948659 / 8825187993",
      },
      {
        location: "Sherghati",
        name: "Adil Hussain",
        address: "Kamla Market, Near Over Bridge, Sherghati",
        contacts: "9534567331 / 8864051672",
      },
      {
        location: "Sitamarhi",
        name: "Avishek Kumar",
        address: "Riga Road, Infront Of Sri Dwarika Vivah Bhawan, Sitamarhi",
        contacts: "9540860425 / 9267992951",
      },
      {
        location: "Siwan",
        name: "Biresh Tiwari",
        address:
          "Behind Tuntun Babu Petrol Pump Nirgun Puram, Adarsh Nagar, Siwan",
        contacts: "9955046792",
      },
      {
        location: "Saharsa",
        name: "Ishtiaque Ahmed",
        address: "Station Road, Chandni chowk, Sangham Bihar Hotel",
        contacts: "9430468528 / 9939092236",
      },
      {
        location: "Supaul",
        name: "Ishtiaque Ahmed",
        address: "Station Road, Chandni chowk, Sangham Bihar Hotel",
        contacts: "9430468528 / 9939092236",
      },
      {
        location: "Vikramganj",
        name: "Abilash Kumar",
        address: "Sararam Road Water Tanki Near Mahavir Mandir Vikramganj",
        contacts: "8271079043 / 7667687436",
      },
    ],
    JharkhandDelivery: [
      {
        location: "Barhi",
        name: "Rahul",
        address: "Gaya Road Barhi, Jharkhand",
        contacts: "8285873749",
      },
      {
        location: "Chas",
        name: "Rana Singh",
        address:
          "Purulia Road, Near Jagdamba Mandir Tara Nagar, Chas, Jharkhand",
        contacts: "9334210559 / 7667152562",
      },
      {
        location: "Lohardga",
        name: "Sunil",
        address: "Kishno More Santi Nagar, Lohardga",
        contacts: "8789582299 / 9334770575",
      },
      {
        location: "Daltenganj",
        name: "Niklesh",
        address: "Mushlim Mohalla River Side Ward No.30, Daltenganj",
        contacts: "8709083006 / 7488090923",
      },
      {
        location: "Deoghar",
        name: "Ganesh Gupta",
        address: "KKN Stadium Castier Town B Deoghar, Jharkhand-818112",
        contacts: "9122594401 / 9431306176",
      },
      {
        location: "Dhanbad",
        name: "Vikash Pandey",
        address: "Godhar Power House, Opp. Indian Oil Pump, Dhanbad",
        contacts: "8409010935 / 9065833558",
      },
      {
        location: "Dumka",
        name: "Ram Babu Tiwari",
        address: "Gilanpara, Near Church, Dumka, Jharkhand",
        contacts: "9162755768",
      },
      {
        location: "Garhwa",
        name: "Pardeep",
        address: "Rohila Road Garhwa, Sonpurwa",
        contacts: "7371074701",
      },
      {
        location: "Giridih",
        name: "Kaushal",
        address:
          "I.C.R Road Old Shivalaya Mandir Giridih PinCode-815301 Jharkhand",
        contacts: "9472772711 / 7903610711",
      },
      {
        location: "Gumla",
        name: "Sunil",
        address: "Lohar Dagha Road, Gumla Thana Chowk Vina Cinema Hall, Gumla",
        contacts: "8789582299 / 9608531115",
      },
      {
        location: "Godda",
        name: "Sushil Kumar",
        address:
          "At- Gulzarbagh Shivpur Road Godda, Near Chaiti Durga Mandir, Godda",
        contacts: "7870208227",
      },
      {
        location: "Hazaribagh",
        name: "Shyam Bihari Singh",
        address: "Malviya Marg Near Shksham Hotel Hazaribagh",
        contacts: "7258966345",
      },
      {
        location: "Jamshedpur",
        name: "Danish",
        address: "Kashiduh Near Durga Mandir, Jamshedpur",
        contacts: "9386081033",
      },
      {
        location: "Jhariya",
        name: "Sanjeet Singh",
        address: "Sindri Road Phularibag Near Kata Ghar Indra Chowk Jhariya",
        contacts: "9470373355",
      },
      {
        location: "Jhumritaliya",
        name: "D.N.Jha",
        address:
          "Opposite Adityavision Ranchi Patna Road, Jhumritelaiya Kodrma",
        contacts: "7004248635",
      },
      {
        location: "Madhupur",
        name: "Danish",
        address: "Kasum Bhawan Panah Kola Road, Madhupur-815353",
        contacts: "8825351408",
      },
      {
        location: "Phusro",
        name: "Ashutosh",
        address: "Near Mahavir Mander Phusro Bermo, Bokaro, Jharkhand-829144",
        contacts: "8340500805",
      },
      {
        location: "Ramgarh",
        name: "Randhir Singh",
        address: "Nehru Road Near Shiv Mandir, Ramgarh",
        contacts: "9572170887",
      },
      {
        location: "Ranchi",
        name: "Anil Tiwari",
        address: "Gaddi Khana Chowk Near Lal Batti Sarkari School Ranchi",
        contacts: "8804532046",
      },
      {
        location: "Simdega",
        name: "Niraj Sharma",
        address:
          "Golden Roadways & Logistics Pvt. Ltd. Idgah Muhalla Infront Of Makka Maszid Simdega (Jharkhand)",
        contacts: "6204036372",
      },
    ],
    WestBengalDelivery: [
      {
        location: "Asansol",
        name: "Zahid Malik",
        address:
          "49 G.T Road, Mallick Mansion Near Gujrati School the Horizone Block-B, Asansol",
        contacts: "08768000055 / 9851990270",
      },
      {
        location: "Bankura",
        name: "Arghya Tiwari",
        address: "By pass road, Lalbandh, Lalbazar, Bankura 722101",
        contacts: "7602148274",
      },
      {
        location: "Burdwan",
        name: "Rabindra Shaw",
        address: "Telipukur Mirchoba Ram Mudi Colony Purba Burdwan 713103",
        contacts: "9333766059 / 9800025900 / 7808135414 / 9851990270",
      },
      {
        location: "Durgapur",
        name: "Zahid Malik",
        address: "Durgapur",
        contacts: "9581990270",
      },
      {
        location: "Kaliachak",
        name: "MD.Mohidul Hoque",
        address: "Baliadanga More Ansaripara Near Kath Mill, Kaliachak",
        contacts: "9734926680",
      },
      {
        location: "Kaliyaganj",
        name: "Uttam Kumar Saha",
        address: "South Akhanagar, Kaliyaganj",
        contacts: "9434965019",
      },
      {
        location: "Malda",
        name: "P Ghosh",
        address: "M K Road, Malda",
        contacts: "9775858867 / 8768670511",
      },
      {
        location: "Raiganj",
        name: "Prabin Kumar",
        address:
          "Meen Bhawan Near Power House Raiganj, Distt-North Dinajpur-733134",
        contacts: "9832080051 / 8637063668",
      },
      {
        location: "Chanchal",
        name: "Sunil",
        address: "Chanchal Sukonta Mode",
        contacts: "9563252865",
      },
      {
        location: "Murshidabad",
        name: "Viswajit Dass",
        address: "Murshidabad Pin Code-742102",
        contacts: "8906709842 / 8250871046",
      },
      {
        location: "Berhampore",
        name: "Viswajit Dass",
        address: "Murshidabad Pin Code-742102",
        contacts: "8906709842 / 8250871046",
      },
      {
        location: "Raghunath Ganj",
        name: "Viswajit Dass",
        address: "Cassim Bazar Near Santhi Sangha Club, Raghunath Ganj",
        contacts: "8906709842 / 8250871046",
      },
      {
        location: "Alipurduar",
        name: "Shyamal Dutta",
        address: "Marwari Patti, Maya Chokis Road, Alipurduar",
        contacts: "8609786861 / 7384441375",
      },
      {
        location: "Dhupguri",
        name: "Shyamal Dutta",
        address: "Marwari Patti, Maya Chokis Road, Alipurduar",
        contacts: "8609786861 / 7384441375",
      },
      {
        location: "Falakata",
        name: "Shyamal Dutta",
        address: "Marwari Patti, Maya Chokis Road, Alipurduar",
        contacts: "8609786861 / 7384441375",
      },
      {
        location: "Jalpaiguri",
        name: "Shyamal Dutta",
        address: "Marwari Patti, Maya Chokis Road, Alipurduar",
        contacts: "8609786861 / 7384441375",
      },
      {
        location: "Maynaguri",
        name: "Shyamal Dutta",
        address: "Marwari Patti, Maya Chokis Road, Alipurduar",
        contacts: "8609786861 / 7384441375",
      },
      {
        location: "Coochbehar",
        name: "Sanjay Yadav",
        address: "S.N. Road, Durgabari, Near Ekta Marble House, Coochbehar",
        contacts: "8373070474 / 8016972072",
      },
      {
        location: "Dinhata",
        name: "Sanjay Yadav",
        address: "S.N. Road, Durgabari, Near Ekta Marble House, Dinhata",
        contacts: "8373070474 / 8016972072",
      },
      {
        location: "Mathabhanga",
        name: "Sanjay Yadav",
        address: "S.N. Road, Durgabari, Near Ekta Marble House, Mathabhanga",
        contacts: "8373070474 / 8016972072",
      },
      {
        location: "Tufanganj",
        name: "Sanjay Yadav",
        address: "S.N. Road, Durgabari, Near Ekta Marble House, Tufanganj",
        contacts: "8373070474 / 8016972072",
      },
      {
        location: "Dalkola",
        name: "Paritosh",
        address: "Malikpur, Uttam Dinajpur, West Bengal, Pin -733201",
        contacts: "8250860792 / 9563650663",
      },
      {
        location: "Islampur",
        name: "Chandan",
        address:
          "Puratan Pally, Mandal Gola, Near Coparati Cinema Hall, Islampur",
        contacts: "8617035502 / 9851050152 / 9800368222",
      },
      {
        location: "Silliguri",
        name: "Raghav Sharma",
        address: "Suman Tea Warehouse, Sevoke Road, Silliguri",
        contacts: "9933388301",
      },
    ],
    AssamDelivery: [
      {
        location: "Bilasipara",
        name: "Surajit Sankar Paul",
        address:
          "Ward No-2, P.O Bilasipara, Distt-Dhubri, Assam, Pin-783348, Near Suvashpally, Shiv Mandir",
        contacts: "8822986940 / 9954000946",
      },
      {
        location: "Bongaigoan",
        name: "Santosh Kumar",
        address: "Pagla Sathan Krishna Mill Compound Bongaigaon",
        contacts: "7002321826 / 9435021816",
      },
      {
        location: "Barpeta Road",
        name: "Sujit Saha",
        address: "Simlaguri Barpeta Road",
        contacts: "7002310595",
      },
      {
        location: "Nalbari",
        name: "Monu Shaikh",
        address: "Nailbari Bhagatpara Road Ward No.2",
        contacts: "8638710690",
      },
      {
        location: "Dhubri",
        name: "B.N.Jha",
        address: "Lal Mill Compound Ward No. 3 Baluchar Dhubri-783301",
        contacts: "8638662023",
      },
      {
        location: "Goalpara",
        name: "Pandit",
        address: "Near Boro Bazar Thakur Bari Goalpara",
        contacts: "7002089858 / 6000948805",
      },
      {
        location: "Krishnai",
        name: "Azizul Ali",
        address: "Krishnai Godown Burgabari",
        contacts: "9101766983",
      },
      {
        location: "Kokrajhar",
        name: "Satya Deo Mandal",
        address: "Bazar Road Kokrajhar",
        contacts: "9435643569",
      },
    ],
    TripuraDelivery: [
      {
        location: "Agartala",
        name: "Arun Kumar Ghosh",
        address:
          "Sree Krishna Roadways, Ramthakur Sanga Opp. Fire Station, M.G. Bazar, West Tripura, Agartala",
        contacts: "9436167508 / 9366376012",
      },
    ],
  };

  const bookingRegions = ["Delhi", "UttarPradesh", "Haryana", "Punjab", "Gujarat"];
  const deliveryRegions = [
    "UttarPradeshDelivery",
    "BiharDelivery",
    "JharkhandDelivery",
    "WestBengalDelivery",
    "AssamDelivery",
    "TripuraDelivery",
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1, ease: "easeOut" },
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

  const panelVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Network Map
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Click a location to view office details across our booking offices
            in Delhi, Uttar Pradesh, Haryana, and Punjab, and delivery offices
            in Uttar Pradesh, Bihar, Jharkhand, West Bengal, Assam, and Tripura.
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
            <h2 className="text-3xl font-bold text-sky-900 mb-6 text-center">
              Booking Offices
            </h2>
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
            <h2 className="text-3xl font-bold text-sky-900 mb-6 text-center">
              Delivery Offices
            </h2>
            {deliveryRegions.map((region) => (
              <div key={region} className="mb-8">
                <h3 className="text-2xl font-semibold text-sky-800 mb-4 text-center">
                  {region === "UttarPradeshDelivery"
                    ? "Uttar Pradesh"
                    : region === "BiharDelivery"
                      ? "Bihar"
                      : region === "JharkhandDelivery"
                        ? "Jharkhand"
                        : region === "WestBengalDelivery"
                          ? "West Bengal"
                          : region === "AssamDelivery"
                            ? "Assam"
                            : region === "TripuraDelivery"
                              ? "Tripura"
                              : region}
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
                <motion.p variants={childVariants} className="text-gray-700">
                  <span className="font-medium">Contacts:</span>{" "}
                  {selectedLocation.contacts}
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
