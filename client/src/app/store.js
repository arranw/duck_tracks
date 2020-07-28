import { configureStore } from "@reduxjs/toolkit";
import feedingReducer from "../features/feedings/feedingSlice";

export default configureStore({
  reducer: {
    feeding: feedingReducer
  }
});
