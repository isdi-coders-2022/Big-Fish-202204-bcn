import Beers from "../../components/Beers/Beers";
import Search from "../../components/Search/Search";

const BeerListPage = () => {
  return (
    <div className="BeerListPage">
      <Search />
      <Beers />
    </div>
  );
};

export default BeerListPage;
