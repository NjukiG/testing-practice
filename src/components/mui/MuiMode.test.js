import { render, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";
// import { AppProviders } from "../../providers/app-providers";

describe("Mui Mode", () => {
  test("Renders the mode correctly", () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
