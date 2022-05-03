import { render, screen } from "@testing-library/react";
import Beers from "./Beers";

describe("Given the Beers component", () => {
  describe("When it receives 1 beer", () => {
    test("Then it should render 1 beer card", () => {
      const expectedNumber = 1;

      render(<Beers />);
      const beerCardsNumber = screen.getAllByRole("list");

      expect(beerCardsNumber.length).toBe(expectedNumber);
    });
  });
});
