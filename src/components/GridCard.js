import styled from "styled-components";

const Wrapper = styled.a`
text-decoration:none;
color:inherit;
`;
const Card=styled.div`
box-shadow: ${props => props.mode ? "hsl(200, 15%, 8%) 0px 1px 4px;" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};
`;
const GridCard = ({ result,mode }) => {
    return <Wrapper href={`/details/${result.name}`}>
        <Card className="card" mode={mode}>
            <img src={result.flag} alt={result.name} />
            <h3>{result.name}</h3>
            <div className="card__small-details">
                <span><b>Population:</b><span>{result.population}</span></span>
                <span><b>Region:</b><span>{result.region}</span></span>
                <span><b>Capital:</b><span>{result.capital}</span></span>
            </div>
        </Card>
    </Wrapper>
};
export default GridCard;