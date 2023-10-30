import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greetings", () => {
  test("Renders correctly!", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("Renders correctly with a name prop!", () => {
    render(<Greet name="George" />);
    const textElement = screen.getByText(/Hello George/i);
    expect(textElement).toBeInTheDocument();
  });
});
