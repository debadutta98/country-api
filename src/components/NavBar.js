import { Nav } from "./StyledComponets";

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