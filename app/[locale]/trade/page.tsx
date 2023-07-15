"use client";

import React from "react";
import { PageWithHeaderContainer } from "@/src/components/layout";
import { PageItemProps } from "@/src/constants/type.const";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { useLocalizeHref } from "@/src/components/utils";
import { useSearchParams } from "next/navigation";
import { URL_TRADE_ACCOUNTS, URL_TRADE_MARKET, URL_TRADE_SPREAD } from "@/src/constants/path";
import { AccountTable, MarketSection, SpreadSection, TradingAccounts } from "@/src/sections/Trade";
import { StepsSection } from "@/src/sections/Layout";
import AccountDetails from "@/src/sections/Trade/AccountDetails";

type TradeProps = {};

const Trade: React.FC<TradeProps> = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("nextpage");
  const translation = useTranslations("tradePage");
  const localizeHref = useLocalizeHref();
  const isLg = useMediaQuery({ query: "(min-width: 992px)" });

  // Recalculate page items on each render
  const tradePageItems: PageItemProps[] = [
    {
      title: translation("tradeAccount"),
      link: "accounts",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/tradingAccounts.jpg",
      btnLinks: localizeHref("https://portal.motforex.com/auth/register"),
      btnText: translation("btnAccount"),
      desc: translation("accountDesc"),
    },
    {
      title: translation("market"),
      link: "market",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/market.jpg",
      btnLinks: localizeHref("https://portal.motforex.com/auth/register"),
      btnText: translation("btnAccount"),
      desc: translation("marketDesc"),
    },
    {
      title: translation("price"),
      link: "spread",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/price.jpg",
      btnLinks: localizeHref("/platform?nextpage=mt5"),
      btnText: translation("btnTrading"),
      desc: translation("priceDesc"),
    },
  ];

  return (
    <PageWithHeaderContainer pageData={tradePageItems}>
      {tab === URL_TRADE_ACCOUNTS ? (
        <>
          <TradingAccounts />
          <AccountTable />
          <StepsSection />
        </>
      ) : (
        <></>
      )}
      {tab === URL_TRADE_MARKET ? (
        <>
          <MarketSection />
          <AccountDetails />
        </>
      ) : (
        <></>
      )}
      {tab === URL_TRADE_SPREAD ? <SpreadSection /> : <></>}
    </PageWithHeaderContainer>
  );
};

export default Trade;
