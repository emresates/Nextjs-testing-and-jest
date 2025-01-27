import { render, screen } from "@testing-library/react";
import InputElement from ".";

it("should render input correctly", () => {
  render(<InputElement />);

  //   const inputElement = screen.getByLabelText("User name:");
  //   expect(inputElement).toBeInTheDocument();

  // const placeholder = screen.getByPlaceholderText("enter your username");
  // expect(placeholder).toBeInTheDocument();

  const element = screen.getByDisplayValue("Modern Testing");
  expect(element).toBeInTheDocument();
});
