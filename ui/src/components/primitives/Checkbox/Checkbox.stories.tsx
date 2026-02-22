import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Primitives/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: {
      control: "boolean",
      description:
        "Partial selection state — set via JS DOM property, not HTML attribute",
    },
    onChange: { action: "changed" },
  },
  args: {
    label: "Accept terms and conditions",
    disabled: false,
    indeterminate: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true, label: "Disabled checkbox" },
};

export const DisabledChecked: Story = {
  args: { disabled: true, checked: true, label: "Disabled checked" },
};

// Showcase the logic inside — indeterminate state
export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    label: "Select all (partial)",
  },
};

const ControlledExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      label={`Checkbox is ${checked ? "checked" : "unchecked"}`}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

// Interactive story showing real controlled behavior
export const Controlled: Story = {
  render: () => <ControlledExample />,
};

const SelectAllExample = () => {
  const [items, setItems] = useState([
    { id: 1, label: "Item one", checked: false },
    { id: 2, label: "Item two", checked: false },
    { id: 3, label: "Item three", checked: false },
  ]);

  const allChecked = items.every((i) => i.checked);
  const someChecked = items.some((i) => i.checked);

  const toggleAll = () => {
    setItems(items.map((i) => ({ ...i, checked: !allChecked })));
  };

  const toggleItem = (id: number) => {
    setItems(items.map((i) => (i.id === id ? { ...i, checked: !i.checked } : i)));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <Checkbox
        label="Select all"
        checked={allChecked}
        indeterminate={someChecked && !allChecked}
        onChange={toggleAll}
      />
      <hr style={{ margin: "0.5rem 0" }} />
      {items.map((item) => (
        <Checkbox
          key={item.id}
          label={item.label}
          checked={item.checked}
          onChange={() => toggleItem(item.id)}
          style={{ marginLeft: "1.5rem" }}
        />
      ))}
    </div>
  );
};

// Real-world use case — select all with indeterminate
export const SelectAll: Story = {
  render: () => <SelectAllExample />,
};
