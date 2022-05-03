import styled from "styled-components";

const BeerDetailsContainer = styled.section`
  display: flex;
  flex-direction: column;
  ul {
    padding-right: 40px;
    list-style-type: none;
  }

  .beer-details__info {
    background-color: #dfa30a;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    .beer-details__info-title {
      font-size: 30px;
      font-weight: bold;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        margin: 50px;
      }
      button {
        padding: 0;
        margin: 50px;
        width: 100px;
        font-size: 50px;
      }
    }
    .beer-details__info-text {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .info-list {
        h3 {
          color: #fff;
          font-size: 30px;
          font-weight: bold;
        }
        p {
          color: #000;
          font-size: 5vw;
        }
      }
      .info-image {
        img {
          width: 115px;
          height: 450px;
          margin: 50px;
        }
      }
    }
  }
  .beer-details__description {
    h3 {
      color: #16213e;
      font-size: 30px;
      font-weight: bold;
    }
    p {
      color: #000;
      font-size: 5vw;
    }
  }
`;

export default BeerDetailsContainer;
