import PostCard from "../components/PostCard";
import type { Meta, StoryObj } from "@storybook/react";
import baliImage from "../assets/bali-image.jpg";
import { withRouter } from "storybook-addon-remix-react-router";

const meta = {
  title: "Blog/HomePage/PostCard",
  component: PostCard,
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PostCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    post: {
      id: 1,
      title: "Example Post Title",
      image: baliImage,
      content: {
        paragraphs: [
          "Example paragraph 1 of the post. This is a long paragraph that will be truncated by the LinesEllipsis component.",
          "Example paragraph 2 of the post. This is a long paragraph that will be truncated by the LinesEllipsis component.",
          "Example paragraph 3 of the post. This is a long paragraph that will be truncated by the LinesEllipsis component.",
        ],
      },
    },
  },
};
