import styled from "styled-components";

const BeerContainer = styled.li`
  height: 135px;
  width: 382px;
  left: 2px;
  top: 320px;
  border-radius: 10px;
  background: #dfa30a;
  display: flex;

  .beer-info {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30px;
    align-items: flex-start;
    &__top {
      display: flex;
    }
    &__name {
      color: white;
    }
  }

  p {
    color: #16213e;
  }
`;

export default BeerContainer;
