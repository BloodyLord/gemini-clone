import "./searchbox.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/context";

export default function SearchBox() {

  const {input, setInput, onSent} = useContext(Context);
  function handleTextAreaChange(event) {
    event.target.style.height = `auto`;
    event.target.style.height = `${event.target.scrollHeight}px`;
    setInput(event.target.value);
  }

  return (
    <div className="search-box">
      <textarea
        placeholder="Ask Gemini"
        value={input}
        onChange={(e)=>handleTextAreaChange(e)}
      ></textarea>
      <div className="button-container">
        <div className="icon-div">
          <img src={assets.plus_icon} alt="" srcset="" />
        </div>
        <div className="icon-div">
          <img src={assets.mic_icon} alt="" srcset="" />
        </div>
        <div className="icon-div" onClick={onSent}>
          <img src={assets.send_icon} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}
