//Home.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
// import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Day from "./Day.js";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import { useWindowDimensions } from "react-native";

const Home = () => {
  const navigation = useNavigation(); // Access navigation through the useNavigation hook``
  const days = [
    "04-Dec-24\n Hyderabad to Chennai",
    "05-Dec-24\nChennai Local",
    "06-Dec-24\nChennai to Thirukadaiyur",
    "07-Dec-24\nThirukadaiyur to Thanjavur",
    "08-Dec-24\nThanjavur to Trichy",
    "09-Dec-24\nTrichy to Madurai",
    "10-Dec-24\nMadurai - Srivalliputtur - Madurai",
    "11-Dec-24\n Madurai to Rameswaram",
    "12-Dec-24\nRameswaram to Kanyakumari",
    "13-Dec-24\nKanyakumari Local",
    "14-Dec-24\nKanyakumari to Hyderabad",
  ];
  const trip_data = [
    {
      date: "04-Dec-24",
      title: "Hyderabad to Chennai",
      time: ["4:00 PM\n - \n6:00 AM"],
      place: ["Hyderabad to Chennai"],
      activity: [],
      information: [
        {
          train_no: "12604\nChennai S/F Express",
          departure_time: "5:10 PM",
          berths: "S7- 57 to 61\n S5 - 9",
          purpose: "Departure: Secundrabad",
          instructions: "Carry ID proofs",
        },
      ],
      distance: [],
    },
    {
      date: "05-Dec-24",
      title: "Chennai Local",
      time: ["10:00 AM\n - \n8:00 PM"],
      place: ["Chennai"],
      activity: ["Local site seeing"],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
        },
      ],
      distance: [],

      night_stay: {
        hotel_link:
          "https://www.google.com/maps/place/Rajaji+Bhavan+Complex/@13.0028888,80.2663475,1078m/data=!3m1!1e3!4m6!3m5!1s0x3a5267e4d28eebd5:0xfffdcca34dd8d039!8m2!3d13.0024148!4d80.2690548!16s%2Fg%2F1ths_wsn?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
        name: "Rajaji Bhavan, Chennai",
        address: "CGWB Guest House, Bharat Nagar",
        contact: [],
        owner_flat: "",
        total_amount: "1,500/-",
        advance: "1,500/-",
        due: "nil",
        timing: "8:00 PM\n-\n7:00 AM\n(check in 9am and checkout 11am)",
      },
    },
    {
      date: "06-Dec-24",
      title: "Chennai - Thirukadyur",
      time: [
        "7:00 AM\n - \n8:00 AM",
        "8:00 AM\n - \n12:00 PM",
        "12:00 PM\n - \n4:30 PM",
        "4:30 PM\n - \n6:00 PM",
        "6:00 PM\n - \n6:30 PM",
        "6:30 PM\n - \n7:15 PM",
        "7:15 PM\n - \n8:00 PM",
        "8:00 PM\n - \n9:00 PM",
      ],
      place: [
        "Chennai to Mahabalipuram",
        "Mahabalipuram",
        "Mahabalipuram to Chidambaram",
        "Chidambaram",
        "Chidambaram to Vaitheeswaram",
        "Vaitheeswaran",
        "Vaitheeswaran to Thirukadyur",
        "Thirukadayur",
      ],
      activity: [
        "Travel 1 hr",
        "Site Seeing 4 hrs",
        "Travel 3.5 hrs",
        "Temple Visit 1.5 hrs",
        "Travel 30 mins",
        "Temple visit 45 mins",
        "Travel 45 mins",
        "Temple visit 1 hr",
      ],
      distance: [
        "45 KMs",
        "20 KMs",
        "170 KMs",
        " ",
        "25 KMs",
        " ",
        "25 KMs",
        " ",
      ],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
          instructions: "Record Odometer",
          purpose: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          instructions: "",
          purpose:
            "1.Shore temple \n2. Pancha rathas\n3. Krishna mandapam \n4. Arjuna's penance \n5. Varaha cave\n6. Roya gopuram \n7. Ganesha Ratha",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose: "1. Travel (3 hrs)\n2. Lunch (1 hr)",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose: "Nataraju temple",
          temple_timing: " (5pm-10pm)",
          instructions: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel to Guru temple",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Guru temple",
          temple_timing: " (4pm-9pm)",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel to Abirami temple",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Abirami temple",
          temple_timing: " (4pm-9pm)",
        },
      ],
      night_stay: {
        name: "Hotel Guru",
        hotel_link:
          "https://www.google.com/maps/place/Hotel+Guru/@11.0743079,79.799826,1085m/data=!3m1!1e3!4m10!3m9!1s0x3a551934102bbc93:0x459f0e0a9afba5ba!5m3!1s2024-12-08!4m1!1i2!8m2!3d11.0743026!4d79.8024009!16s%2Fg%2F1hf23bddw?entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D",
        address: "Sannathi street, Thirukadiyur",
        contact: ["+91 9488052467"],
        owner_flat: "(Mr. Madhavan)\n 3 double bed rooms @ ₹800/room",
        total_amount: "2,400/-",
        advance: "Nil",
        due: "2,400/-",
        timing: "9:00 PM\n-\n7:00 AM",
      },
    },
    {
      date: "07-Dec-24",
      title: "Thirukadyur - Thanjavur",
      time: [
        "7:00 AM\n - \n7:15 AM",
        "7:15 AM\n - \n7:30 AM",
        "7:30 AM\n - \n9:00 AM",
        "9:00 AM\n - \n9:30 AM",
        "9:30 AM\n - \n11:00 AM",
        "11:00 AM\n - \n6:00 PM",
        "6:00 PM\n - \n6:15 PM",
        "6:15 PM\n - \n7:00 PM",
        "7:00 PM\n - \n8:00 PM",
      ],
      place: [
        "Thirukadayur to Ananthamangalam",
        "Ananthamangalam",
        "Ananthamangalam to Koothanur",
        "Koothanur",
        "Koothanur to Kumbakonam",
        "Kumbakonam",
        "Kumbakonam to Patteswaram",
        "Patteswaram",
        "Patteswaram to Thanjavur",
      ],
      activity: [
        "Travel 15 mins",
        "Temple visit 15 mins",
        "Travel 1.5 hrs",
        "Temple Visit 30 mins",
        "Travel 1.5 hrs",
        "Temple visit 7 hrs",
        "Travel 15 mins",
        "Temple visit 45 mins",
        "Travel 1 hr",
      ],
      distance: [
        "10 KMs",
        " ",
        "40 KMs",
        " ",
        "40 KMs",
        " ",
        "20 KMs",
        "10 KMs",
        " ",
        "40 KMs",
      ],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
          instructions: "",
          purpose: "To Dhasapuja Anchaneyar Temple",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          instructions: "",
          purpose: "Dhasapuja Anchaneyar Temple",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose: "Travel to  Maha Saraswathy Temple ",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose: "Maha Saraswathy Temple\n",
          temple_timing: " closes (12:30 PM)",
          instructions: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel to Adi Kumbeswarar Swamy, Kumbakonam",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose:
            "1. Adi Kumbeswarar Swamy(11 - 11:30)\n2. Nageswara, 11:30 - 12\n3. Kasi Viswanathar , 12-12:30\n4. Mahamagam tank,  12:30 - 1:00 pm\n5. Lunch + rest \n6. Swamimalai Murugan temple ",
          temple_timing: " (4pm-10 pm)",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel to Durga temple",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose:
            "Durga temple\nShiva temple (same compound)\n",
          temple_timing: " (6am-1 pm, 4pm-9pm)",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel to Srirathna hotel, Thajavur",
          temple_timing: "",
        },
      ],
      night_stay: {
        hotel_link:
          "https://www.google.com/maps/place/Srirathna+Temple+View+Inn/@10.7864115,79.130691,1086m/data=!3m1!1e3!4m10!3m9!1s0x3baab89e40285f35:0x5a8c8cb956700fbc!5m3!1s2024-12-08!4m1!1i2!8m2!3d10.7864062!4d79.1332659!16s%2Fg%2F11s57ylj7p?entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D",
        name: "Srirathna Temple View Inn",
        address: "2961, South Rampart, Opp. Thilagar Thidal, Thanjavur.",
        contact: ["04362 273333", "+91 9976066670"],
        owner_flat: [
          "(Nirmal kumar (Telugu speaking guy))\n Two deluxe triple bedrooms",
        ],
        total_amount: "4,400/-",
        advance: "500/-",
        due: "3,900/-",
        timing: "8:00 PM\n - \n7:00 AM",
      },
    },
    {
      date: "08-Dec-24",
      title: "Thanjavur - Tirchy",
      time: [
        "7:00 AM\n - \n2:30 PM",
        "2:30 PM\n - \n4:00 PM",
        "4:00 PM\n - \n9:00PM",
      ],
      place: ["Thanjavur", "Thanjavur to Tirchy", "Tirchy"],
      activity: [
        "Temple visit 7.5 hrs",
        "Travel 1.5 hrs",
        "Temple visit 5 hrs",
      ],
      distance: ["5 KMs", "60 KMs", "40 KMs"],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose:
            "Brihadeshwaralaya  (6am-12:30pm)\nKali temple (optional)\nThanjavur Royal palace (optional)",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel to Sri Ranganatha swamy temple",
          temple_timing: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose:
            "Sri Rangannatha swanmy (4pm-9pm)\nJambukeswaram\n(opens 3pm-9pm)\nSamayapuram mariamman\nRockfort - 500 steps (optional)",
          temple_timing: "",
        },
      ],

      night_stay: {
        hotel_link:
          "https://www.google.com/maps/place/Yatri+nivas+guest+house/@10.8157183,78.6869083,10346m/data=!3m1!1e3!4m10!3m9!1s0x3baaf741f9601673:0x186bd1edb9832ae3!5m3!1s2024-12-08!4m1!1i2!8m2!3d10.8657996!4d78.698086!16s%2Fg%2F11qbc4px1b?entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D",
        name: "Yatri Nivas",
        address: "Kollidam Flood Bank Rd, Tiruchirapalli. ",
        contact: ["+91 9486482246"],
        owner_flat:
          "check in at 4pm.(24hrs check in)\n3 non a/c double rooms\nRs. 500/- per room",
        total_amount: "1,500/-",
        advance: "Nil",
        due: "1,500/-",
        timing: "9:00 PM\n-\n7:00 AM",
      },
    },
    {
      date: "09-Dec-24",
      title: "Tirchy - Madurai",
      time: [
        "7:00 AM\n - \n10:30 AM",
        "10:30 AM\n - \n2:30 PM",
        "2:30 PM\n - \n6:30PM",
        "6:30 PM\n - \n9:30PM",
      ],
      place: ["Tirchy to Palani", "Palani", "Palani to Madurai", "Madurai"],
      activity: [
        "Travel 3.5 hrs",
        "Temple visit 4 hrs",
        "",
        "Temple visit 3 hrs",
      ],
      distance: ["170 KMs", " ", "120 KMs", " "],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel to Dandayudapani temple",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Danadayudapanu temple",
          temple_timing: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel (3 hrs)\nLunch (1 hr)",
          temple_timing: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Madurai Meenakshi amman temple",
          temple_timing: " (closes 9:30 PM)",
        },
      ],
      night_stay: {
        hotel_link:
          "https://www.google.com/maps/place/Hotel+K+P+S/@9.9177934,78.1096533,1089m/data=!3m2!1e3!4b1!4m10!3m9!1s0x3b00c580b651fd59:0x25d029935a23e8b0!5m3!1s2024-12-08!4m1!1i2!8m2!3d9.9177881!4d78.1122282!16s%2Fg%2F1tp25q6w?entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D",
        name: "KPS Hotel",
        address: "9 W Marret St, Madurai",
        contact: ["04522-341541"],
        owner_flat:
          "check in at 4pm.(24hrs check in)\n2 non a/c Triple sharing rooms\nRs. 1000/- per room",
        total_amount: "2,000/-",
        advance: "Nil",
        due: "2,000/-",
        timing: "9:30 PM\n-\n7:00 AM",
      },
    },
    {
      date: "10-Dec-24",
      title: "Madurai - Srivalliputtur - Madurai",
      time: [
        "7:00 AM\n - \n9:00 AM",
        "9:00 AM\n - \n12:00 PM",
        "12:00 PM\n - \n4:00 PM",
        "4:00 PM\n - \n5:00 PM",
        "5:00 PM\n - \n6:00 PM",
        "6:00 PM\n - \n7:30 PM",
        "7:30 PM\n - \n8:00 PM",
      ],
      place: [
        "Madurai to Srivalliputtur",
        "Srivalliputtur",
        "Srivalliputtur to Pazhamudircholai",
        "Pazhamudircholai",
        "Pazhamudircholai to Tiruparankundram",
        "Tiruparankundram",
        "Tiruparankundram to Madurai",
      ],
      activity: [
        "Travel 2 hrs",
        "Temple visit 3 hrs",
        "Travel 4 hrs",
        "Temple Visit 1 hr",
        "Travel 1 hrs",
        "Temple visit 1.5 hr",
        "Travel 30 mins",
      ],
      distance: ["90 KMs", "10 KMs", "140 KMs", " ", "40 KMs", " ", "10 KMs"],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
          instructions: "",
          purpose: "Travel to Srivalliputtur temple",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          instructions: "",
          purpose:
            "1. Andal kovil\n2. Vaidyanatha swamy\n3. Andal sametha rangamannar",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose: "Travel to Murugan temple 2.5 hrs\nLunch 1 hr\nRest",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose: "Murugan temple",
          temple_timing: "",
          instructions: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel to Murugan temple",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Murugan temple",
          temple_timing: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Travel to hotel",
        },
      ],
      night_stay: {
        hotel_link:
          "https://www.google.com/maps/place/Hotel+K+P+S/@9.9177934,78.1096533,1089m/data=!3m2!1e3!4b1!4m10!3m9!1s0x3b00c580b651fd59:0x25d029935a23e8b0!5m3!1s2024-12-08!4m1!1i2!8m2!3d9.9177881!4d78.1122282!16s%2Fg%2F1tp25q6w?entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D",
        name: "KPS Hotel",
        address: "9 W Marret St, Madurai",
        contact: ["04522-341541"],
        owner_flat: "2 triple sharing rooms\nRs.1,000/- per room",
        total_amount: "2,000/-",
        advance: "Nil",
        due: "2,000/-",
        timing: "8:00 PM\n-\n7:00 AM",
      },
    },
    {
      date: "11-Dec-24",
      title: "Madurai - Rameswaram",
      time: ["7:00 AM\n - \n11:00 AM", "11:00 AM\n - \n8:00 PM"],
      place: ["Madurai to Rameswaram", "Rameswaram"],
      activity: ["Trip time: 4 hrs", "Site seeing 9 hrs"],
      distance: ["190 KMs", "20 KMs"],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose: "Travel 3.5 hrs\nBreak 30 mins",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose:
            "1. Rameswaram temple\n2. Dhanushkodi\n3. Pamban bridge\n4. Local site seing ",
        },
      ],

      night_stay: {
        hotel_link:
          "https://www.google.com/maps/place/Brahmana+Karivena+satram/@9.2880296,79.3127469,1091m/data=!3m1!1e3!4m6!3m5!1s0x3b01e3dbeb62899d:0xd8fbdf02b8d0168!8m2!3d9.2885096!4d79.3194638!16s%2Fg%2F1hdzz3l9l?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
        name: "Brahmana Karivena satram",
        address: "Rameswaram",
        contact: ["04573-222156", "+91 8333907793"],
        owner_flat:
          "(Mr.Nageswara Rao)\n(2 non a/c triple sharing rooms)\nRs.700/- per room",
        total_amount: "1,400/-",
        advance: "Nil",
        due: "1,400/-",
        timing: "8:00 PM\n-\n4:00 AM",
      },
    },
    {
      date: "12-Dec-24",
      title: "Rameswaram - Kanyakumari",
      time: [
        "4:00 AM\n - \n9:00 AM",
        "9:00 AM\n - \n4:00 AM",
        "4:00 PM\n - \n6:00PM",
        "6:00 PM\n - \n8:00PM",
      ],
      place: [
        "Rameswaram",
        "Rameswaram to Tiruchendur",
        "Tiruchendur",
        "Tiruchendur to Kanyakumari",
      ],
      activity: [
        "Temple visit 5 hrs",
        "Trip time: 7 hrs",
        "Site seeing 2 hrs",
        "",
      ],
      distance: ["5 KMs", "225 KMs", " ", "90 KMs"],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose:
            "1. Spatika darsanam\n2. Theertha snanalu\n3. Rameswaram temple",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "To Tiruchendur 5 hrs\nLunch 1 hr\nBreak 1 hr",
          temple_timing: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          carry_id: false,
          purpose: "Beach 1 hr\nMurugan Temple 1 hr",
          temple_timing: "",
        },
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose: "Travel to\n Vivekanandapuram",
          temple_timing: "",
        },
      ],
      night_stay: {
        hotel_link:
          "https://www.google.com/maps/place/Vivekananda+Kendra,+Kanyakumari/@8.0923404,77.5469971,547m/data=!3m1!1e3!4m7!3m6!1s0x3b080d993bec25b3:0xf0a7ac98ae0986a7!8m2!3d8.0923404!4d77.5493789!15sCiJWaXZla2FuYW5kYSBLZW5kcmEgdml2ZWthbmFkYXB1cmFtIgOIAQFaJCIidml2ZWthbmFuZGEga2VuZHJhIHZpdmVrYW5hZGFwdXJhbZIBEXBpbGdyaW1hZ2VzX3BsYWNl4AEA!16s%2Fg%2F11fcqfjl8z?entry=tts&g_ep=EgoyMDI0MTEyNC4xIPu8ASoASAFQAw%3D%3D",
        name: "Vivekananda Kendra",
        address: "Vivekanandapura Kanyakumari",
        contact: ["04652-246250", "04652-247012"],
        owner_flat:
          "AC 3 Bed room - 1\n3 Bed Annex Room - 1 (common bath)\nRCA - 241125204243033",
        //TODO instructions
        total_amount: "5,400/-",
        advance: "5,400/-",
        due: "Nil",
        timing: "8:00 PM\n-\n5:30 AM",
      },
    },
    {
      date: "13-Dec-24",
      title: "Kanyakumari Local",
      time: ["5:30 AM\n - \n8:00 PM"],
      place: ["Kanyakumari"],
      activity: ["Local site seeing 14.5 hrs"],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose:
            "1. Vivekananda rock\n2. Kanyakumari temple\n3. Thiruvalluvar statue\n4. sunset/sunrise viewpoint\n5. Suchindram",
        },
      ],
      distance: ["80 KMs"],

      night_stay: {
        hotel_link:
          "https://www.google.com/maps/place/Rajaji+Bhavan+Complex/@13.0028888,80.2663475,1078m/data=!3m1!1e3!4m6!3m5!1s0x3a5267e4d28eebd5:0xfffdcca34dd8d039!8m2!3d13.0024148!4d80.2690548!16s%2Fg%2F1ths_wsn?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
        name: "Vivekananda Kendra",
        address: "Vivekanandapura Kanyakumari",
        contact: ["04652-246250", "04652-247012"],
        owner_flat:
          "AC 3 Bed room - 1\n3 Bed Annex Room - 1 (common bath)\nRCA - 241125204243033",
        //TODO instructions
        total_amount: "5,400/-",
        advance: "5,400/-",
        due: "Nil",
        timing: "8:00 PM\n-\n7:00 AM",
      },
    },
    {
      date: "14-Dec-24",
      title: "Kanyakumari to Hyderabad",
      time: ["8:00 PM\n - \n8:45 AM", "9:15 AM\n - ", "10:30 AM\n - "],
      place: [
        "Vivekanda Kendra to Nagercoil",
        "Nagercoil to Hyderabad",
        "Nagercoil to Bengaluru",
      ],
      activity: ["", "", ""],
      information: [
        {
          train_no: "",
          departure_time: null,
          berths: "",
          purpose: "Travel to station (45 mins)",
        },
        {
          train_no: "16354\nKacheguda Express",
          departure_time: "9:15 AM",
          berths: "B4 - 49 to 53",
          purpose: "Departure: Nagercoil",
        },
        {
          train_no: "16525\nCape SBC Express",
          departure_time: "10:30 AM",
          berths: "M1 - 73",
          purpose: "Departure: Nagercoil",
        },
      ],
      distance: [],
    },
  ];

  const places = [];

  const night_stay = [
    {
      hotel_link:
        "https://www.google.com/maps/place/Rajaji+Bhavan+Complex/@13.0028888,80.2663475,1078m/data=!3m1!1e3!4m6!3m5!1s0x3a5267e4d28eebd5:0xfffdcca34dd8d039!8m2!3d13.0024148!4d80.2690548!16s%2Fg%2F1ths_wsn?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D",
      name: "Rajaji Bhavan, Chennai",
      address: "CGWB Guest House, Bharat Nagar",
      contact: [],
      owner_flat: "",
      total_amount: "1500",
      advance: "1500",
      due: "0",
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Tamil Nadu Trip</Text>
      </View>
      <ScrollView>
        {days.map((day, idx) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Day", { trip_data, idx })}
            key={idx}
          >
            <View key={idx} style={styles.dayContainer}>
                <Text style={styles.dayText}>{days[idx]}</Text>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/*<TouchableOpacity style={styles.addButton} onPress={addDay}>
        <Text style={styles.addButtonText}>ADD DAY</Text>
      </TouchableOpacity>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00bfff", // Light blue background
    padding: 25,
    paddingTop: 50,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    marginBottom: 10,
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
    marginTop: 20,
  },
  dayContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  addButton: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#00bfff",
  },
});

export default Home;
