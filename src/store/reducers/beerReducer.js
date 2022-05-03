import beers from "../../data/BeersData";
import { toggleFavouriteActionType } from "../actions/actionTypes";

const beerReducer = (currentState, action) => {
  let newState;
  switch (action.type) {
    case toggleFavouriteActionType:
      newState = beers.map((beer) =>
        beer.id === action.id
          ? { ...beer, favourite: !beer.favourite }
          : { ...beer }
      );
      break;

    default:
      newState = [...currentState];
  }
  return newState;
};

export default beerReducer;
