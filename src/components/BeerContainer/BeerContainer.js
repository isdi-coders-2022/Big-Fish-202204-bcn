import styled from "styled-components";
import {
  appColor,
  beerCardColor,
  beerNameColor,
} from "../../mixings/elementsColours";

const BeerContainer = styled.li`
  height: 135px;
  width: 382px;
  padding-left: 10px;
  border-radius: 10px;
  background: ${beerCardColor};
  display: flex;

  .beer-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30px;
    align-items: flex-start;
    &__top {
      display: flex;
      align-items: end;
      width: 100%;
      padding-right: 5px;
      height: 50px;

      h2 {
        color: ${beerNameColor};
        display: contents;
        font-size: 40px;
      }
    }
    &__name {
      color: ${beerNameColor};
    }
  }

  .right-buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 3px;
  }
  .beer-img {
    width: 50px;

    overflow: hidden;
  }

  .tagline {
    width: 100%;
    color: ${appColor};
    font-size: 20px;
    font-weight: bold;
  }
`;

export default BeerContainer;
