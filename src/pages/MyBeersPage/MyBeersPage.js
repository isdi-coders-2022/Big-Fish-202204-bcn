import Beers from "../../components/Beers/Beers";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";

const MyBeersPage = () => {
  return (
    <div className="MyBeerListPage">
      <Header pageTitle={"My Beers"} />
      <Search />
      <Beers />
    </div>
  );
};

export default MyBeersPage;
