import instance from "../base/settings/axios";

// get data
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
