import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: false,
    myPosts: [],
  },
  reducers: {
    postsStart: (state) => {
      return { ...state, loading: true, error: false };
    },
    postsSuccess: (state, action) => {
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
        error: false,
      };
    },
    postInitial: (state, action) => {
      return {
        ...state,
        posts: [...action.payload],
      };
    },
    myPosts: (state, action) => {
      return {
        ...state,
        myPosts: [action.payload, ...state.myPosts],
      };
    },
    postsFail: (state) => {
      return { ...state, loading: false, error: true };
    },
  },
});

export default postsSlice.reducer;

export const { postsStart, postsSuccess, postsFail, postInitial, myPosts } =
  postsSlice.actions;
