import { toggleFavouriteActionCreator } from "../actions/actionCreator";
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
});