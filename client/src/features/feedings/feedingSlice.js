import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "Application/json"
  }
};

export const addFeeding = createAsyncThunk("feeding/addFeeding", async values => {
  const res = await axios.post("/api/feedings", values, config);

  return res.data;
});

export const getFeeding = createAsyncThunk("feeding/getFeeding", async id => {
  const res = await axios.get(`/api/feedings/${id}`);

  return res.data;
});

export const getAllFeedings = createAsyncThunk("feeding/getAllFeedings", async id => {
  const res = await axios.get(`/api/feedings/`);

  return res.data;
});

export const feedingSlice = createSlice({
  name: "feeding",
  initialState: {
    feedings: {
      data: [],
      loading: true
    },
    feeding: {
      data: null,
      loading: true,
      adding: false
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
  },
  extraReducers: {
    [addFeeding.pending]: state => {
      state.feeding.adding = true;
    },
    [addFeeding.fulfilled]: state => {
      state.feeding.adding = false;
    },
    [getFeeding.pending]: state => {
      state.feeding.data = null;
      state.feeding.loading = true;
    },
    [getFeeding.fulfilled]: (state, action) => {
      state.feeding.data = action.payload;
      state.feeding.loading = false;
    },
    [getAllFeedings.pending]: state => {
      state.feedings.data = null;
      state.feedings.loading = true;
    },
    [getAllFeedings.fulfilled]: (state, action) => {
      state.feedings.data = action.payload;
      state.feedings.loading = false;
    }
  }
});

export const { getFeedings, setFeeding } = feedingSlice.actions;

export default feedingSlice.reducer;
