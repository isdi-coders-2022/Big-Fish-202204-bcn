import { useContext, useEffect } from "react";
import Beers from "../../components/Beers/Beers";
import Search from "../../components/Search/Search";
import useApi from "../../hooks/useApi";
import BeerContext from "../../store/context/BeerContext";

const BeerListPage = () => {
  const { beersState } = useContext(BeerContext);
  const { getBeers } = useApi();

  useEffect(() => {
    getBeers();
  }, [getBeers]);

  return (
    <div className="BeerListPage">
      <Search />
      <Beers beers={beersState} />
    </div>
  );
};

export default BeerListPage;
