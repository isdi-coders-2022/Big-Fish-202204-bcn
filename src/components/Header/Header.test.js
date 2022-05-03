import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Given the Header component", () => {
  describe("When it's renderized", () => {
    test("Then it should have a image with alternative text 'Beer Me Logo'", () => {
      const expectedText = "Beer Me Logo";

      render(<Header />);
      const imageElement = screen.getByRole("img");

      expect(imageElement.alt).toBe(expectedText);
    });
  });
});
