import { render, screen } from "@testing-library/react";
import DefaultImage from ".";

it("renders an image", () => {
  render(<DefaultImage />);

  const element = screen.getByAltText("Modern Testing");
  
  expect(element).toBeInTheDocument();
});
