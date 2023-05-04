import type { Meta, StoryObj } from "@storybook/react";
import UserCard from ".";

const meta: Meta<typeof UserCard> = {
  title: "Example/UserCard",
  component: UserCard,
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
type Story = StoryObj<typeof UserCard>;

export const DefaultStory: Story = {
  args: {
    login: "emschwartz",
    name: "Evan Schwartz",
    location: "Amsterdam, Netherlands",
    bio: "Rust / TypeScript engineer. Creator of Autometrics + currently writing Rust at Fiberplane. Previously built turbophonebank.com, turbovpb.com, @interledger",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/3262610?u=2b5e73302e29d08dc738df002868674f7287c2b3&v=4",
    id: "MDQ6VXNlcjMyNjI2MTA=",
    url: "https://github.com/emschwartz",
  },
};
