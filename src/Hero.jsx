import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import K from "./assets/K Letter.json";

const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-4xl mt-24 md:mt-0 flex flex-col sm:flex-row">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className=" mx-auto md:w-4/5 flex flex-col justify-center items-start"
      >
        <motion.p
          className="text-4xl md:text-5xl font-bold my-4"
          variants={childVariants}
        >
          {` 👋🏽 Hello! I'm Karthik!`}
        </motion.p>
        <motion.h1
          className="text-base font-medium my-4"
          variants={childVariants}
        >
          A Software Engineer Specialising in JavaScript,
          <br />
          React, ExpressJS, and MongoDB.
        </motion.h1>
        <motion.button
          className="text-xs font-light uppercase bg-red-500 text-white px-6 py-3 my2"
          variants={childVariants}
        >
          {`Let's Talk`}
        </motion.button>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={childVariants}
        className=" w-3/4 mx-auto md:w-2/4 flex justify-center"
      >
        <Lottie loop={true} animationData={K} />
      </motion.div>
    </div>
  );
};

export default Hero;
