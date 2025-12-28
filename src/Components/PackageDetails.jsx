import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { packagesData } from "./packagesData";
import "./PackageDetails.css";

export default function PackageDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const pkg = packagesData.find((item) => item.id === Number(id));

  if (!pkg) {
    return <h2 style={{ textAlign: "center" }}>Package Not Found</h2>;
  }

  return (
    <div className="package-container">

      {/* IMAGE */}
      <div className="img-wrapper">
        <img src={pkg.img} alt={pkg.name} className="package-img" />
      </div>

      {/* TITLE */}
      <h2 className="package-title">{pkg.name}</h2>

      {/* DAYS + PRICE */}
<div className="package-info-row">
  <p className="package-days-red">
    {pkg.days} / {pkg.place}
  </p>

  <p className="package-price">{pkg.price}</p>
</div>


      {/* ABOUT */}
      <h3 className="about-title">About this Package</h3>
      <p className="package-description">{pkg.desc}</p>

      {/* BOTTOM BUTTONS */}
     <div className="buttons-section">
  <button className="btn-back" onClick={() => navigate(-1)}>
    ← Back
  </button>

  <button className="btn-book" onClick={() => navigate("/book")}>
    Book Now
  </button>
</div>

    </div>
  );
}
