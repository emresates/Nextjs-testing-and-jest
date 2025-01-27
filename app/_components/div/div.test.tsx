import { render, screen } from "@testing-library/react";
import GeneralDiv from ".";

it("should render div correctly", () => {
  render(<GeneralDiv />);

  const element = screen.getByText("GeneralDiv");

  expect(element).toBeInTheDocument();
});
