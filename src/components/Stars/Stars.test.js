import { render, screen } from "@testing-library/react";
import Stars from "./Stars";

describe("Given the Stars component", () => {
  let rating = 3;
  const firstStarPosition = 0;
  const secondStarPosition = 1;
  const thirdStarPosition = 2;
  const fourthStarPosition = 3;
  const fifthStarPosition = 4;
  describe("When it receives a 3 rating", () => {
    test("Then stars 1,2 and 3 should be visible", () => {
      render(<Stars rating={rating} />);
      const stars = screen.getAllByRole("img", {
        hidden: true,
      });
      const firstStar = stars[firstStarPosition];
      const secondStar = stars[secondStarPosition];
      const thirdStar = stars[thirdStarPosition];

      expect(firstStar).toBeVisible();
      expect(secondStar).toBeVisible();
      expect(thirdStar).toBeVisible();
    });
    test("Then star 4 and 5 should not be visible", () => {
      render(<Stars rating={rating} />);
      const stars = screen.getAllByRole("img", {
        hidden: true,
      });
      const fourthStar = stars[fourthStarPosition];
      const fifthStar = stars[fifthStarPosition];

      expect(fourthStar).not.toBeVisible();
      expect(fifthStar).not.toBeVisible();
    });
  });

  describe("When it receives a rating 5", () => {
    test("Then 5 stars should be visible", () => {
      rating = 5;

      render(<Stars rating={rating} />);
      const stars = screen.getAllByRole("img", {
        hidden: true,
      });
      const firstStar = stars[firstStarPosition];
      const secondStar = stars[secondStarPosition];
      const thirdStar = stars[thirdStarPosition];
      const fourthStar = stars[fourthStarPosition];
      const fifthStar = stars[fifthStarPosition];

      expect(firstStar).toBeVisible();
      expect(secondStar).toBeVisible();
      expect(thirdStar).toBeVisible();
      expect(fourthStar).toBeVisible();
      expect(fifthStar).toBeVisible();
    });
  });
});
