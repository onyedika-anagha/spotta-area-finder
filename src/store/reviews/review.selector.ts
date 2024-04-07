import { createSelector } from "reselect";
import { RootState } from "../store";
import { ReviewState } from "./market.slice";

const selectAllReviews = (state: RootState): ReviewState => state.reviews;

export const selectReviews = createSelector(
  [selectAllReviews],
  (reviews) => reviews.all
);
