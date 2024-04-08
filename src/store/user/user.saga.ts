import { AuthError, AuthErrorCodes, User } from "firebase/auth";
import { all, takeLatest, put, call } from "typed-redux-saga/macro";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

import {
  signInFailed,
  signUpFailed,
  signUpSuccess,
  signOutFailed,
  signOutSuccess,
  EmailSignInStart,
  UserSignUpStart,
  SignUpSuccess,
} from "./user.action";

import { USER_ACTION_TYPES } from "./user.types";
import { alertMessage } from "components/toolkit/initial-state.component";
import { userActions } from "./user.slice";

export function* getSnapshotFromUserAuth(
  userAuth: User
  //additionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth
      // additionalInformation
    );
    // console.log(userSnapshot);
    if (userSnapshot) {
      console.log(userSnapshot.data());
      yield* put(
        userActions.setCurrentUser({
          id: userSnapshot.id,
          ...userSnapshot.data(),
        })
      );
      yield* put(userActions.setIsLoggedIn(true));
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  } finally {
    yield* put(userActions.setIsLoading(false));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}
export function* signInWithEmailAndPassord({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    yield* put(userActions.setIsLoading(true));
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );

    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    } else {
      alertMessage("error", "Sorry, An error occured!");
    }
  } catch (error) {
    console.log("error logging user", error);
    switch ((error as AuthError).code) {
      case AuthErrorCodes.INVALID_PASSWORD:
        alertMessage("error", "Incorrect password");
        break;
      case AuthErrorCodes.USER_DELETED:
        alertMessage("error", "no user associated with this email");
        break;
      case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
        alertMessage("error", "Sorry, We don not recognize this credentials!");
        break;

      default:
        alertMessage("error", "Sorry, An error occured!");
        break;
    }
    yield* put(userActions.setIsLoading(false));
  }
}

export function* userSignUp({
  payload: { email, password, displayName },
}: UserSignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      const userData = {
        ...user,
        displayName,
      };
      yield* call(getSnapshotFromUserAuth, userData);
      yield* put(signUpSuccess(userData));
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signInAfterSignUp({ payload: user }: SignUpSuccess) {
  try {
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* onEmailSignInStart() {
  yield* takeLatest(
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    signInWithEmailAndPassord
  );
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.USER_SIGN_UP_START, userSignUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
