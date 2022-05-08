import { renderHook, waitFor } from "@testing-library/react";
import BeerProvider from "../store/context/BeerProvider";
import useApiMyBeers from "./useApiMyBeers";
import beers from "../data/beers";

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
});
