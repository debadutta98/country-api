import styled from "styled-components";

const DropDownOverlay=styled.div`
box-shadow: ${props => props.mode ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
`;
const DropDown=({onClick,mode,toggle})=>{
    return <DropDownOverlay className="drop-down" mode={mode} style={{display:!toggle?"none":"flex"}}>
        <button type="button" onClick={onClick.bind(null,"Africa")}>Africa</button>
        <button type="button" onClick={onClick.bind(null,"Americas")}>Americas</button>
        <button type="button" onClick={onClick.bind(null,'Asia')}>Asia</button>
        <button type="button" onClick={onClick.bind(null,"Europe")}>Europe</button>
        <button type="button" onClick={onClick.bind(null,"Oceania")}>Oceania</button>
    </DropDownOverlay>
};
export default DropDown;