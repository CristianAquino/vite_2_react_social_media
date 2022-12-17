import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getChat } from "../../https/chatRequest";
import Conversation from "../../components/Conversation/Conversation";
import Logo from "../../components/Logo/Logo";
import ChatBox from "../../components/ChatBox/ChatBox";
import {
  AiOutlineComment,
  AiFillHome,
  AiOutlineSetting,
  AiOutlineBell,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Chat = () => {
  const { token, user } = useSelector((state) => state.authSlice);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  useEffect(() => {
    getChat(token)
      .then((res) => setChats(res))
      .catch((e) => console.log(e));
  }, [user]);

  const handleCurrentChat = (chat) => {
    if (chat) {
      setCurrentChat(chat);
    }
  };

  return (
    // chat
    <div className="relative grid grid-cols-[18%_auto] gap-[1rem]">
      {/* left side */}
      <div className="flex flex-col gap-[1rem]">
        <Logo />
        {/* chat container */}
        <div className="flex flex-col gap-[1rem] bg-cardColor rounded-[1rem] p-[1rem] h-[87vh] overflow-scroll none-scroll">
          <h2 className="font-bold text-[24px]">Chats</h2>
          {/* chat list */}
          <div className="flex flex-col gap-[1rem]">
            {chats.map((chat) => (
              <div key={chat.id} onClick={() => handleCurrentChat(chat)}>
                <Conversation
                  data={chat}
                  currentUserId={user.id}
                  token={token}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col gap-[1rem]">
        <div className="w-[20rem] self-end">
          {/* navIcons */}
          <div className="flex text-[24px] mt-[1rem] mb-[5px] justify-between">
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
        </div>
        {/* chat body */}
        <ChatBox chat={currentChat} currentUser={user.id} token={token} />
      </div>
    </div>
  );
};

export default Chat;
