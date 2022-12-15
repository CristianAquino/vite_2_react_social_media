import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileCard = ({ location }) => {
  const followSty = "flex flex-col gap-[0.4rem] items-center justify-center";
  const hrSty = "w-[85%] border-[1px] border-hrColor";

  const { user } = useSelector((state) => state.authSlice);
  const { myPosts } = useSelector((state) => state.postsSlice);

  return (
    // profileCard
    <div className=" rounded-[1.5rem] flex flex-col relative gap-[1rem] overflow-x-clip bg-cardColor">
      {/* profileImage */}
      <div className="relative flex flex-col items-center justify-center">
        <img
          src={
            user.coverPicture
              ? user.coverPicture
              : "https://raw.githubusercontent.com/ZainRk/SocialMedia-Starter/master/src/img/cover.jpg"
          }
          // src="https://raw.githubusercontent.com/ZainRk/SocialMedia-Starter/master/src/img/cover.jpg"
          alt="cover"
          className="w-[100%]"
        />
        <img
          src={
            user.profilePicture
              ? user.profilePicture
              : "https://raw.githubusercontent.com/ZainRk/SocialMedia-Starter/master/src/img/profileImg.jpg"
          }
          // src="https://raw.githubusercontent.com/ZainRk/SocialMedia-Starter/master/src/img/profileImg.jpg"
          alt="profile"
          className="w-[6rem] h-[6rem] rounded-[50%] absolute bottom-[-3rem] shadow-profileShadow"
        />
      </div>
      {/* profileName */}
      <div className="flex flex-col items-center mt-[3rem] gap-10px">
        <span className="font-bold ">
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>
      {/* followStatus */}
      <div className="flex flex-col items-center justify-center gap-[0.75rem]">
        <hr className={hrSty} />
        <div className="flex gap-[1rem] w-[80%] justify-around items-center">
          {/* follow */}
          <div className={followSty}>
            <span className="font-bold">{user.following.length}</span>
            <span className="text-gray text-[14px]">Following </span>
          </div>
          {/* vl */}
          <div className="h-[100%] border-l-[2px] border-l-hrColor"></div>
          {/* follow */}
          <div className={followSty}>
            <span className="font-bold">{user.followers.length}</span>
            <span className="text-gray text-[14px]">Followers</span>
          </div>
          {location === "profilePage" && (
            <>
              {/* vl */}
              <div className="h-[100%] border-l-[2px] border-l-hrColor"></div>
              {/* follow */}
              <div className={followSty}>
                <span className="font-bold">{myPosts.length}</span>
                <span className="text-gray text-[14px]">Posts</span>
              </div>
            </>
          )}
        </div>
        <hr className={hrSty} />
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <span className="font-bold text-orange self-center mb-[1rem] cursor-pointer">
          <Link to={`/profile/${user.id}`}>My Profile</Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
