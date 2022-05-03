import { toggleFavouriteActionType } from "./actionTypes";

export const toggleFavouriteActionCreator = (id) => ({
  type: toggleFavouriteActionType,
  id,
});
