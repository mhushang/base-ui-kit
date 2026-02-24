import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./Select";

const meta = {
  title: "Primitives/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      table: { defaultValue: { summary: "md" } },
    },
    error: {
      control: "boolean",
      description: "Shows error styling and sets aria-invalid",
    },
    disabled: { control: "boolean" },
  },
  args: {
    size: "md",
    error: false,
    disabled: false,
    defaultValue: "",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Select aria-label="Country" {...args}>
      <option value="" disabled>
        Select a country…
      </option>
      <option value="us">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
    </Select>
  ),
};

export const WithError: Story = {
  args: { error: true },
  render: Default.render,
};

export const Disabled: Story = {
  args: { disabled: true },
  render: Default.render,
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "grid", gap: "1rem", width: "320px" }}>
      <Select aria-label="Small" size="sm" defaultValue="us">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </Select>
      <Select aria-label="Medium" size="md" defaultValue="us">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </Select>
      <Select aria-label="Large" size="lg" defaultValue="us">
        <option value="us">United States</option>
        <option value="ca">Canada</option>
      </Select>
    </div>
  ),
};
