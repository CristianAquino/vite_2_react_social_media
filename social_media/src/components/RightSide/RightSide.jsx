import { useState } from "react";
import ShareModal from "../ShareModal/ShareModal";
import TrendCard from "../TrendCard/TrendCard";
import {
  AiOutlineComment,
  AiFillHome,
  AiOutlineSetting,
  AiOutlineBell,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const RightSide = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    // rightSide
    <div className="flex flex-col gap-[2rem]">
      {/* navIcons */}
      <div className="flex text-[24px] mt-[1rem] justify-between">
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#f48915" } : {})}
          to="/home"
        >
          <AiFillHome className="cursor-pointer" />
        </NavLink>
        <AiOutlineSetting className="cursor-pointer" />
        <AiOutlineBell className="cursor-pointer" />
        <NavLink
          style={({ isActive }) => (isActive ? { color: "#f48915" } : {})}
          to="/chat"
        >
          <AiOutlineComment className="cursor-pointer" />
        </NavLink>
      </div>
      <TrendCard />
      <button
        className="flex items-center justify-center text-white border-none rounded-[0.5rem] bg-buttonBg h-[2rem] px-[20px] hover:cursor-pointer "
        onClick={() => setModalOpen(true)}
      >
        Share
      </button>
      <ShareModal modalOpened={modalOpen} setModalOpened={setModalOpen} />
    </div>
  );
};

export default RightSide;
