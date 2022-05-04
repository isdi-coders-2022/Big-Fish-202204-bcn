import {
  deleteBeerActionType,
  toggleFavouriteActionType,
} from "../actions/actionTypes";

const beerReducer = (beers, action) => {
  let newbeers;

  switch (action.type) {
    case toggleFavouriteActionType:
      newbeers = beers.map((beer) => {
        return beer.id === action.id
          ? { ...beer, favourite: !beer.favourite }
          : { ...beer };
      });
      break;
    case deleteBeerActionType:
      newbeers = beers.filter((beer) => beer.id !== action.id);
      break;

    default:
      newbeers = [...beers];
  }
  return newbeers;
};

export default beerReducer;
