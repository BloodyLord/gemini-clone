import { useState } from "react";
import { assets } from "../../assets/assets";
import "./mainApp.css";
import SearchBox from "./SearchBox";

export default function MainApp() {
  const [inputVal, setInputVal] = useState("");
  const [userQuery, setUserQuery] = useState("");

  function handleInputValueChange(newValue) {
    setInputVal(newValue);
  }

  function onSend() {
    setUserQuery(inputVal);
    console.log(userQuery);
  }

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
            <p>Beeru ki galat kaam ki latt kaise chudwayi jaye.</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Ayush ko pack karna hai.</p>
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
          <SearchBox
            inputValue={inputVal}
            handleInputValueChange={handleInputValueChange}
            onSend={onSend}
          />
          <p className="bottom-info">
            Gemini - clone does not make mistakes, so believe in what it says.
          </p>
        </div>
      </div>
    </div>
  );
}
