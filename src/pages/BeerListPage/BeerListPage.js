import Beers from "../../components/Beers/Beers";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";

const BeerListPage = () => {
  return (
    <div className="BeerListPage">
      <Header pageTitle={"Beer Directory"} />
      <Search />
      <Beers />
    </div>
  );
};

export default BeerListPage;
