import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given the Navigation component", () => {
  describe("When it's function is invoked", () => {
    test("Then it should render 3 li elements", () => {
      const expectedNumber = 3;

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      );
      const numberOfLi = screen.getAllByRole("listitem");

      expect(numberOfLi).toHaveLength(expectedNumber);
    });
  });
});
