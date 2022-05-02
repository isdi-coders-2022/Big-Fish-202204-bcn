import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When it receives the text 'SAVE' and an action", () => {
    test("Then it should render a button and call the action when clicked", () => {
      const text = "SAVE";
      const action = jest.fn();

      render(<Button text={text} action={action} />);
      const button = screen.getByRole("button");
      userEvent.click(button);

      expect(action).toHaveBeenCalled();
    });

    test("Then it should render a button with the text 'SAVE'", () => {
      const expectedText = "SAVE";
      const action = jest.fn();

      render(<Button text={expectedText} action={action} />);
      const button = screen.getByText(expectedText);

      expect(button).toBeInTheDocument();
      expect(button).toHaveAccessibleName(expectedText);
    });

    test("Then it should render a button with 'SAVE' as its accessible name", () => {
      const expectedText = "SAVE";
      const action = jest.fn();

      render(<Button text={expectedText} action={action} />);
      const button = screen.getByText(expectedText);

      expect(button).toHaveAccessibleName(expectedText);
    });
  });
});
