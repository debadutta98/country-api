import styled from "styled-components";
const Main=styled.main`
    width:100%;
    height:100vh;
    color: ${props => props.mode ? "hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)"};
    background-color: ${props => props.mode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
    padding:1rem 4vw;
`;
const Input=styled.input`
        width:50vw;
        padding:0.8rem;
        border:none;
        outline: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 4px;
        &::placeholder{
            padding-left: 2rem;
            background-repeat: no-repeat;
            background-size:19px;
            filter:${props => props.mode ? "brightness(0) invert(1)" : "invert(56%) sepia(3%) saturate(14%) hue-rotate(339deg) brightness(93%) contrast(87%)"};
        }
`;
const Filter=styled.div`
        display: flex;
        align-items: center;
        margin-left: auto;
        position: relative;
        &::after{
            display: block;
            width: 15px;
            height: 15px;
            position: absolute;
            left:75%;
            filter:${props => props.mode ? "brightness(0) invert(1)" : "invert(56%) sepia(3%) saturate(14%) hue-rotate(339deg) brightness(93%) contrast(87%)"};
        }
`;
const MainContent=(props)=>{
    return <Main mode={props.mode}>
        <form>
            <Input type="search" placeholder="Search for a country..." mode={props.mode}/>
            <Filter mode={props.mode}>
            <select>
                <option selected={true} style={{display:"none"}}>Filter by Region</option>
                <option>Africa</option>
                <option>America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </select>
            </Filter>
        </form>
    </Main>
};
export default MainContent;