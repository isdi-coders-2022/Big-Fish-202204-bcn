import {
  rateBeerActionType,
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
      newbeers = beers.map((beer) => {
        return beer.id !== action.id ? { ...beer } : "";
      });
      break;

    case rateBeerActionType:
      newbeers = beers.map((beer) => {
        return beer.id === action.id
          ? { ...beer, rating: action.rating }
          : { ...beer };
      });
      break;

    default:
      newbeers = [...beers];
  }
  return newbeers;
};

export default beerReducer;
