import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders the todo app heading", () => {
    render(<Home />);
    expect(screen.getByText("My Todo App")).toBeInTheDocument();
  });
});
