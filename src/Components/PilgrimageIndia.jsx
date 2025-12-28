import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PilgrimageIndia.css";

// IMPORT IMAGES
import TirupatiImg from "../assets/Tirupati Balaji Temple.jpg";
import MaduraiImg from "../assets/Madurai Meenakshi Temple.webp";
import KashiImg from "../assets/Kashi Vishwanath Temple.jpg";
import SomnathImg from "../assets/Somnath Temple.jpg";
import GoldenTempleImg from "../assets/Golden Temple.jpg";
import AjmerDargahImg from "../assets/Ajmer Dargah.jpg";
import HajiAliDargahImg from "../assets/Haji Ali Dargah.jpg";
import VelankanniChurchImg from "../assets/Velankanni Church.jpg";
import SanThomeChurchImg from "../assets/San Thome Church.jpg";
import BasilicaBomJesusImg from "../assets/Basilica of Bom Jesus.png";
import BadrinathImg from "../assets/Badrinath Temple.jpg";
import KedarnathImg from "../assets/kedarnath.jpg";
import RanganathaswamyImg from "../assets/Ranganathaswamy Temple.jpg";
import ShirdiSaiBabaImg from "../assets/Shirdi Sai Baba Temple.jpg";
import PushkarImg from "../assets/Pushkar Temple.webp";
import JamaMasjidImg from "../assets/Jama Masjid Delhi.jpg";
import CharminarImg from "../assets/Charminar Mosque.jpg";
import NagoreDargahImg from "../assets/Nagore Dargah.jpg";
import StFrancisChurchImg from "../assets/St. Francis Church.jpg";
import MountMaryChurchImg from "../assets/Mount Mary Church.jpg";
import RameswaramImg from "../assets/Rameswaram Temple.jpg";
import AnnavaramImg from "../assets/Annavaram Temple.jpg";
import KamakhyaImg from "../assets/Kamakhya Temple.jpg";
import DakshineswarImg from "../assets/Dakshineswar Temple.jpg";
import ShaniShingnapurImg from "../assets/Shani Shingnapur Temple.avif";
import NizamuddinDargahImg from "../assets/Nizamuddin Dargah.jpg";
import PiranKaliyarDargahImg from "../assets/Piran Kaliyar Dargah.jpg";
import StMarysBasilicaImg from "../assets/St. Mary's Basilica.jpg";
import HolyTrinityChurchImg from "../assets/Holy Trinity Church.webp";
import SeCathedralImg from "../assets/Se Cathedral.jpg";
import UdupiKrishnaImg from "../assets/Udupi Krishna Temple.jpg";
import PandharpurImg from "../assets/Pandharpur Temple.jpg";
import GuruvayurImg from "../assets/Guruvayur Temple.jpg";
import HazratbalShrineImg from "../assets/Hazratbal Shrine.jpg";
import MakkahMasjidImg from "../assets/Makkah Masjid.jpg";
import OurLadyOfLourdesImg from "../assets/Our Lady of Lourdes.jpg";
import StPaulsCathedralImg from "../assets/St. Paul's Cathedral.jpg";
import InfantJesusChurchImg from "../assets/Infant Jesus Church.jpg";
import SriKrishnaMathaImg from "../assets/Sri Krishna Matha.jpg";
import KonarkSunTempleImg from "../assets/Konark Sun Temple.webp";

// FULL 40 PLACES WITH AMOUNT + DAYS + LOCATION
const places = [
  { id: 1, name: "Tirupati Balaji Temple", img: TirupatiImg, amt: "₹2,999", days: "1 Day", location: "Tirupati, AP" },
  { id: 2, name: "Madurai Meenakshi Temple", img: MaduraiImg, amt: "₹3,499", days: "1 Day", location: "Madurai, TN" },
  { id: 3, name: "Kashi Vishwanath Temple", img: KashiImg, amt: "₹7,999", days: "2 Days", location: "Varanasi, UP" },
  { id: 4, name: "Somnath Temple", img: SomnathImg, amt: "₹8,499", days: "2 Days", location: "Gujarat" },
  { id: 5, name: "Golden Temple", img: GoldenTempleImg, amt: "₹6,999", days: "2 Days", location: "Amritsar, Punjab" },
  { id: 6, name: "Ajmer Dargah", img: AjmerDargahImg, amt: "₹5,499", days: "1 Day", location: "Rajasthan" },
  { id: 7, name: "Haji Ali Dargah", img: HajiAliDargahImg, amt: "₹4,999", days: "1 Day", location: "Mumbai, MH" },
  { id: 8, name: "Velankanni Church", img: VelankanniChurchImg, amt: "₹3,999", days: "1 Day", location: "Tamil Nadu" },
  { id: 9, name: "San Thome Church", img: SanThomeChurchImg, amt: "₹2,999", days: "1 Day", location: "Chennai, TN" },
  { id: 10, name: "Basilica of Bom Jesus", img: BasilicaBomJesusImg, amt: "₹6,499", days: "2 Days", location: "Goa" },
  { id: 11, name: "Badrinath Temple", img: BadrinathImg, amt: "₹9,999", days: "3 Days", location: "Uttarakhand" },
  { id: 12, name: "Kedarnath Temple", img: KedarnathImg, amt: "₹12,999", days: "3 Days", location: "Uttarakhand" },
  { id: 13, name: "Ranganathaswamy Temple", img: RanganathaswamyImg, amt: "₹3,499", days: "1 Day", location: "Srirangam, TN" },
  { id: 14, name: "Shirdi Sai Baba", img: ShirdiSaiBabaImg, amt: "₹4,999", days: "1 Day", location: "Maharashtra" },
  { id: 15, name: "Pushkar Temple", img: PushkarImg, amt: "₹5,499", days: "1 Day", location: "Rajasthan" },
  { id: 16, name: "Jama Masjid Delhi", img: JamaMasjidImg, amt: "₹4,499", days: "1 Day", location: "Delhi" },
  { id: 17, name: "Charminar Mosque", img: CharminarImg, amt: "₹3,999", days: "1 Day", location: "Hyderabad, TS" },
  { id: 18, name: "Nagore Dargah", img: NagoreDargahImg, amt: "₹3,499", days: "1 Day", location: "Tamil Nadu" },
  { id: 19, name: "St. Francis Church", img: StFrancisChurchImg, amt: "₹3,999", days: "1 Day", location: "Kerala" },
  { id: 20, name: "Mount Mary Church", img: MountMaryChurchImg, amt: "₹4,499", days: "1 Day", location: "Mumbai" },
  { id: 21, name: "Rameswaram Temple", img: RameswaramImg, amt: "₹4,999", days: "1 Day", location: "Tamil Nadu" },
  { id: 22, name: "Annavaram Temple", img: AnnavaramImg, amt: "₹3,999", days: "1 Day", location: "AP" },
  { id: 23, name: "Kamakhya Temple", img: KamakhyaImg, amt: "₹8,499", days: "2 Days", location: "Assam" },
  { id: 24, name: "Dakshineswar Temple", img: DakshineswarImg, amt: "₹6,999", days: "1 Day", location: "Kolkata, WB" },
  { id: 25, name: "Shani Shingnapur", img: ShaniShingnapurImg, amt: "₹3,499", days: "1 Day", location: "Maharashtra" },
  { id: 26, name: "Nizamuddin Dargah", img: NizamuddinDargahImg, amt: "₹4,499", days: "1 Day", location: "Delhi" },
  { id: 27, name: "Piran Kaliyar", img: PiranKaliyarDargahImg, amt: "₹5,499", days: "1 Day", location: "Uttarakhand" },
  { id: 28, name: "St. Mary's Basilica", img: StMarysBasilicaImg, amt: "₹3,999", days: "1 Day", location: "Bengaluru, KA" },
  { id: 29, name: "Holy Trinity Church", img: HolyTrinityChurchImg, amt: "₹3,499", days: "1 Day", location: "Bengaluru" },
  { id: 30, name: "Se Cathedral", img: SeCathedralImg, amt: "₹6,999", days: "2 Days", location: "Goa" },
  { id: 31, name: "Udupi Krishna Temple", img: UdupiKrishnaImg, amt: "₹4,999", days: "1 Day", location: "Karnataka" },
  { id: 32, name: "Pandharpur", img: PandharpurImg, amt: "₹4,499", days: "1 Day", location: "Maharashtra" },
  { id: 33, name: "Guruvayur Temple", img: GuruvayurImg, amt: "₹4,999", days: "1 Day", location: "Kerala" },
  { id: 34, name: "Hazratbal Shrine", img: HazratbalShrineImg, amt: "₹9,999", days: "2 Days", location: "Kashmir" },
  { id: 35, name: "Makkah Masjid", img: MakkahMasjidImg, amt: "₹3,999", days: "1 Day", location: "Hyderabad" },
  { id: 36, name: "Our Lady of Lourdes", img: OurLadyOfLourdesImg, amt: "₹4,499", days: "1 Day", location: "Tamil Nadu" },
  { id: 37, name: "St. Paul's Cathedral", img: StPaulsCathedralImg, amt: "₹5,999", days: "1 Day", location: "Kolkata" },
  { id: 38, name: "Infant Jesus Church", img: InfantJesusChurchImg, amt: "₹3,999", days: "1 Day", location: "Bengaluru" },
  { id: 39, name: "Sri Krishna Matha", img: SriKrishnaMathaImg, amt: "₹4,499", days: "1 Day", location: "Udupi, KA" },
  { id: 40, name: "Konark Sun Temple", img: KonarkSunTempleImg, amt: "₹7,999", days: "2 Days", location: "Odisha" }
];
export default function PilgrimageIndia() {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(9);

  return (
    <div className="section" id="pilgrimage">
      <h2>Popular Pilgrimage Places of India</h2>

      <div className="grid">
        {places.slice(0, visible).map((place) => (
          <div key={place.id} className="card">
            <img
              src={place.img}
              alt={place.name}
              onClick={() => navigate(`/pilgrimage/${place.id}`)}
            />

            <h3>{place.name}</h3>
            <p className="price">{place.amt}</p>
            <p className="info">{place.days} | {place.location}</p>


            <button className="book-btn" onClick={() => navigate("/book")}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      {visible < places.length && (
        <button className="load-more-btn" onClick={() => setVisible(visible + 9)}>
          Load More
        </button>
      )}
    </div>
  );
}