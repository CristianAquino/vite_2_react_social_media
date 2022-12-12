import { useState } from "react";
import ShareModal from "../ShareModal/ShareModal";
import TrendCard from "../TrendCard/TrendCard";
import {
  AiOutlineComment,
  AiFillHome,
  AiOutlineSetting,
  AiOutlineBell,
} from "react-icons/ai";

const RightSide = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    // rightSide
    <div className="flex flex-col gap-[2rem]">
      {/* navIcons */}
      <div className="flex text-[24px] mt-[1rem] justify-between">
        <AiFillHome className="cursor-pointer" />
        <AiOutlineSetting className="cursor-pointer" />
        <AiOutlineBell className="cursor-pointer" />
        <AiOutlineComment className="cursor-pointer" />
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
