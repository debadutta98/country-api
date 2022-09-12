import NavBar from "./components/NavBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React,{ useContext, useEffect} from "react";
import { Route, Routes } from "react-router-dom";

import MainContent from "./components/MainContent";
import CountryInDetails from "./components/CountryDetails";
import { context } from "./context/Provider";

function App() {
  const ctx=useContext(context);
  useEffect(() => {
    const bodystyle = document.querySelector("body").style;
    bodystyle.backgroundColor = ctx.isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)";
    bodystyle.color = ctx.isDark ? "hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)";
  }, [ctx.isDark])
  return <>
    <NavBar/>
    <Routes>
      <Route path="/country-api" element={<MainContent/>}/>
      <Route path="/country-api/details/:countryname" element={<CountryInDetails/>} />
    </Routes>
  </>;
}

export default App;
