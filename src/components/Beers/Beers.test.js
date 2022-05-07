import { render, screen } from "@testing-library/react";
import beers from "../../data/beers";
import BeerProvider from "../../store/context/BeerProvider";
import Beers from "./Beers";

describe("Given the Beers component", () => {
  describe("When it receives 4 beer", () => {
    test("Then it should render 4 beer card", () => {
      const expectedNumber = 4;

      render(
        <BeerProvider>
          <Beers beers={beers} />
        </BeerProvider>
      );
      const beerCardsNumber = screen.getAllByRole("listitem");

      expect(beerCardsNumber).toHaveLength(expectedNumber);
    });
  });
});
