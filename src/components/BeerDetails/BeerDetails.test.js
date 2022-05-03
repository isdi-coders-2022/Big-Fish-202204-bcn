import { render, screen } from "@testing-library/react";
import beer from "../../BeerData";
import BeerDetails from "./BeerDetails";

describe("Given the BeerDetails component", () => {
  describe("When it receives an object beer and renders", () => {
    test("Then the first heading text should be 'Punk IPA 2007 - 2010' with the same accessible name", () => {
      const accessibleName = "Punk IPA 2007 - 2010";

      render(<BeerDetails beer={beer} />);
      const title = screen.getByRole("heading", { name: accessibleName });

      expect(title).toBeInTheDocument();
    });

    test("Then it should render the text 9 list element", () => {
      const expectedNumberList = 9;

      render(<BeerDetails beer={beer} />);
      const list = screen.getAllByRole("listitem");

      expect(list).toHaveLength(expectedNumberList);
    });

    test("Then it should render an image wit accessible name 'Punk IPA 2007 - 2010'", () => {
      const expectedAccesibleName = "Punk IPA 2007 - 2010";

      render(<BeerDetails beer={beer} />);
      const image = screen.getByRole("img", { name: expectedAccesibleName });

      expect(image).toBeInTheDocument();
    });
  });
});
