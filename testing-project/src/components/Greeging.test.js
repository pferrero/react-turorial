import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders hellow world", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ...nothing

    // Assert
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders it's good to see you when the button was NOT clicked", () => {
    render(<Greeting />);

    const text = screen.getByText("It's good to see you");
    expect(text).toBeInTheDocument();
  });

  test("renders changed if the button WAS clicked", () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const output = screen.getByText("Changed!");
    expect(output).toBeInTheDocument();
  });

  test('does not render "good to see you" if the button WAS clicked', () => {
    render(<Greeting />);

    const button = screen.getByRole("button");
    userEvent.click(button);

    const output = screen.queryByText("It's good to see you");
    expect(output).toBeNull();
  });
});
