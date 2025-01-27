import { render, screen } from "@testing-library/react";
import List from ".";

it("should render list correctly", () => {
  const products = ["product1", "product2", "product3"];
  render(<List products={products} />);
  const elements = screen.getAllByRole("listitem");

  expect(elements.length).toBe(products.length);
  // expect(elements).toHaveLength(products.length);
});

it("should render div correctly", () => {
  render(<List suffix="Test" />);
  const element = screen.getByText("ern", {
    exact: false,
  });

  expect(element).toBeInTheDocument();
});
