"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
type AccountDetailsProps = {};

const AccountDetails: React.FC<AccountDetailsProps> = () => {
  return (
    <SectionContainer id="account-detail" sectionClassName="bg-silver py-32">
      <ScrollAnimationWrapper className="">
        <motion.div variants={scrollAnimation}></motion.div>
        <motion.div variants={scrollAnimation}></motion.div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default AccountDetails;
