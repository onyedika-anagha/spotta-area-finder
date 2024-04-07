import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import { REVIEW_ACTION_TYPES } from "./review.types";
import { fetchReviews, setAllReviews } from "./review.action";

export function* fetchReviewsAsync() {
  try {
    const data = yield* call(fetchReviews);
    yield* put(setAllReviews(data));
  } catch (error) {
    console.log(error as Error);
  }
}

export function* onFetchReviews() {
  yield* takeLatest(REVIEW_ACTION_TYPES.FETCH_REVIEWS, fetchReviewsAsync);
}

export function* reviewsSaga() {
  yield* all([call(onFetchReviews)]);
}
