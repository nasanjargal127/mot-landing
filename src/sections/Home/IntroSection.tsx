"use client";

import { SectionContainer } from "@/src/components/layout";
import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

type IntroSectionProps = {};

const IntroSection: React.FC<IntroSectionProps> = () => {
  const router = useRouter();
  // const translation = useTranslations("");

  // const featureData = [
  //   {
  //     title: translation(""),
  //     desc: translation(""),
  //     items: ["", ""],
  //     image: "/images/icons/lowCommission.png",
  //   },
  //   {
  //     title: translation(""),
  //     desc: translation(""),
  //     image: "/images/icons/fastExecution.png",
  //   },
  //   {
  //     title: translation(""),
  //     desc: translation(""),
  //     image: "/images/icons/easyDeposit.png",
  //   },
  //   {
  //     title: translation(""),
  //     desc: translation(""),
  //     image: "/images/icons/cryptoDeposit.png",
  //   },
  //   {
  //     title: translation(""),
  //     desc: translation(""),
  //     image: "/images/icons/leverage.png",
  //   },
  //   {
  //     title: translation(""),
  //     desc: translation(""),
  //     image: "/images/icons/multipleTrading.png",
  //   },
  // ];

  return (
    <SectionContainer sectionClassName=" bg-white py-16 sm:py-24">
      <span>hi</span>
    </SectionContainer>
  );
};
export default IntroSection;
