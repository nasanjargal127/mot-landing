"use client";

import React from "react";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { motion } from "framer-motion";
import { scrollAnimation } from "@/src/constants/motion.variant";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { URL_BROKER_REGISTER } from "@/src/constants/path";
import { useRouter } from "next/navigation";

type HelpCenterProps = {};

const HelpCenter: React.FC<HelpCenterProps> = () => {
  const translation = useTranslations("helpCenter");
  const router = useRouter();
  return (
    <SectionContainer id="help-center" sectionClassName="bg-white py-32" divClassname="">
      <ScrollAnimationWrapper className="flex flex-wrap gap-6 md:gap-12">
        <motion.div variants={scrollAnimation} className="sm:flex-1">
          <Image
            src={"/images/banner-mobile/contactUs.jpg"}
            width={520}
            height={300}
            className="object-cover w-full h-[350px] rounded-lg"
            alt="helpCenterImage"
          />
        </motion.div>
        <motion.div variants={scrollAnimation} className="sm:flex-1 text-left flex flex-col justify-center">
          <h1 className="text-3xl mt-5 sm:mt-0 font-bold tracking-tight text-customGray sm:text-4xl ">
            {translation("title")}
          </h1>
          <p className=" my-4 sm:my-8 text-sm sm:text-base leading-5 sm:leading-6 text-customGray text-gray50 ">
            {translation("desc")}
          </p>
          <button
            onClick={() => router.push(URL_BROKER_REGISTER)}
            className="w-fit ring-2 ring-primary rounded-[14px] py-3 px-6 font-semibold leading-6 text-customGray hover:scale-110 duration-200"
          >
            Help center
          </button>
        </motion.div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default HelpCenter;
