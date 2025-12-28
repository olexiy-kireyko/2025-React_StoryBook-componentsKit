import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "./Input";

const meta = {
  component: Input,
  title: "Input",
  tags: ["autodocs"],

  excludeStories: /.*Data$/,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text1: Story = {
  args: {
    type: "text",
    clearable: false,
    passwordVisibility: false,
    shadow: false,
  },
};

export const Text2: Story = {
  args: {
    type: "text",
    clearable: true,
    passwordVisibility: false,
    shadow: false,
  },
};

export const Password1: Story = {
  args: {
    type: "password",
    clearable: false,
    passwordVisibility: false,
    shadow: false,
  },
};

export const Password2: Story = {
  args: {
    type: "password",
    clearable: true,
    passwordVisibility: false,
    shadow: false,
  },
};

export const Password3: Story = {
  args: {
    type: "password",
    clearable: true,
    passwordVisibility: true,
    shadow: false,
  },
};

export const Number: Story = {
  args: {
    type: "number",
    clearable: false,
    passwordVisibility: false,
    shadow: false,
  },
};

export const Text1Shadow: Story = {
  args: {
    type: "text",
    clearable: false,
    passwordVisibility: false,
    shadow: true,
  },
};

export const Text2Shadow: Story = {
  args: {
    type: "text",
    clearable: true,
    passwordVisibility: false,
    shadow: true,
  },
};

export const Password1Shadow: Story = {
  args: {
    type: "password",
    clearable: false,
    passwordVisibility: false,
    shadow: true,
  },
};

export const Password2Shadow: Story = {
  args: {
    type: "password",
    clearable: true,
    passwordVisibility: false,
    shadow: true,
  },
};

export const Password3Shadow: Story = {
  args: {
    type: "password",
    clearable: true,
    passwordVisibility: true,
    shadow: true,
  },
};

export const NumberShadow: Story = {
  args: {
    type: "number",
    clearable: false,
    passwordVisibility: false,
    shadow: true,
  },
};
