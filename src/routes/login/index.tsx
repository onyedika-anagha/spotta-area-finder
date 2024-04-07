import LoginForm from "components/login/login-form.component";
import googleIcon from "assets/google.svg";
import facebookIcon from "assets/facebook.svg";
import appleIcon from "assets/apple.svg";
import appleLightIcon from "assets/apple-light.svg";
import Image from "components/image/image.component";
import { SocialButton } from "components/button/button.component";
import { useDispatch, useSelector } from "react-redux";
import { googleSignInStart } from "store/user/user.action";
import { useEffect } from "react";
import { selectCurrentUser, selectIsLoggedIn } from "store/user/user.selector";
import { alertMessage } from "components/toolkit/initial-state.component";
import { REDIRECT_URI } from "utils/helper/states";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch(),
    navigate = useNavigate(),
    isLoggedIn = useSelector(selectIsLoggedIn),
    user = useSelector(selectCurrentUser);
  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
  };
  useEffect(() => {
    if (isLoggedIn && user != null) {
      alertMessage("info", "You are already signed in");

      const redirect = sessionStorage.getItem(REDIRECT_URI);
      const redirectURI = redirect == null ? "/places" : redirect;
      navigate(redirectURI);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn, user]);
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="w-full max-w-sm p-4 sm:p-6 md:p-8 card">
        <LoginForm />
        <div className="flex items-center my-6">
          <div className="flex-auto mt-px border-t border-primary-500/20 dark:border-slate-700" />
          <div className="mx-4 text-sm">Or</div>
          <div className="flex-auto mt-px border-t border-primary-500/20 dark:border-slate-700" />
        </div>

        <div className="space-y-2">
          <SocialButton onClick={logGoogleUser}>
            <>
              <Image
                src={googleIcon}
                alt="Google Icon"
              />
              Log in with Google
            </>
          </SocialButton>
          <SocialButton>
            <>
              <Image
                src={facebookIcon}
                alt="Facebook Icon"
              />
              Log in with Facebook
            </>
          </SocialButton>
          <SocialButton>
            <>
              <Image
                src={appleIcon}
                className="dark:hidden"
                alt="Apple Icon"
              />
              <Image
                src={appleLightIcon}
                className="hidden dark:block"
                alt="Apple Icon"
              />
              Log in with Apple
            </>
          </SocialButton>
        </div>

        <div className="space-y-2 mt-3">
          <div className="text-center">
            <a
              href="#!"
              className="text-center underline text-sm text-woodsmoke-700 dark:text-woodsmoke-100">
              Forgot your password?
            </a>
          </div>
          <div className="text-center text-sm font-400 text-gray-500 dark:text-gray-300">
            Don’t have an account?{" "}
            <a
              href="#!"
              className="text-blue-700 hover:underline dark:text-blue-500">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
