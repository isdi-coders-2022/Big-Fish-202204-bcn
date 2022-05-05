import { useReducer } from "react";
import beerReducer from "../reducers/beerReducer";
import BeerContext from "./BeerContext";

const BeerProvider = ({ children }) => {
  const [beersState, dispatch] = useReducer(beerReducer, []);

  return (
    <BeerContext.Provider value={{ beersState, dispatch }}>
      {children}
    </BeerContext.Provider>
  );
};

export default BeerProvider;
