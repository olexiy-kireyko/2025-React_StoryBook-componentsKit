import type { Meta, StoryObj } from "@storybook/react-vite";

import SidebarMenu from "./SidebarMenu";

const meta = {
  component: SidebarMenu,
  title: "SidebarMenu",
  tags: ["autodocs"],

  excludeStories: /.*Data$/,
} satisfies Meta<typeof SidebarMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuLeft: Story = {
  args: {
    placing: "left",
    list: [
      {
        id: "aaa",
        name: "Lorem ipsum",
        itemChildren: ["dolor sit", "amet consectetur", "adipisicing", "elit"],
      },
      {
        id: "aab",
        name: "Commodi",
        itemChildren: ["cupiditate", "alias", "vitae", "pariatur"],
      },
      {
        id: "aac",
        name: "Voluptatibus",
        itemChildren: ["officiis", "alias", "veniam", "pariatur"],
      },
    ],
    expandedId: "none",
    isShowMenu: false,
  },
};

export const MenuRightExpanded: Story = {
  args: {
    placing: "right",
    list: [
      {
        id: "aaa",
        name: "Lorem ipsum",
        itemChildren: ["dolor sit", "amet consectetur", "adipisicing", "elit"],
      },
      {
        id: "aab",
        name: "Commodi",
        itemChildren: ["cupiditate", "alias", "vitae", "pariatur"],
      },
      {
        id: "aac",
        name: "Voluptatibus",
        itemChildren: ["officiis", "alias", "veniam", "pariatur"],
      },
    ],
    expandedId: "aab",
    isShowMenu: false,
  },
};
