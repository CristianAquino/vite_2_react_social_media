import instance from "../base/settings/axios";

// get message
export const getMessage = async (token, chatId) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: `message/${chatId}`,
  });
  return result.data;
};

// create message
export const createdMessage = async (token, data) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "message",
    data,
  });
  return result.data;
};
