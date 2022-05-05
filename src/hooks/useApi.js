import { useCallback, useContext } from "react";
import { loadBeersActionCreator } from "../store/actions/ActionCreators/actionCreators";
import BeerContext from "../store/context/BeerContext";

const useApi = () => {
  // const urlAPI = "https://api.punkapi.com/v2/beers?page=1&per_page=12";
  const { dispatch } = useContext(BeerContext);
  const getBeers = useCallback(async () => {
    const response = await fetch(
      `https://api.punkapi.com/v2/beers?page=${1}&per_page=12`
    );
    const beersArray = await response.json();
    dispatch(loadBeersActionCreator(beersArray));
  }, []);

  return {
    getBeers,
  };
};

export default useApi;
