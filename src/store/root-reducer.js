import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme.reducer";
import reviewSlice from "./reviews/review.slice";
import userSlice from "./user/user.slice";

export const rootReducer = combineReducers({
  theme: themeReducer,
  reviews: reviewSlice.reducer,
  user: userSlice.reducer,
});
