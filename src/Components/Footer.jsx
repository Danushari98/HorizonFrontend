import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h3>HorizonHike</h3>
          <p>Your trusted travel companion to explore India.</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul className="footer-list">
            <li>Destinations</li>
            <li>Packages</li>
            <li>Festival Tours</li>
            <li>Pilgrimage</li>
            <li>Luxury Tours</li>
            <li>Book Now</li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <p>Email: support@horizonhike.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} HorizonHike. All Rights Reserved.
      </p>
    </footer>
  );
}
