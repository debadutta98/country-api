import styled from "styled-components";
export const Main = styled.main`
    position: relative;
    z-index: 1;
    width:100%;
    height:100%;
    color: ${props => props.isDark ? "hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)"};
    background-color: ${props => props.isDark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
    padding:1rem 4vw;
`;
export const Input = styled.input`
        width:20rem;
        padding:1rem;
        border:none;
        outline: none;
        box-shadow: ${props => props.isDark ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
        border-radius: 4px;
        &::placeholder{
            padding-left: 2rem;
            background-repeat: no-repeat;
            background-size:19px;
            filter:${props => props.isDark ? "brightness(0) invert(1)" : "invert(56%) sepia(3%) saturate(14%) hue-rotate(339deg) brightness(93%) contrast(87%)"};
        }
`;
export const Filter = styled.div`
        display: flex;
        align-items: center;
        margin-left: auto;
        position: relative;
        box-shadow: ${props => props.isDark ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
        &::after{
            display: block;
            width: 15px;
            height: 15px;
            position: absolute;
            left:86%;
            filter:${props => props.isDark ? "brightness(0) invert(1)" : "invert(56%) sepia(3%) saturate(14%) hue-rotate(339deg) brightness(93%) contrast(87%)"};
        }
`;
export const Grid = styled.div`
display:grid;
grid-template-columns: repeat(${props=>{
    if(props.length<4)
    {
        return "4";
    }else{
        return "auto-fit";
    }
}},minmax(250px,1fr));
gap:3rem;
@media screen and (max-width:613px) {
    grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
    gap:2rem;
}
@media screen and (max-width:530px) {
    grid-template-columns: repeat(auto-fit,minmax(210px,1fr));
    gap:1.5rem;
}
margin-top:3rem;
`;
export const BackButton=styled.button`
        border:none;
        outline:none;
        margin-right:auto;
        color:inherit;
        padding:0.5rem 1.8rem;
        cursor:pointer;
        background-color:inherit;
        box-shadow: ${props => props.isDark ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
        word-spacing: 0.3rem;
`;

export const Tag=styled.li`
 box-shadow: ${props => props.isDark ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
 color:inherit;
 background-color:inherit;
 padding:0rem 1.5rem;
 font-size: 12px;
 font-weight: 500;
`;

export const Card = styled.div`
box-shadow: ${props => props.isDark ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
`;
export const Nav = styled.nav`
    position: sticky;
    top:0%;
    z-index: 10;
    display: flex;
    align-items: center;
    padding:1rem 4vw;
    gap:1rem;
    box-shadow: ${props => props.isDark ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
    color: ${props => props.isDark ? "hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)"};
    background-color: ${props => props.isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)"};
    span{
        margin-left: ${props => props.isDark ? "9px" : "7px"};
    }
`;
export const DropDownOverlay = styled.div`
box-shadow: ${props => props.isDark ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
`;