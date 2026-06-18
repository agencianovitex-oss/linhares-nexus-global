import { createFileRoute } from "@tanstack/react-router";
import { PostEditorContent } from "@/components/admin/PostEditorContent";

export const Route = createFileRoute("/_authenticated/admin/posts/$id")({
  component: PostEditPage,
});

function PostEditPage() {
  const { id } = Route.useParams();
  return <PostEditorContent postId={id} />;
}
