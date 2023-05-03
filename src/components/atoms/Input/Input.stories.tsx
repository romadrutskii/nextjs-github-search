import type { Meta, StoryObj } from "@storybook/react";
import Input from ".";

const meta: Meta<typeof Input> = {
  title: "Example/Input",
  component: Input,
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
type Story = StoryObj<typeof Input>;

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Start typing to search...",
  },
};

export const WithoutPlaceholder: Story = {};
