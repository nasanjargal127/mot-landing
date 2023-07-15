"use client";
import { CustomStyles } from "@/src/styles/styles";
import React, { ReactNode } from "react";

type TitleContainerProps = {
  children: ReactNode;
  className?: string;
};

const TitleContainer: React.FC<TitleContainerProps> = ({ children, className }: TitleContainerProps) => {
  return <div className={`${CustomStyles.text.title} flex flex-wrap text-customGray ${className}`}>{children}</div>;
};
export default TitleContainer;
