import { useParams, Link, useNavigate } from "react-router-dom";
import festivalData from "./festivalData";
import "./FestivalDetails.css";

const FestivalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const festival = festivalData.find((f) => f.id === Number(id));

  if (!festival) {
    return <h2>Festival Not Found</h2>;
  }

  return (
    <div className="festival-details-container">

      <h1 className="festival-title">{festival.name}</h1>

      <img
        src={festival.image}
        alt={festival.name}
        className="festival-img"
      />

      <div className="festival-badges">
        <span className="festival-badge green-badge">{festival.days}</span>
        <span className="festival-badge gold-badge">{festival.price}</span>
      </div>

      <div className="festival-info">
        <h2>Festival Location</h2>
        <p>{festival.location}</p>

        <h2>About Festival</h2>
        <p>{festival.description}</p>

        <Link to="/festivals" className="festival-back-btn">
          ← Back
        </Link>

        <button
          className="book-btn"
          onClick={() => navigate("/book")}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FestivalDetails;
