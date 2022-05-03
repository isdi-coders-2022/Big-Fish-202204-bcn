import { render, screen } from "@testing-library/react";
import BeerContainer from "./BeerContainer";

describe("Given the BeerContainer component", () => {
  describe("When its function is invoked", () => {
    test("Then it should render a li react element", () => {
      const expectedElement = "listitem";

      render(<BeerContainer />);
      const liContainer = screen.getByRole(expectedElement);
      expect(liContainer).toBeInTheDocument();
    });
  });
});
