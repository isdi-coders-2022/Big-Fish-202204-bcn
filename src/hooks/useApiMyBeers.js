import { useCallback, useContext } from "react";
import { loadLocalBeersActionCreator } from "../store/actions/ActionCreators/actionCreators";
import BeerContext from "../store/context/BeerContext";

const useApiMyBeers = () => {
  const { dispatch } = useContext(BeerContext);

  const getLocalBeers = useCallback(async () => {
    const response = await fetch(`https://mybeers-api.onrender.com/myBeers`);
    const beersArray = await response.json();

    dispatch(loadLocalBeersActionCreator(beersArray));
  }, [dispatch]);

  return {
    getLocalBeers,
  };
};

export default useApiMyBeers;
