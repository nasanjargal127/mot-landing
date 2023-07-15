"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";

type DemoAccountProps = {};

const DemoAccount: React.FC<DemoAccountProps> = () => {
  return (
    <SectionContainer>
      <ScrollAnimationWrapper className="">
        <motion.div variants={scrollAnimation}></motion.div>
        <motion.div variants={scrollAnimation}></motion.div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default DemoAccount;
