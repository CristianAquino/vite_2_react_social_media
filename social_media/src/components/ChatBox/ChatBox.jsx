import { useEffect } from "react";
import { useState } from "react";
import { createdMessage, getMessage } from "../../https/messageRequest";
import { getDataUserId } from "../../https/userRequest";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { AiOutlineSend } from "react-icons/ai";
import { useRef } from "react";

const ChatBox = ({
  chat,
  currentUser,
  setSendMessage,
  recieveMessage,
  token,
}) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");
  const refScroll = useRef();

  const messageSty =
    "bg-buttonBg text-white p-[0.7rem] rounded-[1rem_1rem_1rem_0rem] max-w-[28rem] w-fit flex flex-col gap-[0.5rem]";
  const ownSty = "self-end rounded-[1rem_1rem_0rem_1rem] bg-yourMessage";

  const handleChange = (newMessage) => {
    setNewMessages(newMessage);
  };

  // fetching data
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    if (chat) {
      getDataUserId(token, userId)
        .then((res) => {
          setUserData(res);
        })
        .catch((e) => console.log(e));
    }
  }, [chat, currentUser]);

  useEffect(() => {
    if (chat) {
      getMessage(token, chat.id)
        .then((res) => setMessages(res))
        .catch((e) => console.log(e));
    }
  }, [chat]);

  const handleSend = (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessages,
      chatId: chat.id,
    };

    // send message
    const receiverId = chat.members.find((id) => id !== currentUser);
    setSendMessage({ ...message, receiverId });

    createdMessage(token, message)
      .then((res) => {
        setMessages([...messages, res]);
        setNewMessages("");
      })
      .catch((e) => console.log(e));
  };

  const handleOnEnter = (text) => {
    const message = {
      senderId: currentUser,
      text: text,
      chatId: chat.id,
    };

    // send message
    const receiverId = chat.members.find((id) => id !== currentUser);
    setSendMessage({ ...message, receiverId });

    createdMessage(token, message)
      .then((res) => {
        setMessages([...messages, res]);
        setNewMessages("");
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    if (recieveMessage !== null && recieveMessage.chatId === chat.id) {
      setMessages([...messages, recieveMessage]);
    }
  }, [recieveMessage]);

  // scroll last message
  useEffect(() => {
    refScroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {/* chatbox container */}
      <div className="bg-cardColor rounded-[1rem] grid grid-rows-[14vh_60vh_13vh]">
        {chat ? (
          <>
            {/* chat header */}
            <div className="px-[1rem] pt-[1rem] pb-[0rem]">
              {/* follower */}
              <div className="flex justify-between items-center">
                <div className="relative flex gap-[10px]">
                  <img
                    src={
                      userData?.profilePicture
                        ? userData.profilePicture
                        : "https://raw.githubusercontent.com/ZainRk/SocialMedia-Starter/master/src/img/profileImg.jpg"
                    }
                    alt={userData?.username}
                    className="w-[50px] h-[50px] rounded-[50%]"
                  />
                  {/* name */}
                  <div className="flex flex-col items-start justify-center text-[0.8rem]">
                    <span className="font-bold">{userData?.username}</span>
                  </div>
                </div>
              </div>
              <hr className="w-[85%] border-[0.1px] border-[#ececec]" />
            </div>
            {/* chatbox Message */}
            {/* chat-body */}
            <div className="flex flex-col gap-[0.5rem] p-[1.5rem] overflow-scroll none-scroll">
              {messages.map((message) => (
                <div
                  ref={refScroll}
                  key={message.id}
                  className={
                    message.senderId === currentUser
                      ? `${messageSty} ${ownSty}`
                      : `${messageSty}`
                  }
                >
                  <span>{message.text}</span>
                  <span className="text-[0.7rem] self-end">
                    {format(message.createdAt)}
                  </span>
                </div>
              ))}
            </div>
            {/* chat-sender */}
            <div className="bg-white flex justify-between h-[3.5rem] items-center gap-[1rem] p-[0.8rem] rounded-[1rem] self-end">
              <div className="bg-[rgb(233,233,233)] rounded-[0.5rem] flex items-center justify-center font-bold cursor-pointer h-[100%] p-[0px_15px_0px_15px]">
                +
              </div>
              <InputEmoji
                value={newMessages}
                onChange={handleChange}
                cleanOnEnter
                maxLength={200}
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />
              {/* send-button */}
              <AiOutlineSend
                className="text-[1.5rem] absolute right-[64px] hover:cursor-pointer z-[10] hover:text-orange"
                onClick={handleSend}
              />
            </div>
          </>
        ) : (
          // chatbox empty message
          <span className="flex self-center justify-center text-[20px]">
            Tap on a Chat to Start Conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default ChatBox;
