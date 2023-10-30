import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Renders greet correctly!", () => {
  render(<Greet />);
  const textElement = screen.getByText("Hello from Greet.");
  expect(textElement).toBeInTheDocument();
});
