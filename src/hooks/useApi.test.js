import { renderHook, waitFor } from "@testing-library/react";
import BeerProvider from "../store/context/BeerProvider";
import useApi from "./useApi";
import beers from "../data/beers";

describe("Given the useApi hook", () => {
  describe("When the getBeers function is called", () => {
    test("Then it should return an array of 3 beers", async () => {
      const expectedBeers = [...beers];
      const wrapper = ({ children }) => <BeerProvider>{children}</BeerProvider>;
      const page = 1;
      const { result } = renderHook(() => useApi(), { wrapper });
      const beersResult = await waitFor(() => result.current.getBeers(page));

      expect(beersResult).toEqual(expectedBeers);
    });
  });
});
