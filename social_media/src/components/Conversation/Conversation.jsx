import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getDataUserId } from "../../https/userRequest";

const Conversation = ({ data, currentUserId, token, online }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    getDataUserId(token, userId)
      .then((res) => {
        setUserData(res);
      })
      .catch((e) => console.log(e));
  }, [token]);

  return (
    <>
      {/* follower conversation */}
      <div className="flex justify-between items-center rounded-[0.5rem] p-[10px] hover:bg-[#80808038] hover:cursor-pointer">
        <div className="relative flex gap-[10px]">
          {/* online dot */}
          {online && (
            <div className="bg-[greenyellow] rounded-[50%] absolute left-[2rem] w-[1rem] h-[1rem]"></div>
          )}

          <img
            src={
              userData?.profilePicture
                ? userData.profilePicture
                : "https://raw.githubusercontent.com/ZainRk/SocialMedia-Starter/master/src/img/profileImg.jpg"
            }
            alt={userData?.username}
            className="w-[50px] h-[50px] rounded-[50%]"
          />
          {/* name */}
          <div className="flex flex-col items-start justify-center text-[0.8rem]">
            <span className="font-bold">{userData?.username}</span>
            <span>{online ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr className="w-[85%] border-[0.1px] border-[#ececec]" />
    </>
  );
};

export default Conversation;
