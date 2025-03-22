import { assets } from "../../assets/assets";
import "./mainApp.css";

export default function MainApp() {
  return (
    <div className="main">
      <div className="nav">
        <p>
          Gemini<br></br> <span className="type">3.0 Clone</span>
        </p>
        <img src={assets.user_icon} alt="" srcset="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Aditya Kumar</span>
          </p>
          <p>How can I help you today?</p>
        </div>

        <div className="cards">
          <div className="card">
            <p>Lorem ipsum dolor sit.</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit.</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit.</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Lorem ipsum dolor sit.</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Ask Gemini" />
            <div>
              <img src={assets.gallery_icon} alt="" srcset="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>

          <p className="bottom-info">
            Gemini - clone does not make mistakes, so believe in what it says.
          </p>
        </div>
      </div>
    </div>
  );
}
