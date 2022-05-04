<<<<<<< Updated upstream:src/store/actions/actionCreator.js
import { toggleFavouriteActionType } from "./actionTypes";
=======
import { addBeerActionType, toggleFavouriteActionType } from "../actionTypes";
>>>>>>> Stashed changes:src/store/actions/ActionCreators/actionCreators.js

export const toggleFavouriteActionCreator = (id) => ({
  type: toggleFavouriteActionType,
  id,
});

export const addBeerActionCreator = (beer) => ({
  type: addBeerActionType,
  beer,
});
