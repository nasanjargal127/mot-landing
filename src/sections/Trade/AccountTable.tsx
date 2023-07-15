"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer, TitleContainter } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import { it } from "node:test";
import { Button } from "@/src/components/ui/Buttons";
import { useRouter } from "next/navigation";

type AccountTableProps = {};

type TableRowData = {
  name: string;
  mt5Pro: string;
  mt5Standart: string;
  ctraderPro: string;
};

const AccountTable: React.FC<AccountTableProps> = () => {
  const translation = useTranslations("accountTable");
  const router = useRouter();

  const tableHeaderData = [translation("mt5ProTitle"), translation("mt5StandardTitle"), translation("ctraderProTitle")];

  const accountTableData: TableRowData[] = [
    {
      name: translation("tradingPlatform"),
      mt5Pro: "MetaTrader5",
      mt5Standart: "MetaTrader5",
      ctraderPro: "cTrader",
    },
    {
      name: translation("commission"),
      mt5Pro: "$6",
      mt5Standart: "%0.0",
      ctraderPro: "%6.0",
    },
    {
      name: translation("spreadsFrom"),
      mt5Pro: "0.0",
      mt5Standart: "0.3(" + translation("mainPairs") + ")",
      ctraderPro: "0.0",
    },
    {
      name: translation("startingDesposit"),
      mt5Pro: "₮50 000",
      mt5Standart: "₮50 000",
      ctraderPro: "₮50 000",
    },
    {
      name: translation("leverage"),
      mt5Pro: "1:10 - 1:500",
      mt5Standart: "1:10 - 1:200",
      ctraderPro: "1:10 - 1:500",
    },
    {
      name: translation("maxNumOrder"),
      mt5Pro: "200",
      mt5Standart: "200",
      ctraderPro: "200",
    },
    {
      name: translation("serverLocation"),
      mt5Pro: `${translation("singapore")}, ${translation("japan")}`,
      mt5Standart: `${translation("singapore")}, ${translation("japan")}`,
      ctraderPro: `${translation("singapore")}, ${translation("japan")}`,
    },
    {
      name: translation("microLotTrading"),
      mt5Pro: translation("possible"),
      mt5Standart: translation("possible"),
      ctraderPro: translation("possible"),
    },
    {
      name: translation("microLotPairs"),
      mt5Pro: "180+",
      mt5Standart: "150+",
      ctraderPro: "185+",
    },
    {
      name: translation("forexPairs"),
      mt5Pro: "230+",
      mt5Standart: "150+",
      ctraderPro: "240+",
    },
    {
      name: translation("sharesTrade"),
      mt5Pro: "2000+",
      mt5Standart: "1000+",
      ctraderPro: "2000+",
    },
    {
      name: translation("stopOut"),
      mt5Pro: "30%",
      mt5Standart: "30%",
      ctraderPro: "30%",
    },
    {
      name: translation("onClickTrade"),
      mt5Pro: translation("possible"),
      mt5Standart: translation("possible"),
      ctraderPro: translation("possible"),
    },
    {
      name: translation("allowedTrade"),
      mt5Pro: translation("all"),
      mt5Standart: translation("all"),
      ctraderPro: translation("all"),
    },
    {
      name: translation("programming"),
      mt5Pro: "MQL5",
      mt5Standart: "MQL5",
      ctraderPro: "C#",
    },
  ];

  return (
    <SectionContainer
      id="account-table"
      sectionClassName=" py-32 relative isolate overflow-hidden bg-gradient-to-t from-[#03273f] to-darkSecondary "
    >
      <ScrollAnimationWrapper className="">
        <motion.div variants={scrollAnimation} className="mx-auto max-w-5xl md:text-center">
          <TitleContainter className="md:justify-center">
            <h3 className="xl:text-5xl text-slate-50">{translation("titlePrefix")}</h3>
            <h3 className={`${CustomStyles.text.gradient} xl:text-5xl xn:pl-1.5`}>{translation("titleSuffix")}</h3>
          </TitleContainter>
          <p className="text-slate-100 text-lg my-6">{translation("desc")}</p>
        </motion.div>

        <motion.div variants={scrollAnimation} custom={{ duration: 3 }} className="mt-8 relative w-full">
          <div className="px-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 mt-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="table-fixed overflow-hidden px-2 min-w-full divide-y ring-1 ring-[#536673] rounded-lg divide-[#536673]">
                <thead>
                  <tr className="divide-x divide-[#536673] ">
                    <th scope="col" className="sr-only"></th>
                    {tableHeaderData.map((item, idx) => (
                      <th
                        scope="col"
                        key={idx}
                        className="px-4 py-5 w-1/4 text-center text-lg font-semibold text-primary  transition duration-400 hover:text-white hover:bg-gradient-to-r from-[#FFA233] to-[#FFC81A]"
                      >
                        {item}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#536673]">
                  {accountTableData.map((item, idx) => {
                    const isHighlightedRow = idx % 2 === 0;
                    const rowClasses = `divide-x divide-[#536673] h-[60px] ${
                      isHighlightedRow ? "bg-gradient-to-r from-[#36424a]" : ""
                    }`;

                    return (
                      <tr key={idx} className={rowClasses}>
                        <td className="px-4 text-base font-medium text-white" scope="row">
                          {item.name}
                        </td>
                        <td className="text-sm px-4 text-white text-center">{item.mt5Pro}</td>
                        <td className="text-sm px-4 text-white text-center">{item.mt5Standart}</td>
                        <td className="px-4 text-sm text-white sm:pr-0 text-center">{item.ctraderPro}</td>
                      </tr>
                    );
                  })}
                  <tr className="divide-x divide-[#536673] h-[80px]">
                    <td className="px-4 text-base font-medium text-white" scope="row"></td>
                    <td className="px-2 lg:px-12 xl:px-20 text-sm font-medium text-white">
                      <Button
                        className="w-full"
                        onClick={() => router.push("https://portal.motforex.com/auth/register")}
                      >
                        {translation("btnRegister")}
                      </Button>
                    </td>
                    <td className="px-2 lg:px-12 xl:px-20 text-sm font-medium text-white">
                      <Button
                        className="w-full"
                        onClick={() => router.push("https://portal.motforex.com/auth/register")}
                      >
                        {translation("btnRegister")}
                      </Button>
                    </td>
                    <td className="px-2 lg:px-12 xl:px-20 text-sm font-medium text-white">
                      <Button
                        className="w-full"
                        onClick={() => router.push("https://portal.motforex.com/auth/register")}
                      >
                        {translation("btnRegister")}
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </SectionContainer>
  );
};
export default AccountTable;
