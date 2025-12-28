import React from "react";

import Destinations from "./Destinations.jsx";
import Packages from "./Packages.jsx";
import FestivalTour from "./FestivalTour.jsx";
import PilgrimageIndia from "./PilgrimageIndia.jsx";
import LuxuriousOfIndia from "./LuxuriousOfIndia.jsx";
import BookNow from "./BookNow.jsx";
import Footer from "./Footer.jsx";


import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">

      {/* Hero Section (Red Fort Background) */}
      <section className="hero-section">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Discover Incredible India</h1>
          <p>
            Explore mountains, deserts, temples, festivals & luxury experiences 
            with HorizonHike — your trusted travel partner.
          </p>
          <a href="#destinations" className="explore-btn">Start Exploring</a>
        </div>
      </section>

      {/* About HorizonHike */}
      <section className="about-section" id="about">
        <h2>About HorizonHike</h2>
        <p>
          HorizonHike is a premium Indian travel experience brand dedicated to 
          creating unforgettable journeys across India’s most iconic landscapes. 
          From the Himalayan peaks to the deserts of Rajasthan, from sacred 
          pilgrimage routes to luxury escapes—we deliver curated travel 
          packages with comfort, expertise, and personalized service.
        </p>

        <p>
          Whether you're seeking adventure, relaxation, spiritual peace, or 
          cultural exploration—HorizonHike promises a memorable and extraordinary journey.
        </p>
      </section>

      {/* All Sections */}
      <div id="destinations">
        <Destinations />
      </div>

    


      <div id="packages">
        <Packages />
      </div>

      <div id="festivals">
        <FestivalTour />
      </div>

      <div id="pilgrimage">
        <PilgrimageIndia />
      </div>

      <div id="luxury">
        <LuxuriousOfIndia />
      </div>

      {/* <div id="book">
        <BookNow />
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
