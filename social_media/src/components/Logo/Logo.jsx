import { FaTwitter, FaSearch } from "react-icons/fa";

const Logo = () => {
  return (
    // logo
    <div className="flex gap-[0.75rem]">
      <FaTwitter className="text-orange text-[47px]" />
      {/* search */}
      <div className="flex rounded-[10px] p-[5px] bg-hrColor">
        <input
          type="text"
          placeholder="#Explore"
          className="bg-transparent border-none outline-none"
        />
        {/* s-icon */}
        <div className="flex items-center justify-center rounded-[5px] p-[4px] bg-orange text-white hover:cursor-pointer">
          <FaSearch className="text-[24px]" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
