import { renderHook, waitFor } from "@testing-library/react";
import BeerProvider from "../store/context/BeerProvider";
import useApiMyBeers from "./useApiMyBeers";
import beers from "../data/beers";
import beer from "../data/beer";

describe("Given the useApiMyBeers hook", () => {
  describe("When the getMyBeers function is called", () => {
    test("Then it should return an array of 4 beers", async () => {
      const expectedBeers = [...beers];
      const wrapper = ({ children }) => <BeerProvider>{children}</BeerProvider>;

      const { result } = renderHook(() => useApiMyBeers(), { wrapper });
      const resultBeers = await waitFor(() => result.current.getLocalBeers());

      expect(resultBeers).toEqual(expectedBeers);
    });
  });

  describe("When the addBeer function is called", () => {
    test("Then it should return an object to add", async () => {
      const expectedBeer = { ...beer };
      const wrapper = ({ children }) => <BeerProvider>{children}</BeerProvider>;

      const { result } = renderHook(() => useApiMyBeers(), { wrapper });
      const resultBeer = await waitFor(() => result.current.addBeer(beer));

      expect(resultBeer).toEqual(expectedBeer);
    });
  });

  describe("When the deleteBeer function is called with the id to delete", () => {
    test("Then it should return an id", async () => {
      const expectedBeerId = beer.id;
      const wrapper = ({ children }) => <BeerProvider>{children}</BeerProvider>;

      const { result } = renderHook(() => useApiMyBeers(), { wrapper });
      const resultBeerId = await waitFor(() =>
        result.current.deleteBeer(beer.id)
      );

      expect(resultBeerId).toBe(expectedBeerId);
    });
  });
});
