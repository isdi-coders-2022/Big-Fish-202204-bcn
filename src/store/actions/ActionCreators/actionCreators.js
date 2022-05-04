import {
  addBeerActionType,
  toggleFavouriteActionType,
  deleteBeerActionType,
  editBeerActionType,
  rateBeerActionType,
  loadBeersActionType,
} from "../actionTypes";

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

export const editBeerActionCreator = (editedBeer) => ({
  type: editBeerActionType,
  editedBeer,
});

export const rateBeerActionCreator = (id, rating) => ({
  type: rateBeerActionType,
  id,
  rating,
});

export const loadBeersActionCreator = (beers) => ({
  type: loadBeersActionType,
  beers,
});
