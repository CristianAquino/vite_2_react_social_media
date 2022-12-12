import PostSide from "../PostSide/PostSide";
import ProfileSide from "../ProfileSide/ProfileSide";
import RightSide from "../RightSide/RightSide";

const Home = () => {
  return (
    // home
    <div className="relative grid grid-cols-[18rem_auto_20rem] gap-[1rem]">
      <ProfileSide />
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
