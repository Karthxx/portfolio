import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import JavaScript from "./assets/logos/js.svg";
import ReactJS from "./assets/logos/react.svg";
import TailwindCss from "./assets/logos/tailwindcss.webp";
import mongoDB from "./assets/logos/mongodb.png";
import HTML from "./assets/logos/html.svg";
import CSS from "./assets/logos/css.svg";

const Specialisation = () => {
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
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className="text-lg font-bold text-center"
          variants={childVariants}
        >
          Specialisation
        </motion.h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-6 gap-12 my-10 items-center"
        >
          <motion.img
            className="w-10 h-10"
            src={HTML}
            alt=""
            variants={childVariants}
          />
          <motion.img
            className="w-10 h-10"
            src={CSS}
            alt=""
            variants={childVariants}
          />
          <motion.img
            className="w-10 h-10"
            src={JavaScript}
            alt=""
            variants={childVariants}
          />
          <motion.img
            className="w-10 h-10"
            src={ReactJS}
            alt=""
            variants={childVariants}
          />
          <motion.img
            className="w-10 h-10"
            src={TailwindCss}
            alt=""
            variants={childVariants}
          />
          <motion.img
            className="w-10 h-10"
            src={mongoDB}
            alt=""
            variants={childVariants}
          />
        </motion.div>
        <motion.div
          className="flex flex-row mt-20"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div className="px-6 text-center" variants={childVariants}>
            <span className="text-red-500 text-4xl font-bold mb-2">2+</span>
            <p className="mt-4 font-semibold">Years of Experience</p>
          </motion.div>
          <motion.div className="px-6 text-center" variants={childVariants}>
            <span className="text-red-500 text-4xl font-bold mb-2">98%</span>
            <p className="mt-4 font-semibold">Project Delivered on Time</p>
          </motion.div>
          <motion.div className="px-6 text-center" variants={childVariants}>
            <span className="text-red-500 text-4xl font-bold mb-2">97%</span>
            <p className="mt-4 font-semibold">Positive Feedback</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Specialisation;
