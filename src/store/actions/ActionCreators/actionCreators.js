
import { addBeerActionType, toggleFavouriteActionType, deleteBeerActionType } from "../actionTypes";

export const toggleFavouriteActionCreator = (id) => ({
  type: toggleFavouriteActionType,
  id,
});


export const addBeerActionCreator = (beer) => ({
  type: addBeerActionType,
  beer,
});

export const deleteBeerActionCreator = (id) => ({
  type: deleteBeerActionType,
  id,
});
