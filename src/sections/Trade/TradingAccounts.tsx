"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper, useLocalizeHref } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { useTranslations } from "next-intl";
import { CustomStyles } from "@/src/styles/styles";
import { Button } from "@/src/components/ui/Buttons";
import { useRouter } from "next/navigation";
import TitleContainer from "@/src/components/layout/TitleContainer";

type TradingAccountsProps = {};

type TradingAccountCardProps = {
  title: string;
  desc: string;
  img: string;
};

const TradingAccounts: React.FC<TradingAccountsProps> = () => {
  const translation = useTranslations("tradingAccounts");

  const tradingAccountsData: TradingAccountCardProps[] = [
    {
      title: translation("mt5StandardTitle"),
      desc: translation("mt5StandardDesc"),
      img: "/images/logo/mt5.png",
    },
    {
      title: translation("mt5ProTitle"),
      desc: translation("mt5ProDesc"),
      img: "/images/logo/mt5.png",
    },
    {
      title: translation("ctraderProTitle"),
      desc: translation("ctraderProDesc"),
      img: "/images/logo/ctrader.png",
    },
  ];

  return (
    <SectionContainer id="trading-accounts" sectionClassName="bg-white py-32">
      <ScrollAnimationWrapper className="">
        <motion.div variants={scrollAnimation} className="mx-auto max-w-5xl md:text-center">
          <TitleContainer className="md:justify-center">
            <h3 className="xl:text-5xl">{translation("titlePrefix")}</h3>
            <h3 className={`${CustomStyles.text.gradient} xl:text-5xl xn:pl-1.5`}>{translation("titleSuffix")}</h3>
          </TitleContainer>
          <p className="text-customGray my-6">{translation("titleDesc")}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {tradingAccountsData.map((item, idx) => (
            <TradingAccountCard key={idx} item={item} idx={idx} btnText={translation("btnText")} />
          ))}
        </div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default TradingAccounts;

function TradingAccountCard({ item, idx, btnText }: { item: TradingAccountCardProps; idx: number; btnText: string }) {
  const router = useRouter();

  return (
    <motion.div
      custom={{ duration: (idx + 1) * 1.5 }}
      variants={scrollAnimation}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.35 },
      }}
      className={CustomStyles.card.roundedSilver}
    >
      <div className="text-3xl font-extrabold text-customGray my-6">{item.title}</div>
      <blockquote className="text-customGray text-lg sm:text-base xl:text-lg font-light mt-3 h-28 ">
        <p>{item.desc}</p>
      </blockquote>
      <Button
        isOutlined
        className={`${CustomStyles.animations.hoverScale} ring-primary px-6 text-customGray font-medium text-base mt-12`}
        onClick={() => router.push("#account-table")}
      >
        {btnText}
      </Button>
    </motion.div>
  );
}
