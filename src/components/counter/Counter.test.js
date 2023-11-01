import { render, screen } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter", () => {
  test("Renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });
});
