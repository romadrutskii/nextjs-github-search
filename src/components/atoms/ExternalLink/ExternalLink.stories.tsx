import type { Meta, StoryObj } from "@storybook/react";
import ExternalLink from ".";

const meta: Meta<typeof ExternalLink> = {
  title: "Example/ExternalLink",
  component: ExternalLink,
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
type Story = StoryObj<typeof ExternalLink>;

export const InNewTab: Story = {
  render: () => (
    <ExternalLink url="https://www.linkedin.com/in/romandriutskii/">
      Link
    </ExternalLink>
  ),
};

export const InThisTab: Story = {
  render: () => (
    <ExternalLink
      url="https://www.linkedin.com/in/romandriutskii/"
      openInNewTab={false}
    >
      Link
    </ExternalLink>
  ),
};
