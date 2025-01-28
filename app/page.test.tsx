import { render, screen } from "@testing-library/react";
import Home from "./page";

it("should render app component without crashing", () => {
  render(<Home />);

  const element = screen.getByText("Modern World");

  expect(element).toBeInTheDocument();
});

it("should render button component without crashing", () => {
  render(<Home />);

  const element = screen.getByText("Button");

  expect(element).toBeInTheDocument();
});

// it("should render suffix component without crashing", () => {
//   render(<Home suffix="Test" />);

//   const element = screen.getByText("test", {
//     exact: false,
//   });

//   const emptyElement = screen.queryByText("No suffix");

//   expect(emptyElement).not.toBeInTheDocument();
//   expect(element).toBeInTheDocument();
// });

it("should render suffix component with findBy without crashing", async () => {
  // State kısmı
  render(<Home />);

  const element = await screen.findByText("Ahmet", {
    exact: false,
  });

  expect(element).toBeInTheDocument();
});
