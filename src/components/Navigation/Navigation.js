import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="main-navigation">
      <ul>
        <li>
          <NavLink to="/my-beers">My Beers</NavLink>
        </li>
        <li>
          <NavLink to="/beers">Beer Directory</NavLink>
        </li>
        <li>
          <NavLink to="/add-beer">Add New Beer</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
