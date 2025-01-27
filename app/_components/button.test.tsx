import { render, screen } from "@testing-library/react";
import CustomButton from "./button";

it("Button Component", () => {
  render(<CustomButton />);

  const element = screen.getByRole("button", {
    name: "Test",
  });
  expect(element).toBeInTheDocument();
});
