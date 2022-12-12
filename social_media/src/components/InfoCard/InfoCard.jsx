import { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

const InfoCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handelLogOut = () => {
    dispatch(logout());
  };
  return (
    //   infoCard
    <div className="flex flex-col gap-[0.75rem] bg-cardColor p-[1rem] rounded-[1rem] w-[90%]">
      {/* infoHead */}
      <div className="flex justify-between items-center">
        <h4>Your Info</h4>
        <RiPencilLine
          className="text-[24px] hover:cursor-pointer"
          onClick={() => setModalOpen(true)}
        />
        <ProfileModal modalOpened={modalOpen} setModalOpened={setModalOpen} />
      </div>
      {/* info */}
      <div>
        <span>
          <b>Status</b>
        </span>
        <span> in Relationship</span>
      </div>
      {/* info */}
      <div>
        <span>
          <b>Lives</b>
        </span>
        <span> Multan</span>
      </div>
      {/* info */}
      <div>
        <span>
          <b>Works at</b>
        </span>
        <span> Zainkeepscode inst</span>
      </div>
      <button
        className="flex items-center justify-center self-end text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] w-[7rem] mt-[6rem] hover:cursor-pointer "
        onClick={handelLogOut}
      >
        Logout
      </button>
    </div>
  );
};

export default InfoCard;
