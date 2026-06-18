import { createFileRoute } from "@tanstack/react-router";
import { PostEditorContent } from "@/components/admin/PostEditorContent";

export const Route = createFileRoute("/_authenticated/admin/posts/novo")({
  component: () => <PostEditorContent />,
});
