import { useEffect, useReducer } from "react";
import Beers from "../../components/Beers/Beers";
import Search from "../../components/Search/Search";
import useApi from "../../hooks/useApi";
import beerReducer from "../../store/reducers/beerReducer";

const MyBeersPage = () => {
  const [beersState] = useReducer(beerReducer, []);
  const { getBeers } = useApi();
  useEffect(() => {
    getBeers();
  }, [getBeers]);

  return (
    <div className="MyBeerListPage">
      <Search />
      <Beers beers={beersState} />
    </div>
  );
};

export default MyBeersPage;
