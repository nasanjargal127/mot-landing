"use client";

import { GrayContainer, SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { useRouter } from "next/navigation";
import { Button, LinkButton } from "@/src/components/ui/Buttons";
import { CustomStyles } from "@/src/styles/styles";

type SpreadSectionProps = {};

const SpreadSection: React.FC<SpreadSectionProps> = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [response, setResponse] = useState<ExistingData | null>(null);

  const router = useRouter();
  const axios = require("axios");
  const componentTranslation = useTranslations("homeSpreadSection");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://live-pricing.pepperstone.com/quotes?symbols=XAUUSD%2CEURUSD%2CNAS100%2CBTCUSD%2CUSDJPY%2CGBPUSD%2CAUDUSD%2CXAGUSD%2CSpotCrude%2CNatGas%2CUS30%2CNAS100%2CUS500%2CUS2000%2CCrypto30%2CETHUSD%2CLTCUSD%2CApple_Inc_(AAPL.O)%2CTesla_Inc_(TSLA.O)%2CMeta_Platforms_(META.O)%2CNVIDIA_Corporation_(NVDA.O)&fbclid=IwAR12mZePLBywCEzzv1J9E2bLPavj3RPdkMGlHjSwylN2eE9x0vvVWd_ftQ4",
      );
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 2000); // Fetches every 4 seconds

    // This is important, we must clear interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [response]);

  function calculateSpread(bid: string, ask: string) {
    return (parseFloat(ask) - parseFloat(bid)).toFixed(2);
  }

  function updateTradePairs(tradePairs: CategoryData[], existingData: ExistingData): CategoryData[] {
    // Loop over each category in the tradePairs array
    for (let category of tradePairs) {
      // Loop over each data item in the category's data array
      for (let item of category.data) {
        // Get the corresponding data from the existingData object
        const correspondingData = existingData[item.name];

        // Update the item's bid, ask, and spread properties
        if (correspondingData) {
          item.bid = correspondingData.bid;
          item.ask = correspondingData.ask;
          item.spread = calculateSpread(correspondingData.bid, correspondingData.ask);
        }
      }
    }
    return tradePairs;
  }

  const tableHeaders = ["Symbols", "Spread", "Bid", " Ask", ""];
  const pairTypes = ["Popular", "FX", "Metals/Energy", "Indices", "Crypto"];
  const TradePairs = response ? updateTradePairs(TRADEPAIRS, response) : TRADEPAIRS;

  return (
    <SectionContainer sectionClassName="bg-white" divClassname="py-32">
      <GrayContainer className="py-12 px-3 xn:px-6 lg:px-12 ">
        <div className="lg:mr-8 overflow-x-auto lg:flex-1">
          <div className="w-fit flow-root rounded-md shadow-md  bg-white">
            <div className="flex pl-4 sm:justify-start">
              {pairTypes.map((item, idx) => (
                <p
                  className={` z-2 py-5 px-3 text-sm text-center font-medium ${
                    idx === selectedTab ? "text-primary" : "text-gray-400"
                  } bg-white cursor-pointer`}
                  key={idx}
                  onClick={() => setSelectedTab(idx)}
                >
                  {item}
                </p>
              ))}
            </div>
            <table>
              <thead>
                <tr className="pl-8">
                  {tableHeaders.map((item, idx) => (
                    <th
                      key={idx}
                      scope="col"
                      className="sticky top-0 z-2 py-4 px-7 text-center text-sm font-semibold text-customGray bg-gray-200 -mx-1  pl-9 w-200"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {TradePairs.filter((opt) => opt.id === selectedTab).map((items) =>
                  items.data.map((item, idx) => (
                    <tr key={idx} className="text-center">
                      <td className="whitespace-nowrap py-4 text-sm font-bold text-gray-800 w-250">{item.name}</td>
                      <td className="whitespace-nowrap py-4 text-base text-gray-500 w-200">{item.spread}</td>
                      <td className="whitespace-nowrap py-4 text-base text-gray-500 sm:pr-0 w-200">{item.bid}</td>
                      <td className="whitespace-nowrap py-4 text-base text-gray-500 sm:pr-0 w-200">{item.ask}</td>
                      <td className="whitespace-nowrap py-4 pl-4 text-base text-gray-500 sm:pr-8 w-200">
                        <button
                          type="submit"
                          onClick={() => router.push("https://portal.motforex.com/auth/login")}
                          className="flex-none rounded-full bg-gradient-to-r from-[#FFA233] to-[#FFC81A] px-3 py-2 text-sm font-semibold text-white hover:text-gray-900 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                        >
                          {componentTranslation("trade")}
                        </button>
                      </td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex lg:flex-1">
          <div className=" text-center lg:text-left mt-20 lg:mt-0">
            <h2 className="text-3xl font-extrabold tracking-tight text-customGray">{componentTranslation("title")}</h2>
            <p className="my-8 text-lg text-customGray font-light">{componentTranslation("desc")}</p>
            <div className="py-2 flex items-center flex-wrap justify-center gap-4 lg:justify-start">
              <Button
                className={`${CustomStyles.animations.hoverScale} text-base font-semibold text-darkSecondary`}
                onClick={() => router.push("https://portal.motforex.com/auth/login")}
              >
                {componentTranslation("startTrade")}
              </Button>
              <LinkButton
                isOutlined
                href="/platform?nextpage=demo-account"
                text={componentTranslation("demoAccount")}
                className={`${CustomStyles.animations.hoverScale} h-[42px] px-4 duration-200 text-customGray flex`}
              />
            </div>
          </div>
        </div>
      </GrayContainer>
    </SectionContainer>
  );
};
export default SpreadSection;

interface PairData {
  name: string;
  bid: string;
  ask: string;
  spread: string;
}

interface CategoryData {
  id: number;
  title: string;
  data: PairData[];
}

interface ExistingData {
  [key: string]: {
    bid: string;
    ask: string;
    close: string;
  };
}

const TRADEPAIRS = [
  {
    id: 0,
    title: "Popular",
    data: [
      {
        name: "EURUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "XAUUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "NAS100",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "BTCUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
    ],
  },
  {
    id: 1,
    title: "FX",
    data: [
      {
        name: "EURUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "USDJPY",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "GBPUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "AUDUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
    ],
  },
  {
    id: 2,
    title: "Metals/Energy",
    data: [
      {
        name: "XAUUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "XAGUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "SpotCrude", //SpotOil
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "NatGas", //NaturalGas
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
    ],
  },
  {
    id: 3,
    title: "Indices",
    data: [
      {
        name: "US500", //US 500
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "US30",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "NAS100",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "US2000",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
    ],
  },
  {
    id: 4,
    title: "Crypto",
    data: [
      {
        name: "Crypto30",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "BTCUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "ETHUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
      {
        name: "LTCUSD",
        bid: "00.00",
        ask: "00.00",
        spread: "00.00",
      },
    ],
  },
];
