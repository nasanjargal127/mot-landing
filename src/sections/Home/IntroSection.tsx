"use client";

import React from "react";
import { SectionContainer } from "@/src/components/layout";
import { Button } from "@/src/components/ui/Buttons";
import { cardVariants } from "@/src/constants/motion.variant";
import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type IntroSectionProps = {};

const IntroSection: React.FC<IntroSectionProps> = () => {
  const router = useRouter();
  const translation = useTranslations("featureSection");

  const featureData = [
    {
      title: translation("lowCommission"),
      desc: translation("lowCommissionDesc"),
      image: "/images/icons/lowCommission.png",
    },
    {
      title: translation("fastestTrade"),
      desc: translation("fastestTradeDesc"),
      image: "/images/icons/fastExecution.png",
    },
    {
      title: translation("easistDepoWith"),
      desc: translation("easistDepoWithDesc"),
      image: "/images/icons/easyDeposit.png",
    },
    {
      title: translation("cryptoDepoWith"),
      desc: translation("cryptoDepoWithDesc"),
      image: "/images/icons/cryptoDeposit.png",
    },
    {
      title: translation("flexibleLeverage"),
      desc: translation("flexibleLeverageDesc"),
      image: "/images/icons/leverage.png",
    },
    {
      title: translation("tradingOptions"),
      desc: translation("tradingOptionsDesc"),
      image: "/images/icons/multipleTrading.png",
    },
  ];

  return (
    <SectionContainer sectionClassName=" bg-white py-28 ">
      <div className="mx-auto max-w-5xl text-center">
        <div
          className={`text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight text-customGray flex text-center gap-3 justify-center`}
        >
          {translation("title")}
          <p className={`text-3xl font-extrabold sm:text-4xl lg:text-5xl text-center text-primary`}>
            {translation("motfx")}
          </p>
          {translation("gej")}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {featureData.map((testimonial, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            className="relative rounded-2xl bg-[#F6F6F6] py-10 px-4 sm:p-10 text-sm leading-6 flex flex-col justify-between items-center"
          >
            <div className="flex justify-center items-center bg-gray-300 rounded-[20px] p-3">
              <img className="w-[60px] text-mainColor" src={testimonial.image} alt="testimonial" />
            </div>
            <h6 className="text-2xl text-customGray text-center font-extrabold my-3">{testimonial.title}</h6>
            <blockquote className="text-customGray text-center text-base sm:text-lg font-light">
              <p>{testimonial.desc}</p>
            </blockquote>
            <Button
              size={10}
              onClick={() => router.push("/trade?nextpage=market")}
              isOutlined
              className={`${CustomStyles.animations.hoverScale} text-customGray text-lg px-4 ring-primary mt-6`}
              // rightIcon={}
            >
              {translation("btnText")}
            </Button>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};
export default IntroSection;
