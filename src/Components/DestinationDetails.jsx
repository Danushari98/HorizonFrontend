import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import destinationsData from "./destinationsData.js";
import "./destinationDetails.css";

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const place = destinationsData.find((item) => item.id === Number(id));

  if (!place) {
    return <h2 style={{ padding: "50px", textAlign: "center" }}>Place Not Found</h2>;
  }

  return (
    <div className="details-container">

      {/* BACK BUTTON */}
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      {/* IMAGE */}
      <img src={place.image} alt={place.name} className="details-img" />

      {/* TITLE */}
      <h2 className="details-title">{place.name}</h2>

      {/* DAYS + PRICE */}
      <div className="details-info-row">
        <span className="details-days">{place.days}</span>
        <span className="details-price">{place.price}</span>
      </div>

      {/* WHY VISIT */}
      <div className="details-section">
        <h3>Why Visit?</h3>
        <p>{place.why}</p>
      </div>

      {/* HIGHLIGHTS */}
      <div className="details-section">
        <h3>Top Highlights</h3>
        <ul>
          {place.highlights.map((p, index) => (
            <li key={index}>{p}</li>
          ))}
        </ul>
      </div>

      {/* BEST TIME */}
      <div className="details-section">
        <h3>Best Time to Visit</h3>
        <p>{place.bestTime}</p>
      </div>

      {/* TRAVEL TIPS */}
      <div className="details-section">
        <h3>Travel Tips</h3>
        <ul>
          {place.tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="details-section">
        <h3>FAQs</h3>
        <ul>
          {place.faqs.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {/* BOOK NOW BUTTON */}
      <button
        className="details-book-btn"
        onClick={() => navigate("/book")}
      >
        Book Now
      </button>

    </div>
  );
}
