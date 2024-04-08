import { all, call } from "typed-redux-saga/macro";
import { reviewsSaga } from "./reviews/review.saga";
import { userSagas } from "./user/user.saga";

export function* rootSaga() {
  yield* all([call(reviewsSaga), call(userSagas)]);
}
