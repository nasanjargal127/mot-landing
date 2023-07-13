"use client";
import { CustomStyles } from "@/src/styles/styles";
import { ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  size?: number;
  isOutlined?: boolean;
  children: ReactNode;
  className?: string;
};

export default function Button({ onClick, size, isOutlined = false, children, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`flex-none rounded-[14px] ${size ? `h-[${size}]` : "h-[44px]"}  shadow-sm px-4 ${
        !isOutlined ? "bg-gradient-to-r from-[#FFA233] to-[#FFC81A]" : "ring-2 ring-mainColor flex items-center "
      } ${className ? className : CustomStyles.animations.hoverScale}`}
    >
      {children}
    </button>
  );
}
