"use client";

import React from "react";
import { motion } from "framer-motion";
import { GrayContainer, SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { useTranslations } from "next-intl";
import { Form } from "@/src/components/ui/Form";
import { HiOutlineUser } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoKeyOutline } from "react-icons/io5";

type DemoAccountProps = {};

const DemoAccount: React.FC<DemoAccountProps> = () => {
  const translation = useTranslations("demoAccount");

  return (
    <SectionContainer id="demo-account" sectionClassName=" bg-white py-32 ">
      <ScrollAnimationWrapper className="">
        <motion.div variants={scrollAnimation}>
          <GrayContainer className="py-12 px-2 lg:px-12">
            <div className="mx-4 text-center lg:mx-0 lg:flex-auto  lg:py-16 lg:text-left pb-14">
              <div className="flex gap-3 items-center justify-start mt-6 sm:mt-10 ">
                <div className="ring-1 bg-primary ring-primary rounded-full h-10 w-10 flex items-center justify-center">
                  <p className="text-customGray font-medium text-xl  text-center ">1</p>
                </div>
                <p className="font-semibold text-darkSecondary text-[18px]">{translation("step1")}</p>
              </div>
              <div className="flex gap-3 items-center mt-6 sm:mt-10">
                <div className="ring-1 ring-primary rounded-full h-10 w-10 flex items-center justify-center">
                  <p className="text-primary font-semibold text-xl  text-center ">2</p>
                </div>
                <p className="font-semibold text-darkSecondary text-[18px]">{translation("step2")}</p>
              </div>
            </div>
            <div className="relative bg-white max-w-2xl mx-0 rounded-2xl px-3 grow">
              <div className=" sm:px-[120px] max-w-2xl py-[60px]">
                <p className="font-bold text-2xl text-center text-customGray sm:text-left">
                  {translation("cardTitle")}
                </p>
                <div className="isolate bg-white">
                  <form action="#" method="POST" className="mx-auto mt-[60px] max-w-xl sm:mt-16 ">
                    <div className="grid grid-cols-1 gap-x-3 gap-y-6 sm:grid-cols-2">
                      <Form
                        icon={<HiOutlineUser className="h-5 w-5 text-primary" aria-hidden="true" />}
                        placeholder={translation("firstName")}
                      />
                      <Form
                        icon={<HiOutlineUser className="h-5 w-5 text-primary" aria-hidden="true" />}
                        placeholder={translation("lastName")}
                      />
                      <div className="sm:col-span-2">
                        <Form
                          icon={<LuMail className="h-5 w-5 text-primary" aria-hidden="true" />}
                          placeholder="Email"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <Form
                          icon={<FiPhone className="h-5 w-5 text-primary" aria-hidden="true" />}
                          placeholder="+976"
                        />
                      </div>
                      <Form
                        icon={<IoKeyOutline className="h-5 w-5 text-primary" aria-hidden="true" />}
                        type="password"
                        placeholder={translation("password")}
                      />
                      <Form
                        icon={<IoKeyOutline className="h-5 w-5 text-primary" aria-hidden="true" />}
                        type="password"
                        placeholder={translation("password")}
                      />
                    </div>
                    <div className="mt-10">
                      <button
                        type="submit"
                        className="block w-full bg-primary rounded-full focus:ring-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm "
                      >
                        {translation("btnText")}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </GrayContainer>
        </motion.div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default DemoAccount;
