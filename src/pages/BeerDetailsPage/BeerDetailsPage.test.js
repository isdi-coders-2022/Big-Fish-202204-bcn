import { render, screen } from "@testing-library/react";
import BeerDetailsPage from "./BeerDetailsPage";

describe("Given the BeerDetailsPage component", () => {
  describe("When it's renderized with 1 beer", () => {
    test("Then it should show a card with the name of the beer", () => {
      const beerName = "Punk IPA 2007 - 2010";

      render(<BeerDetailsPage />);
      const heading = screen.getByRole("heading", { name: beerName });

      expect(heading).toBeInTheDocument();
    });
  });
});
