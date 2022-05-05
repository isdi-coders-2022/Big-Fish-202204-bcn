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
          <Beer beer={beer} />
        </BeerContainer>
      ))}
    </BeersStyled>
  );
};
export default Beers;
