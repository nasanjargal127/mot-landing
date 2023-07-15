"use client";

import React from "react";
import { SectionContainer } from "@/src/components/layout";
import { Button } from "@/src/components/ui/Buttons";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper, useLocalizeHref } from "@/src/components/utils";
import Image from "next/image";

type IntroSectionProps = {};

const IntroSection: React.FC<IntroSectionProps> = () => {
  const router = useRouter();
  const translation = useTranslations("featureSection");
  const localizeHref = useLocalizeHref();

  const featureData = [
    {
      title: translation("lowCommission"),
      desc: translation("lowCommissionDesc"),
      image: "/images/icons/lowCommission.png",
      link: localizeHref("/trade?nextpage=spread"),
    },
    {
      title: translation("fastestTrade"),
      desc: translation("fastestTradeDesc"),
      image: "/images/icons/fastExecution.png",
      link: localizeHref("/trade?nextpage=market"),
    },
    {
      title: translation("easistDepoWith"),
      desc: translation("easistDepoWithDesc"),
      image: "/images/icons/easyDeposit.png",
      link: "#transaction",
    },
    {
      title: translation("cryptoDepoWith"),
      desc: translation("cryptoDepoWithDesc"),
      image: "/images/icons/cryptoDeposit.png",
      link: "#transaction",
    },
    {
      title: translation("flexibleLeverage"),
      desc: translation("flexibleLeverageDesc"),
      image: "/images/icons/leverage.png",
      link: localizeHref("/trade?nextpage=accounts"),
    },
    {
      title: translation("tradingOptions"),
      desc: translation("tradingOptionsDesc"),
      image: "/images/icons/multipleTrading.png",
      link: localizeHref("/trade?nextpage=market"),
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
      <ScrollAnimationWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {featureData.map((item, idx) => (
          <motion.div
            key={idx}
            custom={{ duration: idx * 1.5 }}
            variants={scrollAnimation}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.35 },
            }}
            className="relative rounded-2xl shadow-md bg-[#F6F6F6] py-10 px-4 sm:p-10 text-sm leading-6 flex flex-col justify-between items-center"
          >
            <div className="flex justify-center items-center bg-gray-300 rounded-[20px] h-24 w-24">
              <Image width={60} height={60} src={item.image} alt="item" />
            </div>
            <h6 className="text-2xl text-customGray text-center font-extrabold my-3">{item.title}</h6>
            <blockquote className="text-customGray text-center text-base sm:text-lg font-light">
              <p>{item.desc}</p>
            </blockquote>
            <Button
              size={10}
              onClick={() => {
                router.push(item.link);
              }}
              isOutlined
              className={`${CustomStyles.animations.hoverScale} text-customGray text-base px-4 ring-primary mt-6`}
              // rightIcon={}
            >
              {translation("btnText")}
            </Button>
          </motion.div>
        ))}
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default IntroSection;
