import { addBeerActionType, toggleFavouriteActionType, deleteBeerActionType } from "../actionTypes";
import {
  addBeerActionCreator,
  toggleFavouriteActionCreator,deleteBeerActionCreator.
} from "./actionCreators";

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

describe("Given the DeleteBeerActionCreator function", () => {
  describe("When it receives a 2", () => {
    test("Then it should return an action object with properties type: 'delete-beer', id:2", () => {
      const id = 2;
      const expectedAction = { type: deleteBeerActionType, id: id };

      const action = deleteBeerActionCreator(2);
    });
  }):
});
  
describe("Given the addBeerActionCreator function", () => {
  describe("When it receives a beer object", () => {
    test("Then it should return an action object with type: 'add-beer' and beer= {}", () => {
      const beer = {};
      const expectedAction = { type: addBeerActionType, beer: beer };

      const action = addBeerActionCreator(beer);

      expect(action).toEqual(expectedAction);
    });
  });
});

