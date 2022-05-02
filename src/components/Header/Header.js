import { NavLink } from "react-router-dom";

const Header = ({ pageTitle }) => {
  return (
    <header>
      <div>
        <img src="../public/images/logo.svg" alt="Beer Me Logo" />
        <NavLink />
      </div>
      <div>
        <h1>{pageTitle}</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink />
          </li>
          <li>
            <NavLink />
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Header;
