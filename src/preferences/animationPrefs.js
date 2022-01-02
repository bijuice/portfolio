export const routeAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
  },
};

export const cardAnimation = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

export const buttonAnimation = {
  hover: {
    scale: 1.2,
  },
};
