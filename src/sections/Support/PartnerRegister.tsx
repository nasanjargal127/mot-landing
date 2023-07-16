"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { useTranslations } from "next-intl";
import TitleContainer from "@/src/components/layout/TitleContainer";
import { CustomStyles } from "@/src/styles/styles";
import { useRouter } from "next/navigation";

type PartnerRegisterProps = {};

type PartnerRegisterItemProps = {
  title: string;
  desc: string;
  link: string;
};

const PartnerRegister: React.FC<PartnerRegisterProps> = () => {
  const translation = useTranslations("partnerRegister");

  const partnerRegisterData = [
    {
      title: translation("registerTitle"),
      desc: translation("registerDesc"),
      link: "https://portal.motforex.com",
    },
    {
      title: translation("sendRequest"),
      desc: translation("desc2"),
      link: "",
    },
    {
      title: translation("createLink"),
      desc: translation("desc3"),
      link: "",
    },
  ];

  return (
    <SectionContainer id="partner-register" sectionClassName="bg-white py-32">
      <ScrollAnimationWrapper viewPortAmount={0.2} className="w-full">
        <motion.div variants={scrollAnimation}>
          <TitleContainer className="sm:justify-center">
            <h3>{translation("title")}</h3>
          </TitleContainer>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {partnerRegisterData.map((item, idx) => (
            <PartnerRegisterCard key={idx} idx={idx} item={item} />
          ))}
        </div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default PartnerRegister;

type PartnerRegisterCardProps = {
  idx: number;
  item: PartnerRegisterItemProps;
};

function PartnerRegisterCard({ idx, item }: PartnerRegisterCardProps) {
  const router = useRouter();
  return (
    <motion.div
      onClick={() => router.push(item.link)}
      variants={scrollAnimation}
      custom={{ duration: (idx + 1) * 1.5 }}
      className={`${CustomStyles.card.roundedSilver} `}
    >
      <div>
        <div className="w-full flex">
          <div className="text-4xl h-14 w-14 bg-slate-300 flex justify-center items-center rounded-md font-extrabold text-customGray">
            {idx + 1}
          </div>
        </div>
        <h6 className="text-customGray my-6 text-2xl font-bold">{item.title}</h6>
        <p className="font-light text-customGray">{item.desc}</p>
      </div>
    </motion.div>
  );
}
