"use client";

import { SectionContainer } from "@/src/components/layout";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ScrollAnimationWrapper, useLocalizeHref } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { SlArrowRight } from "react-icons/sl";
import Image from "next/image";
import { IconText } from "@/src/components/ui/IconText";
import { CustomStyles } from "@/src/styles/styles";

type PlatformSectionProps = {};

const PlatformSection: React.FC<PlatformSectionProps> = () => {
  const [platform, setPlatform] = useState<boolean>(true);
  const router = useRouter();
  const localizeHref = useLocalizeHref();
  const translation = useTranslations("platformSection");

  return (
    <SectionContainer sectionClassName={CustomStyles.backgrounds.darkSection}>
      <ScrollAnimationWrapper className="grid grid-cols-1 gap-x-8 lg:gap-x-24  lg:max-w-none md:grid-cols-2 md:place-items-center ">
        <motion.div variants={scrollAnimation} className="flex flex-col justify-start items-start my-12">
          <div className={`${CustomStyles.text.title} flex flex-wrap`}>
            <h2 className="text-white">{translation("firstTitle")}</h2>
            <h2 className={`${CustomStyles.text.gradient} pl-1.5`}>{translation("secondTitle")}</h2>
          </div>
          <div className="py-6 md:py-8 text-base text-slate-100">{translation("description")}</div>
          <div className="w-full">
            <div className="grid grid-cols-2 gap-y-3 pb-8 flex-wrap justify-center items-center ">
              <IconText title="Web Browser" color="white" />
              <IconText title="Windows" color="white" />
              <IconText title="MAC" color="white" />
              <IconText title="IOS" color="white" />
              <IconText title="Android" color="white" />
            </div>
            <div className="grid grid-cols-1 gap-4 xs:gap-2 sm:gap-4 xs:grid-cols-2">
              <PlatformButton
                onMouseEnter={() => setPlatform(true)}
                onClick={() => router.push(localizeHref("/platform?nextpage=mt5"))}
                text="MetaTrader 5"
                image="/images/logo/mt5.png"
              />
              <PlatformButton
                onMouseEnter={() => setPlatform(false)}
                onClick={() => router.push(localizeHref("/platform?nextpage=ctrader"))}
                text="cTrader"
                image="/images/logo/ctrader.png"
              />
            </div>
          </div>
        </motion.div>
        <motion.div variants={scrollAnimation} custom={{ duration: 4 }} className="relative">
          <Image
            className="rounded-md w-full h-full"
            src="/images/decoration/backBanner.png"
            alt="App screenshot"
            width={0}
            height={0}
            sizes="100vw"
          />
          {platform ? (
            <>
              <PlatformImage laptopImg="/images/decoration/laptopMt5.png" phoneImg="/images/decoration/phoneMt5.png" />
            </>
          ) : (
            <></>
          )}
          {!platform ? (
            <PlatformImage
              laptopImg="/images/decoration/laptopCtrader.png"
              phoneImg="/images/decoration/phoneCtrader.png"
            />
          ) : (
            <></>
          )}
        </motion.div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default PlatformSection;

interface PlatformButtonProps {
  onMouseEnter: () => void;
  onClick: () => void;
  text: string;
  image: string;
}

function PlatformButton({ onMouseEnter, onClick, text, image }: PlatformButtonProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className="flex w-full items-center justify-between ring-1 rounded-[18px] p-3 flex-1 xs:flex-grow-0 ring-customGray hover:bg-customGray cursor-pointer group"
    >
      <div className="flex">
        <Image src={image} width={28} height={28} alt="PlatformIcon" className="lg:inline" />
        <p className="text-lg font-semibold leading-8 md:text-sm lg:text-lg lg:inline text-white ml-4">{text}</p>
      </div>
      <SlArrowRight className="h-6 w-6 ml-2 text-primary rounded-full p-1 group-hover:translate-x-1 duration-300" />
    </div>
  );
}

function PlatformImage({ laptopImg, phoneImg }: { laptopImg: string; phoneImg: string }) {
  return (
    <>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className="absolute rounded-md w-4/5 sm:w-full h-full top-0 ml-16 xs:ml-24 md:ml-8 lg:ml-12 xl:ml-20 pt-20 sm:pt-20 md:pt-12 lg:pt-16 pb-4"
      >
        <img className="w-full" src={laptopImg} alt="App screenshot" />
      </motion.div>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.4,
        }}
        className="absolute rounded-md w-4/5 sm:w-full h-full top-0 ml-16 xs:ml-24 md:ml-8 lg:ml-12 xl:ml-20 pt-12 sm:pt-20 md:pt-12 lg:pt-16 pb-4"
      >
        <img className="rounded-md h-full sm:h-[80%] lg:h-full mt-4 sm:mt-20" src={phoneImg} alt="App screenshot" />
      </motion.div>
    </>
  );
}
