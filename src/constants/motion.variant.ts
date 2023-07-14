import { Variants } from "framer-motion";

export const scrollAnimation = {
  offscreen: {
    y: 150,
    opacity: 0,
  },
  onscreen: ({ duration = 1.5 } = {}) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration,
    },
  }),
};

export const cardVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0.1,
      ease: "easeIn",
      delay: custom * 0.1,
    },
  }),
};
