"use client";

import React from "react";
import { CustomStyles } from "@/src/styles/styles";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button, LinkButton } from "../../components/ui/Buttons";
import { URL_BROKER_REGISTER } from "@/src/constants/path";

type ReadyToStartSectionProps = {};

const ReadyToStartSection: React.FC<ReadyToStartSectionProps> = () => {
  const router = useRouter();
  const t = useTranslations("startComponent");

  return (
    <section className={`w-full relative py-32 px-2 flex flex-col gap-6 rounded-3xl p-4 justify-center items-center `}>
      <h3
        className={`${CustomStyles.backgrounds.gradientBg} text-transparent bg-clip-text font-extrabold text-4xl md:text-5xl text-center w-fit h-14`}
      >
        {t("title")}
      </h3>
      <p className="text-white text-lg text-center">{t("description")}</p>
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={() => router.push(URL_BROKER_REGISTER)}
          className={`${CustomStyles.animations.hoverScale} px-12 text-base font-semibold text-darkSecondary`}
        >
          {t("btnText")}
        </Button>
        <LinkButton
          isOutlined
          className={`${CustomStyles.animations.hoverScale} bg-secondary h-[42px] px-4 duration-200 hidden md:flex`}
          href={`/platform?nextpage=mt5`}
          text={t("tryForDemo")}
        />
      </div>
    </section>
  );
};
export default ReadyToStartSection;
