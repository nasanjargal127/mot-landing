"use client";

import React, { ReactNode } from "react";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { motion } from "framer-motion";
type GrayContainerProps = {
  className?: string;
  children?: ReactNode;
};

const GrayContainer: React.FC<GrayContainerProps> = ({ className, children }) => {
  return (
    <ScrollAnimationWrapper>
      <motion.div
        variants={scrollAnimation}
        className={`${className} bg-[#F6F6F6] rounded-lg flex flex-wrap lg:flex-nowrap items-center justify-center shadow-lg`}
      >
        {children}
      </motion.div>
    </ScrollAnimationWrapper>
  );
};
export default GrayContainer;
