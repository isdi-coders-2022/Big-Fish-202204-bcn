import { render, screen } from "@testing-library/react";
import App from "./App";
import BeerProvider from "./store/context/BeerProvider";
import { BrowserRouter } from "react-router-dom";

describe("Given the App component", () => {
  describe("When its instancied", () => {
    test("It should render a nav", () => {
      render(
        <BeerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BeerProvider>
      );
      const navigation = screen.getByRole("navigation");

      expect(navigation).toBeInTheDocument();
    });
  });
});
