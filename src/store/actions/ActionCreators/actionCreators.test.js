import { toggleFavouriteActionType } from "../actionTypes";
import { toggleFavouriteActionCreator } from "./actionCreators";

describe("Given the toggleFavouriteActionCreator function", () => {
  describe("When it receives a 7", () => {
    test("Then it should return an action object with properties type: 'toggle-favourite', id:7", () => {
      const id = 7;
      const expectedAction = { type: toggleFavouriteActionType, id: id };

      const action = toggleFavouriteActionCreator(7);

      expect(action).toEqual(expectedAction);
    });
  });
});
