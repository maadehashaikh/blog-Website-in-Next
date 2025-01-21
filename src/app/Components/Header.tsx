import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl">Daily Thoughts</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/"
            className="mr-5 text-black font-semibold hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mr-5 text-black font-semibold hover:text-gray-900"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="mr-5 text-black font-semibold hover:text-gray-900"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="mr-5 text-black font-semibold hover:text-gray-900"
          >
            Contact
          </Link>
        </nav>
        <button className="inline-flex items-center text-black font-semibold bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Sign Up / Login
        </button>
      </div>
    </header>
  );
};

export default Header;
