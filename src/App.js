import React, { useState } from "react";
import useLocalStorage from "use-local-storage";
import { Route, Routes, Router } from "react-router-dom";

import './index.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";

function App() {

  //persist theme on refreshes !! - use local storage to remember the theme
  //check if there's a local session named 'theme'. if there's not, init it as default: light
  const[theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const [text, setText] = useState("Light Theme");

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);

    const newText = theme === 'dark' ? 'Light Theme' : 'Dark Theme';
    setText(newText);
  }


  return (
   <div className="app" data-theme={theme}>
    <Routes>
      <Route path='/login' element={<Login text={text} switchTheme={switchTheme}/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/resetpassword/*' element={<ResetPassword/>}/>
    </Routes>    
   </div>
  );
}

export default App;
