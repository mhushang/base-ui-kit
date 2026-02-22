import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Button } from "./Button";

describe("Button", () => {
  it("renders children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("disables when loading and sets aria-busy", () => {
    render(<Button loading>Submit</Button>);
    const btn = screen.getByRole("button", { name: "Submit" });
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute("aria-busy", "true");
  });
});

