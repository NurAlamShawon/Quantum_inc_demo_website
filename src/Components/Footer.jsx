import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=' xl:px-0 px-1 pt-16 pb-8 xl:h-180 h-400 bg-[url("https://i.postimg.cc/PfWmVyCk/Rectangle-1.png")] bg-cover bg-center relative'>
      <img
        src="https://i.postimg.cc/HkrnR0p2/Ellipse-21.png"
        alt="dot"
        className="absolute left-25 bottom-10 z-1  xl:w-100 w-50 xl:h-102"
      />
      <div className="  max-w-7xl mx-auto  xl:flex flex-row items-center mb-12">
        <div className="xl:w-153 xl:mr-55">
          {" "}
          <h1 className="font-semibold text-3xl text-[#CCCCCC]">
            Reach Your Requirement Goals Right on Schedule
          </h1>
        </div>
        <div className="xl:w-140 space-y-4">
          <p className="text-sm text-[#CCCCCC]">
            Sign up, complete your profile, and start browsing projects. Submit
            proposals and communicate with clients to get hired.
          </p>
          <button className="bg-green-500  hover:bg-green-600 text-white px-3 py-2 rounded-3xl text-sm font-semibold">
            Get Started
          </button>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto  grid xl:grid-cols-4 grid-cols-1 ">
        <div className=" border-t-1 border-gray-800 pt-11 pb-22">
          <Link to="/" className="cursor-pointer">
            <img src="https://i.postimg.cc/SspGjvnD/image-1.png" alt="" />
          </Link>
        </div>

        <div className="pl-28 border-t-1 border-gray-800 pt-11 pb-22">
          <h4 className="font-semibold mb-3 text-[#CCCCCC]">About</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>How It Works</li>
            <li>Partnership</li>
          </ul>
        </div>

        <div className="pl-28 border-1  border-gray-800 pt-11 pb-22">
          <h4 className="font-semibold mb-3 text-[#CCCCCC]">Categories</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Web Development</li>
            <li>Design & Creative</li>
            <li>Programming & IT</li>
          </ul>
        </div>

        <div className="pl-28  border-b-1 border-t-1 border-gray-800 pt-11 pb-22">
          <h4 className="font-semibold mb-3 text-[#CCCCCC]">Support</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Help & Support</li>
            <li>Contact Us</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <h1 className="text-xl font-semibold text-white text-center my-5">
        Our Popular Posts
      </h1>

      <div className=" xl:flex flex-row items-center justify-between max-w-7xl mx-auto my-10">
        <div className="flex items-center">
          <FaFacebook className="text-4xl rounded-full p-1 text-white bg-green-500 mr-3 " />
          <FaInstagram className="text-4xl rounded-full p-1 text-white mr-3" />
          <FaTwitter className="text-4xl rounded-full p-1 text-white" />
        </div>

        <div className="xl:flex flex-row items-center">
          <div className="flex items-center xl:w-80 xl:mt-0 mt-2">
            <div>
              <img
                src="https://i.postimg.cc/pTZTNq3m/Rectangle-50.png"
                alt=""
                className="h-full w-full mr-3"
              />
            </div>

            <div className="ml-2">
              <h1 className="text-xs font-medium text-[#CCCCCC]">
                November 7, 2024
              </h1>
              <h1 className="text-sm font-semibold text-[#CCCCCC]">
                Unveils the Best Canadian Cities for Biking
              </h1>
            </div>
          </div>

          <div className="flex items-center xl:w-80 xl:mt-0 mt-2">
            <div>
              <img
                src="https://i.postimg.cc/pTZTNq3m/Rectangle-50.png"
                alt=""
                className="h-full w-full mr-3"
              />
            </div>

            <div className="ml-2">
              <h1 className="text-xs font-medium text-[#CCCCCC]">
                November 7, 2024
              </h1>
              <h1 className="text-sm font-semibold text-[#CCCCCC]">
                Unveils the Best Canadian Cities for Biking
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        &copy; QuantumEdge Software Inc. 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
