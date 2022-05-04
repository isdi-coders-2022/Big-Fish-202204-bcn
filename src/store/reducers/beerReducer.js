import {
  rateBeerActionType,
  deleteBeerActionType,
  toggleFavouriteActionType,
  editBeerActionType,
  loadBeersActionType,
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

    case editBeerActionType:
      newbeers = beers.map((beer) => {
        return beer.id !== action.editedBeer.id
          ? { ...beer }
          : { ...beer, ...action.editedBeer };
      });
      break;

    case rateBeerActionType:
      newbeers = beers.map((beer) => {
        return beer.id === action.id
          ? { ...beer, rating: action.rating }
          : { ...beer };
      });
      break;
    case loadBeersActionType:
      newbeers = beers.map((beer) => {
        return { ...beer, favourite: false, userBeer: false, rating: 0 };
      });
      break;
    default:
      newbeers = [...beers];
  }
  return newbeers;
};

export default beerReducer;
