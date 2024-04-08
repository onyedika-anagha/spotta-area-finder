import logoImg from "assets/logo-nav.svg";
import logoImgDark from "assets/logo-nav-dark.svg";
import DarkModeToggle from "../toolkit/theme-toggle.component";
import { Link } from "react-router-dom";
import TopSearchBar from "./search.component";
import { useSelector } from "react-redux";
import { selectCurrentUser, selectIsLoggedIn } from "store/user/user.selector";
import ProfileBtn from "./profile-btn.component";

export const truncateEmail = (email = "") => {
  return (
    email.substring(0, 3) +
    "..." +
    email.substring(email.indexOf("@"), email.length)
  );
};
function Header() {
  const isLoggedIn = useSelector(selectIsLoggedIn),
    user = useSelector(selectCurrentUser);
  return (
    <header>
      <nav className="px-6 xl:px-24 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center">
              <img
                src={logoImg}
                className="mr-3 h-6 sm:h-9 dark:hidden"
                alt="Spotta Logo"
              />
              <img
                src={logoImgDark}
                className="mr-3 h-6 sm:h-9 hidden dark:block"
                alt="Spotta Logo"
              />
            </Link>
            {isLoggedIn && (
              <div
                className="items-center justify-between hidden md:flex md:w-auto md:order-1"
                id="navbar-cta">
                <TopSearchBar />
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 lg:order-2">
            {isLoggedIn && user != null ? (
              <div className="flex items-center gap-6">
                <span className="text-sm lg:text-md">Welcome!</span>
                <ProfileBtn user={user} />
              </div>
            ) : (
              <Link
                to="/login"
                className="text-primary-400 dark:text-primary-400 font-medium rounded-lg text-xs px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
                LOGIN
              </Link>
            )}
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
