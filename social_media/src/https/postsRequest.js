import instance from "../base/settings/axios";

// create posts
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

// upload posts
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

// get all posts
export const getAllPosts = async (token) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "post/all",
  });
  return result;
};

// get posts
export const getPosts = async (token) => {
  let result = await instance({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: "post",
  });
  return result;
};

// like posts
export const likePosts = async (token, id) => {
  let result = await instance({
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    url: `post/${id}/like`,
  });
  return result;
};
