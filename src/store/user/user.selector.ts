import { createSelector } from "reselect";
import { RootState } from "../store";
import { UserState } from "./user.slice";

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.currentUser
);

export const selectIsLoggedIn = createSelector(
  [selectUserReducer],
  (user) => user.isLoggedIn
);

export const selectIsLoading = createSelector(
  [selectUserReducer],
  (user) => user.isLoading
);
