import { useContext } from "react";
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { StoreContext } from "../store/StoreContext";
import { ShoppingCart } from "lucide-react";
import Products from "../pages/Product";
import ProductList from "../pages/productlist";

const Navbar = () => {
  const { totalItems } = useContext(StoreContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <nav
        className={`w-full ${theme === "dark" ? "bg-gray-900" : "bg-white"} `}
      >
        <div className="flex flex-wrap items-center justify-between px-4 py-3 w-full">
          {/* Logo + Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="https://t4.ftcdn.net/jpg/16/79/52/79/360_F_1679527958_6idhl9MpGp5GcIeGYMzcFDV483NuEGaP.jpg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue-500">
              GlowUp Store
            </span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
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

          {/* Navbar Links */}
          <div className="hidden w-full md:flex md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 md:mt-0 border rounded-lg md:border-0">
              <li>
                <button
                  onClick={toggleTheme}
                  className="text-2xl cursor-pointer "
                >
                  {theme === "light" ? <IoSunny /> : <MdDarkMode />}
                </button>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="About"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
                 <Link
                  to={`/productlist/${Products.id}`}
                  className="relative flex items-center hover:text-gray-300"
                >
                  <ShoppingCart size={22} />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-xs font-bold rounded-full px-1.5 py-0.5">
                      {totalItems}
                    </span>
                  )}
                </Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
