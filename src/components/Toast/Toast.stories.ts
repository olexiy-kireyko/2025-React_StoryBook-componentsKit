import type { Meta, StoryObj } from "@storybook/react-vite";

import Toast from "./Toast";

const meta = {
  component: Toast,
  title: "Toast",
  tags: ["autodocs"],

  excludeStories: /.*Data$/,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorLeft: Story = {
  args: {
    type: "error",
    text: "Loading error",
    duration: 3000,
    closing: true,
    placing: "left",
  },
};

export const ErrorRight: Story = {
  args: {
    type: "error",
    text: "Loading error",
    duration: 3000,
    closing: true,
    placing: "right",
  },
};

export const SuccessLeft: Story = {
  args: {
    type: "success",
    text: "Loading successed",
    duration: 3000,
    closing: true,
    placing: "left",
  },
};

export const SuccessRightNonclosing: Story = {
  args: {
    type: "success",
    text: "Loading successed",
    duration: 3000,
    closing: false,
    placing: "right",
  },
};
