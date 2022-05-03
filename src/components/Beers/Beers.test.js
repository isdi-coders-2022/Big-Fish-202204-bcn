import { render, screen } from "@testing-library/react";
import Beers from "./Beers";

describe("Given the Beers component", () => {
  describe("When it receives 4 beer", () => {
    test("Then it should render 4 beer card", () => {
      const expectedNumber = 4;

      render(<Beers />);
      const beerCardsNumber = screen.getAllByRole("listitem");

      expect(beerCardsNumber.length).toBe(expectedNumber);
    });
  });
});
