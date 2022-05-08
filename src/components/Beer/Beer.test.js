import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { click } from "@testing-library/user-event/dist/click";
import beer from "../../data/beer";
import BeerProvider from "../../store/context/BeerProvider";
import Beer from "./Beer";

describe("Given the Beer component", () => {
  describe("When it receives the name 'Test Beer'", () => {
    test("Then it should render a heading with text 'Test Beer'", () => {
      const beer = { name: "Test Beer" };

      render(
        <BeerProvider>
          <Beer beer={beer} />
        </BeerProvider>
      );
      const beerheading = screen.getByRole("heading", beer.name);

      expect(beerheading).toBeInTheDocument();
    });
  });

  describe("When it receives favourite and userBeer props with true", () => {
    test("Then it should render 3 buttons", () => {
      const expectedNumberOfButtons = 3;
      const beer = { favourite: true, userBeer: true };

      render(
        <BeerProvider>
          <Beer beer={beer} />
        </BeerProvider>
      );
      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(expectedNumberOfButtons);
    });
  });

  describe("When it receives favourite true and userBeer false", () => {
    test("Then it should render 2 buttons", () => {
      const expectedNumberOfButtons = 2;
      const beer = { favourite: true, userBeer: false };

      render(
        <BeerProvider>
          <Beer beer={beer} />
        </BeerProvider>
      );
      const buttons = screen.getAllByRole("button");

      expect(buttons).toHaveLength(expectedNumberOfButtons);
    });
  });
});
