import React, { useState } from "react";
export const context = React.createContext({
    isDark: false,
    onChangeMode: function () { }
})
const initialState=()=>{
    if(localStorage.getItem("mode"))
    {
        return localStorage.getItem("mode") === "false" ? false : true;
    }else{
        return false;
    }
}
const Provider = (props) => {
    const [darkMode, setDarkMode] = useState(initialState);
    console.log(darkMode);
    return <context.Provider value={{
        isDark: darkMode,
        onChangeMode: () => {
            localStorage.setItem("mode", !darkMode);
            setDarkMode(!darkMode);
        }
    }}>
        {props.children}
    </context.Provider>;
};
export default Provider;