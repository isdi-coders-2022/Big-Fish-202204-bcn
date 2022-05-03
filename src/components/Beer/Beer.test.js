import { render, screen } from "@testing-library/react";
import Beer from "./Beer";

describe("Given the Beer component", () => {
  describe("When it receives the name 'Test Beer'", () => {
    test("Then it should render a heading with text 'Test Beer'", () => {
      const expectedText = "Test Beer";

      render(<Beer name={expectedText} />);
      const beerheading = screen.getByRole("heading", { name: expectedText });

      expect(beerheading).toBeInTheDocument();
    });
  });

  describe("When it receives favourite and userBeer props with true", () => {
    test("Then it should render 3 buttons", () => {
      const expectedNumberOfButtons = 3;
      const isfavourite = true;
      const isUserBeer = true;

      render(<Beer favourite={isfavourite} userBeer={isUserBeer} />);
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(expectedNumberOfButtons);
    });
  });

  describe("When it receives favourite true and userBeer false", () => {
    test("Then it should render 1 button", () => {
      const expectedNumberOfButtons = 1;
      const isfavourite = true;
      const isUserBeer = false;

      render(<Beer favourite={isfavourite} userBeer={isUserBeer} />);
      const buttons = screen.getAllByRole("button");
      expect(buttons).toHaveLength(expectedNumberOfButtons);
    });
  });
});
