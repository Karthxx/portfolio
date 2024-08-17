import { useState } from "react";
import Lottie from "lottie-react";
import K from "./assets/K Letter.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-5xl p-5 mx-auto">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-row items-center">
          <Lottie className="w-9" loop={true} animationData={K}></Lottie>
          <p className="text-lg font-extrabold">Karthik Ilamurugu Porchelvan</p>
        </div>

        {/* Hamburger Icon for Smaller Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-red-500 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center w-full md:w-auto`}
        >
          <p className="text-red-500 font-semibold mx-4">
            Web Developer | UX Engineer
          </p>
          <a className="mx-4" href="">
            Resume
          </a>
          <p className="mx-4">|</p>
          <button className="text-xs font-light uppercase bg-red-500 text-white px-6 py-3 my-2 tracking-wider">
            Hire Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
