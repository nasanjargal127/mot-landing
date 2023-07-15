"use client";
import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { AnimatedDiv } from "@/src/components/ui/AnimatedDiv";
import { Button } from "@/src/components/ui/Buttons";
import { useRouter, useSearchParams } from "next/navigation";

type SectionHeaderProps = {
  img: string;
  title: string;
  desc: string;
  btnText?: string;
  btnLink?: string;
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ img, title, desc, btnText, btnLink }: SectionHeaderProps) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("nextpage");
  const router = useRouter();

  return (
    <SectionContainer
      sectionClassName="relative bg-mainGray h-[512px]"
      divClassname="isolate flex items-center justify-center h-full pt-8"
    >
      <motion.img
        src={img}
        alt=""
        className={`absolute inset-0 -z-10 w-full h-full object-cover object-center brightness-50`}
      />
      <AnimatedDiv key={tab}>
        <div>
          <h1 className="text-3xl mt-5 sm:mt-0 font-bold tracking-tight text-white sm:text-5xl text-center">{title}</h1>
          <p className="mt-6 text-xs sm:text-lg leading-5 sm:leading-6 text-gray50 text-center">{desc}</p>
        </div>
        {btnText ? (
          <div className="flex items-center justify-center mt-3 sm:mt-6">
            <Button onClick={() => router.push(btnLink ? btnLink : "/")}>{btnText}</Button>
          </div>
        ) : null}
      </AnimatedDiv>
    </SectionContainer>
  );
};
export default SectionHeader;