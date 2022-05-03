import { useReducer } from "react";
import beers from "../../data/BeersData";
import beerReducer from "../reducers/beerReducer";
import BeerContext from "./beerContext";

const BeerProvider = ({ children }) => {
  const [beersState, dispatch] = useReducer(beerReducer, beers);

  return (
    <BeerContext.Provider value={{ beersState, dispatch }}>
      {children}
    </BeerContext.Provider>
  );
};

export default BeerProvider;
