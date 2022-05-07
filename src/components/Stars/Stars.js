import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { appColor, beerCardColor } from "../../colours/elementsColours";

const StyledStarsContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  width: fit-content;
  background-color: ${beerCardColor};

  .star {
    color: ${beerCardColor};
    &--active {
      color: ${appColor};
    }
  }
`;

const Stars = ({ rating }) => {
  return (
    <StyledStarsContainer>
      <FontAwesomeIcon
        className={`star ${rating > 0 ? "star--active" : ""} `}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`star ${rating > 1 ? "star--active" : ""} `}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`star ${rating > 2 ? "star--active" : ""} `}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`star ${rating > 3 ? "star--active" : ""} `}
        icon={faStar}
      />
      <FontAwesomeIcon
        className={`star ${rating > 4 ? "star--active" : ""} `}
        icon={faStar}
      />
    </StyledStarsContainer>
  );
};

export default Stars;
