"use client";

import React from "react";
import { GrayContainer, SectionContainer } from "@/src/components/layout";
import { Button } from "@/src/components/ui/Buttons";
import { IconText } from "@/src/components/ui/IconText";
import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { cardVariants } from "@/src/constants/motion.variant";
import Image from "next/image";

type TransactionSectionProps = {};

const TransactionSection: React.FC<TransactionSectionProps> = () => {
  const router = useRouter();
  const translation = useTranslations("transactionSection");

  const paymentLogos = [
    "/images/logo/khan.png",
    "/images/logo/golomt.png",
    "/images/logo/bitcoin.png",
    "/images/logo/tether.png",
  ];

  return (
    <SectionContainer id="transaction" sectionClassName="py-28 bg-white">
      <GrayContainer className="py-12 px-2 lg:px-12 xl:justify-between">
        <div className="flex flex-col max-w-xl md:flex-1">
          <span className="flex flex-row flex-wrap">
            <h2 className={`${CustomStyles.text.title} text-customGray`}>{translation("titlePrefix")}</h2>
            <h2 className={`${CustomStyles.text.title} ${CustomStyles.text.gradient} pl-1.5`}>
              {translation("titleSuffix")}
            </h2>
          </span>
          <p className="text-customGray font-light my-8">{translation("description")}</p>
          <div className="flex gap-y-4 gap-x-10 flex-wrap justify-start">
            <IconText title={translation("item1")} />
            <IconText title={translation("item2")} />
            <IconText title={translation("item3")} />
          </div>
          <Button
            className={`" font-semibold mt-8 md:w-fit  px-5 ${CustomStyles.animations.hoverScale}`}
            onClick={() => router.push("https://portal.motforex.com/deposit")}
          >
            {translation("btnText")}
          </Button>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-8 md:flex-1 md:max-w-xs">
          {paymentLogos.map((item, idx) => {
            return <PaymentLogoItem img={item} custom={idx + 1} key={idx} />;
          })}
        </div>
      </GrayContainer>
    </SectionContainer>
  );
};
export default TransactionSection;

interface PaymentLogoItemProps {
  img: string;
  custom: number;
}

function PaymentLogoItem({ img, custom }: PaymentLogoItemProps) {
  return (
    <motion.div variants={cardVariants} custom={custom} className="flex items-center justify-center md:justify-end">
      <Image src={img} alt="Images" width={100} height={100} className="rounded-md sm:w-[120px] sm:h-[120px] " />
    </motion.div>
  );
}
