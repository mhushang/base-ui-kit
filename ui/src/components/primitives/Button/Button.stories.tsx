import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// Meta — defines the component for this story file
const meta = {
  title: "Primitives/Button", // Sidebar path in Storybook
  component: Button,
  tags: ["autodocs"], // Auto-generate docs page
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "destructive"],
      description: "Visual style of the button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the button",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    loading: {
      control: "boolean",
      description: "Shows spinner and disables interaction",
    },
    fullWidth: {
      control: "boolean",
      description: "Stretches to full container width",
    },
    disabled: {
      control: "boolean",
    },
    onClick: {
      action: "clicked", // Logs to Actions panel
    },
  },
  args: {
    // Default args for all stories
    children: "Button",
    variant: "primary",
    size: "md",
    loading: false,
    fullWidth: false,
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Individual stories — each is a use case
export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Ghost: Story = {
  args: { variant: "ghost" },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete account" },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const Loading: Story = {
  args: { loading: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const FullWidth: Story = {
  args: { fullWidth: true },
  // Story-level decorator for full width context
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

// Showcase all variants together
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
