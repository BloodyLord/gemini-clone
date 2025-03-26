import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./mainApp.css";
import SearchBox from "./SearchBox";
import Navbar from "./navbar";
import { Context } from "../../context/context";

export default function MainApp() {
  const [inputVal, setInputVal] = useState("");
  const [userQuery, setUserQuery] = useState("");
  const { showResult, recentPrompt, resultData, loading } = useContext(Context);

  function handleInputValueChange(newValue) {
    setInputVal(newValue);
  }

  function onSend() {
    setUserQuery(inputVal);
  }

  return (
    <div className="main">
      <Navbar />
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Aditya Kumar</span>
              </p>
              <p>How can I help you today?</p>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" srcset="" />
              <pre> {recentPrompt} </pre>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" srcset="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (

                <pre dangerouslySetInnerHTML={{ __html: resultData }}></pre>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <SearchBox />
          <p className="bottom-info">
            Gemini - clone does not make mistakes, so believe in what it says.
          </p>
        </div>
      </div>
    </div>
  );
}
