import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  viewPortAmount?: number;
  className?: string;
}

const ScrollAnimationWrapper = ({ children, className, viewPortAmount = 0.15, ...props }: Props) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: viewPortAmount }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
