import {
  rateBeerActionCreator,
  deleteBeerActionCreator,
  toggleFavouriteActionCreator,
  editBeerActionCreator,
  loadBeersActionCreator,
} from "../actions/ActionCreators/actionCreators";
import beerReducer from "./beerReducer";

describe("Given the beerReducer component", () => {
  describe("When it receives a grup of beers and the order to toggle favourite with the id", () => {
    test("Then it should return the id beer favourite valor changed", () => {
      const beersGrup = [
        { id: 0, favourite: false },
        { id: 1, favourite: false },
        { id: 2, favourite: false },
        { id: 3, favourite: false },
      ];
      const positionToControl = 2;
      const action = toggleFavouriteActionCreator(positionToControl);
      const expectedValor = { id: 2, favourite: true };

      const resultGrup = beerReducer(beersGrup, action);

      expect(resultGrup[positionToControl]).toEqual(expectedValor);
    });
  });
  describe("When it receives a grup of beers and the incorrect order", () => {
    test("Then it should return the same grup of beers", () => {
      const beersGrup = [
        { id: 0, favourite: false },
        { id: 1, favourite: false },
        { id: 2, favourite: false },
        { id: 3, favourite: false },
      ];
      const action = { type: "UwU", id: 2 };

      const resultGrup = beerReducer(beersGrup, action);

      expect(resultGrup).toEqual(beersGrup);
    });
  });
  describe("When it receives a grup of beers and the order to rate the third with a 3", () => {
    test("Then it should return a grup of beers with the third beer rated at 3", () => {
      const beersGrup = [
        { id: 0, favourite: false, rating: 0 },
        { id: 1, favourite: false, rating: 0 },
        { id: 2, favourite: false, rating: 0 },
        { id: 3, favourite: false, rating: 0 },
      ];
      const positionToControl = 2;
      const newrating = 3;

      const action = rateBeerActionCreator(positionToControl, newrating);
      const expectedGrup = {
        id: positionToControl,
        favourite: false,
        rating: newrating,
      };

      const resultGrup = beerReducer(beersGrup, action);

      expect(resultGrup[positionToControl]).toEqual(expectedGrup);
    });
  });

  describe("When it receives an initial state array with three beers and an action to delete with the id 1", () => {
    test("Then it should return a copy of the array without the beer with id 1", () => {
      const currentBeers = [{ id: 1 }, { id: 2 }, { id: 3 }];
      const id = 1;
      const action = deleteBeerActionCreator(id);
      const expectedBeers = [{ id: 2 }, { id: 3 }];

      const nextBeers = beerReducer(currentBeers, action);

      expect(nextBeers).toEqual(expectedBeers);
    });
  });
  describe("When it receives a grup of beers and the order to replace the third for a new one", () => {
    test("Then it should return a grup of beers with the third changed", () => {
      const beersGrup = [
        { id: 0, favourite: false },
        { id: 1, favourite: false },
        { id: 2, favourite: false },
        { id: 3, favourite: false },
      ];
      const editedBeer = { id: 2, text: "UwU", favourite: true };
      const positionToControl = 2;
      const expectedBeer = { id: 2, favourite: true, text: "UwU" };

      const action = editBeerActionCreator(editedBeer);
      const resultGrup = beerReducer(beersGrup, action);

      expect(resultGrup[positionToControl]).toEqual(expectedBeer);
    });
  });
  describe("When it receives a grup of beers and the order to load", () => {
    test("Then it should return a same grup of beers with the news propieties userBeer,favourite,rating", () => {
      const beersGrup = [
        { id: 0, text: "UwU" },
        { id: 1, text: "UwU" },
        { id: 2, text: "UwU" },
      ];
      const expectedBeersGrup = [
        { id: 0, text: "UwU", userBeer: false, favourite: false, rating: 0 },
        { id: 1, text: "UwU", userBeer: false, favourite: false, rating: 0 },
        { id: 2, text: "UwU", userBeer: false, favourite: false, rating: 0 },
      ];

      const action = loadBeersActionCreator();
      const resultGrup = beerReducer(beersGrup, action);

      expect(resultGrup).toEqual(expectedBeersGrup);
    });
  });
});
