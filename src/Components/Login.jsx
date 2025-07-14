import React, { useState } from "react";
import { Link } from "react-router";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [eye, seteye] = useState(false);
  const [error, seterror] = useState("");

  const handlelogin = (e) => {
    e.preventDefault();

    const password = e.target.password.value;

    const passcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    seterror("");

    if (passcheck.test(password) === false) {
      seterror(
        "Password must contain one Upperletter one Lowerletter and a digit"
      );
      return;
    }
  };
  return (
    <div className='xl:m-12  my-4 w-full xl:flex items-center flex-row  bg-[url("https://i.postimg.cc/PfWmVyCk/Rectangle-1.png")] bg-cover bg-center'>
      <div className=" border-amber-400 border-2 xl:w-1/2 bg-transparent w-full max-w-md mx-auto p-6  rounded shadow my-5">
        <form className="space-y-6" onSubmit={handlelogin}>
          <h1 className="font-semibold text-2xl text-center text-white">
            Login your account
          </h1>
          <p className="font-semibold text-base text-white text-center">
            Don't Have An Account?
            <Link to="registration" className="text-[#05AF2B] pl-2">
              Signup
            </Link>{" "}
          </p>

          <br></br>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="absolute left-3 bottom-3 size-4 z-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <input
              type="email"
              name="email"
              placeholder="   Email address"
              className="input  pl-7 bg-transparent w-full rounded-2xl focus:border-green-500 focus:bg-[#373f31] focus:border-2 z-2  text-white border-2 border-gray-700"
            />
          </div>

          <br></br>
          <div className=" flex relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="absolute left-2 bottom-3 size-4 z-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              type={eye ? "text" : "password"}
              name="password"
              className="input pl-7 bg-transparent pr-10 w-full rounded-2xl focus:border-green-500 focus:bg-[#373f31] focus:border-2 text-white border-2 border-gray-700"
              placeholder="    Password"
            />
            <button
              className="absolute right-2 top-2 "
              type="button"
              onClick={() => {
                seteye(!eye);
              }}
            >
              {eye ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <label className="label">
              <input
                type="checkbox"
                name="check"
                className="border-2 border-green-500  checkbox checkbox-success rounded-none"
              />
              <span className="font-semibold text-white ">Remember Me</span>
            </label>

            <span className="hover:text-sky-700 cursor-pointer text-white  hover:underline-offset-2">
              Forget Password?
            </span>
          </div>

          <br></br>

          <input
            type="submit"
            value="Login Now"
            className="rounded-2xl w-full text-white py-2 bg-green-500 "
          />

          <div>
            <span className="text-base text-red-500">{error ? error : ""}</span>
          </div>
        </form>
        <div className="flex w-full flex-col">
          <div className="divider text-gray-400">OR</div>

          <div className="grid grid-cols-3 gap-6">
            <button className="px-8 py-3 bg-white/10  text-white mx-auto text-2xl rounded-3xl">
              <FaFacebookF />
            </button>
            <button className="px-8 py-3 bg-white/10  text-white mx-auto text-2xl rounded-3xl">
              <FaApple />
            </button>
            <button className="px-8 py-3 bg-white/10  text-white mx-auto text-2xl rounded-3xl">
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
      <div className="xl:w-1/2 w-full relative border-amber-400 border-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="green"
          className="bg-[#1B1B1B]  top-8 right-8 size-8 rounded-full absolute"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>

        <img
          src="https://i.postimg.cc/vTx4BzdY/Subtract.png"
          alt=""
          className="mx-auto p-10"
        />
      </div>
    </div>
  );
};

export default Login;
