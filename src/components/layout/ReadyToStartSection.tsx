"use client";

import React from "react";
import { CustomStyles } from "@/src/styles/styles";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button, LinkButton } from "../ui/Buttons";

type ReadyToStartSectionProps = {};

const ReadyToStartSection: React.FC<ReadyToStartSectionProps> = () => {
  const router = useRouter();
  const t = useTranslations("startComponent");

  return (
    <section className={`${CustomStyles.section} bg-darkSecondary py-12`}>
      <div
        style={{ boxShadow: "0px 4px 35px 0px #FFA233" }}
        className={`${CustomStyles.container} relative py-12 px-2 flex flex-col gap-6 rounded-3xl p-4 justify-center items-center `}
      >
        <h3
          className={`${CustomStyles.backgrounds.gradientBg} text-transparent bg-clip-text font-extrabold text-4xl md:text-5xl text-center w-fit h-14`}
        >
          {t("title")}
        </h3>
        <p className="text-white text-lg text-center">{t("description")}</p>
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={() => router.push("https://portal.motforex.com/auth/register")}
            className={`${CustomStyles.animations.hoverScale} text-base font-semibold text-darkSecondary`}
          >
            {t("btnText")}
          </Button>
          <LinkButton
            isOutlined
            className={`${CustomStyles.animations.hoverScale} h-[42px] px-4 duration-200 hidden md:flex`}
            href={`/platform?nextpage=mt5`}
            text={t("tryForDemo")}
          />
        </div>
      </div>
    </section>
  );
};
export default ReadyToStartSection;
