import { render, screen } from "@testing-library/react";
import Search from "./Search";

describe("Given the Search component", () => {
  describe("When it's renderized", () => {
    test("Then it should have a input with placeholder text 'Search'", () => {
      const expectedText = "Search";

      render(<Search />);
      const inputElement = screen.getByRole("textbox");

      expect(inputElement.placeholder).toBe(expectedText);
    });
  });
});
