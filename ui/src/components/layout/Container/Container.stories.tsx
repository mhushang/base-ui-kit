import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "./Container";
import { Card } from "../Card/Card";

const meta = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {
    maxWidth: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "full"],
      table: { defaultValue: { summary: "lg" } },
    },
    padding: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
  },
  args: {
    maxWidth: "lg",
    padding: "md",
    children: (
      <div style={{ padding: "1rem", background: "var(--color-gray-100)" }}>
        Container content
      </div>
    ),
  },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FullWidth: Story = {
  args: { maxWidth: "full" },
};

export const AllMaxWidths: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem" }}>
      {(["sm", "md", "lg", "xl", "2xl", "full"] as const).map((mw) => (
        <div
          key={mw}
          style={{
            border: "1px dashed var(--color-gray-300)",
            background: "white",
          }}
        >
          <Container maxWidth={mw} padding="md">
            <div style={{ padding: "0.75rem" }}>
              <div style={{ fontWeight: 600 }}>maxWidth: {mw}</div>
              <div style={{ color: "var(--color-gray-700)" }}>
                Resize the Storybook canvas to see it respond.
              </div>
            </div>
          </Container>
        </div>
      ))}
    </div>
  ),
};

export const PageSectionExample: Story = {
  render: () => (
    <div style={{ background: "var(--color-gray-50)", padding: "2rem 0" }}>
      <Container maxWidth="lg" padding="md">
        <div style={{ display: "grid", gap: "1rem" }}>
          <div style={{ fontWeight: 700, fontSize: "1.125rem" }}>
            Page section
          </div>
          <Card variant="elevated">
            <div style={{ display: "grid", gap: "0.25rem" }}>
              <div style={{ fontWeight: 600 }}>Card inside Container</div>
              <div style={{ color: "var(--color-gray-700)" }}>
                Typical layout building blocks.
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  ),
};

