import { render, screen } from "@testing-library/react";
import Home from "./page";

it("should render app component without crashing", () => {
  render(<Home />);

  const element = screen.getByText("Modern Testing");

  expect(element).toBeInTheDocument();
});

it("should render button component without crashing", () => {
  render(<Home />);

  const element = screen.getByText("Button");

  expect(element).toBeInTheDocument();
});
