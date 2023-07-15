"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { PageWithHeaderContainer } from "@/src/components/layout";
import { useSearchParams } from "next/navigation";
import {
  URL_PLATFORM_CTRADER,
  URL_PLATFORM_DEMO_ACCOUT,
  URL_PLATFORM_MT5,
  URL_PLATFORM_TRADING_HOURS,
} from "@/src/constants/path";
import { CTrader, DemoAccounts, MetaTrader5, TradingHours } from "@/src/sections/Platform";
import AccountDetails from "@/src/sections/Trade/AccountDetails";
import { StepsSection } from "@/src/sections/Layout";

type PlatformProps = {};

function Platform({}: PlatformProps) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("nextpage");
  const translation = useTranslations("platformPage");
  const isLg = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const platformPageItems = [
    {
      title: translation("mt5"),
      link: "mt5",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/mt5.jpg",
      btnLinks: "https://www.metatrader5.com/en/download",
      btnText: translation("btnMt5"),
      desc: translation("mt5Desc"),
    },
    {
      title: translation("cTrader"),
      link: "ctrader",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/cTrader.jpg",
      btnLinks: "https://ctrader.com/download/",
      btnText: translation("btnCtrader"),
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
      {tab === URL_PLATFORM_MT5 ? (
        <>
          <MetaTrader5 />
          <StepsSection />
        </>
      ) : (
        <></>
      )}
      {tab === URL_PLATFORM_CTRADER ? (
        <>
          <CTrader />
          <StepsSection />
        </>
      ) : (
        <></>
      )}
      {tab === URL_PLATFORM_DEMO_ACCOUT ? (
        <>
          <DemoAccounts />
          <AccountDetails />
        </>
      ) : (
        <></>
      )}
      {tab === URL_PLATFORM_TRADING_HOURS ? <TradingHours /> : <></>}
    </PageWithHeaderContainer>
  );
}

export default Platform;
