import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPosts, getPosts } from "../../https/postsRequest";
import { postInitial } from "../../redux/slice/postsSlice";
import { PostsData } from "../../utils/postsData";
import Post from "../Post/Post";

const Posts = () => {
  const { posts, loading } = useSelector((state) => state.postsSlice);
  const { token } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getPosts(token)
        .then((res) => dispatch(postInitial(res.data)))
        .catch((e) => {
          console.error(e);
        });
    } else {
      getAllPosts(token)
        .then((res) => dispatch(postInitial(res.data)))
        .catch((e) => {
          console.error(e);
        });
    }
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
