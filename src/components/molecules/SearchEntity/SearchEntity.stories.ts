import type { Meta, StoryObj } from "@storybook/react";
import SearchEntity from ".";

const meta: Meta<typeof SearchEntity> = {
  title: "Example/SearchEntity",
  component: SearchEntity,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof SearchEntity>;

export const DefaultStory: Story = {
  args: {},
};
