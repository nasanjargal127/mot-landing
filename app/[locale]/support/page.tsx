"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "react-responsive";
import { PageWithHeaderContainer } from "@/src/components/layout";
import { useSearchParams } from "next/navigation";
import { URL_SUPPORT_CONTACT_US, URL_SUPPORT_HELP_CENTER, URL_SUPPORT_PARTNER } from "@/src/constants/path";
import { ContactUs, HelpCenter } from "@/src/sections/Support";
import PartnerWithUs from "@/src/sections/Support/PartnerWithUs";
import PartnerRegister from "@/src/sections/Support/PartnerRegister";

type pageProps = {};

const Support: React.FC<pageProps> = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("nextpage");
  const translation = useTranslations("supportPage");
  const isLg = useMediaQuery({
    query: "(min-width: 992px)",
  });

  const supportPageItems = [
    {
      title: translation("contactUs"),
      link: URL_SUPPORT_CONTACT_US,
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/contactUs.jpg",
      btnLinks: "",
      btnText: "",
      desc: translation("contactUsDesc"),
    },
    {
      title: translation("partnerWithUs"),
      link: URL_SUPPORT_PARTNER,
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/partner.jpg",
      btnLinks: "",
      btnText: "",
      desc: translation("partnerWithUsDesc"),
    },
    {
      title: translation("helpCenter"),
      link: URL_SUPPORT_HELP_CENTER,
      img: "/images" + (isLg ? "/banner-web" : "/banner-mobile") + "/helpCenter.jpg",
      btnLinks: "",
      btnText: "",
      desc: translation("helpCenterDesc"),
    },
  ];

  return (
    <PageWithHeaderContainer pageData={supportPageItems}>
      {tab === URL_SUPPORT_CONTACT_US ? <ContactUs /> : <></>}
      {tab === URL_SUPPORT_PARTNER ? (
        <>
          <PartnerWithUs />
          <PartnerRegister />
        </>
      ) : (
        <></>
      )}
      {tab === URL_SUPPORT_HELP_CENTER ? (
        <>
          <HelpCenter />
        </>
      ) : (
        <></>
      )}
    </PageWithHeaderContainer>
  );
};
export default Support;
