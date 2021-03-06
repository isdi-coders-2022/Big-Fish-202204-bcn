import styled from "styled-components";

const BeerContainer = styled.li`
  height: 135px;
  width: 382px;
  padding-left: 10px;
  border-radius: 10px;
  background: #dfa30a;
  display: flex;
  margin: 10px 0px;

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
        color: "#ffffff";
        display: contents;
        font-size: 40px;
        height: 30px;
      }
    }
    &__name {
      color: "#ffffff";
    }
  }

  .name-container {
    height: 55px;
    overflow-x: hidden;
  }

  .right-buttons-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px 3px;
  }
  .beer-img {
    width: 38.31px;
  }

  .tagline {
    width: 100%;
    color: #16213e;
    font-size: 20px;
    font-weight: bold;
  }
`;

export default BeerContainer;
