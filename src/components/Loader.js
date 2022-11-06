import React from 'react';
import { motion, useCycle } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
  animationTwo: {
    y: [0, -30],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

const divHoverVariants = {
  hover: {
    cursor: 'pointer',
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle('animationOne', 'animationTwo');
  return (
    <>
      <motion.div
        className='loader'
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <motion.div
        variants={divHoverVariants}
        whileHover='hover'
        onClick={() => cycleAnimation()}
      >
        Change loader
      </motion.div>
    </>
  );
};

export default Loader;
