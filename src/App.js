import NavBar from "./components/NavBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React,{ useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import MainContent from "./components/MainContent";
import CountryInDetails from "./components/CountryDetails";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") === null ? false : localStorage.getItem("mode"));
  const onChangeMode = () => {
    localStorage.setItem("mode", !mode);
    setMode(!mode);
  };
  useEffect(() => {
    const bodystyle = document.querySelector("body").style;
    bodystyle.backgroundColor = mode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)";
    bodystyle.color = mode ? "hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)";
  }, [mode])
  return <>
    <NavBar mode={mode} onChangeMode={onChangeMode} />
    <Routes>
      <Route path="/country-api" element={<MainContent mode={mode} />}/>
      <Route path="/country-api/details/:countryname" element={<CountryInDetails mode={mode} />} />
    </Routes>
  </>;
}

export default App;
