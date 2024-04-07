import { UserData } from "utils/firebase/firebase.utils";
import { createSlice } from "@reduxjs/toolkit";

export interface CurrentUser extends UserData {
  id: string;
}

export type UserState = {
  readonly currentUser: CurrentUser | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly isLoggedIn: boolean;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
    setIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    logout(state, action) {
      state.currentUser = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = false;
    },
    setError(state, action) {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
