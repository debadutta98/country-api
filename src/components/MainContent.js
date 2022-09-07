import { useEffect, useRef, useState } from "react";
import { Main, Input, Filter, Grid } from "./StyledComponets";
import DropDown from "./DropDown";
import GridCard from "./GridCard";

const cleanData = (value) => {
    return {
        name: value.name,
        population: value.population,
        region: value.region,
        capital: value.capital,
        flag: value.flags.png
    }
};
const MainContent = (props) => {
    const filterref = useRef();
    const searchRef = useRef();
    const [country_results, setCountryResult] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [searchValue, setSearchValue] = useState(searchRef?.current?.value);
    const [filter, setFilter] = useState("");
    useEffect(() => {
        if (searchValue || searchRef?.current?.value) {
            const interval = setTimeout(() => {
                fetch(`https://restcountries.com/v2/name/${searchValue || searchRef?.current?.value}`)
                    .then(async (res) => await res.json())
                    .then((data) => {
                        setCountryResult(data.map(cleanData));
                    }).catch((value) => {
                        console.log("connection error");
                    });
                filterref.current.value = "";
                setFilter("");
            }, 500);
            return () => clearTimeout(interval);
        } else {
            fetch("https://restcountries.com/v2/all").then(async (res) => {
                return await res.json();
            }).then((data) => {
                setCountryResult(data.map(cleanData));
            }).catch((err) => {
                console.log("connection issuses");
            });
        }
    }, [searchValue]);
    const onChangeFilter = (continentName) => {
        filterref.current.value = continentName;
        setFilter(continentName);
    };
    const onToggleHandler = () => {
        setToggle(!toggle);
    };
    const onChangeHandler = () => {
        setSearchValue(searchRef.current.value);
    };
    return <Main mode={props.mode}>
        <form>
            <Input id="search" type="search" placeholder="Search for a country..." mode={props.mode} onChange={onChangeHandler} ref={searchRef} />
            <Filter mode={props.mode} className="filter" onClick={onToggleHandler}>
                <input type="text" placeholder="Filter by Region" disabled={true} ref={filterref} />
                <DropDown onClick={onChangeFilter} mode={props.mode} toggle={toggle} />
            </Filter>
        </form>
        {country_results.length > 0 ? <Grid className="grid" length={country_results.length}>
            {
                filter ? country_results.filter((value) => value.region.toLowerCase() === filter.toLowerCase()).map((value, index) => {
                    return <GridCard result={value} key={index} mode={props.mode} />
                }) : country_results.map((value, index) => {
                    return <GridCard result={value} key={index} mode={props.mode} />
                })
            }
        </Grid> : <div className="loading"><span>Loading...</span></div>}
    </Main>
};
export default MainContent;