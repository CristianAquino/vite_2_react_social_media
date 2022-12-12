import instance from "../base/settings/axios";

export const posts = async (data, token) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "post",
    data,
  });
  return result.data;
};

export const postsImage = async (data, token) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
    url: "post/upload",
    data,
  });
  return result.data;
};
