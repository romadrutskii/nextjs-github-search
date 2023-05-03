import type { Meta, StoryObj } from "@storybook/react";
import LoadingSpinner from ".";

const meta: Meta<typeof LoadingSpinner> = {
  title: "Example/LoadingSpinner",
  component: LoadingSpinner,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-24">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const DefaultStory: Story = {
  args: {
    size: 40,
  },
};
