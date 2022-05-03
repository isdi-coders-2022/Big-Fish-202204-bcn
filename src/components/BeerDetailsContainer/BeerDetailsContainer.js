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
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .beer-details__info-title {
      font-size: 30px;
      font-weight: bold;
      color: #fff;
    }
    .beer-details__info-text {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .info-list {
        h3 {
          color: #fff;
          font-size: 25px;
          font-weight: bold;
        }
        p {
          color: #000;
        }
      }
      .info-image {
        img {
          position: absolute;
          width: 88px;
          height: 342.29px;
          left: 285px;
          top: 147px;
        }
      }
    }
  }
  .beer-details__description {
    h3 {
      color: #16213e;
      font-size: 25px;
      font-weight: bold;
    }
    p {
      color: #000;
      font-size: 10%;
    }
  }
`;

export default BeerDetailsContainer;
