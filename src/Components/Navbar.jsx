import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className='bg-[url("https://i.postimg.cc/PfWmVyCk/Rectangle-1.png")] bg-cover bg-center h-84 z-0 relative'>
      <img
        src="https://i.postimg.cc/15yDkFFV/Ellipse-5.png"
        alt="dot"
        className="absolute xl:left-0 -top-6 z-0  xl:w-148 w-80 xl:h-82  "
      />
      <img
        src="https://i.postimg.cc/Hn9XJYqL/Star-2.png"
        alt="star"
        className="absolute xl:right-140 right-20 bottom-6 w-32 h-32 z-0"
      />

      <nav className=" max-w-7xl mx-auto  flex flex-col justify-center  pt-10 z-50">
        {/* Top row: logo & auth links */}
        <div className="  flex items-center justify-between text-white mb-5  xl:px-0 px-2">
          <div className="flex items-center">
            <div className="flex items-center relative z-50">
              <Link to="/">
                <img
                  src="https://i.postimg.cc/SspGjvnD/image-1.png"
                  alt=""
                  className="xl:w-58 w-35 mr-5 cursor-pointer"
                />
              </Link>
            </div>

            <button className="border-green-500 flex p-2 border-2 font-semibold text-base text-green-500 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="green"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              Categories
            </button>
          </div>

          <div className="flex gap-6 items-center">
            <div className="bg-white/10 p-2 w-60 rounded-2xl hidden xl:block">
              <select className="bg-[#373f31] w-30 backdrop-blur border border-white/30 text-white px-4 py-2 rounded-md text-sm">
                <option>Freelencer</option>
                <option>UI/UX Designer</option>
                <option>Backend Developer</option>
              </select>
            </div>
            <Link
              to="/login"
              className="text-sm hover:underline text-[#05AF2B] hidden xl:block"
            >
              Become a Seller
            </Link>
            <Link to="/authentication">Login</Link>
            <Link
              to="/authentication/registration"
              className="bg-green-500 hover:bg-green-600 px-4 py-2 text-white rounded-3xl text-sm font-medium hidden xl:block"
            >
              Registration
            </Link>
          </div>
        </div>
        <hr className=" border-0.6 border-gray-800"></hr>

        <div className="  mt-6 xl:flex flex-row items-center gap-3 max-w-3xl w-full">
          {/* Combined Dropdown + Input Box */}
          <div className="flex xl:ml-0 ml-1 xl:w-120 w-100  p-2 rounded-lg overflow-hidden shadow-sm bg-[#373f31]">
            {/* Input */}
            <input
              type="text"
              placeholder="Search Your Needs"
              className="flex-grow px-4 py-2 text-sm text-gray-300 focus:outline-none"
            />
            {/* Dropdown */}
            <select className="bg-transparent text-sm text-white xl:px-4 py-2  focus:outline-none">
              <option>Web Developer</option>
              <option>UI/UX Designer</option>
              <option>Backend Developer</option>
            </select>
            <button className="bg-green-500 xl:ml-2 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
          {/* Outer Button */}
          <button className="bg-green-500 xl:mt-0 mt-2  hover:bg-green-600 text-white px-5 py-4 rounded-3xl text-sm font-semibold">
            Advanced Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
