"use client";

import { SectionHeader } from "@/src/sections/Layout";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useMediaQuery } from "react-responsive";

type tradeProps = {};

const Trade: React.FC<tradeProps> = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("nextpage");
  const translation = useTranslations("tradePage");
  const isLg = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const tradePageItems = [
    {
      title: translation("tradeAccount"),
      link: "",
      img: "/images" + (isLg ? "/banner-mobile" : "/banner-web") + "/tradingAccounts.jpg",
      btnLinks: "",
      btnText: "",
      desc: translation("accountDesc"),
    },
  ];

  const pageItem = tradePageItems[0];

  return (
    <main id="trade w-full" className="bg-customGray">
      <SectionHeader
        img={pageItem.img}
        title={pageItem.title}
        desc={pageItem.desc}
        btnText={tab === "spread" ? translation("btnTrade") : translation("btnAccount")}
      />
    </main>
  );
};
export default Trade;
