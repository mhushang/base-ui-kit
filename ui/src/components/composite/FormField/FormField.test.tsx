import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { FormField } from "./FormField";
import { Input } from "../../primitives/Input";

describe("FormField", () => {
  it("links label to the child input via htmlFor/id", () => {
    render(
      <FormField label="Email">
        <Input aria-label="Email" />
      </FormField>
    );

    const input = screen.getByLabelText("Email") as HTMLInputElement;
    const label = screen.getByText("Email").closest("label");

    expect(input.id).toBeTruthy();
    expect(label).toHaveAttribute("for", input.id);
  });

  it("sets aria-describedby to hint when provided", () => {
    render(
      <FormField label="Email" hint="We won't spam you">
        <Input aria-label="Email" />
      </FormField>
    );

    const input = screen.getByLabelText("Email");
    const hint = screen.getByText("We won't spam you");
    expect(hint.id).toBeTruthy();
    expect(input).toHaveAttribute("aria-describedby", hint.id);
  });

  it("sets aria-describedby to error and marks invalid", () => {
    render(
      <FormField label="Email" hint="ignored when error" error="Invalid email">
        <Input aria-label="Email" />
      </FormField>
    );

    const input = screen.getByLabelText("Email");
    const error = screen.getByRole("alert");
    expect(error.id).toBeTruthy();
    expect(input).toHaveAttribute("aria-describedby", error.id);
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});

