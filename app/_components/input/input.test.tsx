import { render, screen } from "@testing-library/react";
import InputElement from ".";

it("should render input correctly", () => {
  render(<InputElement />);
  
  const inputElement = screen.getByLabelText("User name:");

  expect(inputElement).toBeInTheDocument();
});
