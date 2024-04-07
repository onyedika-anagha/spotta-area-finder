import logoImg from "assets/logo-nav.svg";
import logoImgDark from "assets/logo-nav-dark.svg";
import DarkModeToggle from "../toolkit/theme-toggle.component";
import { Link } from "react-router-dom";
import Image from "../image/image.component";

function Header() {
  return (
    <header>
      <nav className="px-6 xl:px-24 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a
            href="https://flowbite.com"
            className="flex items-center">
            <Image
              src={logoImg}
              className="mr-3 h-6 sm:h-9 dark:hidden"
              alt="Spotta Logo"
            />
            <Image
              src={logoImgDark}
              className="mr-3 h-6 sm:h-9 hidden dark:block"
              alt="Spotta Logo"
            />
          </a>
          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-primary-400 dark:text-primary-400 font-medium rounded-lg text-xs px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              LOGIN
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
