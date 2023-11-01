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
  test("Renders a count of 3 when triple clicked", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const incrementButton = screen.getByRole("button", { name: "Increment" });
    await user.tripleClick(incrementButton);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("3");
  });

  //   To test for user inputs or using keyboard actions.

  test("Renders a count of 10 when user input it and clicks the Set button", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    //Get the input element and await the user to type a value e.g 10
    const amountInput = screen.getByRole("spinbutton");
    await user.type(amountInput, "10");
    expect(amountInput).toHaveValue();

    // After typing the value, await the user to click the set button
    const setButton = screen.getByRole("button", { name: /set/i });
    await user.click(setButton);

    // After user clicks the set button, set the value to be the new count value on screen
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  //   Let's test using the tab key to focus on different items on screen.

  test("Focus on different items in order on the screen", async () => {
    // Grab the user event setup function.
    const user = userEvent.setup();
    render(<Counter />);

    // Grab all the items to focus on the screen when tab is pressed.
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const amountInput = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", { name: /set/i });

    // Await the user to press tab and it will focus on the increment button
    await user.tab();
    expect(incrementButton).toHaveFocus();

    // Tab again and it will focus on the amout input
    await user.tab();
    expect(amountInput).toHaveFocus();

    // Tab again and it will focus on the setButton
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
