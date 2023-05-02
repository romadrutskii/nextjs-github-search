import type { Meta, StoryObj } from "@storybook/react";
import SearchHeader from ".";

const meta: Meta<typeof SearchHeader> = {
  title: "Example/SearchHeader",
  component: SearchHeader,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SearchHeader>;

export const DefaultStory: Story = {
  args: {},
};
