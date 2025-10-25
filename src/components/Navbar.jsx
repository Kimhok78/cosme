import { useContext } from "react";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { StoreContext } from "../store/StoreContext";
import { ShoppingCart } from "lucide-react";
import Products from "../pages/Product";

const Navbar = () => {
  const { totalItems } = useContext(StoreContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`w-full ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      } shadow`}
    >
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        {/* Logo + Brand */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://t4.ftcdn.net/jpg/16/79/52/79/360_F_1679527958_6idhl9MpGp5GcIeGYMzcFDV483NuEGaP.jpg"
            className="h-8 w-8 object-cover"
            alt="Logo"
          />
          <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400">
            GlowUp Store
          </span>
        </Link>

        {/* Right side nav links */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li>
            <button onClick={toggleTheme} className="text-2xl cursor-pointer">
              {theme === "light" ? <IoSunny /> : <MdDarkMode />}
            </button>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Product
            </Link>
          </li>
          <li className="flex items-center space-x-3">
            <Link
              to="/contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Contact
            </Link>
            <Link
              to={`/productlist/${Products.id}`}
              className="relative flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-500 text-xs font-bold rounded-full px-1.5 py-0.5 text-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="md:hidden p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
