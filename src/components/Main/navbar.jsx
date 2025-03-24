import "./navbar.css";
import { assets } from "../../assets/assets";

export default function Navbar() {
  return (
    <div className="nav">
      <p>
        Gemini<br></br> <span className="type">3.0 Clone</span>
      </p>
      <img src={assets.user_icon} alt="" srcset="" />
    </div>
  );
}
