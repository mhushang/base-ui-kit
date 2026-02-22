import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Input } from "./Input";

describe("Input", () => {
  it("renders an input", () => {
    render(<Input aria-label="Email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("sets aria-invalid when error=true", () => {
    render(<Input aria-label="Email" error />);
    expect(screen.getByLabelText("Email")).toHaveAttribute("aria-invalid", "true");
  });
});

