import { takeLatest, all, call, put } from "typed-redux-saga/macro";
import {
  AddReview,
  SetReviews,
  fetchAllReviews,
  setAllReviews,
} from "./review.action";
import { reviewActions } from "./review.slice";
import { REVIEW_ACTION_TYPES } from "./review.types";
import { addReview, getAllReviews } from "utils/firebase/firebase.utils";
import { userActions } from "store/user/user.slice";
import { alertMessage } from "components/toolkit/initial-state.component";

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
export function* addReviewToDB({ payload: formData }: AddReview) {
  // console.log(payload);
  const { callback, ...newObj } = formData;
  try {
    yield put(userActions.setIsLoading(true));
    const addCall = yield* call(addReview, newObj);
    if (addCall != null && addCall) {
      callback();
      alertMessage("success", "Review submitted");
      yield* put(fetchAllReviews());
    }
    yield* put(userActions.setIsLoading(false));
  } catch (error) {
    yield* put(userActions.setIsLoading(false));
    alertMessage("error", "Sorry, an error occurred");
    console.log(error);
  }
}
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
export function* onAddReview() {
  yield* takeLatest(REVIEW_ACTION_TYPES.ADD_REVIEWS, addReviewToDB);
}

export function* reviewsSaga() {
  yield* all([call(onFetchReviews), call(onSetReviews), call(onAddReview)]);
}
