import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: JSON.parse(sessionStorage.getItem("token")),
    // token: null,
    loading: false,
    error: false,
    user: JSON.parse(sessionStorage.getItem("user")),
    // user: null,
  },
  reducers: {
    authStart: (state) => {
      return { ...state, loading: true, error: false };
    },
    authSuccess: (state, action) => {
      const { password, ...nuevo } = action.payload.user;
      sessionStorage.setItem("token", JSON.stringify(action.payload.token));
      sessionStorage.setItem("user", JSON.stringify(nuevo));
      return {
        ...state,
        token: action.payload.token,
        user: nuevo,
        loading: false,
        error: false,
      };
    },
    authFail: (state) => {
      sessionStorage.clear();
      return { ...state, user: {}, loading: false, error: true };
    },
    fallowUser: (state, action) => {
      const a = {
        ...state.user,
        following: [...state.user.following, action.payload],
      };
      sessionStorage.setItem("user", JSON.stringify(a));
      return {
        ...state,
        user: {
          ...state.user,
          following: [...state.user.following, action.payload],
        },
      };
    },
    unFallowUser: (state, action) => {
      const b = {
        ...state.user,
        following: [
          ...state.user.following.filter((id) => id !== action.payload),
        ],
      };
      sessionStorage.setItem("user", JSON.stringify(b));
      return {
        ...state,
        user: {
          ...state.user,
          following: [
            ...state.user.following.filter((id) => id !== action.payload),
          ],
        },
      };
    },
    updateSuccess: (state, action) => {
      const data = action.payload;
      sessionStorage.setItem("user", JSON.stringify(data));
      return {
        ...state,
        user: { ...state.user, ...data },
        loading: false,
        error: false,
      };
    },
    logOut: (state) => {
      sessionStorage.clear();
      return {
        ...state,
        token: null,
        user: {},
        loading: false,
        error: false,
        updateLoading: false,
      };
    },
  },
});

export default authSlice.reducer;

export const {
  authStart,
  authSuccess,
  authFail,
  fallowUser,
  unFallowUser,
  updateSuccess,
  logOut,
} = authSlice.actions;
