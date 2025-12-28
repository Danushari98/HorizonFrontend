import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import pilgrimageData from "./PilgrimageData";
import "./PilgrimageDetails.css";

export default function PilgrimageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const place = pilgrimageData.find((item) => item.id === parseInt(id));

  if (!place) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "40px" }}>
        Place Not Found
      </h2>
    );
  }

  return (
    <div className="details-container">
      {/* LEFT - IMAGE */}
    <div className="details-right">
  <img className="details-img-fixed" src={place.img} alt={place.name} />
</div>

      {/* RIGHT - CONTENT */}
      <div className="details-left">
        <h2>{place.name}</h2>
        <p className="location">{place.location}</p>
        <p className="description">{place.description}</p>
        <h3 className="price">Starting From: {place.price}</h3>

        {/* BUTTONS */}
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <button className="book-btn" onClick={() => navigate("/book")}>
          Book Now
        </button>
      </div>
    </div>
  );
}
