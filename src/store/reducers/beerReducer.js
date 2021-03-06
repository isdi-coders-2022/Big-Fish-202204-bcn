import {
  rateBeerActionType,
  deleteBeerActionType,
  toggleFavouriteActionType,
  editBeerActionType,
  loadBeersActionType,
  loadLocalBeersActionType,
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
      newbeers = action.beers.map((beer) => {
        return { ...beer, userBeer: false, favourite: false, rating: 0 };
      });
      break;

    case loadLocalBeersActionType:
      newbeers = [...action.beers];
      break;

    default:
      newbeers = [...beers];
  }
  return newbeers;
};

export default beerReducer;
