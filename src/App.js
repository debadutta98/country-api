import NavBar from "./components/NavBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
import MainContent from "./components/Main";
function App() {
    const [mode,setMode]=useState(false);
    const onChangeMode=()=>{
      setMode(!mode);
    }
    return <>
      <NavBar mode={mode} onChangeMode={onChangeMode}/>
      <MainContent mode={mode}/>
    </>
}

export default App;
