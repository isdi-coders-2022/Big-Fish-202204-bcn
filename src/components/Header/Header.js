import HeaderContainer from "../HeaderContainer/HeaderContainer";

const Header = ({ pageTitle }) => {
  return (
    <HeaderContainer>
      <div className="header__logo">
        <img src="/images/logo.svg" alt="Beer Me Logo" />
      </div>
      <div className="header__title">
        <h1>{pageTitle}</h1>
      </div>
      <ul className="header__navigation">
        <li></li>
        <li></li>
      </ul>
    </HeaderContainer>
  );
};
export default Header;
