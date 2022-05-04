import {
  setLoadingOffActionType,
  setLoadingOnActionType,
} from "../actions/UIActionTypes";

const UIReducer = (loading, action) => {
  let newLoading;
  switch (action.type) {
    case setLoadingOffActionType:
      newLoading = false;
      break;

    case setLoadingOnActionType:
      newLoading = true;
      break;

    default:
      newLoading = loading;
  }
  return newLoading;
};

export default UIReducer;
