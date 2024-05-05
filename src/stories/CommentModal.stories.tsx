import type { Meta, StoryObj } from "@storybook/react";
import CommentModal from "../components/CommentModal";
import { CommentProvider } from "../contexts/CommentProvider";
import { CommentContext } from "../contexts/CommentContext";
import Button from "react-bootstrap/Button";
import { Stack } from "react-bootstrap";

const meta = {
  title: "Blog/PostPage/CommentModal",
  component: CommentModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <CommentProvider>
        <Story />
      </CommentProvider>
    ),
  ],
} satisfies Meta<typeof CommentModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    postId: 1,
  },
  render: (args, { globals }) => {
    return (
      <CommentContext.Consumer>
        {({ openCommentModal, openAnswerModal, closeModal }) => (
          <Stack gap={2}>
            <Button onClick={openCommentModal}>Open Comment Modal</Button>
            <Button onClick={() => openAnswerModal(1)}>
              Open Answer Modal
            </Button>
            <CommentModal {...args} />
          </Stack>
        )}
      </CommentContext.Consumer>
    );
  },
};
