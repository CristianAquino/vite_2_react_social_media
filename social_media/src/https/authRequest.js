import instance from "../base/settings/axios";

export const logIn = async (data) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: "auth/login",
    data,
  });
  return result.data;
};

export const signUp = async (data) => {
  let result = await instance({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    url: "auth/register",
    data,
  });
  return result.data;
};
