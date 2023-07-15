"use client";

import {
  RiFacebookCircleFill,
  RiTelegramFill,
  RiPhoneLine,
  RiMapPin2Line,
  RiInstagramFill,
  RiYoutubeFill,
} from "react-icons/ri";
import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
import { MdMailOutline } from "react-icons/md";
import { useLocalizeHref } from "../../components/utils";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const footerLinkTranslation = useTranslations("footerLinks");
  const riskWarningTranslation = useTranslations("riskWarning");
  const infotTranslation = useTranslations("infos");
  const localizeHref = useLocalizeHref();

  const FooterLinks = [
    {
      title: footerLinkTranslation("company"),
      links: [
        {
          name: footerLinkTranslation("helpCenter"),
          href: localizeHref("https://help.motforex.com"),
        },
        {
          name: footerLinkTranslation("partnerWithUs"),
          href: localizeHref("/support?nextpage=partner"),
        },
        {
          name: footerLinkTranslation("contactUs"),
          href: localizeHref("/support?nextpage=contact-us"),
        },
      ],
    },
    {
      title: footerLinkTranslation("platform"),
      links: [
        {
          name: "MetaTrader5",
          href: localizeHref("/platform?nextpage=mt5"),
        },
        {
          name: "cTrader",
          href: localizeHref("/platform?nextpage=ctrader"),
        },
      ],
    },
    {
      title: footerLinkTranslation("links"),
      links: [
        {
          name: footerLinkTranslation("openAccount"),
          href: localizeHref("https://portal.motforex.com/auth/register"),
        },
        {
          name: footerLinkTranslation("loginAccount"),
          href: localizeHref("https://portal.motforex.com/auth/login"),
        },
        {
          name: footerLinkTranslation("deposit"),
          href: localizeHref("https://portal.motforex.com/deposit"),
        },
      ],
    },
    {
      title: footerLinkTranslation("legal"),
      links: [
        {
          name: footerLinkTranslation("termsAndConditions"),
          href: "/pdf/GenralTermsAndCondition.pdf",
        },
        {
          name: footerLinkTranslation("privacy"),
          href: localizeHref("/privacy-policy"),
        },
      ],
    },
  ];

  const SocialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/motwealthacademy",
      icon: RiFacebookCircleFill,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/motfxacademy/",
      icon: RiInstagramFill,
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@motfxacademy",
      icon: RiYoutubeFill,
    },
    {
      name: "Telegram",
      href: "https://t.me/+blQ9UVTHbFE3MWM1",
      icon: RiTelegramFill,
    },
  ];

  return (
    <footer
      id="footer"
      className={`${CustomStyles.section} relative bg-darkSecondary`}
      aria-labelledby="footer-heading"
    >
      <div className={`${CustomStyles.container} py-16`}>
        <div className="flex justify-between flex-wrap sm:flex-nowrap">
          <div className=" mb-4 flex flex-col gap-4 text-sm  text-slate-50">
            <div className="flex justify-between items-center">
              <p className="text-primary font-bold">&copy; 2023 MOTFX</p>
            </div>
            <p className="text-slate-100 my-3 font-medium text-sm w-4/5">{infotTranslation("info")}</p>
            <div className="flex space-x-4">
              {SocialLinks.map((item, idx) => (
                <a key={idx} href={item.href} className="text-primary">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6 duration-300 hover:-translate-y-1" aria-hidden="true" size={30} />
                </a>
              ))}
            </div>
          </div>
          <div className=" flex flex-col gap-4 text-sm text-slate-50">
            <div className="flex items-center">
              <MdMailOutline size={27} className="text-primary" />
              <a href="mailto:info@motforex.com" className="text-slate-100 ml-3 hover:text-primary">
                info@motforex.com
              </a>
            </div>
            <div className="flex items-center">
              <RiPhoneLine size={28} className="text-primary" />
              <a href="tel:97672222200" className="text-slate-100 ml-3 hover:text-primary">
                +976-7222 2200
              </a>
            </div>
            <div className="flex items-start">
              <RiMapPin2Line className="text-primary h-12 w-12" />
              <p className="text-slate-100 ml-2 mt-2">{infotTranslation("address")}</p>
            </div>
          </div>
        </div>

        <div className="my-10 border-t border-white/10  lg:flex lg:items-center lg:justify-between" />

        <div className="px-2 grid grid-cols-2 gap-x-2 gap-y-12 md:gap-24 md:grid-cols-4 xl:mt-0">
          {FooterLinks.map((item, idx) => (
            <div key={idx}>
              <h3 className="text-darkText text-lg font-semibold leading-6">{item.title}</h3>
              <ul role="list" className="mt-5 space-y-2">
                {item.links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.href} className="text-sm text-gray-300 hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="my-10 border-t border-white/10  lg:flex lg:items-center lg:justify-between" />

        <h3 className="text-xl font-bold leading-8 md:text-lg md:leading-8 text-darkText">
          {riskWarningTranslation("title")}
        </h3>
        <p className="text-white mt-2 text-sm">{riskWarningTranslation("description")}</p>
      </div>
    </footer>
  );
};
export default Footer;
