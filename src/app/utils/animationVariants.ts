import { Variants } from "framer-motion";

const wrapperVariants: Variants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants: Variants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants: Variants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};

const boxVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerParentVariant: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.5, duration: 1 },
  },
};

const staggerChildrenVariant: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, stiffness: 300 } },
};

export {
  wrapperVariants,
  iconVariants,
  itemVariants,
  actionIconVariants,
  boxVariants,
  staggerParentVariant,
  staggerChildrenVariant,
};
