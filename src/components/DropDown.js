import { useContext } from "react";
import { context } from "../context/Provider";
import { DropDownOverlay } from "./StyledComponets";
const DropDown=({onClick,toggle})=>{
    const ctx=useContext(context);
    return <DropDownOverlay className="drop-down" isDark={ctx.isDark} style={{display:!toggle?"none":"flex"}}>
        <button type="button" onClick={onClick.bind(null,"Africa")}>Africa</button>
        <button type="button" onClick={onClick.bind(null,"Americas")}>America</button>
        <button type="button" onClick={onClick.bind(null,'Asia')}>Asia</button>
        <button type="button" onClick={onClick.bind(null,"Europe")}>Europe</button>
        <button type="button" onClick={onClick.bind(null,"Oceania")}>Oceania</button>
    </DropDownOverlay>
};
export default DropDown;