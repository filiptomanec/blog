import type { Meta, StoryObj } from "@storybook/react";
import PostDetail from "../components/PostDetail";

const meta = {
  title: "Blog/PostPage/PostDetail",
  component: PostDetail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    setImageModalVisible: { action: "modal visibility changed" },
  },
} satisfies Meta<typeof PostDetail>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      id: 1,
      title: "Example Post Title",
      image: "https://via.placeholder.com/400x300",
      content: {
        paragraphs: [
          "Example paragraph 1 of the post.",
          "Example paragraph 2 of the post.",
          "Example paragraph 3 of the post.",
        ],
      },
    },
    setImageModalVisible: () => {},
  },
};
