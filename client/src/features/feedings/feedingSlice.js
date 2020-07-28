import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const feedingSlice = createSlice({
  name: "feeding",
  initialState: {
    feedings: {
      data: [],
      loading: true
    },
    feeding: {
      data: null,
      loading: true
    }
  },
  reducers: {
    getFeedings: async state => {
      state.feedings = {
        data: [],
        loading: true
      };

      const res = await axios.get("/api/feedings");

      state.feedings = {
        data: res.data,
        loading: false
      };
    }
  }
});
