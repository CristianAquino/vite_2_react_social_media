import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: JSON.parse(localStorage.getItem("token")),
    // token: null,
    loading: false,
    error: false,
    user: JSON.parse(localStorage.getItem("user")),
    // user: null,
  },
  reducers: {
    authStart: (state) => {
      return { ...state, loading: true, error: false };
    },
    authSuccess: (state, action) => {
      const { password, ...nuevo } = action.payload.user;
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      localStorage.setItem("user", JSON.stringify(nuevo));
      return {
        ...state,
        token: action.payload.token,
        user: nuevo,
        loading: false,
        error: false,
      };
    },
    authFail: (state) => {
      localStorage.clear();
      return { ...state, user: {}, loading: false, error: true };
    },
    fallowUser: (state, action) => {
      return {
        ...state,
        user: {
          ...state.user,
          fallowing: [...state.user.fallowing, action.data],
        },
      };
    },
    logOut: (state) => {
      localStorage.clear();
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

export const { authStart, authSuccess, authFail, logout } = authSlice.actions;
