import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Packages.css";

/* Wedding Packages */
import GoaBeachWeddingImg from "../assets/Goa Beach Wedding.webp";
import KeralaWeddingImg from "../assets/Kerala Backwater Wedding.webp";
import ShimlaHillWeddingImg from "../assets/Shimla Hill Wedding.jpg";
import UdaipurPalaceWeddingImg from "../assets/Udaipur Palace Wedding.jpg";
import RajasthanDesertWeddingImg from "../assets/Rajasthan Desert Wedding.webp";
import AndamanBeachWeddingImg from "../assets/Andaman Beach Wedding.jpg";
import BaliLuxuryResortImg from "../assets/Luxury Resort Wedding in Bali.jpg";
import JaipurCulturalWeddingImg from "../assets/Cultural Wedding in Jaipur.webp";

/* Couples Packages */
import MaldivesEscapeImg from "../assets/Romantic Maldives Escape.jpg";
import ParisCityOfLoveImg from "../assets/Paris City of Love.webp";
import VeniceGondolaImg from "../assets/Venice Gondola Retreat.webp";
import BaliAdventureRomanceImg from "../assets/Bali Adventure & Romance.webp";
import SantoriniSunsetImg from "../assets/Santorini Sunset Escape.jpg";
import SwissAlpsRetreatImg from "../assets/Swiss Alps Couples Retreat.webp";
import ThailandRomanticImg from "../assets/Thailand Romantic Adventure.avif";
import DubaiLuxuryEscapeImg from "../assets/Dubai Luxury Escape.jpg";

/* Honeymoon Packages */
import MauritiusHoneymoonImg from "../assets/Exotic Mauritius Honeymoon.jpg";
import MaldivesPrivateIslandImg from "../assets/Maldives Private Island Honeymoon.webp";
import HawaiiRomanticGetawayImg from "../assets/Hawaii Romantic Getaway.jpg";
import ThailandIslandHoneymoonImg from "../assets/Thailand Island Honeymoon.jpg";
import SwissRomanticHoneymoonImg from "../assets/Swiss Romantic Honeymoon.avif";
import BaliLuxuryHoneymoonImg from "../assets/Bali Luxury Honeymoon.jpg";
import ItalyHoneymoonImg from "../assets/Italy Honeymoon Package.avif";
import JapanHoneymoonImg from "../assets/Japan Honeymoon Experience.jpg";

/* Solo Traveling */
import GoaSoloAdventureImg from "../assets/Goa Solo Adventure.webp";
import RajasthanSoloHeritageImg from "../assets/Rajasthan Solo Heritage Tour.jpg";
import KeralaSoloExplorerImg from "../assets/Kerala Solo Explorer.jpg";
import ThailandSoloBackpackerImg from "../assets/Thailand Solo Backpacker Tour.jpg";
import EuropeSoloExplorerImg from "../assets/Europe Solo Explorer.webp";
import HimachalSoloTrekkingImg from "../assets/Himachal Solo Trekking.webp";

/* Family Packages */
import GoaFamilyFunTripImg from "../assets/Goa Family Fun Trip.webp";
import RajasthanFamilyHeritageImg from "../assets/Rajasthan Family Heritage Tour.jpg";
import KeralaFamilyAdventureImg from "../assets/Kerala Family Adventure.webp";
import HimachalFamilyTripImg from "../assets/Himachal Family Trip.png";

/* Student Packages */
import RajasthanEducationalTripImg from "../assets/Educational Trip to Rajasthan.jpg";
import GoaBeachStudentTripImg from "../assets/Goa Beach Student Trip.jpg";
import HimachalAdventureTripImg from "../assets/Himachal Adventure Trip.png";
import KeralaEducationalTourImg from "../assets/Kerala Educational & Adventure Tour.jpg";
import KolkataDelhiHistoryTourImg from "../assets/Kolkata & Delhi History Tour.jpg";

/* ------------------- ALL PACKAGES ---------------------- */

const packagesData = [
  /* Wedding Packages */
  { id: 1, name: "Goa Beach Wedding", img: GoaBeachWeddingImg, days: "3 Days", place: "Goa", price: "₹55,000", desc: "Beachside wedding with decorations, catering, and photography.", category: "Wedding Packages" },
  { id: 2, name: "Kerala Backwater Wedding", img: KeralaWeddingImg, days: "2 Days", place: "Kerala", price: "₹75,000", desc: "Traditional Kerala rituals with houseboat experience.", category: "Wedding Packages" },
  { id: 3, name: "Shimla Hill Wedding", img: ShimlaHillWeddingImg, days: "3 Days", place: "Shimla", price: "₹90,000", desc: "Hill resort wedding with adventure activities.", category: "Wedding Packages" },
  { id: 4, name: "Udaipur Palace Wedding", img: UdaipurPalaceWeddingImg, days: "2 Days", place: "Udaipur", price: "₹1,20,000", desc: "Royal palace wedding with luxury décor.", category: "Wedding Packages" },
  { id: 5, name: "Rajasthan Desert Wedding", img: RajasthanDesertWeddingImg, days: "2 Days", place: "Jaisalmer", price: "₹95,000", desc: "Desert camp wedding with cultural performances.", category: "Wedding Packages" },
  { id: 6, name: "Andaman Beach Wedding", img: AndamanBeachWeddingImg, days: "3 Days", place: "Andaman", price: "₹1,30,000", desc: "Private island wedding with water sports.", category: "Wedding Packages" },
  { id: 7, name: "Luxury Resort Wedding in Bali", img: BaliLuxuryResortImg, days: "4 Days", place: "Bali", price: "₹1,80,000", desc: "Exotic resort with all-inclusive amenities.", category: "Wedding Packages" },
  { id: 8, name: "Cultural Wedding in Jaipur", img: JaipurCulturalWeddingImg, days: "2 Days", place: "Jaipur", price: "₹85,000", desc: "Traditional Indian rituals with heritage settings.", category: "Wedding Packages" },

  /* Couples Packages */
  { id: 9, name: "Romantic Maldives Escape", img: MaldivesEscapeImg, days: "3 Days", place: "Maldives", price: "₹1,40,000", desc: "Overwater villa stay & private dinners.", category: "Couples Packages" },
  { id: 10, name: "Paris City of Love", img: ParisCityOfLoveImg, days: "5 Days", place: "Paris", price: "₹2,20,000", desc: "Eiffel Tower & Seine river cruise.", category: "Couples Packages" },
  { id: 11, name: "Venice Gondola Retreat", img: VeniceGondolaImg, days: "4 Days", place: "Venice", price: "₹1,60,000", desc: "Gondola ride & luxury hotel stay.", category: "Couples Packages" },
  { id: 12, name: "Bali Adventure & Romance", img: BaliAdventureRomanceImg, days: "4 Days", place: "Bali", price: "₹1,10,000", desc: "Trekking & couples spa.", category: "Couples Packages" },
  { id: 13, name: "Santorini Sunset Escape", img: SantoriniSunsetImg, days: "4 Days", place: "Santorini", price: "₹1,90,000", desc: "Sunset dinners & private tours.", category: "Couples Packages" },
  { id: 14, name: "Swiss Alps Couples Retreat", img: SwissAlpsRetreatImg, days: "5 Days", place: "Switzerland", price: "₹2,40,000", desc: "Snow activities & chalet stay.", category: "Couples Packages" },
  { id: 15, name: "Thailand Romantic Adventure", img: ThailandRomanticImg, days: "4 Days", place: "Thailand", price: "₹95,000", desc: "Snorkeling & candlelight dinners.", category: "Couples Packages" },
  { id: 16, name: "Dubai Luxury Escape", img: DubaiLuxuryEscapeImg, days: "3 Days", place: "Dubai", price: "₹1,50,000", desc: "Luxury hotel & desert safari.", category: "Couples Packages" },

  /* Honeymoon Packages */
  { id: 17, name: "Exotic Mauritius Honeymoon", img: MauritiusHoneymoonImg, days: "5 Days", place: "Mauritius", price: "₹1,90,000", desc: "Beach resort & private excursions.", category: "Honeymoon Packages" },
  { id: 18, name: "Maldives Private Island Honeymoon", img: MaldivesPrivateIslandImg, days: "4 Days", place: "Maldives", price: "₹2,10,000", desc: "Overwater villa & spa.", category: "Honeymoon Packages" },
  { id: 19, name: "Hawaii Romantic Getaway", img: HawaiiRomanticGetawayImg, days: "5 Days", place: "Hawaii", price: "₹2,40,000", desc: "Volcano tours & beach activities.", category: "Honeymoon Packages" },
  { id: 20, name: "Thailand Island Honeymoon", img: ThailandIslandHoneymoonImg, days: "4 Days", place: "Thailand", price: "₹1,10,000", desc: "Snorkeling & private beaches.", category: "Honeymoon Packages" },
  { id: 21, name: "Swiss Romantic Honeymoon", img: SwissRomanticHoneymoonImg, days: "5 Days", place: "Switzerland", price: "₹2,30,000", desc: "Lucerne & Interlaken tours.", category: "Honeymoon Packages" },
  { id: 22, name: "Bali Luxury Honeymoon", img: BaliLuxuryHoneymoonImg, days: "4 Days", place: "Bali", price: "₹95,000", desc: "Couple villa & spa.", category: "Honeymoon Packages" },
  { id: 23, name: "Italy Honeymoon Package", img: ItalyHoneymoonImg, days: "5 Days", place: "Italy", price: "₹2,20,000", desc: "Rome, Venice & Florence tours.", category: "Honeymoon Packages" },
  { id: 24, name: "Japan Honeymoon Experience", img: JapanHoneymoonImg, days: "5 Days", place: "Japan", price: "₹2,00,000", desc: "Tokyo & Kyoto cultural tours.", category: "Honeymoon Packages" },

  /* Solo Traveling Packages */
  { id: 25, name: "Goa Solo Adventure", img: GoaSoloAdventureImg, days: "3 Days", place: "Goa", price: "₹18,000", desc: "Beach parties & water sports.", category: "Solo Traveling Packages" },
  { id: 26, name: "Rajasthan Solo Heritage Tour", img: RajasthanSoloHeritageImg, days: "4 Days", place: "Rajasthan", price: "₹25,000", desc: "Forts, palaces & desert camp.", category: "Solo Traveling Packages" },
  { id: 27, name: "Kerala Solo Explorer", img: KeralaSoloExplorerImg, days: "3 Days", place: "Kerala", price: "₹20,000", desc: "Backwaters & hill stations.", category: "Solo Traveling Packages" },
  { id: 28, name: "Thailand Solo Backpacker Tour", img: ThailandSoloBackpackerImg, days: "4 Days", place: "Thailand", price: "₹35,000", desc: "Nightlife & adventure.", category: "Solo Traveling Packages" },
  { id: 29, name: "Europe Solo Explorer", img: EuropeSoloExplorerImg, days: "6 Days", place: "Europe", price: "₹1,80,000", desc: "City tours & museums.", category: "Solo Traveling Packages" },
  { id: 30, name: "Himachal Solo Trekking", img: HimachalSoloTrekkingImg, days: "4 Days", place: "Himachal", price: "₹22,000", desc: "Trekking & camping.", category: "Solo Traveling Packages" },

  /* Family Packages */
  { id: 31, name: "Goa Family Fun Trip", img: GoaFamilyFunTripImg, days: "3 Days", place: "Goa", price: "₹30,000", desc: "Water sports & sightseeing.", category: "Family Packages" },
  { id: 32, name: "Rajasthan Family Heritage Tour", img: RajasthanFamilyHeritageImg, days: "4 Days", place: "Rajasthan", price: "₹40,000", desc: "Fort tours & camel rides.", category: "Family Packages" },
  { id: 33, name: "Kerala Family Adventure", img: KeralaFamilyAdventureImg, days: "4 Days", place: "Kerala", price: "₹38,000", desc: "Backwaters & hill stations.", category: "Family Packages" },
  { id: 34, name: "Himachal Family Trip", img: HimachalFamilyTripImg, days: "4 Days", place: "Himachal", price: "₹42,000", desc: "Manali & Shimla tours.", category: "Family Packages" },

  /* Student Packages */
  { id: 35, name: "Educational Trip to Rajasthan", img: RajasthanEducationalTripImg, days: "3 Days", place: "Rajasthan", price: "₹18,000", desc: "Cultural learning & museums.", category: "Student Packages" },
  { id: 36, name: "Goa Beach Student Trip", img: GoaBeachStudentTripImg, days: "3 Days", place: "Goa", price: "₹15,000", desc: "Budget-friendly stay.", category: "Student Packages" },
  { id: 37, name: "Himachal Adventure Trip", img: HimachalAdventureTripImg, days: "4 Days", place: "Himachal", price: "₹22,000", desc: "Trekking & rafting.", category: "Student Packages" },
  { id: 38, name: "Kerala Educational & Adventure Tour", img: KeralaEducationalTourImg, days: "3 Days", place: "Kerala", price: "₹20,000", desc: "Eco-tour activities.", category: "Student Packages" },
  { id: 39, name: "Kolkata & Delhi History Tour", img: KolkataDelhiHistoryTourImg, days: "4 Days", place: "Kolkata & Delhi", price: "₹25,000", desc: "Monuments & museums.", category: "Student Packages" },
];

/* --------------------- CATEGORIES --------------------- */

const categories = [
  "Wedding Packages",
  "Couples Packages",
  "Honeymoon Packages",
  "Solo Traveling Packages",
  "Family Packages",
  "Student Packages",
];

/* --------------------- COMPONENT ----------------------- */

export default function Packages() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Wedding Packages");

  const filteredPackages = packagesData.filter(
    (pkg) => pkg.category === selectedCategory
  );

  return (
    <div className="packages-section">
      <h2>Explore Our Travel Packages</h2>

      {/* CATEGORY BUTTONS */}
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PACKAGES GRID */}
      <div className="grid">
  {filteredPackages.map((pkg) => (
    <div
      key={pkg.id}
      className="card"
      onClick={() => navigate(`/packages/${pkg.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={pkg.img} alt={pkg.name} />

      <h4>{pkg.name}</h4>

      <p className="place-days">
        {pkg.days} | {pkg.place}
      </p>

      <p className="price">{pkg.price}</p>

      <p>{pkg.desc.substring(0, 70)}...</p>

      <button
        className="book-btn"
        onClick={(e) => {
          e.stopPropagation(); // stop card click
          navigate("/book");
        }}
      >
        Book Now
      </button>
    </div>
  ))}
</div>

    </div>
  );
}
