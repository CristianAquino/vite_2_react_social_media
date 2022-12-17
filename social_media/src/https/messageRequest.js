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
