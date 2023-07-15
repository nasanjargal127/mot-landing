"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
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
      <ScrollAnimationWrapper className="w-full">
        <motion.div variants={scrollAnimation}>
          <TitleContainer className="md:justify-center">
            <h3 className="xl:text-5xl">{translation("titlePrefix")}</h3>
            <h3 className={`${CustomStyles.text.gradient} xl:text-5xl xn:pl-2`}>{translation("titleSuffix")}</h3>
          </TitleContainer>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mt-12">
          {marketItemData.map((item, idx) => (
            <MarketInfoCard key={idx} item={item} idx={idx} />
          ))}
        </div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default MarketSection;

type MarketInfoCardProps = {
  item: MarketInfoProps;
  idx: number;
};

function MarketInfoCard({ item, idx }: MarketInfoCardProps) {
  return (
    <motion.div
      variants={scrollAnimation}
      custom={{ duration: idx * 1.5 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.35 },
      }}
      className={`${CustomStyles.card.roundedSilver} h-96`}
    >
      <div className="flex justify-center items-center bg-gray-300 rounded-xl h-24 w-24 group">
        <img src={item.img} alt="item" className="w-14 h-16" />
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
