import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { SetReviews, setAllReviews } from "./review.action";
import { reviewActions } from "./review.slice";
import { REVIEW_ACTION_TYPES } from "./review.types";
import { addReview, getAllReviews } from "utils/firebase/firebase.utils";

export function* fetchReviewsAsync() {
  try {
    const data = yield* call(getAllReviews);
    if (data !== null) {
      yield* put(setAllReviews(data));
    }
  } catch (error) {
    console.log(error as Error);
  }
}
// getAllReviews
export function* setReviews({ payload: reviews }: SetReviews) {
  try {
    yield* put(reviewActions.setAllReviews(reviews));
    console.log(reviews);
  } catch (error) {
    console.log(error as Error);
  }
}

export function* onFetchReviews() {
  yield* takeLatest(REVIEW_ACTION_TYPES.FETCH_REVIEWS, fetchReviewsAsync);
}
export function* onSetReviews() {
  yield* takeLatest(REVIEW_ACTION_TYPES.SET_REVIEWS, setReviews);
}

export function* reviewsSaga() {
  yield* all([call(onFetchReviews), call(onSetReviews)]);
}
