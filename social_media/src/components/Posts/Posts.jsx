import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../https/postsRequest";
import { postInitial } from "../../redux/slice/postsSlice";
import { PostsData } from "../../utils/postsData";
import Post from "../Post/Post";

const Posts = () => {
  const { posts, loading } = useSelector((state) => state.postsSlice);
  const { token } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllPosts(token)
      .then((res) => dispatch(postInitial(res.data)))
      .catch((e) => {
        console.error(e);
      });
  }, []);

  return (
    // posts
    <div className="flex flex-col gap-[1rem]">
      {loading
        ? "Fetching Posts..."
        : posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
};

export default Posts;
