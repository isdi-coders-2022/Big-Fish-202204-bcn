import { render, screen } from "@testing-library/react";
import BeerProvider from "../../store/context/BeerProvider";
import BeerListPage from "./BeerListPage";

describe("Given the BeerListPage component", () => {
  describe("When it's renderized", () => {
    test("Then it should show a text box with a placeholder text 'Search'", () => {
      const expectedText = "Search";

      render(
        <BeerProvider>
          <BeerListPage />
        </BeerProvider>
      );
      const input = screen.getByRole("textbox");

      expect(input.placeholder).toBe(expectedText);
    });
  });
});
