import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useState, useRef } from "react";

export default function Sidebar() {
  const [extended, setExtended] = useState(false);
  const timeoutRef = useRef(null);
  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => {
      setExtended(true);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear the timeout if it exists
      timeoutRef.current = null; // Reset the ref to null
    }
    setExtended(false);
  };
  return (
    <div className="sidebar" style={{width: !extended? "77px": "250px"}}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <div className="top">
        <img className="menu" src={assets.menu_icon} alt="" srcset="" onClick={()=>setExtended(!extended)} />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="" srcset="" />
          {extended ? <span>New Chat</span> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            <div className="recent-entry">
              <img src={assets.message_icon} alt="" srcset="" />
              <p>Hemlock: Plant or Tree?</p>
            </div>
          </div>
        ) : null}

      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended? <p>Help</p>: null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended? <p>Activity</p>: null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended? <p>Settings</p>: null}
        </div>
      </div>
    </div>
  );
}
