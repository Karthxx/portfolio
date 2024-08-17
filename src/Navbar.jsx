import Lottie from "lottie-react";
import K from "./assets/K Letter.json";
const Navbar = () => {
  return (
    <div className="max-w-5xl p-5 mx-auto">
      <div className=" w-full flex items-center flex-grow justify-between">
        <div className=" flex flex-row items-center">
          <Lottie className="w-9" loop={true} animationData={K}></Lottie>
          <p className="text-lg font-extrabold">Karthik Ilamurugu Porchelvan</p>
        </div>
        <div className="flex items-center">
          <p className="text-red-500 font-semibold mx-4">
            Web Developer | UX Engineer
          </p>
          <a className="mx-4" href="">
            Resume
          </a>
          <p className="mx-4">|</p>
          <button className="text-xs font-light uppercase bg-red-500 text-white px-6 py-3 my2 tracking-wider">
            Hire Me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
