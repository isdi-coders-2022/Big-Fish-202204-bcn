import Beers from "../../components/Beers/Beers";
import Search from "../../components/Search/Search";

const MyBeersPage = () => {
  return (
    <div className="MyBeerListPage">
      <Search />
      <Beers />
    </div>
  );
};

export default MyBeersPage;
