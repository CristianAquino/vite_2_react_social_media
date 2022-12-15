import { useState } from "react";
import {
  AiOutlineComment,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { likePosts } from "../../https/postsRequest";

const Post = (data) => {
  const { user, token } = useSelector((state) => state.authSlice);
  const [liked, setLiked] = useState(data.likes.includes(user.id));
  const [likes, setLikes] = useState(data.likes.length);

  const like = (token, id) => {
    likePosts(token, id)
      .then()
      .catch((e) => {
        console.error(e);
      });
  };
  const handleLike = () => {
    setLiked((prev) => !prev);
    like(token, data.id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  return (
    //   post
    <div className="flex flex-col p-[1rem] bg-cardColor rounded-[1rem] gap-[1rem]">
      <img
        src={data.image}
        alt={data.imageId}
        className="w-[100%] max-h-[20rem] object-cover rounded-[0.5rem]  hover:cursor-pointer"
      />
      {/* postReact */}
      <div className="flex items-start text-[24px] gap-[1.5rem]">
        {liked ? (
          <AiFillHeart
            className="text-red-500  hover:cursor-pointer"
            onClick={handleLike}
          />
        ) : (
          <AiOutlineHeart
            className="hover:cursor-pointer"
            onClick={handleLike}
          />
        )}
        <AiOutlineComment className="hover:cursor-pointer" />
        <AiOutlineShareAlt className="hover:cursor-pointer" />
      </div>
      <span className="text-gray text-[12px]">{likes} likes</span>
      {/* detail */}
      <div>
        <span>
          <b>{data.name}</b>
          <span> {data.desc}</span>
        </span>
      </div>
    </div>
  );
};

export default Post;
