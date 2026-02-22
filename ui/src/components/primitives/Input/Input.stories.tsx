import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
  title: "Primitives/Input",
  component: Input,
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
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel"],
    },
  },
  args: {
    placeholder: "Enter text...",
    size: "md",
    error: false,
    disabled: false,
    type: "text",
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: true,
    placeholder: "Invalid input",
    defaultValue: "wrong@",
  },
};

export const Disabled: Story = {
  args: { disabled: true, placeholder: "Disabled input" },
};

export const Password: Story = {
  args: { type: "password", placeholder: "Enter password..." },
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "300px",
      }}
    >
      <Input size="sm" placeholder="Small input" />
      <Input size="md" placeholder="Medium input" />
      <Input size="lg" placeholder="Large input" />
    </div>
  ),
};
