import { useContext, useEffect } from "react";
import Beers from "../../components/Beers/Beers";
import Search from "../../components/Search/Search";
import useApiMyBeers from "../../hooks/useApiMyBeers";
import BeerContext from "../../store/context/BeerContext";

const MyBeersPage = () => {
  const { beersState } = useContext(BeerContext);
  const { getLocalBeers } = useApiMyBeers();

  useEffect(() => {
    getLocalBeers();
  }, [getLocalBeers]);

  return (
    <div className="MyBeerListPage">
      <Search />
      <Beers beers={beersState} />
    </div>
  );
};

export default MyBeersPage;
