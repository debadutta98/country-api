import { useEffect, useRef, useState } from "react";
import { Main,Input,Filter,Grid } from "./StyledComponets";
import DropDown from "./DropDown";
import GridCard from "./GridCard";

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