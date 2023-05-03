import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessageBlock from ".";

const meta: Meta<typeof ErrorMessageBlock> = {
  title: "Example/ErrorMessageBlock",
  component: ErrorMessageBlock,
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
type Story = StoryObj<typeof ErrorMessageBlock>;

export const DefaultStory: Story = {
  render: () => (
    <ErrorMessageBlock>
      😦 Error...
      <div className="mt-2">
        <input
          type="button"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
          value="Some button to go back"
        />
      </div>
    </ErrorMessageBlock>
  ),
};
