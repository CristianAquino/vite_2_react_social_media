import FollowersCard from "../FollowersCard/FollowersCard";
import InfoCard from "../InfoCard/InfoCard";
import Logo from "../Logo/Logo";

const ProfileLeft = () => {
  return (
    // profileLeft overflow-auto
    <div className="flex flex-col gap-[1rem] items-center">
      <Logo />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;
