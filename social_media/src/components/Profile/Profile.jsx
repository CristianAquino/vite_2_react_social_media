import PostSide from "../PostSide/PostSide";
import ProfileCard from "../ProfileCard/ProfileCard";
import ProfileLeft from "../ProfileLeft/ProfileLeft";
import RightSide from "../RightSide/RightSide";

const Profile = () => {
  return (
    //   profile
    <div className="relative grid grid-cols-[18rem_auto_20rem] gap-[1rem]">
      <ProfileLeft />
      {/* profile Center */}
      <div className="flex flex-col gap-[1rem]">
        <ProfileCard location="profilePage" />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
