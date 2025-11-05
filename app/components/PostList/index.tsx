import PostItem from "../PostItem";
import { IPost } from "@/app/models/Post";
import { getPosts } from "../../actions";

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div className="space-y-3 min-w-[500px]">
      <p className="text-2xl">Posts</p>
      {posts.map((p: IPost) => (
        <PostItem key={p._id} post={p} />
      ))}
    </div>
  );
};

export default PostList;
