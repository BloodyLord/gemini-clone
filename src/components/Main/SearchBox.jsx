import "./searchbox.css";
import { assets } from "../../assets/assets";

export default function SearchBox({ inputValue, handleInputValueChange, onSend }) {

  function handleTextAreaChange(event) {
    const newValue = event.target.value;
    event.target.style.height = `auto`;
    event.target.style.height = `${event.target.scrollHeight}px`;
    handleInputValueChange(newValue);
  }

  return (
    <div className="search-box">
      <textarea
        placeholder="Ask Gemini"
        value={inputValue}
        onChange={handleTextAreaChange}
      ></textarea>
      <div className="button-container">
        <div className="icon-div">
          <img src={assets.plus_icon} alt="" srcset="" />
        </div>
        <div className="icon-div">
          <img src={assets.mic_icon} alt="" srcset="" />
        </div>
        <div className="icon-div" onClick={onSend}>
          <img src={assets.send_icon} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}
