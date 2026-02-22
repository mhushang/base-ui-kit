import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";
import { Container } from "../Container/Container";

const meta = {
  title: "Layout/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated"],
      table: { defaultValue: { summary: "default" } },
    },
    padding: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    hoverable: {
      control: "boolean",
      description: "Adds a subtle hover affordance (shadow + border)",
    },
  },
  args: {
    variant: "default",
    padding: "md",
    hoverable: false,
    children: (
      <div style={{ display: "grid", gap: "0.5rem" }}>
        <div style={{ fontWeight: 600 }}>Card title</div>
        <div style={{ color: "var(--color-gray-700)" }}>
          A simple surface for grouping content.
        </div>
      </div>
    ),
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outlined: Story = {
  args: { variant: "outlined" },
};

export const Elevated: Story = {
  args: { variant: "elevated" },
};

export const Hoverable: Story = {
  args: { hoverable: true, variant: "elevated" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem" }}>
      <Card variant="default">Default</Card>
      <Card variant="outlined">Outlined</Card>
      <Card variant="elevated">Elevated</Card>
    </div>
  ),
};

export const InContainer: Story = {
  render: () => (
    <div style={{ background: "var(--color-gray-50)", padding: "1.5rem" }}>
      <Container maxWidth="md">
        <Card variant="elevated" hoverable>
          <div style={{ display: "grid", gap: "0.75rem" }}>
            <div style={{ fontWeight: 600 }}>Within a Container</div>
            <div style={{ color: "var(--color-gray-700)" }}>
              Pair <code>Container</code> + <code>Card</code> for page layouts.
            </div>
          </div>
        </Card>
      </Container>
    </div>
  ),
};

