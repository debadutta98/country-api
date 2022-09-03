import styled from "styled-components";
const Nav=styled.nav`
    display: flex;
    align-items: center;
    position: fixed;
    width: 100%;
    padding:1rem 4vw;
    gap:1rem;
    box-shadow: 0.5px 0.5px 4px ${props => props.mode ? "hsl(200, 15%, 8%)" : "hsl(0, 0%, 52%)" };
    color: ${props => props.mode ? "hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)"};
    background-color: ${props => props.mode ? "hsl(209, 23%, 22%)" :"hsl(0, 0%, 98%)"};
`;
const NavBar=(props)=>{
    const onSwitchMode=()=>{
        props.onChangeMode();
    };
    console.log(props.mode);
    return <Nav mode={props.mode}>
        <h3>Where in the world?</h3>
        <button onClick={onSwitchMode}><i className={`${props.mode ? "fa-duotone fa-solid" : "fa-regular"} fa-moon`}></i>&nbsp;<span>Dark Mode</span></button>
    </Nav>
};
export default NavBar;