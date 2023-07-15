"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { PageWithHeaderContainer } from "@/src/components/layout";

type pageProps = {};

const Support: React.FC<pageProps> = () => {
  const translation = useTranslations("supportPage");
  const isLg = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const supportPageItems = [
    {
      title: translation("contactUs"),
      link: "contact-us",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/contactUs.jpg",
      btnLinks: "",
      btnText: translation("btnAccount"),
      desc: translation("contactUsDesc"),
    },
    {
      title: translation("partnerWithUs"),
      link: "partner",
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/partner.jpg",
      btnLinks: "",
      btnText: translation("btnAccount"),
      desc: translation("partnerWithUsDesc"),
    },
  ];

  return (
    <PageWithHeaderContainer pageData={supportPageItems}>
      <div>hi</div>
    </PageWithHeaderContainer>
  );
};
export default Support;
