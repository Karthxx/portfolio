import { useState } from "react";
import Lottie from "lottie-react";
import K from "./assets/K Letter.json";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="max-w-5xl py-4 px-1 mx-auto relative">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-row items-center">
          <Lottie className="w-9" loop={true} animationData={K}></Lottie>
          <p className="text-lg font-extrabold">Karthik Ilamurugu Porchelvan</p>
        </div>

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

        <div className="hidden md:flex items-center">
          <p className="text-red-500 font-semibold mx-4">UX Designer</p>
          <a
            className="mx-4"
            href="https://drive.google.com/file/d/1wA72cbyJcDfELg3vKSaiKU61honn3v_I/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <p className="mx-4">|</p>
          <button className="text-xs font-light uppercase bg-red-500 text-white px-6 py-3 my-2 tracking-wider">
            Hire Me!
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 z-50">
          <div className="flex flex-col items-center justify-center p-4 space-y-4">
            <p className="text-red-500 font-semibold">UX Designer</p>
            <a
              href="https://drive.google.com/file/d/1wA72cbyJcDfELg3vKSaiKU61honn3v_I/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              Resume
            </a>
            <div className="w-full border-t border-gray-200"></div>
            <button className="text-xs font-light uppercase bg-red-500 text-white px-6 py-3 tracking-wider">
              Hire Me!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
