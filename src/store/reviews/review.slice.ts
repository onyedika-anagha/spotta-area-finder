import { createSlice } from "@reduxjs/toolkit";
import { Reviews } from "utils/helper/helper";

export type ReviewState = {
  readonly all: Reviews | null;
};

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    all: null,
  },
  reducers: {
    setAllReviews(state, action) {
      state.all = action.payload;
    },
  },
});

export const reviewActions = reviewSlice.actions;
export default reviewSlice;
