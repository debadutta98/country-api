import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DropDown from "./DropDown";
import GridCard from "./GridCard";
const Main=styled.main`
    position: relative;
    z-index: 1;
    width:100%;
    height:100%;
    color: ${props => props.mode ? "hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)"};
    background-color: ${props => props.mode ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
    padding:1rem 4vw;
`;
const Input=styled.input`
        width:50vw;
        padding:0.8rem;
        border:none;
        outline: none;
        box-shadow: ${props => props.mode ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
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
        box-shadow: ${props => props.mode ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
        &::after{
            display: block;
            width: 15px;
            height: 15px;
            position: absolute;
            left:86%;
            filter:${props => props.mode ? "brightness(0) invert(1)" : "invert(56%) sepia(3%) saturate(14%) hue-rotate(339deg) brightness(93%) contrast(87%)"};
        }
`;
const Grid=styled.div`
margin-top:3rem;
`;
const cleanData=(value)=>{
    return {
        name:value.name,
        population: value.population,
        region: value.region,
        capital:value.capital,
        flag: value.flags.png
    }
};
const MainContent=(props)=>{
    const [country_results,setCountryResult]=useState([]);
    const filterref=useRef();
    const [toggle,setToggle]=useState(false);
    useEffect(()=>{
        fetch("https://restcountries.com/v2/all").then(async(res)=>{
                return await res.json();
        }).then((data)=>{
            setCountryResult(data.map(cleanData));
        }).catch((err)=>{
            console.log("connection issuses");
        });
    },[]);
    const onChangeFilter=(continentName)=>{
        filterref.current.value = continentName;
    };
    const onToggleHandler=()=>{
        setToggle(!toggle);
    };
    return <Main mode={props.mode}>
        <form>
            <Input type="search" placeholder="Search for a country..." mode={props.mode}/>
            <Filter mode={props.mode} className="filter" onClick={onToggleHandler}>
            <input type="text" placeholder="Filter by Region" disabled={true} ref={filterref}/>
                <DropDown onClick={onChangeFilter} mode={props.mode} toggle={toggle}/>
            </Filter>
        </form>
        {country_results.length > 0 ? <Grid className="grid">
            {/* country card */}
            {
                country_results.map((value, index) => {
                    return <GridCard result={value} key={index} mode={props.mode} />
                })
            }
        </Grid> : <span>No result Found</span>}
    </Main>
};
export default MainContent;