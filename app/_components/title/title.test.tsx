import { render, screen } from "@testing-library/react";
import TitleDiv from ".";

it("should render div correctly", () => {
  render(<TitleDiv />);

  // const element = screen.getByTitle("MODERN");
  // expect(element).toBeInTheDocument();

  const element = screen.getByTestId("example");
  expect(element).toBeInTheDocument();
});
