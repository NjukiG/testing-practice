import { render, screen } from "@testing-library/react";
import Greet from "../components/greet/Greet";

describe("Greetings", () => {
  it("Renders greet correctly!", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Another Greet", () => {
  it("Renders greet correctly with a name prop!", () => {
    render(<Greet name="George" />);
    const textElement = screen.getByText(/Hello George/i);
    expect(textElement).toBeInTheDocument();
  });
});
