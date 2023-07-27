import React, { useState, useEffect, useMemo } from "react";
import jwtDecode from "jwt-decode";
import Router from "../navigation/Router";
import NavBar from "./components/NavBar";
import LoginContext from "../navigation/LoginContext";
import "./styles/global.scss";

function App() {
  const [bands, setBands] = useState([]);

  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const userjwt = jwtDecode(token);
      console.warn("TOKEN UTILISATEUR", userjwt);
      setUser(userjwt);
    }
  }, []);

  const loginContextValue = useMemo(
    () => ({
      bands,
      setBands,
      user,
      setUser,
    }),
    [bands, setBands, user, setUser]
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
