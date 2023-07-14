"use client";

import { SectionContainer } from "@/src/components/layout";
import { CustomStyles } from "@/src/styles/styles";
import React from "react";

type LiveAccountSectionProps = {};

const LiveAccountSection: React.FC<LiveAccountSectionProps> = () => {
  return (
    <SectionContainer sectionClassName={CustomStyles.backgrounds.darkSection}>
      <div>Hello</div>
    </SectionContainer>
  );
};
export default LiveAccountSection;
