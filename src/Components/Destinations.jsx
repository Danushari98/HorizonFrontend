// src/Components/Destinations.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Destinations.css";

/* --- IMPORT IMAGES --- */
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

/* ❄ COOL PLACES LIST FOR OFFER BADGE */
const coolPlaces = [
  "Manali",
  "Gulmarg",
  "Auli",
  "Leh-Ladakh",
  "Shimla",
  "Nainital",
  "Mussoorie",
  "Darjeeling",
  "Tawang",
  "Sikkim",
  "Spiti Valley",
  "Kedarnath Hills",
];

/* --- FULL DESTINATIONS ARRAY WITH PRICE --- */
const destinations = [
  { id: 1, name: "Manali", img: manali, price: "₹12,999" },
  { id: 2, name: "Gulmarg", img: gulmarg, price: "₹14,499" },
  { id: 3, name: "Auli", img: auli, price: "₹13,999" },
  { id: 4, name: "Leh-Ladakh", img: leh, price: "₹18,999" },
  { id: 5, name: "Shimla", img: shimla, price: "₹10,499" },
  { id: 6, name: "Nainital", img: nainital, price: "₹11,999" },
  { id: 7, name: "Mussoorie", img: mussoorie, price: "₹10,999" },
  { id: 8, name: "Darjeeling", img: darjeeling, price: "₹13,499" },
  { id: 9, name: "Tawang", img: tawang, price: "₹19,999" },
  { id: 10, name: "Sikkim", img: sikkim, price: "₹15,499" },
  { id: 11, name: "Spiti Valley", img: spiti, price: "₹17,499" },
  { id: 12, name: "Kedarnath Hills", img: kedarnath, price: "₹9,999" },
  { id: 13, name: "Ooty", img: ooty, price: "₹7,499" },
  { id: 14, name: "Kodaikanal", img: kodaikanal, price: "₹7,999" },
  { id: 15, name: "Munnar", img: munnar, price: "₹8,999" },
  { id: 16, name: "Wayanad", img: wayanad, price: "₹9,499" },
  { id: 17, name: "Andaman Islands", img: andaman, price: "₹24,999" },
  { id: 18, name: "Lakshadweep", img: lakshadweep, price: "₹29,999" },
  { id: 19, name: "Goa", img: goa, price: "₹8,499" },
  { id: 20, name: "Pondicherry", img: pondicherry, price: "₹6,999" },
];

export default function Destinations() {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(9);

  const loadMore = () => setVisibleCount((prev) => prev + 9);

  return (
    <div className="destinations-section">
      <h2>Explore Amazing Destinations</h2>

      <div className="destinations-grid">
        {destinations.slice(0, visibleCount).map((place) => (
          <div key={place.id} className="destination-card">

            {/* ❄ OFFER BADGE FOR COOL PLACES */}
            {coolPlaces.includes(place.name) && (
              <div className="offer-badge">Winter Special ❄</div>
            )}

            {/* Image click → open details */}
            <img
              src={place.img}
              alt={place.name}
              className="destination-img"
              onClick={() => navigate(`/destination/${place.id}`)}
              style={{ cursor: "pointer" }}
            />

            <h3>{place.name}</h3>
            <p className="state">India</p>

            {/* Green Color Price */}
            <p className="price-tag">{place.price}</p>

            {/* Book Button */}
            <button
              className="book-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/book");
              }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < destinations.length && (
        <button className="load-more-btn" onClick={loadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
