import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Select } from "./Select";

describe("Select", () => {
  it("renders a select", () => {
    render(
      <Select aria-label="Country">
        <option value="us">United States</option>
      </Select>
    );
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
  });

  it("sets aria-invalid when error=true", () => {
    render(
      <Select aria-label="Country" error>
        <option value="us">United States</option>
      </Select>
    );
    expect(screen.getByLabelText("Country")).toHaveAttribute(
      "aria-invalid",
      "true"
    );
  });

  it("allows selecting an option", async () => {
    const user = userEvent.setup();
    render(
      <Select aria-label="Country" defaultValue="us">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </Select>
    );

    const select = screen.getByLabelText("Country") as HTMLSelectElement;
    expect(select.value).toBe("us");

    await user.selectOptions(select, "ca");
    expect(select.value).toBe("ca");
  });
});
