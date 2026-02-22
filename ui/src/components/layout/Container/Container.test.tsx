import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(
      <Container data-testid="container">
        <div>Inner</div>
      </Container>
    );
    expect(screen.getByTestId("container")).toHaveTextContent("Inner");
  });

  it("passes through div attributes", () => {
    render(
      <Container role="main" aria-label="Page content">
        Hi
      </Container>
    );
    expect(
      screen.getByRole("main", { name: "Page content" })
    ).toBeInTheDocument();
  });
});

