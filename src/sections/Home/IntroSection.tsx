"use client";

import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

type IntroSectionProps = {};

const IntroSection: React.FC<IntroSectionProps> = () => {
  const router = useRouter();
  const translation = useTranslations("featuresSection");

  const featureData = [
    {
      title: translation(""),
      desc: translation(""),
      items: ["", ""],
      image: "/images/icons/lowCommission.png",
    },
    {
      title: translation(""),
      desc: translation(""),
      image: "/images/icons/fastExecution.png",
    },
    {
      title: translation(""),
      desc: translation(""),
      image: "/images/icons/easyDeposit.png",
    },
    {
      title: translation(""),
      desc: translation(""),
      image: "/images/icons/cryptoDeposit.png",
    },
    {
      title: translation(""),
      desc: translation(""),
      image: "/images/icons/leverage.png",
    },
    {
      title: translation(""),
      desc: translation(""),
      image: "/images/icons/multipleTrading.png",
    },
  ];

  return (
    <section className={`${CustomStyles.section} bg-white py-16 sm:py-24`}>
      <div className={`${CustomStyles.container}`}></div>
    </section>
  );
};
export default IntroSection;
