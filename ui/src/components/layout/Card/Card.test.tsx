import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

import { Card } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(
      <Card data-testid="card">
        <div>Content</div>
      </Card>
    );
    expect(screen.getByTestId("card")).toHaveTextContent("Content");
  });

  it("passes through div attributes", () => {
    render(<Card data-testid="card" role="region" aria-label="Profile" />);
    expect(screen.getByRole("region", { name: "Profile" })).toBeInTheDocument();
  });
});

