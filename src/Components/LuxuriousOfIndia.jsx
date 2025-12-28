import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LuxuriousOfIndia.css";

// ----------------------------------------------------
// IMPORT ALL IMAGES
// ----------------------------------------------------
import OberoiUdaivilasImg from "../assets/The Oberoi Udaivilas, Udaipur.jpg";
import TajLakePalaceImg from "../assets/Taj Lake Palace, Udaipur.webp";
import LeelaPalaceDelhiImg from "../assets/The Leela Palace.webp";
import LeelaPalaceUdaipurImg from "../assets/The Leela Palace, Udaipur.jpg";
import TajFalaknumaPalaceImg from "../assets/Taj Falaknuma Palace,.jpg";
import RambaghPalaceImg from "../assets/Rambagh Palace, Jaipur.jpg";
import ITCGrandCholaImg from "../assets/ITC Grand Chola, Chennai.png";
import PaulBangaloreImg from "../assets/The Paul Bangalore.jpg";
import KumarakomLakeResortImg from "../assets/Kumarakom Lake Resort, Kerala.jpg";
import WildflowerHallImg from "../assets/Wildflower Hall, Shimla.jpg";
import SuryagarhPalaceImg from "../assets/Suryagarh Palace, Jaisalmer.jpg";
import TamaraCoorgImg from "../assets/The Tamara Coorg.avif";
import AnandaHimalayasImg from "../assets/Ananda in the Himalayas.webp";
import ImperialNewDelhiImg from "../assets/The Imperial New Delhi.webp";
import EvolveBackKabiniImg from "../assets/EvolveBack Kabini.jpg";
import AmanbaghRajasthanImg from "../assets/Amanbagh Rajasthan.jpg";
import LalitGrandPalaceImg from "../assets/The Lalit Grand Palace, Srinagar.jpg";
import MarariBeachResortImg from "../assets/Marari Beach Resort, Kerala.jpg";
import JWMussoorieImg from "../assets/JW Marriott Mussoorie.jpg";
import RajPalaceJaipurImg from "../assets/Raj Palace Jaipur.jpg";

const luxuryPlaces = [
  { id: 1, name: "The Oberoi Udaivilas", img: OberoiUdaivilasImg, amt: "₹55,000", days: "2 Days | Udaipur" },
  { id: 2, name: "Taj Lake Palace,", img: TajLakePalaceImg, amt: "₹60,000", days: "3 Days | Udaipur" },
  { id: 3, name: "The Leela Palace,", img: LeelaPalaceDelhiImg, amt: "₹45,000", days: "2 Days | Delhi" },
  { id: 4, name: "The Leela Palace,", img: LeelaPalaceUdaipurImg, amt: "₹52,000", days: "2 Days | Udaipur" },
  { id: 5, name: "Taj Falaknuma Palace,", img: TajFalaknumaPalaceImg, amt: "₹58,000", days: "2 Days | Hyderabad" },
  { id: 6, name: "Rambagh Palace,", img: RambaghPalaceImg, amt: "₹50,000", days: "2 Days | Jaipur" },
  { id: 7, name: "ITC Grand Chola,", img: ITCGrandCholaImg, amt: "₹35,000", days: "1 Day | Chennai" },
  { id: 8, name: "The Paul Bangalore", img: PaulBangaloreImg, amt: "₹32,000", days: "1 Day | Bengaluru" },
  { id: 9, name: "Kumarakom Lake Resort", img: KumarakomLakeResortImg, amt: "₹40,000", days: "2 Days | Kerala" },
  { id: 10, name: "Wildflower Hall", img: WildflowerHallImg, amt: "₹48,000", days: "2 Days | Shimla" },
  { id: 11, name: "Suryagarh Palace,", img: SuryagarhPalaceImg, amt: "₹42,000", days: "2 Days | Jaisalmer" },
  { id: 12, name: "The Tamara Coorg", img: TamaraCoorgImg, amt: "₹38,000", days: "2 Days | Coorg" },
  { id: 13, name: "Ananda in the Himalayas", img: AnandaHimalayasImg, amt: "₹55,000", days: "3 Days | Himalayas" },
  { id: 14, name: "The Imperial", img: ImperialNewDelhiImg, amt: "₹46,000", days: "2 Days | Delhi" },
  { id: 15, name: "EvolveBack Kabini", img: EvolveBackKabiniImg, amt: "₹48,000", days: "2 Days | Kabini" },
  { id: 16, name: "Amanbagh Rajasthan", img: AmanbaghRajasthanImg, amt: "₹95,000", days: "2 Days | Rajasthan" },
  { id: 17, name: "The Lalit Grand Palace", img: LalitGrandPalaceImg, amt: "₹47,000", days: "2 Days | Srinagar" },
  { id: 18, name: "Marari Beach Resort", img: MarariBeachResortImg, amt: "₹34,000", days: "1 Day | Kerala" },
  { id: 19, name: "JW Marriott Mussoorie", img: JWMussoorieImg, amt: "₹50,000", days: "2 Days | Mussoorie" },
  { id: 20, name: "Raj Palace", img: RajPalaceJaipurImg, amt: "₹75,000", days: "2 Days | Jaipur" },
];

export default function LuxuriousOfIndia() {
  const [visibleCount, setVisibleCount] = useState(10);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="luxury-section">
      <h2 className="luxury-title">Luxury Experiences of India</h2>

      <div className="luxury-grid">
        {luxuryPlaces.slice(0, visibleCount).map((place) => (
          <div key={place.id} className="luxury-card">

            {/* UPDATED CLASS NAME */}
            <img
              src={place.img}
              alt={place.name}
              className="luxury-list-img"
              onClick={() => navigate(`/luxury/${place.id}`)}
            />

            <h3 className="luxury-name">{place.name}</h3>
            <p className="luxury-price">{place.amt}</p>
            <p className="luxury-days">{place.days}</p>

            <button className="luxury-book-btn" onClick={() => navigate("/book")}>
              Book Now
            </button>

          </div>
        ))}
      </div>

      {visibleCount < luxuryPlaces.length && (
        <button className="luxury-load-more" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
