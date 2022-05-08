import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  background-color: #16213e;
  width: 100vw;
  height: 90px;
  overflow: visible;

  div.header__logo {
    border-radius: 90px;
    width: 110px;
    height: 110px;
    background: #16213e;
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
