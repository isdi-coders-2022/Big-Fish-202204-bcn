import {
  addBeerActionType,
  toggleFavouriteActionType,
  deleteBeerActionType,
  editBeerActionType,
} from "../actionTypes";
import {
  addBeerActionCreator,
  toggleFavouriteActionCreator,
  deleteBeerActionCreator,
  editBeerActionCreator,
} from "./actionCreators";

describe("Given the toggleFavouriteActionCreator function", () => {
  describe("When it receives a 7", () => {
    test("Then it should return an action object with properties type: 'toggle-favourite', id:7", () => {
      const id = 7;
      const expectedAction = { type: toggleFavouriteActionType, id };

      const action = toggleFavouriteActionCreator(id);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given the DeleteBeerActionCreator function", () => {
  describe("When it receives a 2", () => {
    test("Then it should return an action object with properties type: 'delete-beer', id:2", () => {
      const id = 2;
      const expectedAction = { type: deleteBeerActionType, id };

      const action = deleteBeerActionCreator(id);

      expect(action).toEqual(expectedAction);
    });
  });
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

describe("Given the editBeerActionCreator function", () => {
  describe("When it receives the properties {name:'Mamañema', srm: 8.5}", () => {
    test("Then it should return an action object with {type: 'edit-beer', properties: {name:'Mamañema', srm: 8.5}", () => {
      const properties = { name: "Mamañema", srm: 8.5 };
      const expectedAction = {
        type: editBeerActionType,
        properties: { name: "Mamañema", srm: 8.5 },
      };

      const action = editBeerActionCreator(properties);

      expect(action).toEqual(expectedAction);
    });
  });
});
