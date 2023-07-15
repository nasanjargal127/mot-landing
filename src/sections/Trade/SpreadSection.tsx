"use client";

import { useState } from "react";
import { Accordion as TailwindAccordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/src/components/layout";
import { ScrollAnimationWrapper } from "@/src/components/utils";
import { scrollAnimation } from "@/src/constants/motion.variant";
import { TradingViewWidget } from "@/src/components/ui/TradingViewWidget/TradingViewWidget";
import TitleContainer from "@/src/components/layout/TitleContainer";
import { useTranslations } from "next-intl";
import { CustomStyles } from "@/src/styles/styles";

type SpreadSectionProps = {};

const SpreadSection: React.FC<SpreadSectionProps> = () => {
  const translation = useTranslations("spreadSection");
  const [open, setOpen] = useState(0);

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <SectionContainer id="live-price" sectionClassName="bg-white py-32">
        <ScrollAnimationWrapper className="w-full" viewPortAmount={0.1}>
          <motion.div variants={scrollAnimation}>
            <TitleContainer className="md:justify-center mb-12">
              <h3 className="xl:text-5xl">{translation("bigTitlePrefix")}</h3>
              <h3 className={`${CustomStyles.text.gradient} xl:text-5xl pl-1.2 xn:pl-2`}>
                {translation("bigTitleSuffix")}
              </h3>
            </TitleContainer>
            <TradingViewWidget />
          </motion.div>
        </ScrollAnimationWrapper>
      </SectionContainer>
      <SectionContainer id="spread-table" sectionClassName="bg-silver py-32 text-customGray">
        <ScrollAnimationWrapper>
          <motion.div variants={scrollAnimation} className="py">
            <TitleContainer className="md:justify-center mb-12">
              <h3 className="xl:text-5xl">{translation("smallTitlePrefix")}</h3>
            </TitleContainer>
            <div className="mx-auto">
              <TailwindAccordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className={`${
                    open === 1 ? "bg-customGray text-white" : "bg-[#E7EAEC]"
                  } px-[26px] py-[16px] sm:px-[30px] sm:py-[20px] rounded-[20px]`}
                >
                  FX Pairs
                </AccordionHeader>
                <AccordionBody className="px-4">
                  <TableComponent />
                </AccordionBody>
              </TailwindAccordion>
              <TailwindAccordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className={`${
                    open === 2 ? "bg-customGray text-white border-[#E7EAEC]" : ""
                  } px-[26px] py-[16px] sm:px-[30px] sm:py-[20px] rounded-[20px]`}
                >
                  Metals
                </AccordionHeader>
                <AccordionBody className="px-4">
                  <TableComponent />
                </AccordionBody>
              </TailwindAccordion>
              <TailwindAccordion
                open={open === 3}
                icon={<Icon id={3} open={open} />}
                className={`${open === 3 ? "text-white" : ""}`}
              >
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className={`${
                    open === 3 ? "bg-customGray text-white" : "bg-[#E7EAEC]"
                  } px-[26px] py-[16px] sm:px-[30px] sm:py-[20px] rounded-[20px]`}
                >
                  Bonds
                </AccordionHeader>
                <AccordionBody className="px-4 text-customGray">
                  <TableComponent />
                </AccordionBody>
              </TailwindAccordion>
              <TailwindAccordion open={open === 4} icon={<Icon id={4} open={open} />}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className={`${
                    open === 4 ? "bg-customGray text-white" : ""
                  } px-[26px] py-[16px] sm:px-[30px] sm:py-[20px] rounded-[20px]`}
                >
                  Indices
                </AccordionHeader>
                <AccordionBody className="px-4 text-customGray">
                  <TableComponent />
                </AccordionBody>
              </TailwindAccordion>
              <TailwindAccordion
                open={open === 5}
                icon={<Icon id={5} open={open} />}
                className={`${open === 5 ? "text-white" : ""}`}
              >
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className={`${
                    open === 5 ? "bg-customGray" : "bg-[#E7EAEC]"
                  } px-[26px] py-[16px] sm:px-[30px] sm:py-[20px] rounded-[20px]`}
                >
                  Cryptocurrencies
                </AccordionHeader>
                <AccordionBody className="px-4 text-customGray">
                  <TableComponent />
                </AccordionBody>
              </TailwindAccordion>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
      </SectionContainer>
    </>
  );
};
export default SpreadSection;

function TableComponent() {
  return (
    <div>
      <div className="overflow-x-auto flow-root mt-[-16px]">
        <table className="table-auto w-full">
          <thead className="rounded-xl bg-slate-50">
            <tr className="px-4">
              <td colSpan={2} className="hidden sm:flex"></td>
              <td colSpan={1} className=""></td>
              <td colSpan={2} className="text-center pt-3 text-base font-medium pb-[-10px]">
                MT 5 Pro
              </td>
              <td colSpan={2} className="text-center pt-3 text-base font-medium">
                MT 5 Standard
              </td>
              <td colSpan={2} className="pt-3 text-center  text-base font-medium">
                cTrader Pro
              </td>
            </tr>
            <tr>
              {tableHeaderTitle.map((title, idx) => (
                <th
                  key={idx}
                  className={`text-[14px] font-semibold h-[55px] ${idx < 2 ? "text-left" : "text-center"} ${
                    idx === 1 ? "hidden lg:table-cell" : ""
                  } py-2 px-4  sticky top-0 z-2 bg-slate-50 ${idx === 7 ? "rounded-br-[20px]" : ""} ${
                    idx === 0 ? `rounded-bl-[20px]` : ""
                  }
              `}
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E7EAEC]">
            {tableBody.map((item, idx) => (
              <tr key={idx} className="text-center px-2 h-[67px]">
                <td className={`text-left px-6 py-3 font-extrabold text-base`}>{item.name}</td>
                <td className={`hidden lg:block text-left px-2 py-3 text-base`}>{item.pro}</td>
                <td className="text-lg font-extrabold">{item.min}</td>

                <td>{item.avg}</td>
                <td className="text-lg font-extrabold">{item.min}</td>

                <td>{item.avg}</td>
                <td className="text-lg font-extrabold">{item.min}</td>

                <td>{item.avg}</td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const tableHeaderTitle = ["Хослол", "Бүтэн нэр", "min", "avg", "min", "avg", "min", "avg"];
const tableBody = [
  {
    name: "EURUSD",
    pro: "Euro us United States Dollar",
    min: "0",
    avg: "0.00",
  },
  {
    name: "EURUSD",
    pro: "Euro us United States Dollar",
    min: "0",
    avg: "0.00",
  },
  {
    name: "EURUSD",
    pro: "Euro us United States Dollar",
    min: "0",
    avg: "0.00",
  },
  {
    name: "EURUSD",
    pro: "Euro us United States Dollar",
    min: "0",
    avg: "0.00",
  },
  {
    name: "EURUSD",
    pro: "Euro us United States Dollar",
    min: "0",
    avg: "0.00",
  },
];

function Icon({ id, open }: { id: number; open: number }) {
  return open === id ? (
    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="0.00585938"
        y="40"
        width="40"
        height="40"
        rx="20"
        transform="rotate(-90 0.00585938 40)"
        fill="url(#paint0_linear_2272_1630)"
      />
      <path
        d="M20.0057 25.8333L20.0057 14.1666M20.0057 14.1666L14.1724 19.9999M20.0057 14.1666L25.839 19.9999"
        stroke="#0B2B42"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2272_1630"
          x1="0.00585938"
          y1="60"
          x2="40.0059"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFA233" />
          <stop offset="1" stop-color="#FFC81A" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.006 14.1666L20.006 25.8333M20.006 25.8333L25.8394 20M20.006 25.8333L14.1727 20"
        stroke="#0B2B42"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <rect
        x="39.0059"
        y="1"
        width="38"
        height="38"
        rx="19"
        transform="rotate(90 39.0059 1)"
        stroke="#0B2B42"
        stroke-width="2"
      />
    </svg>
  );
}
