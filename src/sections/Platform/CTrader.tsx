"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { useTranslations } from "next-intl";
import { CustomStyles } from "@/src/styles/styles";
import { IconText } from "@/src/components/ui/IconText";
import { Button } from "@/src/components/ui/Buttons";

type CTraderProps = {};

const CTrader: React.FC<CTraderProps> = () => {
  const translation = useTranslations("cTrader");

  return (
    <SectionContainer id="cTrader" sectionClassName="bg-white py-32">
      <ScrollAnimationWrapper className="md:pt-24 grid grid-cols-1 lg:grid-cols-2 md:gap-x-10 lg:gap-x-16 pt-10 px-6 lg:pt-0 place-items-center">
        <motion.div variants={scrollAnimation} className="relative pb-10  place-items-center">
          <img
            className="rounded-xl min-w-full h-full"
            src="/images/decoration/platformCtrader.png"
            alt="App screenshot"
          />
        </motion.div>
        <motion.div
          variants={scrollAnimation}
          className="mx-auto max-w-[624px] text-center lg:mx-0 lg:flex-auto  lg:text-left pb-14"
        >
          <h2 className={`${CustomStyles.text.title} xl:text-5xl tracking-tight text-gray-900`}>
            {translation("title")}
          </h2>
          <p className="text-customGray font-light mt-12">{translation("desc")}</p>
          <div className="mx-2 sm:mx-0 flex flex-col gap-[14px] items-left mt-[38px]">
            <IconText title={translation("feature1")} />
            <IconText title={translation("feature2")} />
            <IconText title={translation("feature3")} />
            <IconText title={translation("feature4")} />
            <IconText title={translation("feature5")} />
            <IconText title={translation("feature6")} />
            <IconText title={translation("feature7")} />
          </div>
          <div className="flex items-center justify-center gap-x-6 lg:justify-start text-customGray mt-16">
            <Button isOutlined size={10} className="px-10 ring-primary font-semibold ">
              <img src="/images/logo/apple.png" className="h-4 mr-2" alt="app store" />
              Apple
            </Button>
            <Button isOutlined size={10} className="px-6 ring-primary font-semibold ">
              <img src="/images/logo/google.png" className="h-4 mr-2" alt="play store" />
              Google Play
            </Button>
          </div>
        </motion.div>{" "}
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default CTrader;
