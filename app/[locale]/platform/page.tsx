"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { PageWithHeaderContainer } from "@/src/components/layout";

type PlatformProps = {};

function Platform({}: PlatformProps) {
  const translation = useTranslations("platformPage");
  const isLg = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const platformPageItems = [
    {
      title: translation("mt5"),
      link: "mt5",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/mt5.jpg",
      btnLinks: "",
      btnText: "",
      desc: translation("mt5Desc"),
    },
    {
      title: translation("cTrader"),
      link: "ctrader",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/cTrader.jpg",
      btnLinks: "",
      btnText: "",
      desc: translation("cTraderDesc"),
    },
    {
      title: translation("tradingHour"),
      link: "trading-hours",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/tradingHours.jpg",
      btnLinks: "",
      btnText: "",
      desc: translation("tradingHourDesc"),
    },
    {
      title: translation("demoAccount"),
      link: "demo-accounts",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/demoAccount.jpg",
      btnLinks: "",
      btnText: "",
      desc: translation("demoAccountDesc"),
    },
  ];

  return (
    <PageWithHeaderContainer pageData={platformPageItems}>
      <div>Hi</div>
    </PageWithHeaderContainer>
  );
}

export default Platform;
