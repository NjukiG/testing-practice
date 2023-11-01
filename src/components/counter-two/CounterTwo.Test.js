import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./CounterTwo";

describe("Counter Two", () => {
  test("Renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });
});
