/* =====================================================
   RUPAMATA MITRA MANDAL — PREMIUM JAVASCRIPT
   ===================================================== */

// ============================================================
//  DATA
// ============================================================
const DONORS = [
  {
    id: 1,
    name: "Suresh Patil",
    amount: 250,
    type: "Cash",
    date: "2026-07-10",
    msg: "Ganpati Bappa Morya!",
  },
  {
    id: 2,
    name: "Priya Sharma",
    amount: 1500,
    type: "Online",
    date: "2026-07-12",
    msg: "Jai Ganesh!",
  },
  {
    id: 3,
    name: "Ramesh Kulkarni",
    amount: 500,
    type: "Cash",
    date: "2026-07-08",
    msg: "Bappa bless all.",
  },
  {
    id: 4,
    name: "Anjali Desai",
    amount: 1000,
    type: "Online",
    date: "2026-07-14",
    msg: "Om Ganeshaya Namah",
  },
  {
    id: 5,
    name: "Vikram Joshi",
    amount: 500,
    type: "Cash",
    date: "2026-07-15",
    msg: "Morya!",
  },
  {
    id: 6,
    name: "Meera Naik",
    amount: 2000,
    type: "Online",
    date: "2026-07-11",
    msg: "Jai Bappa Morya",
  },
  {
    id: 7,
    name: "Anil Mehta",
    amount: 800,
    type: "Cash",
    date: "2026-07-16",
    msg: "Happy Ganesh Chaturthi",
  },
  {
    id: 8,
    name: "Sunita Rao",
    amount: 120,
    type: "Online",
    date: "2026-07-13",
    msg: "Ganpati Bappa Morya",
  },
  {
    id: 9,
    name: "Deepak Wagh",
    amount: 300,
    type: "Cash",
    date: "2026-07-09",
    msg: "Pudchya varshi lavkar ya!",
  },
  {
    id: 10,
    name: "Kavita Pawar",
    amount: 750,
    type: "Cash",
    date: "2026-07-17",
    msg: "Jai Ganesh",
  },
  {
    id: 11,
    name: "Sandeep More",
    amount: 450,
    type: "Online",
    date: "2026-07-07",
    msg: "Bless our family Bappa!",
  },
  {
    id: 12,
    name: "Radha Bhosale",
    amount: 300,
    type: "Cash",
    date: "2026-07-18",
    msg: "Mangal Murti Morya",
  },
  {
    id: 13,
    name: "Ganesh Tilekar",
    amount: 1800,
    type: "Online",
    date: "2026-07-10",
    msg: "Jai Bappa!",
  },
  {
    id: 14,
    name: "Pooja Gadre",
    amount: 600,
    type: "Cash",
    date: "2026-07-19",
    msg: "Ganpati Bappa Morya",
  },
  {
    id: 15,
    name: "Mahesh Deshpande",
    amount: 220,
    type: "Cash",
    date: "2026-07-08",
    msg: "Om Gam Ganapataye",
  },
  {
    id: 16,
    name: "Swati Kamble",
    amount: 450,
    type: "Online",
    date: "2026-07-20",
    msg: "Jai Ganesh Deva",
  },
  {
    id: 17,
    name: "Rajesh Mane",
    amount: 900,
    type: "Cash",
    date: "2026-07-21",
    msg: "Morya Re Bappa",
  },
  {
    id: 18,
    name: "Nandini Sathe",
    amount: 350,
    type: "Online",
    date: "2026-07-06",
    msg: "Ganpati Bappa Morya!",
  },
  {
    id: 19,
    name: "Kiran Shinde",
    amount: 250,
    type: "Cash",
    date: "2026-07-22",
    msg: "Bappa bless us",
  },
  {
    id: 20,
    name: "Varsha Jadhav",
    amount: 1600,
    type: "Online",
    date: "2026-07-11",
    msg: "Jai Bappa Morya",
  },
  {
    id: 21,
    name: "Pramod Gaikwad",
    amount: 600,
    type: "Cash",
    date: "2026-07-05",
    msg: "Ganpati Ki Jai",
  },
  {
    id: 22,
    name: "Smita Chavan",
    amount: 1100,
    type: "Cash",
    date: "2026-07-23",
    msg: "Om Ganeshaya Namah",
  },
  {
    id: 23,
    name: "Dilip Sawant",
    amount: 550,
    type: "Online",
    date: "2026-07-24",
    msg: "Bappa Morya!",
  },
  {
    id: 24,
    name: "Archana Pote",
    amount: 1400,
    type: "Cash",
    date: "2026-07-13",
    msg: "Jai Ganesh",
  },
];

const EXPENSES = [
  {
    id: 1,
    item: "Ganpati Idol (Eco-friendly)",
    cat: "Idol & Decoration",
    amount: 5000,
    vendor: "Shri Ganesh Murti Kendra",
    status: "Paid",
  },
  {
    id: 2,
    item: "Pandal Decoration (Flowers & Lights)",
    cat: "Decoration",
    amount: 4500,
    vendor: "Rajesh Decorators",
    status: "Paid",
  },
  {
    id: 3,
    item: "Sound System & DJ Equipment",
    cat: "Sound & Lighting",
    amount: 3500,
    vendor: "Sound King Pune",
    status: "Paid",
  },
  {
    id: 4,
    item: "Lighting Setup (LED & Decorative)",
    cat: "Sound & Lighting",
    amount: 2500,
    vendor: "Bright Lights Co.",
    status: "Pending",
  },
  {
    id: 5,
    item: "Prasad Materials (Modak, Fruits)",
    cat: "Prasad",
    amount: 3000,
    vendor: "Shree Sweets",
    status: "Paid",
  },
  {
    id: 6,
    item: "Mahaprasad for 100 devotees",
    cat: "Prasad",
    amount: 750,
    vendor: "Annapurna Caterers",
    status: "Pending",
  },
  {
    id: 7,
    item: "Security Personnel (10 guards)",
    cat: "Security",
    amount: 200,
    vendor: "Safe Guard Agency",
    status: "Paid",
  },
  {
    id: 8,
    item: "First Aid & Medical Setup",
    cat: "Medical",
    amount: 800,
    vendor: "City Medical Services",
    status: "Paid",
  },
  {
    id: 9,
    item: "Photography & Videography",
    cat: "Media",
    amount: 1800,
    vendor: "Lens Master Studio",
    status: "Paid",
  },
  {
    id: 10,
    item: "Cultural Program Artists",
    cat: "Cultural",
    amount: 400,
    vendor: "Art Plus Events",
    status: "Pending",
  },
  {
    id: 11,
    item: "Banner & Flex Printing",
    cat: "Publicity",
    amount: 1200,
    vendor: "Print World",
    status: "Paid",
  },
  {
    id: 12,
    item: "Cleaning & Maintenance",
    cat: "Operations",
    amount: 1000,
    vendor: "Clean Pro Services",
    status: "Paid",
  },
  {
    id: 13,
    item: "Generator & Power Backup",
    cat: "Sound & Lighting",
    amount: 1500,
    vendor: "Power Solutions Pune",
    status: "Paid",
  },
  {
    id: 14,
    item: "Dhol-Tasha for Procession",
    cat: "Cultural",
    amount: 2200,
    vendor: "Dhol Ke Sath Band",
    status: "Pending",
  },
  {
    id: 15,
    item: "Tent & Furniture",
    cat: "Decoration",
    amount: 1800,
    vendor: "Tent House Wale",
    status: "Paid",
  },
];

const EVENTS = [
  {
    day: 1,
    time: "6:30 PM",
    title: "Ganpati Sthapana",
    desc: "Grand installation ceremony with Vedic rituals and chanting.",
    tags: ["Devotional", "All Welcome"],
  },
  {
    day: 1,
    time: "7:00 PM",
    title: "Pran Pratishtha",
    desc: "Sacred life-force ceremony performed by learned Vedic priests.",
    tags: ["Religious", "Main Event"],
  },

  /* { day:2, time:'7:00 AM', title:'Morning Aarti & Abhishek', desc:'Daily morning aarti with panchamrit abhishek.', tags:['Daily','Devotional'] },
  { day:2, time:'6:00 PM', title:'Yugal Geet Competition', desc:'Devotional singing competition for youth.', tags:['Competition','Youth'] }, 
  { day:3, time:'7:00 PM', title:'Classical Dance Performance', desc:'Kathak and Bharatanatyam performances by senior artists.', tags:['Cultural','Arts'] },
  { day:3, time:'9:00 PM', title:'Drama — Ganesha Katha', desc:'A theatrical retelling of Lord Ganesha\'s stories.', tags:['Drama','Family'] }, */
  {
    day: 5,
    time: "12:00 PM",
    title: "Mahaprasad",
    desc: "Grand community feast for 100+ devotees. All welcome.",
    tags: ["Food", "Community"],
  },
  /* { day:5, time:'7:00 PM', title:'Dhol-Tasha Performance', desc:'High-energy dhol-tasha performance by championship band.', tags:['Music','Entertainment'] }, */
  /*  { day:6, time:'5:00 PM', title:'Drawing Competition', desc:'Art competition for children aged 5-15 years.', tags:['Kids','Competition'] },
  { day:6, time:'7:00 PM', title:'Bhajan by Prominent Artists', desc:'Special bhajan performance by nationally known artists.', tags:['Spiritual','Premium'] }, */
  {
    day: 7,
    time: "6:00 PM",
    title: "Competitions/Games",
    desc: "Traditional competition for all age groups and Games for kids.",
    tags: ["Art", "Competition"],
  },
  /*  { day:10, time:'10:00 AM', title:'Uttarpuja', desc:'Final prayers and farewell rituals.', tags:['Religious','Important'] }, */
  {
    day: 10,
    time: "6:00 PM",
    title: "Visarjan Procession",
    desc: "Grand procession to the river for immersion with dhol-tasha, dance, and devotion.",
    tags: ["Main Event", "Grand"],
  },
];

const GALLERY = [
  {
    src: "https://images.pexels.com/photos/3889822/pexels-photo-3889822.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Ganpati Darshan 2025",
    cat: "darshan",
  },
  {
    src: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Festival Celebrations",
    cat: "aarti",
  },
  {
    src: "https://images.pexels.com/photos/3889827/pexels-photo-3889827.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Cultural Evening",
    cat: "cultural",
  },
  {
    src: "https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Visarjan Procession",
    cat: "procession",
  },
  {
    src: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Temple Lights",
    cat: "darshan",
  },
  {
    src: "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Aarti Ceremony",
    cat: "aarti",
  },
  {
    src: "https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Dance Performance",
    cat: "cultural",
  },
  {
    src: "https://images.pexels.com/photos/3889828/pexels-photo-3889828.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Festival Decoration",
    cat: "darshan",
  },
  {
    src: "https://images.pexels.com/photos/1709165/pexels-photo-1709165.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Devotees Gathering",
    cat: "procession",
  },
  {
    src: "https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Evening Celebration",
    cat: "aarti",
  },
  {
    src: "https://images.pexels.com/photos/5765819/pexels-photo-5765819.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Youth Program",
    cat: "cultural",
  },
  {
    src: "https://images.pexels.com/photos/3889820/pexels-photo-3889820.jpeg?auto=compress&cs=tinysrgb&w=600",
    cap: "Grand Procession",
    cat: "procession",
  },
];

const DIARY_PHOTOS = {
  2026: [
    {
      src: "https://images.pexels.com/photos/3889822/pexels-photo-3889822.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Sthapana 2026",
    },
    {
      src: "https://images.pexels.com/photos/2990650/pexels-photo-2990650.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Day 1 Aarti 2026",
    },
    {
      src: "https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Festival Night 2026",
    },
    {
      src: "https://images.pexels.com/photos/3889827/pexels-photo-3889827.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Cultural Event 2026",
    },
  ],
  2025: [
    {
      src: "https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Ganpati 2025",
    },
    {
      src: "https://images.pexels.com/photos/6045028/pexels-photo-6045028.jpeg?auto=compress&w=500",
      cap: "Morning Aarti 2025",
    },
    {
      src: "https://images.pexels.com/photos/1709165/pexels-photo-1709165.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Visarjan 2025",
    },
    {
      src: "https://images.pexels.com/photos/2361952/pexels-photo-2361952.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Cultural Night 2025",
    },
  ],
  2024: [
    {
      src: "https://images.pexels.com/photos/5765827/pexels-photo-5765827.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Ganpati 2024",
    },
    {
      src: "https://images.pexels.com/photos/3889828/pexels-photo-3889828.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Day 5 Aarti 2024",
    },
    {
      src: "https://images.pexels.com/photos/5765819/pexels-photo-5765819.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Youth Event 2024",
    },
    {
      src: "https://images.pexels.com/photos/3889820/pexels-photo-3889820.jpeg?auto=compress&cs=tinysrgb&w=500",
      cap: "Visarjan 2024",
    },
  ],
};

const COMMITTEE = [
  {
    name: "Ajay Sarvade",
    role: "अध्यक्ष",
    contact: "+91 73000 92727",
    initials: "AS",
    color: "#FF6B00",
  },
  {
    name: "Apurv Phapale",
    role: "उपाध्यक्ष",
    contact: "+91 73000 92727",
    initials: "AP",
    color: "#FF8C00",
  },
  {
    name: "Sanchit Phapale",
    role: "सचिव",
    contact: "+91 73000 92727",
    initials: "Bali",
    color: "#FFD700",
  },
  {
    name: "Akshay Sarvade",
    role: "अतिरिक्त सचिव",
    contact: "+91 73000 92727",
    initials: "Dadya",
    color: "#8B0000",
  },
  {
    name: "Dhanesh Kadam",
    role: "खजिनदार",
    contact: "+91 73000 92727",
    initials: "DK",
    color: "#FF6B00",
  },
  {
    name: "Abhi Kamble",
    role: "Decoration Head",
    contact: "+91 73000 92727",
    initials: "Don",
    color: "#FF8C00",
  },
  {
    name: "Rahul Gund",
    role: "सरपंच",
    contact: "+91 73000 92727",
    initials: "RG",
    color: "#D4A017",
  },
  {
    name: "Kamble Kaku",
    role: "Women's Wing",
    contact: "+91 73000 92727",
    initials: "KK",
    color: "#FF6B00",
  },
];

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    if (href === "#") return;

    e.preventDefault();

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const AARTIS = [
  {
    title: "गणपती आरती",
    icon: "🔔",
    lang: "Marathi",
    text: `सुखकर्ता दुःखहर्ता वार्ता विघ्नाची ।
नुरवी पुरवी प्रेम कृपा जयाची ।
सर्वांगी सुंदर उटी शेंदुराची ।
कंठी झळके माळ मुक्ताफळांची ॥१॥
जय देव जय देव जय मंगलमूर्ती ।
दर्शनमात्रे मनकामना पूर्ती ॥धृ॥
रत्नखचित फरा तुज गौरीकुमरा ।
चंदनाची उटी कुंकुमकेशरा ।
हिरेजडित मुकुट शोभतो बरा ।
रुणझुणती नूपुरे चरणी घागरिया ॥२॥
जय देव जय देव जय मंगलमूर्ती ।
दर्शनमात्रे मनकामना पूर्ती ॥धृ॥
लंबोदर पीतांबर फणिवर वंदना ।
सरळ सोंड वक्रतुंड त्रिनयना ।
दास रामाचा वाट पाहे सदना ।
संकटी पावावे निर्वाणी रक्षावे सुरवरवंदना ॥३॥
जय देव जय देव जय मंगलमूर्ती ।
दर्शनमात्रे मनकामना पूर्ती ॥धृ॥
🙏 गणपती बाप्पा मोरया! मंगलमूर्ती मोरया!`,
  },
  {
    title: "Datta Aarti",
    icon: "🪔",
    lang: "Marathi",
    text: `त्रिगुणात्मक त्रैमूर्ती दत्त हा जाणा ।
त्रिगुणी अवतार त्रैलोक्यराणा ।
नेति नेति शब्द न ये अनुमाना ।
सुरवर मुनिजन योगी समाधी न ये ध्याना ॥१॥

जय देव जय देव जय श्री गुरुदत्ता ।
आरती ओवाळिता हरली भवचिंता ॥धृ॥

सबाह्य अभ्यंतरी तू एक दत्ता ।
अभाग्यासी कैसी न कळे ही माता ।
पराही परतली तेथे कैचा हा हेतू ।
जन्ममरणाचा पुरलासे अंतू ॥२॥

जय देव जय देव जय श्री गुरुदत्ता ।
आरती ओवाळिता हरली भवचिंता ॥धृ॥

दत्त येऊनिया उभा ठाकला ।
भावे साष्टांगे प्रणिपात केला ।
प्रसन्न होऊनी आशीर्वाद दिला ।
जन्ममरणाचा फेरा चुकविला ॥३॥

जय देव जय देव जय श्री गुरुदत्ता ।
आरती ओवाळिता हरली भवचिंता ॥धृ॥

🙏 श्री गुरुदेव दत्त! 🪔`,
  },
  {
    title: "Shiva Aarti",
    icon: "🔱",
    lang: "Marathi",
    text: `लवथवती विक्राळा ब्रह्मांडी माळा ।
वीषे कंठ काळा त्रिनेत्री ज्वाळा ।
लावण्यसुंदर मस्तकी बाळा ।
तेथुनिया जळ निर्मळ वाहे झुळझुळा ॥१॥
जय देव जय देव जय श्री शंकरा ।
आरती ओवाळू तुज कर्पूरगौरा ॥धृ॥
कर्पूरगौरा भोळा नयनी विशाळा ।
अर्धांगी पार्वती सुमनांच्या माळा ।
विभूतीचे उधळण शितिकंठ नीळा ।
ऐसा शंकर शोभे उमावेल्हाळा ॥२॥
जय देव जय देव जय श्री शंकरा ।
आरती ओवाळू तुज कर्पूरगौरा ॥धृ॥
देवीं दैत्यीं सागरमंथन पै केले ।
त्यामाजी अवचित हलाहल जे उठले ।
ते त्वां असुरपणे प्राशन केले ।
नीलकंठ नाम प्रसिद्ध झाले ॥३॥
जय देव जय देव जय श्री शंकरा ।
आरती ओवाळू तुज कर्पूरगौरा ॥धृ॥
व्याघ्रांबर फणिवरधर सुंदर मदनारी ।
पंचानन मनमोहन मुनिजन सुखकारी ।
शतकोटीचे बीज वाचे उच्चारी ।
रघुकुळटिळक रामदासा अंतरी ॥४॥
जय देव जय देव जय श्री शंकरा ।
आरती ओवाळू तुज कर्पूरगौरा ॥धृ॥
🙏 हर हर महादेव! 🔱`,
  },
  {
    title: "Devi Aarti",
    icon: "🌸",
    lang: "Marathi",
    text: `दुर्गे दुर्घट भारी तुजविण संसारी ।
अनाथनाथे अंबे करुणा विस्तारी ।
वारी वारी जन्ममरणाते वारी ।
हारी पडलो आता संकट निवारी ॥१॥
जय देवी जय देवी महिषासुरमर्दिनी ।
सुरवर ईश्वरवरदे तारक संजीवनी ॥धृ॥
त्रिभुवनभुवनी पाहता तुजऐसी नाही ।
चारी श्रमले परंतु न बोलवे काही ।
साही विवाद करिता पडिले प्रवाही ।
ते तू भक्तालागी पावसि लवलाही ॥२॥
जय देवी जय देवी महिषासुरमर्दिनी ।
सुरवर ईश्वरवरदे तारक संजीवनी ॥धृ॥
प्रसन्नवदने प्रसन्न होसी निजदासा ।
क्लेशांपासुनी सोडी तोडी भवपाशा ।
अंबे तुजवाचून कोण पुरवील आशा ।
नरहरी तल्लीन झाला पदपंकजलेशा ॥३॥
जय देवी जय देवी महिषासुरमर्दिनी ।
सुरवर ईश्वरवरदे तारक संजीवनी ॥धृ॥
🙏 आई राजा उदे उदे, अंबाबाई उदे उदे! 🌸`,
  },
  {
    title: "Ganesh Aarti (Sanskrit)",
    icon: "ॐ",
    lang: "Sanskrit",
    text: `जय गणेश जय गणेश जय गणेश देवा ।
माता जाकी पार्वती पिता महादेवा ॥धृ॥
एकदन्त दयावन्त चारभुजाधारी ।
माथे सिंदूर सोहे मूषक की सवारी ॥१॥
जय गणेश जय गणेश जय गणेश देवा ।
माता जाकी पार्वती पिता महादेवा ॥धृ॥
अंधन को आँख देत कोढ़िन को काया ।
बाँझन को पुत्र देत निर्धन को माया ॥२॥
जय गणेश जय गणेश जय गणेश देवा ।
माता जाकी पार्वती पिता महादेवा ॥धृ॥
हार चढ़े फूल चढ़े और चढ़े मेवा ।
लड्डुअन का भोग लगे संत करें सेवा ॥३॥
जय गणेश जय गणेश जय गणेश देवा ।
माता जाकी पार्वती पिता महादेवा ॥धृ॥
दीनन की लाज रखो शंभु सुतवारी ।
कामना को पूर्ण करो जग बलिहारी ॥४॥
जय गणेश जय गणेश जय गणेश देवा ।
माता जाकी पार्वती पिता महादेवा ॥धृ॥
🙏 वक्रतुंड महाकाय सूर्यकोटि समप्रभ ।
निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
🌺 श्री गणेशाय नमः 🌺`,
  },
];

const MANTRAS = [
  {
    text: "ॐ गं गणपतये नमः",
    meaning: "Om. Salutations to Lord Ganesha. Remover of all obstacles.",
  },
  {
    text: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।\nनिर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा।।",
    meaning:
      "O Ganesha with curved trunk and mighty form, with the brilliance of a million suns. Please make all my works obstacle free forever.",
  },
  {
    text: "ॐ एकदंताय विद्महे वक्रतुण्डाय धीमहि।\nतन्नो दंती प्रचोदयात्।।",
    meaning:
      "We know the one-tusked Lord. We meditate on the curved trunk lord. May that elephant-faced one inspire us.",
  },
  {
    text: "श्री गणेशाय नमः",
    meaning:
      "Salutations to Lord Ganesha. May you bless us with wisdom and prosperity.",
  },
  {
    text: "ॐ श्रीं गं सौम्याय गणपतये।\nवर वरद सर्वजनं मे वशमानय स्वाहा।।",
    meaning:
      "Om. Salutations to the auspicious Ganesha. Bestow blessings and bring all beings under the sphere of your grace.",
  },
];

const FAQS = [
  {
    q: "When does Ganesh Chaturthi 2026 start?",
    a: "Ganesh Chaturthi 2026 falls on Sep 14, 2026. The celebrations at Rupamata Mitra Mandal begin with Ganpati Sthapana at 6:30 PM and continue for 10 days until Visarjan on September 25, 2026.",
  },
  {
    q: "What are the daily Aarti timings?",
    a: "Daily Aarti is held four times: Morning Aarti at 10:30 AM, Evening Aarti at 7:30 PM.",
  },
  {
    q: "How can I donate to Rupamata Mitra Mandal?",
    a: "You can donate online via PhonePe (rupamata@y...), Google Pay (rupamata@ok...), Paytm (rupamata@pa...), or through bank transfer. Cash donations can be given at our office. All donations are transparently tracked.",
  },
  {
    q: "Is parking available near the Mandal?",
    a: "Yes, free parking is available for devotees near the pandal. Parking is managed by our volunteers. PMPML buses 27, 48, and 55 also pass nearby.",
  },
  {
    q: "How can I register as a volunteer?",
    a: "You can register as a volunteer through our online form in the Volunteer Registration section. Fill in your details, preferred role, and skills. Selected volunteers will be contacted by our team.",
  },
  {
    q: "What competitions are held during the festival?",
    a: "We organize Competition),bGames/Competition, and Bhajan. Registrations are open online. Prizes await winners!",
  },
  {
    q: "When is the Mahaprasad?",
    a: "Grand Mahaprasad is organized on Day 5 (Sep 18, 2026) at 12:00 PM. It is open to all devotees completely free of charge. We serve authentic Maharashtrian cuisine for 100+ people.",
  },
  {
    q: "How can I contact the mandal?",
    a: "Phone: +91 730002727 | Email: info@rupamata.org | WhatsApp available 24/7. You can also visit us at Rupamatanagar, Savedi, Ahilyanagar– 411003.",
  },
  {
    q: "Is live streaming available?",
    a: "Yes! We live stream daily Aarti and special events on our YouTube channel. Subscribe to get notifications. Live streaming is available during festival days.",
  },
  {
    q: "What is the Visarjan date and time?",
    a: "Visarjan (immersion procession) takes place on September 25, 2026 at 6:00 PM. The grand procession starts from our pandal and proceeds to the river with dhol-tasha, music, and devotion.",
  },
];

const COMPETITIONS = [
  {
    icon: "🎨",
    title: "Competition",
    desc: "Express your devotion through art. Open for children aged 5-15 years. Theme: Lord Ganesha & Nature.",
    tags: ["Age 5-15", "sep 20", "Free Entry"],
    prize: "....",
  },
  {
    icon: "🌺",
    title: "Games",
    desc: "Enjoy fun games and activities. Open for all age groups. Theme: Ganesh Festival Colors.",
    tags: ["All Ages", "Sep 21", "Free Entry"],
    prize: "....",
  },
  {
    icon: "🎵",
    title: "Bhajan",
    desc: "Sing devotional Ganesh bhajans. Solo and group categories. Judged by professional artists.",
    tags: ["Sep 22", "Free Entry"],
    prize: "....",
  },
  {
    icon: "💃",
    title: "Dance",
    desc: " Enjoy Dance with DJ. All age groups welcome.",
    tags: ["Aug 23", "Free Entry"],
    prize: "......",
  },
];

const SPONSORS = {
  platinum: [
    { name: "Shree Enterprises", logo: "🏢", type: "Business Partner" },
    { name: "Rupamata Hos", logo: "💎", type: "Gold Partner" },
    { name: "City Motors", logo: "🚗", type: "Official Sponsor" },
  ],
  gold: [
    { name: "Annapurna Foods", logo: "🍱", type: "Prasad Sponsor" },
    { name: "PrintWorld Media", logo: "🖨️", type: "Media Partner" },
    { name: "Bright Lights", logo: "💡", type: "Lighting Partner" },
    { name: "SafeGuard Security", logo: "🛡️", type: "Security Partner" },
  ],
};

const COMMUNITY = [
  {
    icon: "🎂",
    title: "Birthday Wishes",
    desc: "Happy Birthday to all members born in September! May Bappa bless you abundantly on your special day.",
    date: "Sep, 2026",
  },
  {
    icon: "🌟",
    title: "Member of the Month",
    desc: "Sanchit Phapale awarded Member of the Month for his outstanding dedication to festival preparations.",
    date: "Sep, 2026",
  },
  {
    icon: "🌱",
    title: "Green Ganpati Initiative",
    desc: "Our eco-friendly Ganpati initiative collected clay idols. Join us for a greener festival this year!",
    date: "Sep,  2026",
  },
  {
    icon: "🤝",
    title: "Community Service",
    desc: "100+ meal packets distributed to underprivileged families as part of our social responsibility program.",
    date: "Sep, 2026",
  },
  {
    icon: "📚",
    title: "Education Drive",
    desc: "Donated books and school supplies to local government school students through our education fund.",
    date: "Sep, 2026",
  },
  {
    icon: "🏆",
    title: "Award Recognition",
    desc: 'Rupamata Mitra Mandal receives "Best Festival Organization 2025".',
    date: "Aug, 2025",
  },
];

const DAILY_QUOTES = [
  "विघ्नहर्ता, मंगलकर्ता, सुखकर्ता श्री गणेश — नमो नमः।",
  "ॐ गं गणपतये नमः — Wisdom begins with Ganesha's grace.",
  "गणपती बाप्पा मोरया, मंगलमूर्ती मोरया!",
  "एकदंत महाकाय विघ्नराज — सर्व संकट दूर करो।",
  "Bappa's presence fills our hearts with joy and our lives with blessings.",
  "May Lord Ganesha's wisdom guide your every step today.",
  "Jai Ganesh, Jai Ganesh, Jai Ganesh deva — Mata jaaki Parvati, pita mahadeva.",
];

const CHATBOT_RESPONSES = {
  aarti:
    "🙏 Aarti Timings:\n• Morning Aarti: 10.30 AM\n•  Evening Aarti: 7:30 PM\n• Live streaming available on our YouTube channel!",
  timing:
    "⏰ Aarti Timings:\n• Morning: 10.30 AM\n• Evening: 7:30 PM\n• Pandal is open from 10:00 AM to 10:00 PM daily.",
  donat:
    "💰 How to Donate:\n• PhonePe: rupamata@y..\n• Google Pay: rupamata@ok...\n• Paytm: rupamata@pay...\n• Bank: SBI - 1234567xxxxx, IFSC: SBIN000xxxx\n• Cash donations at our office\n\nAll donations transparently tracked!",
  event:
    "📅 Key Events:\n• Day 1 (Sep 14): Sthapana + Pran Pratishtha\n• Day 5 (Sep 18): Mahaprasad for 100+\n• Day 10 (Sep 25): Grand Visarjan at 6 PM\n\nVisit #events section for complete schedule!",
  contact:
    "📞 Contact Us:\n• Phone: +91 7300092727\n• Email: info@rupamata.org\n• WhatsApp: Available 24/7\n• Address: Rupamatanagar, Savedi, Ahilyanagar- 411003",
  prasad:
    "🍱 Mahaprasad Details:\n• Date: Sep 18, 2026\n• Time: 12:00 PM onwards\n• Capacity: 100+ devotees\n• Menu: Traditional Maharashtrian cuisine\n• Entry: FREE for all!",
  visarjan:
    "🌊 Visarjan 2026:\n• Date: September 25, 2026\n• Time: 6:00 PM\n• Starting Point: Our Pandal\n• Route: Main road → River Ghat\n\nGrand procession with dhol-tasha, music & flowers!",
  volunteer:
    "🙌 Join as Volunteer!\nRegister in the Volunteer section with:\n• Full name & mobile\n• Preferred role\n• Your skills\n\nPerks: Certificate + T-shirt + Free meals + Recognition award!",
  "ganpati bappa morya":
    "🐘 Mangal Murti Morya! 🙏\n\nGanpati Bappa ki Jai! May Lord Ganesha bless you with wisdom, prosperity, and happiness always!\n\nPudchya varshi lavkar ya! 🌸",
  morya:
    "🐘 Mangal Murti Morya! 🙏\n\nGanpati Bappa ki Jai! Wishing you and your family Bappa's divine blessings always!",
  hello:
    "🙏 Namaste! Welcome to Rupamata Mitra Mandal!\n\nI'm your assistant. Ask me about:\n• Aarti timings\n• Events & schedule\n• Donations\n• Competitions\n• Contact details",
  competition:
    "🏆 Competitions 2026:\n• Drawing Competition: 19 Sep\n• Bhajan Competition: 21 Sep\n• Competition: 20 Sep\n• Lavani/Folk Dance: 23 Sep\n\nAll competitions are FREE to enter! Register online.",
  live: "📺 Live Streaming:\nWe stream daily Aarti on YouTube!\n• Morning Aarti: 10:00 AM\n• Evening Aarti: 8:00 PM\n\nSubscribe to our YouTube channel for notifications during festival days (Sep 14 – Sep 25).",
  location:
    "📍 Find Us:\nRupamata Hos., Savedi \nAhilyanagar, Maharashtra – 411003\n\n• Bus: PMPML 27, 48, 55\n• Free Parking Available\n• Darshan: 10 AM – 10 PM",
};

// ============================================================
//  LOADER
// ============================================================
(function initLoader() {
  let progress = 0;
  const bar = document.getElementById("loaderBar");
  const pct = document.getElementById("loaderPct");
  const loader = document.getElementById("loader");
  const flowers = document.getElementById("loaderFlowers");
  if (!bar || !loader) return;
  // Create loader flowers
  for (let i = 0; i < 20; i++) {
    const f = document.createElement("div");
    f.className = "flower";
    f.textContent = ["🌸", "🌺", "🌼", "✿", "❋"][Math.floor(Math.random() * 5)];
    f.style.left = Math.random() * 100 + "%";
    f.style.fontSize = 0.8 + Math.random() * 1.2 + "rem";
    f.style.animationDuration = 3 + Math.random() * 4 + "s";
    f.style.animationDelay = Math.random() * 3 + "s";
    if (flowers) flowers.appendChild(f);
  }
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add("hidden");
        document.body.style.overflow = "";
        initAll();
      }, 600);
    }
    bar.style.width = progress + "%";
    if (pct) pct.textContent = Math.round(progress) + "%";
  }, 100);
  document.body.style.overflow = "hidden";
})();

function initAll() {
  initAnnBar();
  initNavbar();
  initHeroCanvas();
  initFlowerRain();
  initFloatingDiyas();
  initCountdown();
  initDarshanDate();
  initMantra();
  initEvents();
  initGallery();
  initDonorTable();
  initExpenseTable();
  initFinancial();
  initProgressBar();
  initTopDonors();
  initAarti();
  initCommittee();
  initCompetitions();
  initSponsors();
  initCommunity();
  initDiary();
  initFAQ();
  initChatbot();
  initScrollReveal();
  initScrollEffects();
  initTheme();
  initForms();
  initCursorGlow();
  initMobileNav();
  initStatCounters();
  animateFinancialCounters();
}

// ============================================================
//  ANNOUNCEMENT BAR
// ============================================================
function initAnnBar() {
  const close = document.getElementById("annClose");
  const bar = document.getElementById("annBar");
  if (close && bar) {
    close.addEventListener("click", () => {
      bar.style.display = "none";
      // Shift nav top offset
      const nav = document.getElementById("navbar");
      if (nav) nav.style.top = "0";
    });
  }
  // Duplicate track for seamless loop
  const track = document.getElementById("annTrack");
  if (track) {
    const clone = track.innerHTML;
    track.innerHTML += clone;
  }
}

// ============================================================
//  NAVBAR
// ============================================================
function initNavbar() {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      // Mobile madhye Finance dropdown open kara
      if (
        window.innerWidth <= 768 &&
        this.parentElement.classList.contains("has-dropdown")
      ) {
        e.preventDefault();
        this.parentElement.classList.toggle("mobile-open");
        return;
      }

      // Fakt actual menu item select zalyavar menu close kara
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");

      if (navOverlay) {
        navOverlay.classList.remove("visible");
      }
    });
  });

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navLinks.classList.toggle("open");
      if (navOverlay) navOverlay.classList.toggle("visible");
    });
  }
  if (navOverlay) {
    navOverlay.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
      navOverlay.classList.remove("visible");
    });
  }
  // Close on link click
  document.querySelectorAll(".nav-link, .dd-item").forEach((link) => {
    link.addEventListener("click", (e) => {
      // Mobile madhye Finance parent link var menu close karu naka
      if (
        window.innerWidth <= 768 &&
        link.parentElement.classList.contains("has-dropdown")
      ) {
        return;
      }

      hamburger.classList.remove("open");
      navLinks.classList.remove("open");

      if (navOverlay) {
        navOverlay.classList.remove("visible");
      }
    });
  });
  // Active link on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener(
    "scroll",
    () => {
      const scrollY = window.scrollY + 120;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
          document
            .querySelectorAll(".nav-link")
            .forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(`.nav-link[href="#${id}"]`);
          if (active) active.classList.add("active");
        }
      });
    },
    { passive: true },
  );
}

// ============================================================
//  HERO CANVAS PARTICLES
// ============================================================
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let W, H, particles;
  function resize() {
    W = canvas.width = canvas.parentElement.offsetWidth;
    H = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener("resize", resize, { passive: true });
  particles = Array.from({ length: 80 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 2 + 0.5,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    alpha: Math.random() * 0.6 + 0.2,
    color: Math.random() > 0.5 ? "#FF6B00" : "#FFD700",
  }));
  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ============================================================
//  FLOWER RAIN
// ============================================================
function initFlowerRain() {
  const container = document.getElementById("flowerRain");
  if (!container) return;
  const symbols = ["🌸", "🌺", "🌼", "✿", "❋", "🌻"];
  function createFlower() {
    const f = document.createElement("div");
    f.className = "flower";
    f.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    f.style.left = Math.random() * 100 + "vw";
    f.style.fontSize = 0.8 + Math.random() + "rem";
    f.style.animationDuration = 5 + Math.random() * 8 + "s";
    f.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(f);
    setTimeout(() => f.remove(), 14000);
  }
  for (let i = 0; i < 15; i++) setTimeout(createFlower, Math.random() * 3000);
  setInterval(createFlower, 800);
}

// ============================================================
//  FLOATING DIYAS
// ============================================================
function initFloatingDiyas() {
  const container = document.getElementById("floatingDiyas");
  if (!container) return;
  const positions = [
    [8, 75],
    [15, 85],
    [22, 70],
    [85, 80],
    [90, 70],
    [78, 90],
    [50, 88],
    [35, 82],
    [65, 75],
  ];
  positions.forEach(([left, top], i) => {
    const d = document.createElement("div");
    d.className = "diya-el";
    d.textContent = "🪔";
    d.style.left = left + "%";
    d.style.top = top + "%";
    d.style.animationDuration = 2 + Math.random() * 2 + "s";
    d.style.animationDelay = i * 0.3 + "s";
    container.appendChild(d);
  });
}

// ============================================================
//  COUNTDOWN TIMER
// ============================================================
function initCountdown() {
  const target = new Date("2026-09-14T00:00:00");
  function update() {
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById("cdDays").textContent = "00";
      document.getElementById("cdHours").textContent = "00";
      document.getElementById("cdMins").textContent = "00";
      document.getElementById("cdSecs").textContent = "00";
      const lbl = document.getElementById("fpLabel");
      if (lbl) lbl.textContent = "Festival Is Live!";
      const bar = document.getElementById("fpBar");
      if (bar) bar.style.width = "100%";
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    const pad = (n) => String(n).padStart(2, "0");
    document.getElementById("cdDays").textContent = pad(days);
    document.getElementById("cdHours").textContent = pad(hours);
    document.getElementById("cdMins").textContent = pad(mins);
    document.getElementById("cdSecs").textContent = pad(secs);
    // Progress bar (festival year: Jan 1 to Aug 22 = ~234 days)
    const yearStart = new Date("2026-01-01");
    const total = target - yearStart;
    const elapsed = now - yearStart;
    const pct = Math.min(100, Math.max(0, (elapsed / total) * 100));
    const bar = document.getElementById("fpBar");
    if (bar) bar.style.width = pct + "%";
  }
  update();
  setInterval(update, 1000);
}

// ============================================================
//  DARSHAN DATE
// ============================================================
function initDarshanDate() {
  const el = document.getElementById("darshanDate");
  if (el) {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    el.textContent = now.toLocaleDateString("en-IN", options);
  }
  // Rotate daily quote
  const qEl = document.getElementById("dailyQuote");
  if (qEl) {
    const idx = new Date().getDate() % DAILY_QUOTES.length;
    qEl.textContent = DAILY_QUOTES[idx];
  }
}

// ============================================================
//  MANTRA CAROUSEL
// ============================================================
function initMantra() {
  let current = 0;
  const textEl = document.getElementById("mantraText");
  const meaningEl = document.getElementById("mantraMeaning");
  const dotsEl = document.getElementById("mantraDots");
  const nextBtn = document.getElementById("mantraNext");
  if (!textEl) return;
  function renderDots() {
    if (!dotsEl) return;
    dotsEl.innerHTML = MANTRAS.map(
      (_, i) =>
        `<div class="mantra-dot ${i === current ? "active" : ""}"></div>`,
    ).join("");
    dotsEl.querySelectorAll(".mantra-dot").forEach((d, i) => {
      d.addEventListener("click", () => {
        current = i;
        show();
      });
    });
  }
  function show() {
    textEl.style.opacity = "0";
    setTimeout(() => {
      textEl.textContent = MANTRAS[current].text;
      if (meaningEl) meaningEl.textContent = MANTRAS[current].meaning;
      textEl.style.opacity = "1";
      renderDots();
    }, 300);
  }
  textEl.style.transition = "opacity 0.3s";
  renderDots();
  if (nextBtn)
    nextBtn.addEventListener("click", () => {
      current = (current + 1) % MANTRAS.length;
      show();
    });
  // Auto advance every 8s
  setInterval(() => {
    current = (current + 1) % MANTRAS.length;
    show();
  }, 8000);
}

// ============================================================
//  EVENTS
// ============================================================
function initEvents() {
  const grid = document.getElementById("eventsGrid");
  const filter = document.getElementById("eventsFilter");
  if (!grid) return;
  function render(filterDay) {
    const filtered =
      filterDay === "all"
        ? EVENTS
        : EVENTS.filter((e) => String(e.day) === filterDay);
    grid.innerHTML = filtered
      .map(
        (e) => `
      <div class="event-card reveal-up">
        <div class="event-header">
          <span class="event-day-badge">Day ${e.day}</span>
          <span class="event-time"><i class="fas fa-clock"></i> ${e.time}</span>
        </div>
        <div class="event-body">
          <div class="event-title">${e.title}</div>
          <div class="event-desc">${e.desc}</div>
        </div>
        <div class="event-footer">
          ${e.tags.map((t) => `<span class="event-tag">${t}</span>`).join("")}
        </div>
      </div>
    `,
      )
      .join("");
    observeReveal();
  }
  render("all");
  if (filter) {
    filter.querySelectorAll(".fbtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        filter
          .querySelectorAll(".fbtn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        render(btn.dataset.filter);
      });
    });
  }
}

// ============================================================
//  GALLERY
// ============================================================
let currentGallery = [...GALLERY];
let lightboxIndex = 0;

function initGallery() {
  const grid = document.getElementById("galleryGrid");
  const filter = document.getElementById("galleryFilter");
  if (!grid) return;
  function render(cat) {
    const items =
      cat === "all" ? GALLERY : GALLERY.filter((g) => g.cat === cat);
    currentGallery = items;
    grid.innerHTML = items
      .map(
        (g, i) => `
      <div class="gallery-item" data-index="${i}">
        <img src="${g.src}" alt="${g.cap}" loading="lazy" />
        <div class="gallery-overlay"><span class="gallery-caption">${g.cap}</span></div>
      </div>
    `,
      )
      .join("");
    grid.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", () =>
        openLightbox(parseInt(item.dataset.index)),
      );
    });
  }
  render("all");
  if (filter) {
    filter.querySelectorAll(".fbtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        filter
          .querySelectorAll(".fbtn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        render(btn.dataset.filter);
      });
    });
  }
}

function openLightbox(index) {
  lightboxIndex = index;
  const lb = document.getElementById("lightbox");
  if (!lb) return;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
  showLightboxImage();
}
function showLightboxImage() {
  const img = document.getElementById("lbImg");
  const cap = document.getElementById("lbCap");
  if (img) img.src = currentGallery[lightboxIndex].src;
  if (cap) cap.textContent = currentGallery[lightboxIndex].cap;
}
function closeLightbox() {
  const lb = document.getElementById("lightbox");
  if (lb) lb.classList.remove("open");
  document.body.style.overflow = "";
}
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("lbClose")?.addEventListener("click", closeLightbox);
  document
    .getElementById("lbBackdrop")
    ?.addEventListener("click", closeLightbox);
  document.getElementById("lbPrev")?.addEventListener("click", () => {
    lightboxIndex =
      (lightboxIndex - 1 + currentGallery.length) % currentGallery.length;
    showLightboxImage();
  });
  document.getElementById("lbNext")?.addEventListener("click", () => {
    lightboxIndex = (lightboxIndex + 1) % currentGallery.length;
    showLightboxImage();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") {
      lightboxIndex =
        (lightboxIndex - 1 + currentGallery.length) % currentGallery.length;
      showLightboxImage();
    }
    if (e.key === "ArrowRight") {
      lightboxIndex = (lightboxIndex + 1) % currentGallery.length;
      showLightboxImage();
    }
  });
});

// ============================================================
//  DONOR TABLE
// ============================================================
let donorPage = 1;
const DONORS_PER_PAGE = 8;
let filteredDonors = [...DONORS];

function initDonorTable() {
  renderDonorTable();
  document
    .getElementById("donorSearch")
    ?.addEventListener("input", filterDonors);
  document
    .getElementById("donorFilter")
    ?.addEventListener("change", filterDonors);
  document
    .getElementById("donorSort")
    ?.addEventListener("change", filterDonors);
}

function filterDonors() {
  const search =
    document.getElementById("donorSearch")?.value.toLowerCase() || "";
  const type = document.getElementById("donorFilter")?.value || "all";
  const sort = document.getElementById("donorSort")?.value || "amt-desc";
  filteredDonors = DONORS.filter((d) => {
    const matchSearch =
      d.name.toLowerCase().includes(search) ||
      d.msg.toLowerCase().includes(search);
    const matchType = type === "all" || d.type === type;
    return matchSearch && matchType;
  });
  filteredDonors.sort((a, b) => {
    if (sort === "amt-desc") return b.amount - a.amount;
    if (sort === "amt-asc") return a.amount - b.amount;
    if (sort === "name") return a.name.localeCompare(b.name);
    return 0;
  });
  donorPage = 1;
  renderDonorTable();
}

function renderDonorTable() {
  const body = document.getElementById("donorBody");
  if (!body) return;
  const start = (donorPage - 1) * DONORS_PER_PAGE;
  const page = filteredDonors.slice(start, start + DONORS_PER_PAGE);
  body.innerHTML = page
    .map(
      (d, i) => `
    <tr>
      <td>${start + i + 1}</td>
      <td><strong style="color:var(--text)">${d.name}</strong></td>
      <td style="color:var(--gold);font-weight:700">₹${d.amount.toLocaleString("en-IN")}</td>
      <td><span class="badge badge-${d.type.toLowerCase()}">${d.type}</span></td>
      <td>${new Date(d.date).toLocaleDateString("en-IN")}</td>
      <td style="color:var(--text-muted);font-style:italic">${d.msg}</td>
    </tr>
  `,
    )
    .join("");
  renderDonorPager();
}

function renderDonorPager() {
  const pager = document.getElementById("donorPager");
  if (!pager) return;
  const total = Math.ceil(filteredDonors.length / DONORS_PER_PAGE);
  pager.innerHTML = Array.from(
    { length: total },
    (_, i) =>
      `<button class="page-btn ${i + 1 === donorPage ? "active" : ""}" data-p="${i + 1}">${i + 1}</button>`,
  ).join("");
  pager.querySelectorAll(".page-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      donorPage = parseInt(btn.dataset.p);
      renderDonorTable();
    });
  });
}

// ============================================================
//  EXPENSE TABLE + CHART
// ============================================================
function initExpenseTable() {
  renderExpenseTable();
  renderExpenseCats();
  renderExpenseChart();
}

function renderExpenseCats() {
  const cats = document.getElementById("expenseCats");
  if (!cats) return;
  const catGroups = {};
  EXPENSES.forEach((e) => {
    if (!catGroups[e.cat]) catGroups[e.cat] = 0;
    catGroups[e.cat] += e.amount;
  });
  const colors = [
    "#FF6B00",
    "#FFD700",
    "#8B0000",
    "#FF8C00",
    "#E05A00",
    "#D4A017",
    "#cc3300",
    "#ff9900",
  ];
  cats.innerHTML = Object.entries(catGroups)
    .map(
      ([cat, total], i) => `
    <div class="exp-cat-pill" data-cat="${cat}">
      <span class="dot" style="background:${colors[i % colors.length]}"></span>
      <span>${cat}</span>
      <strong style="color:var(--gold);margin-left:4px">₹${total.toLocaleString("en-IN")}</strong>
    </div>
  `,
    )
    .join("");
  cats.querySelectorAll(".exp-cat-pill").forEach((pill) => {
    pill.addEventListener("click", () => {
      cats
        .querySelectorAll(".exp-cat-pill")
        .forEach((p) => p.classList.remove("active"));
      pill.classList.toggle("active");
    });
  });
}

function renderExpenseTable() {
  const body = document.getElementById("expenseBody");
  if (!body) return;
  body.innerHTML = EXPENSES.map(
    (e, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong style="color:var(--text)">${e.item}</strong></td>
      <td><span class="event-tag">${e.cat}</span></td>
      <td style="color:var(--primary);font-weight:700">₹${e.amount.toLocaleString("en-IN")}</td>
      <td style="color:var(--text-muted)">${e.vendor}</td>
      <td><span class="badge badge-${e.status.toLowerCase()}">${e.status}</span></td>
    </tr>
  `,
  ).join("");
}

function renderExpenseChart() {
  const canvas = document.getElementById("expChart");
  const legendEl = document.getElementById("chartLegend");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const catGroups = {};
  EXPENSES.forEach((e) => {
    if (!catGroups[e.cat]) catGroups[e.cat] = 0;
    catGroups[e.cat] += e.amount;
  });
  const labels = Object.keys(catGroups);
  const values = Object.values(catGroups);
  const total = values.reduce((a, b) => a + b, 0);
  const colors = [
    "#FF6B00",
    "#FFD700",
    "#8B0000",
    "#FF8C00",
    "#E05A00",
    "#D4A017",
    "#cc3300",
    "#ff9900",
  ];
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const r = Math.min(cx, cy) - 20;
  let startAngle = -Math.PI / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  values.forEach((v, i) => {
    const angle = (v / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + angle);
    ctx.closePath();
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.strokeStyle = "#1A0E00";
    ctx.lineWidth = 2;
    ctx.stroke();
    startAngle += angle;
  });
  // Center hole
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.45, 0, 2 * Math.PI);
  ctx.fillStyle = "#2E1500";
  ctx.fill();
  // Center text
  ctx.fillStyle = "#FFD700";
  ctx.font = "bold 12px Poppins";
  ctx.textAlign = "center";
  ctx.fillText("Expenses", cx, cy - 6);
  ctx.font = "10px Poppins";
  ctx.fillStyle = "#B8926A";
  ctx.fillText("₹" + (total / 1000).toFixed(0) + "K", cx, cy + 10);
  // Legend
  if (legendEl) {
    legendEl.innerHTML = labels
      .map(
        (l, i) => `
      <div class="legend-row">
        <div class="legend-dot" style="background:${colors[i % colors.length]}"></div>
        <span>${l}: <strong style="color:var(--text)">₹${values[i].toLocaleString("en-IN")}</strong></span>
      </div>
    `,
      )
      .join("");
  }
}

// ============================================================
//  FINANCIAL DASHBOARD
// ============================================================
function initFinancial() {
  const totalCollection = DONORS.reduce((s, d) => s + d.amount, 0);
  const totalExpenses = EXPENSES.reduce((s, e) => s + e.amount, 0);
  const balance = totalCollection - totalExpenses;
  document.getElementById("finTotal").textContent =
    "₹" + totalCollection.toLocaleString("en-IN");
  document.getElementById("finExpense").textContent =
    "₹" + totalExpenses.toLocaleString("en-IN");
  document.getElementById("finBalance").textContent =
    "₹" + balance.toLocaleString("en-IN");
  document.getElementById("finDonors").textContent = DONORS.length;
}

function animateFinancialCounters() {
  const totalCollection = DONORS.reduce((s, d) => s + d.amount, 0);
  const totalExpenses = EXPENSES.reduce((s, e) => s + e.amount, 0);
  function animateCount(el, target, prefix = "₹") {
    if (!el) return;
    let start = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      el.textContent = prefix + Math.round(start).toLocaleString("en-IN");
    }, 16);
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCount(document.getElementById("finTotal"), totalCollection);
          animateCount(document.getElementById("finExpense"), totalExpenses);
          animateCount(
            document.getElementById("finBalance"),
            totalCollection - totalExpenses,
          );
          obs.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );
  const finSec = document.getElementById("financial");
  if (finSec) obs.observe(finSec);
}

// ============================================================
//  DONATION PROGRESS
// ============================================================
function initProgressBar() {
  const totalCollection = DONORS.reduce((s, d) => s + d.amount, 0);
  const goal = 100000;
  const pct = Math.min(100, (totalCollection / goal) * 100);
  const progRaised = document.getElementById("progRaised");
  const progBar = document.getElementById("progBar");
  const progPct = document.getElementById("progPct");
  if (progRaised)
    progRaised.textContent = "₹" + totalCollection.toLocaleString("en-IN");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (progBar) progBar.style.width = pct + "%";
          if (progPct) progPct.textContent = pct.toFixed(1) + "%";
          obs.disconnect();
        }
      });
    },
    { threshold: 0.3 },
  );
  const progSec = document.getElementById("donate");
  if (progSec) obs.observe(progSec);
}

// ============================================================
//  TOP DONORS
// ============================================================
function initTopDonors() {
  const grid = document.getElementById("topDonorsGrid");
  if (!grid) return;
  const sorted = [...DONORS].sort((a, b) => b.amount - a.amount).slice(0, 8);
  const avatarColors = [
    "#FF6B00",
    "#FFD700",
    "#8B0000",
    "#FF8C00",
    "#D4A017",
    "#E05A00",
    "#cc3300",
    "#ff9900",
  ];
  grid.innerHTML = sorted
    .map((d, i) => {
      const rankClass =
        i === 0
          ? "rank-1"
          : i === 1
            ? "rank-2"
            : i === 2
              ? "rank-3"
              : "rank-other";
      const trophy = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1;
      return `
      <div class="donor-top-card glass-card reveal-up">
        <div class="donor-rank ${rankClass}">${typeof trophy === "number" ? trophy : ""}</div>
        <div class="donor-avatar" style="background:${avatarColors[i]}">
          ${d.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .substring(0, 2)}
        </div>
        <div class="donor-top-name">${d.name}</div>
        <div class="donor-top-amount">₹${d.amount.toLocaleString("en-IN")}</div>
        <div class="donor-top-badge">${d.type}</div>
      </div>
    `;
    })
    .join("");
  observeReveal();
}

// ============================================================
//  AARTI
// ============================================================
function initAarti() {
  const grid = document.getElementById("aartiGrid");
  if (!grid) return;
  grid.innerHTML = AARTIS.map(
    (a, i) => `
    <div class="aarti-card glass-card reveal-up" data-i="${i}">
      <div class="aarti-header">
        <div class="aarti-title"><span class="aarti-icon">${a.icon}</span>${a.title}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="aarti-lang">${a.lang}</span>
          <i class="fas fa-chevron-down aarti-toggle"></i>
        </div>
      </div>
      <div class="aarti-text">${a.text.replace(/\n/g, "<br>")}</div>
    </div>
  `,
  ).join("");
  grid.querySelectorAll(".aarti-card").forEach((card) => {
    card.addEventListener("click", () => card.classList.toggle("open"));
  });
  observeReveal();
}

// ============================================================
//  COMMITTEE
// ============================================================
function initCommittee() {
  const grid = document.getElementById("committeeGrid");
  if (!grid) return;
  grid.innerHTML = COMMITTEE.map(
    (m) => `
    <div class="member-card glass-card reveal-up">
      <div class="member-avatar" style="background:${m.color}">${m.initials}</div>
      <div class="member-name">${m.name}</div>
      <div class="member-role">${m.role}</div>
      <div class="member-contact"><i class="fas fa-phone" style="color:var(--primary)"></i>${m.contact}</div>
      <div class="member-socials">
        <a href="#" class="member-soc"><i class="fab fa-facebook-f"></i></a>
        <a href="#" class="member-soc"><i class="fab fa-whatsapp"></i></a>
        <a href="tel:${m.contact.replace(/\s/g, "")}" class="member-soc"><i class="fas fa-phone"></i></a>
      </div>
    </div>
  `,
  ).join("");
  observeReveal();
}

// ============================================================
//  COMPETITIONS
// ============================================================
function initCompetitions() {
  const grid = document.getElementById("compGrid");
  if (!grid) return;
  grid.innerHTML = COMPETITIONS.map(
    (c) => `
    <div class="comp-card glass-card reveal-up">
      <div class="comp-icon">${c.icon}</div>
      <div class="comp-title">${c.title}</div>
      <div class="comp-desc">${c.desc}</div>
      <div class="comp-meta">
        ${c.tags.map((t) => `<span class="comp-tag">${t}</span>`).join("")}
        <span class="comp-tag" style="background:rgba(34,197,94,0.1);color:var(--success)">Prize: ${c.prize}</span>
      </div>
      <button class="btn-register-comp" onclick="handleCompReg('${c.title}')">Register Now <i class="fas fa-arrow-right"></i></button>
    </div>
  `,
  ).join("");
  observeReveal();
}

function handleCompReg(title) {
  showToast(`Registration for ${title} submitted! We'll contact you soon. 🙏`);
}

// ============================================================
//  SPONSORS
// ============================================================
function initSponsors() {
  const platEl = document.getElementById("platSponsors");
  const goldEl = document.getElementById("goldSponsors");
  function renderSponsors(sponsors, container) {
    if (!container) return;
    container.innerHTML = sponsors
      .map(
        (s) => `
      <div class="sponsor-card">
        <div class="sponsor-logo">${s.logo}</div>
        <div class="sponsor-name">${s.name}</div>
        <div class="sponsor-type">${s.type}</div>
      </div>
    `,
      )
      .join("");
  }
  renderSponsors(SPONSORS.platinum, platEl);
  renderSponsors(SPONSORS.gold, goldEl);
}

// ============================================================
//  COMMUNITY
// ============================================================
function initCommunity() {
  const grid = document.getElementById("communityGrid");
  if (!grid) return;
  grid.innerHTML = COMMUNITY.map(
    (c) => `
    <div class="community-card glass-card reveal-up">
      <div class="comm-icon">${c.icon}</div>
      <div class="comm-content">
        <h4>${c.title}</h4>
        <p>${c.desc}</p>
        <div class="comm-date"><i class="fas fa-calendar" style="margin-right:6px"></i>${c.date}</div>
      </div>
    </div>
  `,
  ).join("");
  observeReveal();
}

// ============================================================
//  DIGITAL DIARY
// ============================================================
function initDiary() {
  const tabs = document.getElementById("diaryTabs");
  const gallery = document.getElementById("diaryGallery");
  if (!tabs || !gallery) return;
  function render(year) {
    const photos = DIARY_PHOTOS[year] || [];
    gallery.innerHTML = photos
      .map(
        (p) => `
      <div class="diary-item">
        <img src="${p.src}" alt="${p.cap}" loading="lazy" />
        <div class="diary-overlay"><i class="fas fa-expand"></i></div>
      </div>
    `,
      )
      .join("");
  }
  render(2026);
  tabs.querySelectorAll(".dtab").forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs
        .querySelectorAll(".dtab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      render(parseInt(tab.dataset.year));
    });
  });
}

// ============================================================
//  FAQ
// ============================================================
function initFAQ() {
  const list = document.getElementById("faqList");
  const search = document.getElementById("faqSearch");
  if (!list) return;
  function render(items) {
    list.innerHTML = items
      .map(
        (f, i) => `
      <div class="faq-item" data-i="${i}">
        <div class="faq-q">${f.q}<i class="fas fa-chevron-down faq-arrow"></i></div>
        <div class="faq-a">${f.a}</div>
      </div>
    `,
      )
      .join("");
    list.querySelectorAll(".faq-item").forEach((item) => {
      item.querySelector(".faq-q").addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        list
          .querySelectorAll(".faq-item")
          .forEach((f) => f.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    });
  }
  render(FAQS);
  if (search) {
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase();
      const filtered = FAQS.filter(
        (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q),
      );
      render(filtered);
    });
  }
}

// ============================================================
//  CHATBOT
// ============================================================
function initChatbot() {
  const toggle = document.getElementById("chatToggle");
  const window_ = document.getElementById("chatWindow");
  const close = document.getElementById("chatClose");
  const input = document.getElementById("chatInput");
  const send = document.getElementById("chatSend");
  const voiceBtn = document.getElementById("voiceBtn");
  const msgs = document.getElementById("chatMsgs");
  const badge = document.getElementById("chatBadge");
  const chips = document.getElementById("chatChips");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    window_.classList.toggle("open");
    if (badge) badge.style.display = "none";
    if (window_.classList.contains("open") && input) input.focus();
  });
  if (close)
    close.addEventListener("click", () => window_.classList.remove("open"));

  function getResponse(text) {
    const lower = text.toLowerCase();
    for (const [key, resp] of Object.entries(CHATBOT_RESPONSES)) {
      if (lower.includes(key)) return resp;
    }
    return "🙏 Thank you for your message! For specific queries, please contact us:\n📞 +91 7300092727\n📧 info@rupamata.org\n\nYou can also try asking about: aarti timings, events, donations, contact, visarjan, prasad, or competitions!";
  }

  function addMsg(text, isUser = false) {
    const div = document.createElement("div");
    div.className = "chat-bubble " + (isUser ? "user-bubble" : "bot-bubble");
    div.innerHTML = `<div class="bubble-text">${text.replace(/\n/g, "<br>")}</div>`;
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
  }

  function sendMsg(text) {
    if (!text.trim()) return;
    addMsg(text, true);
    if (chips) chips.style.display = "none";
    setTimeout(() => {
      addMsg(getResponse(text));
    }, 600);
    if (input) input.value = "";
  }

  if (send) send.addEventListener("click", () => sendMsg(input?.value));
  if (input)
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") sendMsg(input.value);
    });
  if (chips) {
    chips.querySelectorAll(".chip").forEach((chip) => {
      chip.addEventListener("click", () => sendMsg(chip.dataset.q));
    });
  }

  document.addEventListener("click", (e) => {
    if (
      window_.classList.contains("open") &&
      !window_.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      window_.classList.remove("open");
    }
  });

  // Voice Assistant
  if (
    voiceBtn &&
    ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
  ) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = "hi-IN";
    recognition.interimResults = false;
    voiceBtn.addEventListener("click", () => {
      voiceBtn.classList.add("listening");
      recognition.start();
    });
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      voiceBtn.classList.remove("listening");
      sendMsg(transcript);
    };
    recognition.onerror = () => voiceBtn.classList.remove("listening");
    recognition.onend = () => voiceBtn.classList.remove("listening");
  } else if (voiceBtn) {
    voiceBtn.style.display = "none";
  }
}

// Global function for chip suggestions
window.sendSuggestion = function (text) {
  const input = document.getElementById("chatInput");
  if (input) {
    input.value = text;
  }
  const send = document.getElementById("chatSend");
  if (send) send.click();
};

// ============================================================
//  QR COPY
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn-copy-upi").forEach((btn) => {
    btn.addEventListener("click", () => {
      const upi = btn.dataset.upi;
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(upi)
          .then(() => showToast("UPI ID copied! " + upi));
      } else {
        showToast("UPI: " + upi);
      }
    });
  });
});

// ============================================================
//  SCROLL REVEAL
// ============================================================
function observeReveal() {
  const els = document.querySelectorAll(
    ".reveal-up:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed)",
  );
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  els.forEach((el) => obs.observe(el));
}

function initScrollReveal() {
  observeReveal();
  // Observe after dynamic content loads
  const mutationObs = new MutationObserver(observeReveal);
  mutationObs.observe(document.body, { childList: true, subtree: true });
}

// ============================================================
//  SCROLL EFFECTS
// ============================================================
function initScrollEffects() {
  // Back to top
  const backTop = document.getElementById("backTop");
  window.addEventListener(
    "scroll",
    () => {
      if (backTop) {
        if (window.scrollY > 400) backTop.classList.add("visible");
        else backTop.classList.remove("visible");
      }
    },
    { passive: true },
  );
  if (backTop)
    backTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" }),
    );
}

// ============================================================
//  THEME TOGGLE
// ============================================================
function initTheme() {
  const btn = document.getElementById("themeToggle");
  const saved = localStorage.getItem("rmm-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  updateThemeIcon(saved);
  if (btn) {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("rmm-theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const btn = document.getElementById("themeToggle");
  if (btn)
    btn.innerHTML =
      theme === "dark"
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
}

// ============================================================
//  FORMS
// ============================================================
function initForms() {
  const volForm = document.getElementById("volunteerForm");
  if (volForm) {
    volForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(volForm);
      const name = data.get("name");
      showToast(
        `Welcome ${name}! Your volunteer registration is submitted. We'll contact you soon. 🙏`,
      );
      volForm.reset();
    });
  }
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      showToast(
        "Message sent! We will reply within 24 hours. Ganpati Bappa Morya! 🙏",
      );
      contactForm.reset();
    });
  }
}

// ============================================================
//  CURSOR GLOW
// ============================================================
function initCursorGlow() {
  const cursor = document.getElementById("cursorGlow");
  if (!cursor || window.innerWidth < 1024) {
    if (cursor) cursor.style.display = "none";
    return;
  }
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });
}

// ============================================================
//  MOBILE BOTTOM NAV
// ============================================================
function initMobileNav() {
  const mobNav = document.getElementById("mobNav");
  if (!mobNav) return;
  const links = mobNav.querySelectorAll(".mn-item");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

// ============================================================
//  STAT COUNTERS
// ============================================================
function initStatCounters() {
  const counters = document.querySelectorAll("[data-count]");
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          let current = 0;
          const step = target / 60;
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            el.textContent =
              Math.round(current) + (el.closest(".hero-stats") ? "+" : "+");
          }, 16);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach((el) => obs.observe(el));
}

// ============================================================
//  TOAST
// ============================================================
function showToast(msg, duration = 4000) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), duration);
}

// Expose globally
window.copyUPI = function (upi) {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(upi)
      .then(() => showToast("UPI ID copied: " + upi));
  } else {
    showToast("UPI: " + upi);
  }
};

// =====================
// MOBILE NAVIGATION
// =====================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");

    navLinks.classList.toggle("active");

    navOverlay.classList.toggle("");
  });
}

if (navOverlay) {
  navOverlay.addEventListener("click", () => {
    hamburger.classList.remove("open");

    navLinks.classList.remove("active");

    navOverlay.classList.remove("visible");
  });
}

// Close menu after clicking a link

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      hamburger.classList.remove("open");

      navLinks.classList.remove("active");

      navOverlay.classList.remove("visible");
    }
  });
});

document.addEventListener("click", (e) => {
  if (
    navLinks.classList.contains("open") &&
    !navLinks.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");

    if (navOverlay) {
      navOverlay.classList.remove("visible");
    }
  }
});
