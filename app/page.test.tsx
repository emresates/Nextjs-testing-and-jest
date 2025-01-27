import { render, screen } from "@testing-library/react";
import Home from "./page";

it("should render app component without crashing", () => {
  render(<Home />);

  const element = screen.getByText("Modern Testing");

  expect(element).toBeInTheDocument();
});
