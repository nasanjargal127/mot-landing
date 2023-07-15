"use client";

import React from "react";
import { Variants, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../styles/swiperStyles.css";
import { CustomStyles } from "@/src/styles/styles";
import Image from "next/image";
import { cardVariants } from "@/src/constants/motion.variant";

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  const translation = useTranslations("heroSection");

  const HeroSwiperData = [
    {
      topTitle: "MONEY",
      bottomTitle: "NEVER SLEEPS",
      desc: translation("mainBanner"),
      image: "/images/swiper/mainBanner.jpg",
    },
    {
      topTitle: "LEARN TO",
      bottomTitle: "EARN",
      desc: translation("learnBanner"),
      image: "/images/swiper/learnBanner.jpg",
    },
    {
      topTitle: "EASY",
      bottomTitle: "DEPOSIT / WITHDRAWAL",
      desc: translation("depositBanner"),
      image: "/images/swiper/depositBanner.jpg",
    },
    {
      topTitle: "DON’T MISS",
      bottomTitle: "ON CRYPTO",
      desc: translation("cryptoBanner"),
      image: "/images/swiper/cryptoBanner.png",
    },
  ];

  const BottomSheetData = [
    { name: translation("forexPair"), value: "100+" },
    { name: translation("cryptoAndStock"), value: "150+" },
    { name: translation("indexesAndCFD"), value: "20+" },
    { name: translation("metalsAndEnergies"), value: "13+" },
    { name: translation("leverage"), value: "1:500" },
  ];

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section id="hero" className="bg-gray-900 mx-auto w-full flex flex-col justify-center items-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={pagination}
        modules={[Autoplay, Pagination]}
        className="absolute isolate inset-0 h-screen w-full -z-10"
      >
        {HeroSwiperData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={item.image}
              alt="banner image"
              width={0}
              height={0}
              sizes="100vw"
              className="absolute isolate inset-0 -z-10 h-screen w-full object-cover object-center md:object-center brightness-40"
            />
            <div
              className={`${CustomStyles.container} isolate h-screen flex flex-col justify-center items-center pt-14`}
            >
              <div className="mx-auto max-w-7xl">
                <div className="text-center flex gap-3 justify-center items-center flex-wrap">
                  <h1 className="md:text-[70px] text-4xl font-extrabold text-white sm:text-5xl mr-[-10px]">&ldquo;</h1>
                  <h1
                    className={`md:text-[70px] text-4xl tracking-wide font-extrabold ${
                      idx === 1 ? "text-white" : "text-primary"
                    } sm:text-5xl`}
                  >
                    {item.topTitle}
                  </h1>
                  <h1
                    className={`md:text-[70px] text-4xl tracking-wide font-extrabold ${
                      idx === 1 ? "text-primary" : "text-white"
                    } sm:text-5xl`}
                  >
                    {item.bottomTitle}&rdquo;
                  </h1>
                </div>
              </div>
              <div className="mx-auto max-w-3xl text-center flex justify-center items-center flex-wrap">
                <p className="mt-6 text-lg sm:text-xl font-normal leading-8 text-slate-50">{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={`${CustomStyles.container} absolute hidden md:flex z-10 bottom-12`}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          animate="visible"
          viewport={{ once: true }}
          className="mt-8 grid md:grid-cols-3 gap-5 lg:gap-10 sm:mt-10 grid-cols-2 lg:grid-cols-5"
        >
          {BottomSheetData.map((stat, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              className="flex bg-gradient-to-b from-[#02090d33] to-[#071a281a] bg-opacity-100 flex-col h-[109px] ring-1 ring-white ring-opacity-30 px-6 py-4 items-center justify-center rounded-2xl relative"
            >
              <div className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</div>
              <div className="text-base leading-7 text-gray100">{stat.name}</div>
              <div className="h-4 w-2 bg-primary rounded-sm absolute left-[-4px] bottom-8" />
              <div className="h-4 w-2 bg-primary rounded-sm absolute right-[-4px] top-8" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default HeroSection;
