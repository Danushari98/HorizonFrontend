// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";

// Main pages
import Home from "./Components/Home.jsx";
import Destinations from "./Components/Destinations.jsx";
import Packages from "./Components/Packages.jsx";
import FestivalTour from "./Components/FestivalTour.jsx";
import Pilgrimage from "./Components/PilgrimageIndia.jsx";
import Luxury from "./Components/LuxuriousOfIndia.jsx";
import BookNow from "./Components/BookNow.jsx";

// Details pages
import DestinationDetails from "./Components/DestinationDetails.jsx";
import PackageDetails from "./Components/PackageDetails.jsx";
import FestivalDetails from "./Components/FestivalDetails.jsx";
import LuxuryDetails from "./Components/LuxuryDetails.jsx";
import PilgrimageDetails from "./Components/PilgrimageDetails.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main pages */}
        <Route path="/destinations" element={<Destinations />} />
         <Route path="/packages" element={<Packages />} />
        <Route path="/festivals" element={<FestivalTour />} />
        <Route path="/pilgrimage" element={<Pilgrimage />} />
        <Route path="/luxury" element={<Luxury />} />

        {/* Details pages */}
        <Route path="/destination/:id" element={<DestinationDetails />} />
         <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/festival/:id" element={<FestivalDetails />} />
        <Route path="/luxury/:id" element={<LuxuryDetails />} />
        <Route path="/pilgrimage/:id" element={<PilgrimageDetails />} />

        {/* Book Now */}
        <Route path="/book" element={<BookNow />} />
      </Routes>
    </>
  );
}

 

export default App;
