"use clinet";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import TitleContainer from "@/src/components/layout/TitleContainer";
import { TradingViewWidget } from "@/src/components/ui/TradingViewWidget/TradingViewWidget";

type TradingHoursProps = {};

type TradingHoursData = {
  title: string;
  open: number;
  close: number;
  img: string;
  timezone: string;
};

const TradingHours: React.FC<TradingHoursProps> = () => {
  const translation = useTranslations("tradingHours");

  const tradingHoursData: TradingHoursData[] = [
    {
      title: "Sidney",
      open: 10,
      close: 24,
      img: "/images/icons/sidney.png",
      timezone: "AEST",
    },
    {
      title: "Tokyo",
      open: 0,
      close: 9,
      img: "/images/icons/tokyo.png",
      timezone: "JST",
    },
    {
      title: "London",
      open: 8,
      close: 16,
      img: "/images/icons/london.png",
      timezone: "BST",
    },
    {
      title: "New York",
      open: 14,
      close: 21,
      img: "/images/icons/newyork.png",
      timezone: "EDT",
    },
  ];

  const [timeLeft, setTimeLeft] = useState<Record<string, string>>({});
  const [marketStatus, setMarketStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft: Record<string, string> = {};
      const newMarketStatus: Record<string, boolean> = {};

      for (const market of tradingHoursData) {
        const now = new Date();
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const pt = utc - 3600000 * 8;
        const nowPt = new Date(pt);

        let diff: string | number;

        const open = new Date();
        open.setHours(market.open, 0, 0, 0);
        const close = new Date();
        close.setHours(market.close, 0, 0, 0);

        if (nowPt >= open && nowPt <= close) {
          diff = "Market is open";
          newMarketStatus[market.title] = true;
        } else {
          const tomorrowOpen = new Date(open.getTime());
          tomorrowOpen.setDate(tomorrowOpen.getDate() + 1);
          diff = Math.abs(tomorrowOpen.getTime() - nowPt.getTime());
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          diff = `${hours}:${minutes}:${seconds}`;
          newMarketStatus[market.title] = false;
        }
        newTimeLeft[market.title] = diff.toString();
      }
      setTimeLeft(newTimeLeft);
      setMarketStatus(newMarketStatus);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionContainer id="trading-hours" sectionClassName="bg-white py-36">
      <ScrollAnimationWrapper className="">
        <motion.div variants={scrollAnimation} className="mx-auto max-w-5xl text-center">
          <TitleContainer className="md:justify-center">
            <h3 className={`${CustomStyles.text.title} xl:text-5xl text-customGray`}>{translation("title")}</h3>
          </TitleContainer>
          <p className="text-customGray mt-6 mb-12">{translation("desc")}</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-6 sm:gap-6 mb-16">
          {tradingHoursData.map((item, idx) => (
            <motion.div
              key={idx}
              variants={scrollAnimation}
              className="rounded-2xl pt-6 px-2 sm:pt-8 sm:px-8 pb-12 text-sm leading-6 flex flex-col justify-center items-center"
            >
              <img className="h-[120px] w-[120px] text-mainColor " src={item.img} alt="testimonial" />
              <p className="text-2xl text-customGray text-left font-extrabold mt-6">
                {item.title} ({item.timezone})
              </p>
              <blockquote
                className={`text-primary text-2xl mt-[10px] ${marketStatus[item.title] ? "text-green-500" : ""}`}
              >
                <p>{timeLeft[item.title] || "Loading..."}</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
        <TradingViewWidget />
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};

export default TradingHours;
