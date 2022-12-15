import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUsers } from "../../https/userRequest";
import { fallowUser, unFallowUser } from "../../redux/slice/authSlice";

const User = ({ data }) => {
  const { token, user } = useSelector((state) => state.authSlice);
  const [following, setFollowing] = useState(data.followers.includes(user.id));
  const dispatch = useDispatch();

  const handleFollow = () => {
    followUsers(token, data.id)
      .then()
      .catch((e) => console.log(e));
    following ? dispatch(unFallowUser(data.id)) : dispatch(fallowUser(data.id));
    setFollowing(!following);
  };

  return (
    // follower
    <div className="flex justify-between items-center">
      <div className="flex gap-[10px]">
        {/* followImg */}
        <img
          src={
            data.profilePicture
              ? data.profilePicture
              : "https://raw.githubusercontent.com/ZainRk/SocialMedia-Starter/master/src/img/profileImg.jpg"
          }
          alt={data.username}
          className="w-[3.2rem] h-[3.2rem] rounded-[50%]"
        />
        {/* name */}
        <div className="flex flex-col items-start justify-center">
          <span className="font-bold">
            {data.firstname + " " + data.lastname}
          </span>
          <span>@{data.username}</span>
        </div>
      </div>
      {/* button */}
      <button
        className="flex items-center justify-center text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] hover:cursor-pointer "
        onClick={handleFollow}
      >
        {following ? "UnFollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
