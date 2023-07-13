"use client";

import { CustomStyles } from "@/src/styles/styles";
import { useTranslations } from "next-intl";
import React from "react";

type StepsSectionProps = {};

const StepsSection: React.FC<StepsSectionProps> = () => {
  const translation = useTranslations("stepsSection");

  return (
    <section className={`${CustomStyles.section} pb-12 bg-darkSecondary`}>
      <div className={`${CustomStyles.container}`}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[32px] font-extrabold leading-9 text-white sm:text-4xl">{translation("title")}</h2>
        </div>
      </div>
    </section>
  );
};
export default StepsSection;
