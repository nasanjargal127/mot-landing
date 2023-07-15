"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { cardVariants, scrollAnimation } from "@/src/constants/motion.variant";
import { useTranslations } from "next-intl";
import { URL_BROKER_LOGIN } from "@/src/constants/path";
import { CustomStyles } from "@/src/styles/styles";
import { Button } from "@/src/components/ui/Buttons";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "next/image";

type AccountDetailsProps = {};

type AccountDetItemProps = {
  title: string;
  desc: string;
  pairs: string;
  img: string;
  platform: string;
  spread: string;
  price: string;
  link: string;
  isMain: boolean;
};

const AccountDetails: React.FC<AccountDetailsProps> = () => {
  const translation = useTranslations("accountDetails");

  const accountItemData: AccountDetItemProps[] = [
    {
      title: translation("demoTitle"),
      desc: translation("demoDesc"),
      pairs: translation("demoPairs"),
      img: "/images/pic/standard.jpg",
      platform: translation("demoPlatform"),
      spread: translation("demoSpread"),
      price: translation("demoPrice"),
      link: URL_BROKER_LOGIN,
      isMain: false,
    },
    {
      title: translation("proTitle"),
      desc: translation("proDesc"),
      pairs: translation("proPairs"),
      img: "/images/pic/pro.jpg",
      platform: translation("proPlatform"),
      spread: translation("proSpread"),
      price: translation("proPrice"),
      link: URL_BROKER_LOGIN,
      isMain: true,
    },
    {
      title: translation("standardTitle"),
      desc: translation("standardDesc"),
      pairs: translation("standardPairs"),
      img: "/images/pic/standard.jpg",
      platform: translation("standardPlatform"),
      spread: translation("standardSpread"),
      price: translation("standardPrice"),
      link: URL_BROKER_LOGIN,
      isMain: false,
    },
  ];

  return (
    <SectionContainer id="account-detail" sectionClassName={`${CustomStyles.backgrounds.darkSection} py-32`}>
      <ScrollAnimationWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-4">
        {accountItemData.map((item, idx) => (
          <AccountDetailCard key={idx} idx={idx} item={item} />
        ))}
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default AccountDetails;

type AccountDetailCardProps = {
  idx: number;
  item: AccountDetItemProps;
};

function AccountDetailCard({ idx, item }: AccountDetailCardProps) {
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
        `w-full border-[2px] rounded-2xl overflow-hidden flex-1 ` +
        (idx % 2 !== 0 ? " border-primary" : " border-darkText ")
      }
      transition={{ duration: 0.35 }}
      variants={variants}
    >
      <Image src={item.img} alt="item" width={560} height={180} sizes="100%" className="object-fit" />
      <div className="flex flex-col mx-8 my-6">
        <div className="text-center">
          <h3 className="text-white text-center text-3xl font-bold z-10 mb-2">{item.title}</h3>
          <p className="text-slate-400">{item.desc}</p>
        </div>
        <div className="my-3 border-t border-white/10  lg:flex lg:items-center lg:justify-between " />
        <div className="flex flex-col my-4 gap-3">
          <InfoRows>
            <BsFillCheckCircleFill className="text-primary mr-2" />
            <p className="text-slate-300 font-bold mr-2">Platform:</p>
            <p className="text-slate-500">{item.platform}</p>
          </InfoRows>
          <InfoRows>
            <BsFillCheckCircleFill className="text-primary mr-2" />
            <p className="text-slate-300 font-bold mr-2">Trading pairs:</p>
            <p className="text-slate-500">{item.pairs}</p>
          </InfoRows>
          <InfoRows>
            <BsFillCheckCircleFill className="text-primary mr-2" />
            <p className="text-slate-300 font-bold mr-2">Spread:</p>
            <p className="text-slate-500">{item.spread}</p>
          </InfoRows>
        </div>

        <div className="my-3 border-t border-white/10  lg:flex lg:items-center lg:justify-between " />
        <Button className={`${CustomStyles.animations.hoverScale} mt-2`}>{item.price}</Button>
      </div>
    </motion.div>
  );
}

function InfoRows({ children }: { children: ReactNode }) {
  return <div className="flex w-full items-center ml-4">{children}</div>;
}
