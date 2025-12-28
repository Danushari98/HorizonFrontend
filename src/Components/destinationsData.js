// IMPORT IMAGES
import manali from "../assets/manali.jpg";
import gulmarg from "../assets/Gulmarg.jpg";
import auli from "../assets/Auli.jpg";
import leh from "../assets/leh.jpg";
import shimla from "../assets/shimla.jpg";
import nainital from "../assets/nainital.jpg";
import mussoorie from "../assets/Mussoorie.jpg";
import darjeeling from "../assets/Darjeeling.jpg";
import tawang from "../assets/Tawang.jpg";
import sikkim from "../assets/Sikkim.jpg";
import spiti from "../assets/Spiti Valley.jpg";
import kedarnath from "../assets/kedarnath.jpg";
import ooty from "../assets/Ooty.jpg";
import kodaikanal from "../assets/Kodaikanal.webp";
import munnar from "../assets/Munnar.jpg";
import wayanad from "../assets/Wayanad.png";
import andaman from "../assets/Andaman Islands.jpg";
import lakshadweep from "../assets/Lakshadweep.webp";
import goa from "../assets/Goa.jpg";
import pondicherry from "../assets/Pondicherry.jpg";

// 💠 FULL DESTINATIONS DATA
const destinationsData = [
  {
    id: 1,
    name: "Manali",
    days: "3 Days",
    price: "₹14,999",
    image: manali,
    highlights: ["Solang Valley", "Rohtang Pass", "Hidimba Temple", "Mall Road"],
    bestTime: "October – June",
    why: "Adventure + Snow Mountains",
    tips: ["Thermals compulsory", "Taxi booking early"],
    faqs: ["Snow irukuma? → Yes (Dec–March)"]
  },

  {
    id: 2,
    name: "Gulmarg",
    days: "3 Days",
    price: "₹18,499",
    image: gulmarg,
    highlights: ["Gondola Ride", "Kongdori", "Strawberry Valley"],
    bestTime: "December – March",
    why: "Skiing + Snow Paradise",
    tips: ["Gondola tickets pre-booking"],
    faqs: ["Gondola Phase 1 & 2 included? → Optional"]
  },

  {
    id: 3,
    name: "Auli",
    days: "3 Days",
    price: "₹16,999",
    image: auli,
    highlights: ["Auli Lake", "Gurson Bugyal"],
    bestTime: "December – March",
    why: "Best Skiing destination in India",
    tips: ["Ropeway tickets get full fast"],
    faqs: ["Snow guaranteed? → Dec–Feb"]
  },

  {
    id: 4,
    name: "Leh - Ladakh",
    days: "3 Days",
    price: "₹22,999",
    image: leh,
    highlights: ["Pangong", "Nubra Valley", "Khardung La"],
    bestTime: "May – September",
    why: "Adventure + Mountains + Lakes",
    tips: ["Oxygen level low – avoid running"],
    faqs: ["Bike ride available? → Yes"]
  },

  {
    id: 5,
    name: "Shimla",
    days: "3 Days",
    price: "₹13,999",
    image: shimla,
    highlights: ["Kufri", "Mall Road", "Jakhoo Hill"],
    bestTime: "October – June",
    why: "Cool climate hill station",
    tips: ["Avoid weekends – crowd"],
    faqs: ["Snow? → Dec–Jan"]
  },

  {
    id: 6,
    name: "Nainital",
    days: "3 Days",
    price: "₹12,999",
    image: nainital,
    highlights: ["Naini Lake", "Snow View", "Mall Road"],
    bestTime: "October – June",
    why: "Romantic lake destination",
    tips: ["Boat ride best early morning"],
    faqs: ["Cable car timing? → 10am–4pm"]
  },

  {
    id: 7,
    name: "Mussoorie",
    days: "3 Days",
    price: "₹11,999",
    image: mussoorie,
    highlights: ["Kempty Falls", "Gun Hill", "Company Garden"],
    bestTime: "October – June",
    why: "Queen of Hills",
    tips: ["Avoid Kempty weekend rush"],
    faqs: ["Snow? → Sometimes Jan–Feb"]
  },

  {
    id: 8,
    name: "Darjeeling",
    days: "3 Days",
    price: "₹15,999",
    image: darjeeling,
    highlights: ["Tiger Hill Sunrise", "Toy Train", "Tea Gardens"],
    bestTime: "October – May",
    why: "Tea gardens + hill views",
    tips: ["Tiger Hill early wake up"],
    faqs: ["Toy train? → Pre-book IRCTC"]
  },

  {
    id: 9,
    name: "Tawang",
    days: "3 Days",
    price: "₹19,499",
    image: tawang,
    highlights: ["Tawang Monastery", "Sela Pass"],
    bestTime: "October – April",
    why: "High altitude Buddhist town",
    tips: ["Cold extreme – pack layers"],
    faqs: ["Permit needed? → Yes"]
  },

  {
    id: 10,
    name: "Sikkim",
    days: "3 Days",
    price: "₹17,999",
    image: sikkim,
    highlights: ["Tsomgo Lake", "Nathula Pass", "MG Marg"],
    bestTime: "Oct – May",
    why: "Mountains + lakes + clean city",
    tips: ["Nathula closed Tue"],
    faqs: ["Permit cost? → Optional"]
  },

  {
    id: 11,
    name: "Spiti Valley",
    days: "3 Days",
    price: "₹23,999",
    image: spiti,
    highlights: ["Kaza", "Chandratal", "Key Monastery"],
    bestTime: "May – Sep",
    why: "Adventure + off-road",
    tips: ["Very cold nights"],
    faqs: ["Snow? → May/Oct little"]
  },

  {
    id: 12,
    name: "Kedarnath Hills",
    days: "3 Days",
    price: "₹19,999",
    image: kedarnath,
    highlights: ["Kedarnath Temple", "Gaurikund"],
    bestTime: "May – Nov",
    why: "Spiritual + trekking",
    tips: ["Start trek early morning"],
    faqs: ["Helicopter available? → Yes"]
  },

  {
    id: 13,
    name: "Ooty",
    days: "3 Days",
    price: "₹10,999",
    image: ooty,
    highlights: ["Ooty Lake", "Garden", "Tea Factory"],
    bestTime: "Oct – May",
    why: "Tamil Nadu's top hill station",
    tips: ["Train from Mettupalayam best"],
    faqs: ["Ooty toy train? → Yes"]
  },

  {
    id: 14,
    name: "Kodaikanal",
    days: "3 Days",
    price: "₹10,499",
    image: kodaikanal,
    highlights: ["Kodai Lake", "Pine Forest", "Coakers Walk"],
    bestTime: "Oct – May",
    why: "Cool Tamil hill station",
    tips: ["Cycle ride near lake"],
    faqs: ["Boating available? → Yes"]
  },

  {
    id: 15,
    name: "Munnar",
    days: "3 Days",
    price: "₹12,499",
    image: munnar,
    highlights: ["Tea Gardens", "Echo Point", "Top Station"],
    bestTime: "Sep – May",
    why: "Kerala tea mountain heaven",
    tips: ["Top station foggy early"],
    faqs: ["Couples friendly? → Yes"]
  },

  {
    id: 16,
    name: "Wayanad",
    days: "3 Days",
    price: "₹11,999",
    image: wayanad,
    highlights: ["Edakkal Caves", "Banasura Dam"],
    bestTime: "Oct – May",
    why: "Nature + greenery",
    tips: ["Cave climb steep"],
    faqs: ["Wildlife? → Yes"]
  },

  {
    id: 17,
    name: "Andaman",
    days: "3 Days",
    price: "₹29,999",
    image: andaman,
    highlights: ["Havelock", "Radhanagar Beach"],
    bestTime: "Oct – May",
    why: "Blue beaches + luxury",
    tips: ["Ferry pre-book"],
    faqs: ["Scuba? → Yes"]
  },

  {
    id: 18,
    name: "Lakshadweep",
    days: "3 Days",
    price: "₹34,999",
    image: lakshadweep,
    highlights: ["Bangaram", "Agatti"],
    bestTime: "Oct – April",
    why: "India’s Maldives",
    tips: ["Permit required"],
    faqs: ["Water villa? → Available"]
  },

  {
    id: 19,
    name: "Goa",
    days: "3 Days",
    price: "₹13,999",
    image: goa,
    highlights: ["Baga Beach", "Aguada Fort", "Dudhsagar"],
    bestTime: "Oct – May",
    why: "Party + beaches",
    tips: ["Rent bike"],
    faqs: ["Nightlife safe? → Yes"]
  },

  {
    id: 20,
    name: "Pondicherry",
    days: "3 Days",
    price: "₹8,999",
    image: pondicherry,
    highlights: ["White Town", "Auroville"],
    bestTime: "Oct – March",
    why: "French town vibes",
    tips: ["Evening beach walk"],
    faqs: ["Scooter rent? → Yes"]
  }
];

export default destinationsData;
