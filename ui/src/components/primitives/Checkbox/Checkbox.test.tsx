import { describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders an accessible checkbox by label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText("Accept terms")).toHaveAttribute(
      "type",
      "checkbox"
    );
  });

  it("supports indeterminate state", async () => {
    render(<Checkbox label="Select all" indeterminate />);
    const input = screen.getByLabelText("Select all") as HTMLInputElement;

    await waitFor(() => {
      expect(input.indeterminate).toBe(true);
    });
  });
});

