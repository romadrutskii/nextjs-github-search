import type { Meta, StoryObj } from "@storybook/react";
import Select from ".";

const meta: Meta<typeof Select> = {
  title: "Example/Select",
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const UsersDefaultValue: Story = {
  args: {
    defaultValue: "Users",
    options: ["Repositories", "Users"],
  },
};

export const RepositoriesDefaultValue: Story = {
  args: {
    defaultValue: "Repositories",
    options: ["Repositories", "Users"],
  },
};

export const NoDefaultValue: Story = {
  args: {
    options: ["Repositories", "Users"],
  },
};
