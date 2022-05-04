import { toggleFavouriteActionType } from "../actionTypes";
import { deleteBeerActionType } from "../actionTypes";

export const toggleFavouriteActionCreator = (id) => ({
  type: toggleFavouriteActionType,
  id,
});

export const deleteBeerActionCreator = (id) => ({
  type: deleteBeerActionType,
  id,
});
