import { render, screen } from "@testing-library/react";
import InputElement from ".";

it("should render input correctly", () => {
  render(<InputElement />);

  //   const inputElement = screen.getByLabelText("User name:");

  const placeholder = screen.getByPlaceholderText("enter your username");

  expect(placeholder).toBeInTheDocument();
  //   expect(inputElement).toBeInTheDocument();
});
