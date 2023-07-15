"use client";

import React from "react";
import { PageWithHeaderContainer } from "@/src/components/layout";
import { PageItemProps } from "@/src/constants/type.const";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";

type TradeProps = {};

const Trade: React.FC<TradeProps> = () => {
  const translation = useTranslations("tradePage");
  const isLg = useMediaQuery({ query: "(min-width: 992px)" });

  // Recalculate page items on each render
  const tradePageItems: PageItemProps[] = [
    {
      title: translation("tradeAccount"),
      link: "accounts",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/tradingAccounts.jpg",
      btnLinks: "",
      btnText: translation("btnAccount"),
      desc: translation("accountDesc"),
    },
    {
      title: translation("market"),
      link: "market",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/market.jpg",
      btnLinks: "",
      btnText: translation("btnAccount"),
      desc: translation("marketDesc"),
    },
    {
      title: translation("price"),
      link: "spread",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/price.jpg",
      btnLinks: "",
      btnText: translation("btnAccount"),
      desc: translation("priceDesc"),
    },
  ];

  return (
    <PageWithHeaderContainer pageData={tradePageItems}>
      <div>Hi</div>
    </PageWithHeaderContainer>
  );
};

export default Trade;
