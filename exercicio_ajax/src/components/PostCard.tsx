
import { Post } from "@/services/api";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base">{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{post.body}</p>
      </CardContent>
      <CardFooter className="text-xs text-muted-foreground">
        Post ID: {post.id}
      </CardFooter>
    </Card>
  );
};

export default PostCard;
