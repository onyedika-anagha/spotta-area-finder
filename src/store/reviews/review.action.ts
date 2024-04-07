import { Reviews } from "utils/helper/helper";
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { REVIEW_ACTION_TYPES } from "./review.types";

export type SetReviews = ActionWithPayload<
  REVIEW_ACTION_TYPES.SET_REVIEWS,
  Reviews
>;

export const setAllReviews = withMatcher((data: Reviews): SetReviews => {
  return createAction(REVIEW_ACTION_TYPES.SET_REVIEWS, data);
});

export const fetchReviews = async () => {
  try {
    const submit = await fetch("/reviews.json");
    const res = await submit.json();
    return res;
  } catch (error) {
    console.log(error);

    throw new Error("Sorry an error occured");
  }
};
