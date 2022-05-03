import styled from "styled-components";
const headerBckgroundColor = "#16213e";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${headerBckgroundColor};
  height: 90px;
  overflow: visible;

  div.header__logo {
    border-radius: 90px;
    width: 110px;
    height: 110px;
    background: ${headerBckgroundColor};
    margin-left: 10px;

    img {
      width: 110px;
      height: 110px;
      transform: rotate(-25deg);
    }
  }
  div.header__title {
    padding-left: 10px;
    color: #fff;
  }
  ul.header__navigation {
    display: none;
    list-style: none;
    display: flex;
    flex-direction: row;
  }
`;

export default HeaderContainer;
