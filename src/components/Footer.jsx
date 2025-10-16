  import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import ThemeContext from "../context/ThemeContext";
import  { useContext } from 'react'


const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <footer
        className={`w-full ${theme === "dark" ? "bg-gray-900" : "bg-white"} `}
      >
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://t4.ftcdn.net/jpg/16/79/52/79/360_F_1679527958_6idhl9MpGp5GcIeGYMzcFDV483NuEGaP.jpg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-blue-500">
                GlowUp Store
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to="About" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="product" className="hover:underline me-4 md:me-6">
                  Product
                </Link>
              </li>
              <li>
                <Link to="Contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 <Link to="/">GlowUp Store</Link>. All Rights Reserved.
          </span>
          <ul className="flex space-x-6 mt-3 justify-center text-gray-500 dark:text-gray-400">
            <Link to="https://www.facebook.com/leav.kimhok.1/">
              <FaFacebook />
            </Link>
            <Link to="https://www.linkedin.com/in/leav-kimhok-668336388/">
              <FaLinkedin />
            </Link>
            <Link to="https://www.instagram.com/">
              <FaInstagram />
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer