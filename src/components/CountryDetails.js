import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, Main, Tag } from "./StyledComponets";

const CountryInDetails = ({ mode }) => {
    const [countryResult, setCountryResult] = useState({});
    const [borderCountries,setBorderCountries]=useState([]);
    const param = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://restcountries.com/v2/name/${param.countryname}?fullText=true`)
            .then(async (res) => await res.json())
            .then((value) => {
                setCountryResult({
                    name: value[0].name,
                    flag: value[0].flags.png,
                    container1: {
                        "Native Name": value[0].nativeName,
                        "Population": value[0].population,
                        "Region": value[0].region,
                        "Sub Region": value[0].subregion,
                        "Capital": value[0].capital,
                    },
                    container2: {
                        "Top Level Domain": value[0].topLevelDomain.join(", "),
                        "Currencies": value[0].currencies.map((value) => value.name).join(", "),
                        "Languages": value[0].languages.map((value) => value.name).join(", "),
                    },
                    borderCountries: value[0].borders
                });
            })
            .catch((err) => {
                console.log("connection Error");
            });
    }, [param]);
    useEffect(() => {
        if (countryResult?.borderCountries && Array.isArray(countryResult?.borderCountries)) {
            fetch(`https://restcountries.com/v3.1/alpha?codes=${countryResult?.borderCountries.join(",")}`)
                .then(async (res) => {
                    return await res.json();
                })
                .then((data) => {
                    setBorderCountries(data.map(value => value.name.common));
                }).catch((err) => {
                    console.log("connection error");
                })
        }
    }, [countryResult?.borderCountries]);
    const goBack = () => {
        navigate(-1);
    };
    return <Main mode={mode} style={{ height: "max-content" }}>
        <div className="country-details">
            <BackButton mode={mode} onClick={goBack}><i className="fa-solid fa-arrow-left-long"></i> Back</BackButton>
            {Object.keys(countryResult).length > 0 && <div className="country-details__content">
                <img src={countryResult.flag} alt={countryResult.name} />
                <div className="country-details__content__details">
                    <h2>{countryResult.name}</h2>
                    <div className="country-details__content__details__information">
                        <ul className="country-details__content__details__information__container-1">
                            {Object.entries(countryResult.container1).map(([key, value], index) => {
                                return <li key={index}><b>{`${key}:`}</b><span>{value}</span></li>
                            })}
                        </ul>
                        <ul className="country-details__content__details__information__container-2">
                            {Object.entries(countryResult.container2).map(([key, value], index) => {
                                return <li key={index}><b>{`${key}:`}</b><span>{value}</span></li>
                            })}
                        </ul>
                    </div>
                    {borderCountries.length > 0 && <div className="border-countries">
                        <span className="border-countries__title">Border Countries:</span>
                        <ul className="border-countries__container">
                        {borderCountries.map(((value, index) => {
                            return <Tag key={index} mode={mode}>{value}</Tag>
                        }))}
                        </ul>
                    </div>}
                </div>
            </div>}
        </div>
    </Main>
};
export default CountryInDetails;
