import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultData(prev=>prev+nextWord);
    }, 75*index)
  }
  async function onSent (prompt) {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    if (input && input.trim().length > 0) {
      setRecentPrompt(input.trim());
      const response = await runChat(input);
      let responseArray = response.split("**");
      let newResponse = "";
      for(let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        }
        else {
          newResponse += "<b>" + responseArray[i]+ "</b>"
        }
      }
      // setResultData(newResponse);
      let newResponseArray = newResponse.split(" ");
      for(let i = 0; i < newResponseArray.length; i++) {
        const nextWord = newResponseArray[i];
        delayPara(i, nextWord+ " ");
      }
      setLoading(false);
    }
  }

  // onSent("how to get my friends give me my money?");

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    recentPrompt,
    setRecentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    setLoading
  }
  
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;