import React, { useCallback, useState } from "react";
import useLocalStorage from "use-local-storage";
import { Route, Routes, Router } from "react-router-dom";

import "./index.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";

import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { StytchProvider } from "@stytch/react";

function App() {
  const stytchClient = new StytchHeadlessClient(
    "public-token-test-ea0a4f78-0e54-436b-9d42-3525e13c6384"
  );

  const logout = () => {
    stytchClient.session.revoke();
  };

  //persist theme on refreshes !! - use local storage to remember the theme
  //check if there's a local session named 'theme'. if there's not, init it as default: light
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const [text, setText] = useState("Light Theme");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    const newText = theme === "dark" ? "Light Theme" : "Dark Theme";
    setText(newText);
  };

  return (
    <div className="app" data-theme={theme}>
      <StytchProvider stytch={stytchClient}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/resetpassword/*" element={<ResetPassword />} />
        </Routes>
      </StytchProvider>
      <div className="theme-toggle">
        <h2>{text}</h2>
        <i onClick={switchTheme} className="fas fa-toggle-on"></i>
      </div>
    </div>
  );
}

export default App;
