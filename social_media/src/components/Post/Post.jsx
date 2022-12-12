import {
  AiOutlineComment,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from "react-icons/ai";

const Post = (data) => {
  return (
    //   post
    <div className="flex flex-col p-[1rem] bg-cardColor rounded-[1rem] gap-[1rem]">
      <img
        src={data.image}
        alt={data.imageId}
        className="w-[100%] max-h-[20rem] object-cover rounded-[0.5rem]"
      />
      {/* postReact */}
      <div className="flex items-start text-[24px] gap-[1.5rem]">
        {data.liked ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <AiOutlineHeart />
        )}
        <AiOutlineComment />
        <AiOutlineShareAlt />
      </div>
      <span className="text-gray text-[12px]">{data.likes} likes</span>
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
