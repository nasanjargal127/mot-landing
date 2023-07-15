"use client";

import React, { ReactNode } from "react";
import { SectionContainer } from "@/src/components/layout";
import { CustomStyles } from "@/src/styles/styles";
import { motion } from "framer-motion";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { useTranslations } from "next-intl";
import { Button } from "@/src/components/ui/Buttons";
import { scrollAnimation } from "@/src/constants/motion.variant";
import Image from "next/image";
type LiveAccountSectionProps = {};

const LiveAccountSection: React.FC<LiveAccountSectionProps> = () => {
  const translation = useTranslations("liveAccounts");

  return (
    <SectionContainer sectionClassName={CustomStyles.backgrounds.darkSection}>
      <ScrollAnimationWrapper className="mx-auto w-full flex gap-12 flex-wrap justify-center sm:justify-between items-center">
        <motion.div variants={scrollAnimation} className="lg:max-w-lg lg:flex-1">
          <div className={`${CustomStyles.text.title} text-white flex flex-wrap`}>
            <h2 className={`${CustomStyles.text.gradient}`}>{translation("titlePrefix")}</h2>
            <h2 className="pl-1.5">{translation("titleSuffix")}</h2>
          </div>
          <p className="my-8 leading-7 text-gray-300">{translation("description")}</p>
          <div className="mt-6 flex max-w-md gap-x-4">
            <Button>{translation("registerBtnText")}</Button>
          </div>
        </motion.div>
        <motion.div
          variants={scrollAnimation}
          className="flex flex-col sm:flex-row justify-center lg:pt-2 gap-8 w-full lg:flex-1 items-center "
        >
          <AccountCard
            idx={1}
            img="/images/pic/pro.jpg"
            name={translation("proAcc")}
            platform="MT5, cTrader"
            commision="5"
            spread="Starts from 0.0"
          />
          <AccountCard
            idx={2}
            img="/images/pic/standard.jpg"
            name={translation("standardAcc")}
            platform="MT5"
            commision="0"
            spread="Starts from 0.3"
          />
        </motion.div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default LiveAccountSection;

interface AccountCardProps {
  idx: number;
  img: string;
  name: string;
  commision: string;
  spread: string;
  platform?: string;
  link?: string;
}

function AccountCard({ idx, img, name, commision, spread, platform, link }: AccountCardProps) {
  const translation = useTranslations("liveAccounts");
  const variants = {
    hover: {
      y: -10,
      boxShadow:
        " 0 0 10px rgba(255, 162, 51, 0.2), 0 0 20px rgba(255, 162, 51, 0.2), 0 0 30px rgba(255, 162, 51, 0.2), 0 0 40px rgba(255, 162, 51, 0.2)",
    },
    rest: {
      y: 0,
      boxShadow: "0px 0px 0px rgba(255, 162, 51, 0.0)",
    },
  };

  return (
    <motion.div
      custom={{ duration: idx * 2 }}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className={
        `max-w-sm border-[2px] rounded-2xl overflow-hidden flex-1 ` +
        (idx % 2 !== 0 ? " border-primary" : " border-darkText ")
      }
      transition={{ duration: 0.35 }}
      variants={variants}
    >
      <Image src={img} alt="item" width={560} height={180} sizes="100%" className="object-fit" />
      <div className="flex flex-col mx-8 my-6">
        <div className="text-white text-center text-[28px] font-bold z-10 mb-2">{name}</div>
        <div className="my-3 border-t border-white/10  lg:flex lg:items-center lg:justify-between " />
        <InfoRows>
          <p className="font-bold text-slate-300">{translation("platform")}:</p>
          <p className="text-slate-100">{platform}</p>
        </InfoRows>
        <InfoRows>
          <p className="font-bold text-slate-300">{translation("commission")}:</p>
          <p className="text-slate-100">{commision} $</p>
        </InfoRows>
        <InfoRows>
          <p className="font-bold text-slate-300">{translation("spread")}:</p>
          <p className="text-slate-100">{spread}</p>
        </InfoRows>
        <div className="my-3 border-t border-white/10  lg:flex lg:items-center lg:justify-between " />
        <Button className={`${CustomStyles.animations.hoverScale} mt-2`}>{translation("btnText")}</Button>
      </div>
    </motion.div>
  );
}

function InfoRows({ children }: { children: ReactNode }) {
  return <div className="flex w-full justify-between my-2">{children}</div>;
}
