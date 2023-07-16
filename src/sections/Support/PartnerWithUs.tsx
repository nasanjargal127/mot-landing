"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { useTranslations } from "next-intl";
import TitleContainer from "@/src/components/layout/TitleContainer";
import { CustomStyles } from "@/src/styles/styles";

type PartnerWithUsProps = {};

const PartnerWithUs: React.FC<PartnerWithUsProps> = () => {
  const translation = useTranslations("partnerWithUs");

  const partnerWithUsData = [translation("part1"), translation("part2"), translation("part3")];

  return (
    <SectionContainer id="partner-with-us" sectionClassName="bg-silver py-32">
      <ScrollAnimationWrapper className="w-full">
        <motion.div variants={scrollAnimation} className="flex flex-col">
          <TitleContainer className="sm:justify-center">
            <h3 className={`${CustomStyles.text.title}`}>{translation("title")}</h3>
          </TitleContainer>
          {partnerWithUsData.map((item, idx) => (
            <p key={idx} className="text-customGray text-lg font-light mt-8">
              {item}
            </p>
          ))}
        </motion.div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default PartnerWithUs;
