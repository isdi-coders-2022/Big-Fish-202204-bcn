import { render, screen } from "@testing-library/react";
import MyBeersPage from "./MyBeersPage";

describe("Given the MyBeersPage component", () => {
  describe("When it's renderized", () => {
    test("Then it should show a text box with a placeholder text 'Search'", () => {
      const expectedText = "Search";

      render(<MyBeersPage />);
      const input = screen.getByRole("textbox");

      expect(input.placeholder).toBe(expectedText);
    });
  });
});
