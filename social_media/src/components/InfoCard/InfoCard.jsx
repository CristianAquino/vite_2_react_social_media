import { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { getDataUser } from "../../https/userRequest";
import { useEffect } from "react";

const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileUser, setProfileUser] = useState({});

  const { user, token } = useSelector((state) => state.authSlice);

  useEffect(() => {
    getDataUser(token)
      .then((res) => setProfileUser(res.data))
      .catch((e) => {
        console.error(e);
      });
  }, [user]);

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/home");
  };
  return (
    //   infoCard
    <div className="flex flex-col gap-[0.75rem] bg-cardColor p-[1rem] rounded-[1rem] w-[90%]">
      {/* infoHead */}
      <div className="flex justify-between items-center">
        <h4>Profile Info</h4>
        <RiPencilLine
          className="text-[24px] hover:cursor-pointer"
          onClick={() => setModalOpen(true)}
        />
        <ProfileModal
          modalOpened={modalOpen}
          setModalOpened={setModalOpen}
          data={user}
        />
      </div>
      {/* info */}
      <div>
        <span>
          <b>Status</b>
        </span>
        <span> {profileUser.relationship}</span>
      </div>
      {/* info */}
      <div>
        <span>
          <b>Lives</b>
        </span>
        <span>
          {" "}
          {profileUser.livesin ? profileUser.livesin : "no registrado"}
        </span>
      </div>
      {/* info */}
      <div>
        <span>
          <b>Works at</b>
        </span>
        <span>
          {" "}
          {profileUser.worksAt ? profileUser.worksAt : "no registrado"}
        </span>
      </div>
      <button
        className="flex items-center justify-center self-end text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] w-[7rem] mt-[6rem] hover:cursor-pointer "
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
