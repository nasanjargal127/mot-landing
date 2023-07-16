"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { cardVariants, scrollAnimation } from "@/src/constants/motion.variant";
import { RiMapPin2Fill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FiEdit2, FiUser } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { LuEdit3 } from "react-icons/lu";
import { useTranslations } from "next-intl";
import { Form } from "@/src/components/ui/Form";
import { useRouter } from "next/navigation";
import { URL_BROKER_REGISTER } from "@/src/constants/path";

type ContactUsProps = {};

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <>
      <SectionContainer id="contact-us" sectionClassName="bg-white py-20">
        <ScrollAnimationWrapper className="w-full">
          <motion.div variants={scrollAnimation} className="w-full">
            <ContactUsForm />
          </motion.div>
          <motion.div variants={scrollAnimation} className="relative"></motion.div>
        </ScrollAnimationWrapper>
      </SectionContainer>
      <HelpCenterSection />
    </>
  );
};
export default ContactUs;

function HelpCenterSection() {
  const router = useRouter();
  const t = useTranslations("helpCenter");

  return (
    <div className="relative bg-mainGray w-[100vw] h-[507px]">
      <div className="max-w-screen-xl mx-auto px-4 isolate flex justify-center h-full pt-8">
        <img
          src="/images/banner-web/zHelpCenter.jpg"
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-cover object-center"
        />
        <motion.div className="max-w-2xl flex flex-col justify-center items-center">
          <h1 className="text-3xl mt-5 sm:mt-0 font-bold tracking-tight text-white sm:text-4xl text-center">
            {t("title")}
          </h1>
          <p className=" my-4 sm:my-8 text-sm sm:text-base leading-5 sm:leading-6 text-white text-gray50 text-center">
            {t("desc")}
          </p>
          <button
            onClick={() => router.push(URL_BROKER_REGISTER)}
            className="ring-2 ring-primary rounded-[14px] py-3 px-6 font-semibold leading-6 text-white hover:scale-110 duration-200"
          >
            Help center
          </button>
        </motion.div>
      </div>
    </div>
  );
}

function ContactUsForm() {
  const translation = useTranslations("contactUs");
  return (
    <div className="mx-auto px-4 max-w-7xl">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        animate="visible"
        viewport={{ once: true }}
        className="py-8 md:py-12 lg:grid grid-cols-1 sm:grid-cols-7 lg:gap-x-[40px] sm:px-12 place-items-start bg-silver rounded-lg"
      >
        <motion.div custom={1} variants={cardVariants} className="relative bg-white rounded-[40px] col-span-3">
          <div className="max-w-2xl py-10">
            <div className="isolate bg-white">
              <form action="#" method="POST" className="mx-auto max-w-xl">
                <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                  <Form
                    icon={<FiUser className="h-5 w-5 text-primary" aria-hidden="true" />}
                    placeholder={translation("firstName")}
                  />

                  <Form
                    icon={<FiUser className="h-5 w-5 text-primary" aria-hidden="true" />}
                    placeholder={translation("lastName")}
                  />
                  <div className="sm:col-span-2">
                    <Form
                      icon={<FiEdit2 className="h-5 w-5 text-primary" aria-hidden="true" />}
                      placeholder={translation("title")}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Form
                      icon={<HiOutlineMail className="h-5 w-5 text-primary" aria-hidden="true" />}
                      placeholder={translation("email")}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Form
                      icon={<LuEdit3 className="h-5 w-5 text-primary" aria-hidden="true" />}
                      placeholder={translation("description")}
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full bg-primary rounded-full focus:ring-primary px-3.5 py-4 text-center text-sm font-semibold text-white shadow-sm "
                  >
                    {translation("btnText")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          variants={cardVariants}
          className="relative px-2 py-8 sm:p-12 flex flex-col gap-9 w-full rounded-2xl col-span-4 col-start-4"
        >
          <div className="flex gap-5 items-center">
            <BsFillTelephoneFill className="text-primary h-10 w-10 ring-1 ring-primary p-2 rounded-xl" />
            <a
              href="tel:+97672222200"
              className="text-customGray text-base font-medium cursor-pointer hover:text-primary"
            >
              +976-72222200
            </a>
          </div>
          <div className="flex gap-4 `items-start">
            <IoMdMail className="text-primary h-10 w-10 ring-1 ring-primary p-2 rounded-xl" />
            <div className="flex flex-col flex-1 gap-2.5">
              <div className="flex justify-between flex-wrap">
                <p className="text-customGray text-base font-medium">{translation("customerSupport")}</p>
                <a
                  href="mailto:support@motforex.com"
                  className="text-customGray text-base font-medium cursor-pointer hover:text-primary"
                >
                  support@motforex.com
                </a>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="text-customGray text-base font-medium">{translation("newAccount")}</p>
                <a
                  href="mailto:accounts@motforex.com"
                  className="text-customGray text-base font-medium cursor-pointer hover:text-primary"
                >
                  accounts@motforex.com
                </a>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="text-customGray text-base font-medium">{translation("marketing")}</p>
                <a
                  href="mailto:marketing@motforex.com"
                  className="text-customGray text-base font-medium cursor-pointer hover:text-primary"
                >
                  marketing@motforex.com
                </a>
              </div>
              <div className="flex justify-between flex-wrap">
                <p className="text-customGray text-base font-medium">{translation("depoAndWith")}</p>
                <a
                  href="mailto:marketing@motforex.com"
                  className="text-customGray text-base font-medium cursor-pointer hover:text-primary"
                >
                  billing@motforex.com
                </a>
              </div>
            </div>
          </div>
          <ListItem description={translation("footerText")} icon={{ icon: RiMapPin2Fill }} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export function ListItem({ icon, description }: { icon: { icon: any }; description: string }) {
  return (
    <div className="flex gap-5 start">
      <icon.icon className="text-primary h-10 w-10 ring-1 ring-primary p-2 rounded-xl" />
      <p className="text-customGray text-base font-medium flex-1">{description}</p>
    </div>
  );
}
