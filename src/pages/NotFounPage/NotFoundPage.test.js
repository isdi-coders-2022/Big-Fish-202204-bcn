import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it renders", () => {
    test("Then it should create a heading with text `ಠ_ಠ I dont have that...`", () => {
      const expectedText = "ಠ_ಠ I dont have that...";

      render(<NotFoundPage />);
      const resultText = screen.getByRole("heading", { name: expectedText });

      expect(resultText).toBeInTheDocument();
    });
  });
});
