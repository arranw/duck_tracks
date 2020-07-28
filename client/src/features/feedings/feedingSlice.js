import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "Application/json"
  }
};

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
    },
    setFeeding: async (state, action) => {
      console.log(action.payload);

      state.feeding = {
        data: action.payload,
        loading: false
      };
    }
  }
});

export const { getFeedings, setFeeding } = feedingSlice.actions;

export default feedingSlice.reducer;

export const addFeeding = values => async dispatch => {
  const res = await axios.post("/api/feedings", values, config);

  dispatch(setFeeding(res.data));
};
