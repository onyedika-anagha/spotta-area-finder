import { ReviewFormData, Reviews } from "utils/helper/helper";
import {
  ActionWithPayload,
  createAction,
  Action,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { REVIEW_ACTION_TYPES } from "./review.types";

export type SetReviews = ActionWithPayload<
  REVIEW_ACTION_TYPES.SET_REVIEWS,
  Reviews
>;

export interface AddReviewsData extends ReviewFormData {
  callback: () => void;
}

export type AddReview = ActionWithPayload<
  REVIEW_ACTION_TYPES.ADD_REVIEWS,
  AddReviewsData
>;
export const addReview = withMatcher(
  (formData: AddReviewsData): AddReview =>
    createAction(REVIEW_ACTION_TYPES.ADD_REVIEWS, formData)
);

export const setAllReviews = withMatcher((reviews: Reviews): SetReviews => {
  return createAction(REVIEW_ACTION_TYPES.SET_REVIEWS, reviews);
});

export type FetchAllReviews = Action<REVIEW_ACTION_TYPES.FETCH_REVIEWS>;

export const fetchAllReviews = withMatcher(
  (): FetchAllReviews => createAction(REVIEW_ACTION_TYPES.FETCH_REVIEWS)
);
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
