import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import postsSlice from "./slice/postsSlice";

export default configureStore({
  reducer: {
    authSlice,
    postsSlice,
  },
});
