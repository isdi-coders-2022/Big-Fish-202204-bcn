import { useCallback, useContext } from "react";
import { loadLocalBeersActionCreator } from "../store/actions/ActionCreators/actionCreators";
import BeerContext from "../store/context/BeerContext";

const localApiUrl = "https://mybeers-api.onrender.com/myBeers";

export const useApiMyBeers = () => {
  const { dispatch } = useContext(BeerContext);

  const getLocalBeers = useCallback(async () => {
    const response = await fetch(`${localApiUrl}`);
    const beersArray = await response.json();
    dispatch(loadLocalBeersActionCreator(beersArray));
    return beersArray;
  }, [dispatch]);

  const deleteBeer = async (id) => {
    await fetch(`${localApiUrl}/${id}`, {
      method: "DELETE",
    });
    return id;
  };

  const addBeer = async (beer) => {
    const response = await fetch(localApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(beer),
    });
    return response.json();
  };

  return {
    getLocalBeers,
    deleteBeer,
    addBeer,
  };
};
export default useApiMyBeers;
