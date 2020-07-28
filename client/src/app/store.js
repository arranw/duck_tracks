import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import feedingReducer from "../features/feedings/feedingSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    feeding: feedingReducer
  }
});
