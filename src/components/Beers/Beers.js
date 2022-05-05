import styled from "styled-components";
import Beer from "../Beer/Beer";
import BeerContainer from "../BeerContainer/BeerContainer";

const BeersStyled = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Beers = ({ beers }) => {
  return (
    <BeersStyled className="beers">
      {beers.map((beer) => (
        <BeerContainer key={beer.id} className="beer">
          <Beer
            id={beer.id}
            name={beer.name}
            image_url={beer.image_url}
            tagline={beer.tagline}
          />
        </BeerContainer>
      ))}
    </BeersStyled>
  );
};
export default Beers;
