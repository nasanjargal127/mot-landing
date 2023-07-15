"use client";

import React from "react";
import { SectionHeader } from "@/src/sections/Layout";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { useMediaQuery } from "react-responsive";
type PrivacyProps = {};

const Privacy: React.FC<PrivacyProps> = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("nextpage");
  const translation = useTranslations("tradePage");
  const isLg = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const privacyPageItems = [
    {
      title: translation("tradeAccount"),
      link: "",
      img: "/images" + (isLg ? "/banner-mobile" : "/banner-web") + "/tradingAccounts.jpg",
      btnLinks: "",
      btnText: "",
      desc: translation("accountDesc"),
    },
  ];

  const pageItem = privacyPageItems[0];

  return (
    <main id="trade" className="w-full bg-customGray">
      <SectionHeader
        img={pageItem.img}
        title={pageItem.title}
        desc={pageItem.desc}
        btnText={tab === "spread" ? translation("btnTrade") : translation("btnAccount")}
      />
    </main>
  );
};

export default Privacy;
