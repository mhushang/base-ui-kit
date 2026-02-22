import type { Meta, StoryObj } from "@storybook/react";
import { FormField } from "./FormField";
import { Input } from "../../primitives/Input";
import { Checkbox } from "../../primitives/Checkbox";

const meta = {
  title: "Composite/FormField",
  component: FormField,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    required: { control: "boolean" },
  },
  args: {
    label: "Email address",
    hint: "",
    error: "",
    required: false,
    children: <Input placeholder="you@example.com" type="email" />,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithHint: Story = {
  args: { hint: "We'll never share your email with anyone." },
};

export const WithError: Story = {
  args: {
    error: "Please enter a valid email address.",
    children: (
      <Input
        placeholder="you@example.com"
        type="email"
        defaultValue="not-an-email"
      />
    ),
  },
};

export const Required: Story = {
  args: {
    required: true,
    label: "Full name",
    children: <Input placeholder="John Doe" />,
  },
};

export const WithCheckbox: Story = {
  args: {
    label: "",
    children: <Checkbox label="I agree to the terms and conditions" />,
  },
};

// Real-world — full form example
export const FullForm: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        width: "360px",
      }}
    >
      <FormField label="Full name" required>
        <Input placeholder="John Doe" />
      </FormField>
      <FormField
        label="Email"
        required
        error="Please enter a valid email address."
      >
        <Input
          placeholder="you@example.com"
          type="email"
          defaultValue="not-valid"
        />
      </FormField>
      <FormField
        label="Password"
        required
        hint="Must be at least 8 characters."
      >
        <Input placeholder="••••••••" type="password" />
      </FormField>
      <FormField label="">
        <Checkbox label="I agree to the terms and conditions" />
      </FormField>
    </div>
  ),
};
