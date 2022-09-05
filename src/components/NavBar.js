import styled from "styled-components";
const Nav=styled.nav`
    position: sticky;
    top:0%;
    z-index: 10;
    display: flex;
    align-items: center;
    padding:1rem 4vw;
    gap:1rem;
    box-shadow: ${props => props.mode ? "hsl(200, 15%, 8%) 0px 1px 4px;" :"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
    color: ${props => props.mode ? "hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)"};
    background-color: ${props => props.mode ? "hsl(209, 23%, 22%)" :"hsl(0, 0%, 98%)"};
    span{
        margin-left: ${props=> props.mode?"9px":"7px"};
    }
`;
const NavBar=(props)=>{
    const onSwitchMode=()=>{
        props.onChangeMode();
    };
    return <Nav mode={props.mode}>
        <h3>Where in the world?</h3>
        <button onClick={onSwitchMode}><i className={`${props.mode ? "fa-duotone fa-solid" : "fa-regular"} fa-moon`}></i><span>Dark Mode</span></button>
    </Nav>
};
export default NavBar;