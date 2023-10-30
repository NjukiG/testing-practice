import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

test("Greet renders correctly!", () => {
  render(<Greet />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Greet renders correctly with a name prop!", () => {
  render(<Greet name="George" />);
  const textElement = screen.getByText(/Hello George/i);
  expect(textElement).toBeInTheDocument();
});
