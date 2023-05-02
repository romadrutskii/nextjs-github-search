import type { Meta, StoryObj } from "@storybook/react";
import Search from ".";

const meta: Meta<typeof Search> = {
  title: "Example/Search",
  component: Search,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof Search>;

export const DefaultStory: Story = {
  args: {},
};
