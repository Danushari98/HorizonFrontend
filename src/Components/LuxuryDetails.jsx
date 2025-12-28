import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import luxuryData from "./luxuryData";
import "./LuxuryDetails.css";

export default function LuxuryDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const place = luxuryData.find((p) => p.id === Number(id));

  if (!place) {
    return <h2>Luxury Place Not Found</h2>;
  }

  return (
    <div className="luxury-details-container">

      {/* Title */}
      <h1 className="luxury-title">{place.name}</h1>

      {/* Image */}
      <img 
        src={place.img} 
        alt={place.name} 
        className="luxury-img"
      />

      {/* Badges */}
      <div className="luxury-badges">
        <span className="luxury-badge green-badge">{place.days}</span>
        <span className="luxury-badge gold-badge">{place.price}</span>
      </div>

      {/* Info Section */}
      <div className="luxury-info">
        <h2>Location</h2>
        <p>{place.location}</p>

        <h2>Description</h2>
        <p>{place.description}</p>

        {/* Back Button */}
        <Link to="/luxury" className="luxury-back-btn">← Back</Link>

        {/* Book Now Button */}
        <button 
          className="book-btn"
          onClick={() => navigate("/book")}
        >
          Book Now
        </button>
      </div>

    </div>
  );
}
