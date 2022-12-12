import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../https/postsRequest";
import { postInitial } from "../../redux/slice/postsSlice";
import { PostsData } from "../../utils/postsData";
import Post from "../Post/Post";

const Posts = () => {
  const { posts } = useSelector((state) => state.postsSlice);
  const { token } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    getPosts(token).then((res) => dispatch(postInitial(res.data)));
  }, []);

  return (
    // posts
    <div className="flex flex-col gap-[1rem]">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
