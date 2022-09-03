import NavBar from "./components/NavBar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from "react";
function App() {
    const [mode,setMode]=useState(false);
    const onChangeMode=()=>{
      setMode(!mode);
    }
    return <>
      <NavBar mode={mode} onChangeMode={onChangeMode}/>
      <main className={mode?"darkmode":"lightmode"}>
      </main>
    </>
}

export default App;
