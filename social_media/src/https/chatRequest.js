import instance from "../base/settings/axios";

// create chat
export const chat = async (token, data) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "chat",
    data,
  });
  return result.data;
};

// get chat
export const getChat = async (token) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "chat",
  });
  return result.data;
};
