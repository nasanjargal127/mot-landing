"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { cardVariants, scrollAnimation } from "@/src/constants/motion.variant";
import { useTranslations } from "next-intl";
import TitleContainer from "@/src/components/layout/TitleContainer";
import { CustomStyles } from "@/src/styles/styles";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { PiComputerTowerFill } from "react-icons/pi";

type MarketSectionProps = {};

type MarketInfoProps = {
  title: string;
  desc: string;
  img: string;
  pairNums: string;
  accounts: string;
};

const MarketSection: React.FC<MarketSectionProps> = () => {
  const translation = useTranslations("marketSection");

  const marketItemData: MarketInfoProps[] = [
    {
      title: translation("fxTitle"),
      desc: translation("fxDesc"),
      img: "/images/icons/forexTrading.svg",
      pairNums: translation("fxPairNums"),
      accounts: translation("fxAccounts"),
    },
    {
      title: translation("cfdTitle"),
      desc: translation("cfdDesc"),
      img: "/images/icons/stockCFD.svg",
      pairNums: translation("cfdPairNums"),
      accounts: translation("cfdAccounts"),
    },
    {
      title: translation("commoditiesTitle"),
      desc: translation("commoditiesDesc"),
      img: "/images/icons/commodities.svg",
      pairNums: translation("commoditiesPairNums"),
      accounts: translation("commoditiesAccounts"),
    },
    {
      title: translation("equityIndicesTitle"),
      desc: translation("equityIndicesDesc"),
      img: "/images/icons/equityIndices.svg",
      pairNums: translation("equityIndicesPairNums"),
      accounts: translation("equityIndicesAccounts"),
    },
    {
      title: translation("metalsTitle"),
      desc: translation("metalsDesc"),
      img: "/images/icons/metal.svg",
      pairNums: translation("metalsPairNums"),
      accounts: translation("metalsAccounts"),
    },
    {
      title: translation("cryptosTitle"),
      desc: translation("cryptosDesc"),
      img: "/images/icons/crypto.svg",
      pairNums: translation("cryptosPairNums"),
      accounts: translation("cryptosAccounts"),
    },
  ];

  return (
    <SectionContainer id="market" sectionClassName=" py-32 bg-white ">
      <ScrollAnimationWrapper className="w-full" viewPortAmount={0.1}>
        <motion.div variants={scrollAnimation}>
          <TitleContainer className="md:justify-center">
            <h3 className="xl:text-5xl">{translation("titlePrefix")}</h3>
            <h3 className={`${CustomStyles.text.gradient} xl:text-5xl pl-1.2 xn:pl-2`}>{translation("titleSuffix")}</h3>
          </TitleContainer>
        </motion.div>
        <motion.div variants={cardVariants} custom={1} className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24">
          {marketItemData.map((item, idx) => (
            <MarketInfoCard key={idx} item={item} idx={idx} />
          ))}
        </motion.div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default MarketSection;

type MarketInfoCardProps = {
  item: MarketInfoProps;
  idx: number;
};

const variants = {
  hover: {
    y: 10,
    boxShadow:
      "0 0 10px rgba(128, 128, 128, 0.1), 0 0 20px rgba(128, 128, 128, 0.1), 0 0 30px rgba(128, 128, 128, 0.1), 0 0 40px rgba(128, 128, 128, 0.1)",
  },
  rest: {
    y: 0,
    boxShadow: "0px 0px 0px rgba(128, 128, 128, 0.2)",
  },
};

function MarketInfoCard({ item, idx }: MarketInfoCardProps) {
  return (
    <motion.div
      variants={variants}
      custom={{ duration: idx * 1.5 }}
      whileHover="hover"
      initial="rest"
      animate="rest"
      transition={{ duration: 0.35 }}
      className={`${CustomStyles.card.roundedSilver} h-[528px] xs:h-96`}
    >
      <div className="flex justify-center items-center bg-gray-300 rounded-xl h-20 w-20 group">
        <img src={item.img} alt="item" className="w-12 h-14" />
      </div>
      <h3 className="text-customGray group-hover:text-primary text-2xl font-black mt-8 md:mt-4">{item.title}</h3>
      <p className="text-customGray font-light my-4">{item.desc}</p>
      <div className="w-full h-[2px] bg-slate-200 rounde-full lg:flex lg:items-center lg:justify-between" />
      <div className="flex mt-4 gap-4">
        <div className="flex items-center">
          <PiComputerTowerFill size={25} className="text-primary" />
          <p className="text-customGray text-sm font-semibold ml-1"> {item.accounts}</p>
        </div>
        <div className="flex items-center">
          <RiMoneyDollarCircleFill size={27} className="text-primary" />
          <p className="text-customGray text-sm font-semibold ml-1"> {item.pairNums}</p>
        </div>
      </div>
      <div></div>
    </motion.div>
  );
}
