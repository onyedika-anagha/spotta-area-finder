import { setTheme } from "store/theme/theme.action";
import { selectTheme } from "store/theme/theme.selector";
import { THEME_KEY } from "utils/helper/states";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { fetchAllReviews } from "store/reviews/review.action";

export const alertMessage = (type: string, msg: string) => {
  const theme =
    localStorage.theme != null
      ? localStorage.theme
      : window.matchMedia("(prefers-color-scheme: dark)")
      ? "dark"
      : "light";
  const toastC =
    type === "error"
      ? toast.error
      : type === "info"
      ? toast.info
      : type === "success"
      ? toast.success
      : type === "warn"
      ? toast.warn
      : toast;
  toastC(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: theme,
  });
};

const InitialState = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  // siteInfo = useSelector(selectInfo)

  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    if (
      localTheme == null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      dispatch(setTheme("dark"));
    }
    dispatch(fetchAllReviews());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // console.log(theme);
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme, dispatch]);
  return <></>;
};

export default InitialState;
