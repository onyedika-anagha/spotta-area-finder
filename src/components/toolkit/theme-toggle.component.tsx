"use client";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import { THEME_KEY } from "utils/helper/states";
import { selectTheme } from "store/theme/theme.selector";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "store/theme/theme.action";

const DarkModeToggle = () => {
  const theme = useSelector(selectTheme),
    dispatch = useDispatch(),
    switchTheme = () => {
      const mode = theme === "dark" ? "light" : "dark";
      dispatch(setTheme(mode));
      localStorage.setItem(THEME_KEY, mode);
    };
  return (
    <button onClick={switchTheme}>
      {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
    </button>
  );
};

export default DarkModeToggle;
