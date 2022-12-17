import instance from "../base/settings/axios";

// get me data
export const getDataUser = async (token) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "user",
  });
  return result;
};

// get data for id
export const getDataUserId = async (token, id) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: `user/${id}`,
  });
  return result.data;
};

// update data
export const updateDataUser = async (token, data) => {
  let result = await instance({
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "user",
    data,
  });
  return result;
};

// get all user
export const getAllDataUser = async (token) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "user/all",
  });
  return result;
};

// follow users
export const followUsers = async (token, id) => {
  let result = await instance({
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: `user/${id}/follow`,
  });
  return result;
};
