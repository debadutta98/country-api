import { Link } from "react-router-dom";
import { Card } from "./StyledComponets";


const GridCard = ({ result,mode }) => {
    return <>
    <Link to={`details/${result.name}`} style={{textDecoration:"none",color:"inherit"}}>
        <Card className="card" mode={mode}>
            <img src={result.flag} alt={result.name} />
            <h3>{result.name}</h3>
            <div className="card__small-details">
                <span><b>Population:</b><span>{result.population}</span></span>
                <span><b>Region:</b><span>{result.region}</span></span>
                <span><b>Capital:</b><span>{result.capital}</span></span>
            </div>
        </Card>
    </Link>
    </>;
};
export default GridCard;