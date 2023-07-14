"use client";

import React from "react";
import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "../../components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";

type StepsSectionProps = {};

const StepsSection: React.FC<StepsSectionProps> = () => {
  const translation = useTranslations("stepsSection");
  const stepsData = [
    {
      id: 1,
      title: translation("register"),
      description: translation("registerDesc"),
    },
    {
      id: 2,
      title: translation("personalInfo"),
      description: translation("personalInfoDesc"),
    },
    {
      id: 3,
      title: translation("deposit"),
      description: translation("depositDesc"),
    },
    {
      id: 4,
      title: translation("trade"),
      description: translation("tradeDesc"),
    },
  ];

  return (
    <section className={`${CustomStyles.section} py-20 bg-gradient-to-t from-darkSecondary to-[#03273f]`}>
      <div className={`${CustomStyles.container}`}>
        <div className="mx-auto max-w-3xl text-center mt-12">
          <h2 className="text-[32px] font-extrabold leading-9 text-white sm:text-4xl">{translation("title")}</h2>
        </div>
        <ScrollAnimationWrapper className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-12">
          {stepsData.map((item) => (
            <motion.div
              key={item.id}
              custom={{ duration: item.id }}
              className="h-[190px] flex flex-row justify-start overflow-visible"
              variants={scrollAnimation}
            >
              <div className="text-[220px] leading-[190px] text-transparent bg-clip-text bg-gradient-to-t from-[#041a2f] to-[#043c62] font-bold">
                {item.id}
              </div>
              <div className={`h-full flex flex-col justify-start py-3`}>
                <h3 className="text-2xl xs:3xl md:text-2xl lg:text-xl font-extrabold text-primary">{item.title}</h3>
                <dd className="text-lg mt-4 xs:text-xl  sm:text-lg md:text-xl lg:text-base xl:text-lg font-light text-slate-400 ">
                  {item.description}
                </dd>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
};
export default StepsSection;
