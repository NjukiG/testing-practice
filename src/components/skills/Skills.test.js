import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  test("Renders skills correctly!", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("Render list of skills", () => {
    render(<Skills skills={skills} />);

    const listItemElement = screen.getAllByRole("listitem");
    expect(listItemElement).toHaveLength(4);
  });
});
