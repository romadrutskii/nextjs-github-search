import type { Meta, StoryObj } from "@storybook/react";
import Badge from ".";

const meta: Meta<typeof Badge> = {
  title: "Example/Badge",
  component: Badge,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const DefaultStory: Story = {
  args: {
    text: "My lovely badge",
  },
};
