import { useState } from "react";
import { useEffect } from "react";
import randomUser from "../../utils/fetch";

const FollowersCard = () => {
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    randomUser().then((datos) => setFollowers(datos.results));
  }, []);

  return (
    // followersCard
    <div className="w-[100%] rounded-[0.7rem] gap-[1rem] flex flex-col text-[14px]">
      <h3>Who is followings you</h3>
      {followers != null &&
        followers.map((data) => (
          // follower
          <div
            key={data.name.first}
            className="flex justify-between items-center"
          >
            <div className="flex gap-[10px]">
              {/* followImg */}
              <img
                src={data.picture.large}
                alt={data.name.first}
                className="w-[3.2rem] h-[3.2rem] rounded-[50%]"
              />
              {/* name */}
              <div className="flex flex-col items-start justify-center">
                <span className="font-bold">
                  {data.name.first + " " + data.name.last}
                </span>
                <span>@{data.login.username}</span>
              </div>
            </div>
            {/* button */}
            <button className="flex items-center justify-center text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] hover:cursor-pointer ">
              Follow
            </button>
          </div>
        ))}
    </div>
  );
};

export default FollowersCard;
