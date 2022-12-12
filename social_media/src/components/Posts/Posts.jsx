import { PostsData } from "../../utils/postsData";
import Post from "../Post/Post";

const Posts = () => {
  return (
    // posts
    <div className="flex flex-col gap-[1rem]">
      {PostsData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
