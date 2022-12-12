import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    loading: false,
    error: false,
  },
  reducers: {
    postsStart: (state) => {
      return { ...state, loading: true, error: false };
    },
    postsSuccess: (state, action) => {
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
        error: false,
      };
    },
    postsFail: (state) => {
      return { ...state, loading: false, error: true };
    },
  },
});

export default postsSlice.reducer;

export const { postsStart, postsSuccess, postsFail } = postsSlice.actions;
