import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FestivalTour.css";

/* ------------------------------
   IMPORT IMAGES
------------------------------ */
import Diwali from "../assets/Diwali.jpg";
import Holi from "../assets/Holi.jpg";
import DurgaPuja from "../assets/Durga Puja.jpg";
import Ganesh from "../assets/Ganesh Chaturthi.jpg";
import Pongal from "../assets/Pongal.jpg";
import Onam from "../assets/Onam.jpg";
import Navratri from "../assets/Navratri.avif";
import Eid from "../assets/Eid.jpg";
import Christmas from "../assets/Christmas.jpg";
import Baisakhi from "../assets/Baisakhi.jpg";
import Dussehra from "../assets/Dussehra.jpg";
import Janmashtami from "../assets/Janmashtami.avif";
import KumbhMela from "../assets/Kumbh Mela.jpeg";
import RepublicDay from "../assets/Republic Day.webp";
import IndependenceDay from "../assets/Independence Day.webp";

/* ------------------------------
   FESTIVAL DATA
------------------------------ */
const festivals = [
  { id: 1, name: "Diwali", img: Diwali, price: "₹12,999", offer: true },
  { id: 2, name: "Holi", img: Holi, price: "₹10,499", offer: false },
  { id: 3, name: "Durga Puja", img: DurgaPuja, price: "₹11,999", offer: false },
  { id: 4, name: "Ganesh Chaturthi", img: Ganesh, price: "₹9,999", offer: false },
  { id: 5, name: "Pongal", img: Pongal, price: "₹8,999", offer: true },
  { id: 6, name: "Onam", img: Onam, price: "₹11,499", offer: false },
  { id: 7, name: "Navratri", img: Navratri, price: "₹10,999", offer: false },
  { id: 8, name: "Eid", img: Eid, price: "₹9,999", offer: false },
  { id: 9, name: "Christmas", img: Christmas, price: "₹13,499", offer: true },
  { id: 10, name: "Baisakhi", img: Baisakhi, price: "₹9,499", offer: false },
  { id: 11, name: "Dussehra", img: Dussehra, price: "₹11,999", offer: false },
  { id: 12, name: "Janmashtami", img: Janmashtami, price: "₹10,499", offer: false },
  { id: 13, name: "Kumbh Mela", img: KumbhMela, price: "₹14,999", offer: false },
  { id: 14, name: "Republic Day", img: RepublicDay, price: "₹7,999", offer: false },
  { id: 15, name: "Independence Day", img: IndependenceDay, price: "₹7,499", offer: false },
];

export default function FestivalTour() {
  const [visibleCount, setVisibleCount] = useState(9);
  const navigate = useNavigate();

  const handleLoadMore = () => setVisibleCount(prev => prev + 9);

  return (
    <div className="festival-section">
      <h2 className="festival-title">Festival Tours of India</h2>

      <div className="festival-grid">
        {festivals.slice(0, visibleCount).map((festival) => (
          <div key={festival.id} className="festival-card">

            {festival.offer && (
              <div className="festival-offer-badge">Special Offer</div>
            )}

            <img
              src={festival.img}
              alt={festival.name}
              className="festival-list-img"
              onClick={() => navigate(`/festival/${festival.id}`)}
            />

            <h3 className="festival-name">{festival.name}</h3>

            <p className="festival-price">{festival.price}</p>

            <button
              className="festival-book-btn"
              onClick={() => navigate("/book")}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {visibleCount < festivals.length && (
        <button className="festival-load-more" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}
