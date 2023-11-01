import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("Renders correctly", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    expect(incrementButton).toBeInTheDocument();
  });

  test("Renders a count of zero (0)", () => {
    render(<Counter />);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  //   To test user interactions like click events, we need to import the user package from test user-events

  test("Render a count of 1 after user clicks the increment button", async () => {
    // The user event is now imported for use. Its the userEvent function and it requires the test to be asynchronous
    const user = userEvent.setup();
    render(<Counter />);
    const incrementButton = screen.getByRole("button", { name: "Increment" });

    await user.click(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });


// Testing for a double click
  test("Renders a count of 2 when double clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.dblClick(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

//   Testing for a triple click
  test("Renders a count of 3 when double clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.tripleClick(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("3");
  });
});
