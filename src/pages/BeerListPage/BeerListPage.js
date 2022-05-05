import { useContext, useEffect } from "react";
import Beers from "../../components/Beers/Beers";
import Search from "../../components/Search/Search";
import useApi from "../../hooks/useApi";
import BeerContext from "../../store/context/BeerContext";

const BeerListPage = () => {
  const { beersState } = useContext(BeerContext);
  const { getBeers } = useApi();

  const page = 1;
  useEffect(() => {
    getBeers(page);
  }, [getBeers]);

  return (
    <div className="BeerListPage">
      <Search />
      <Beers beers={beersState} />
    </div>
  );
};

export default BeerListPage;
