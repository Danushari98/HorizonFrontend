import React from "react";
import "./Navbar.css";
import logo from "../assets/img0000.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Clicking brand takes user to Home */}
      <Link to="/" className="brand-box" style={{ textDecoration: "none" }}>
        <img 
          src={logo}
          alt="HorizonHike Logo"
          className="logo"
        />
        <div className="brand">HorizonHike</div>
      </Link>

      <ul className="nav-links">
        <li><Link to="/destinations">Destinations</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/festivals">Festival Tours</Link></li>
        <li><Link to="/pilgrimage">Pilgrimage</Link></li>
        <li><Link to="/luxury">Luxury</Link></li>

        <li>
          <Link className="book-btn" to="/book">Book Now</Link>
        </li>
      </ul>

    </nav>
  );
}
