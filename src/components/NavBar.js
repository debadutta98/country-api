import { useContext } from "react";
import { context } from "../context/Provider";
import { Nav } from "./StyledComponets";

const NavBar = () => {
    const ctx = useContext(context);
    return <Nav isDark={ctx.isDark}>
        <h3>Where in the world?</h3>
        <button onClick={() => {
            ctx.onChangeMode();
        }}><i className={`${ctx.isDark ? "fa-duotone fa-solid" : "fa-regular"} fa-moon`}></i><span>Dark Mode</span>
        </button>
    </Nav>
};
export default NavBar;