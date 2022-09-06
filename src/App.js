import NavBar from "./components/NavBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import MainContent from "./components/MainContent";
import { Route, Routes } from "react-router-dom";
import CountryInDetails from "./components/CountryDetails";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("mode") === null ? false : localStorage.getItem("mode"));
  const onChangeMode = () => {
    localStorage.setItem("mode",!mode);
    setMode(!mode);
  };
  return <>
    <NavBar mode={mode} onChangeMode={onChangeMode} />
    <Routes>
      <Route path="/country-api" element={<MainContent mode={mode} />} />
      <Route path="/details/:countryname" element={<CountryInDetails mode={mode} />}/>
    </Routes>
  </>;
}

export default App;
