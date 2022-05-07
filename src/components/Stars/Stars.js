import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { beerCardColor } from "../../colours/elementsColours";

const StyledStarsContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: fit-content;
  background-color: ${beerCardColor};
`;

const Stars = ({ rating }) => {
  return (
    <StyledStarsContainer>
      <FontAwesomeIcon
        className={`star ${rating > 0 ? "active" : ""} `}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`star ${rating > 1 ? "active" : ""} `}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`star ${rating > 2 ? "active" : ""} `}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`star ${rating > 3 ? "active" : ""} `}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`star ${rating > 4 ? "active" : ""} `}
        icon={faStar}
      />
    </StyledStarsContainer>
  );
};

export default Stars;
