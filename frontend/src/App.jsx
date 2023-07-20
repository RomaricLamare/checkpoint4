import React, { useState, useMemo } from "react";
import Router from "../navigation/Router";
import NavBar from "./components/NavBar";
import LoginContext from "../navigation/LoginContext";
import "./styles/global.scss";

function App() {
  const [bands, setBands] = useState([]);

  const loginContextValue = useMemo(
    () => ({
      bands,
      setBands,
    }),
    [bands]
  );

  return (
    <div className="App">
      <LoginContext.Provider value={loginContextValue}>
        <NavBar />
        <Router />
      </LoginContext.Provider>
    </div>
  );
}

export default App;
