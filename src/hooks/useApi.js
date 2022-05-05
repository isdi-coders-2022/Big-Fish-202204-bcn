import { useCallback, useContext } from "react";
import { loadBeersActionCreator } from "../store/actions/ActionCreators/actionCreators";
import BeerContext from "../store/context/BeerContext";

const useApi = () => {
  const urlAPI = "https://api.punkapi.com/v2/";

  const { dispatch } = useContext(BeerContext);

  const getBeers = useCallback(
    async (page) => {
      const beers12PackEndpoint = `beers?page=${page}&per_page=12`;
      const response = await fetch(`${urlAPI}${beers12PackEndpoint}`);
      const beersArray = await response.json();
      dispatch(loadBeersActionCreator(beersArray));
    },
    [dispatch]
  );

  return {
    getBeers,
  };
};

export default useApi;
