import Link from "next/link";
import React, { ReactNode } from "react";

type LinkButtonProps = {
  isOutlined?: boolean;
  text: string;
  href: string;
  className?: string;
  children?: ReactNode | null;
};

const LinkButton: React.FC<LinkButtonProps> = ({ isOutlined = false, text, href, className, children }) => {
  return (
    <Link
      href={href}
      className={
        `${className}` +
        (isOutlined ? " ring-2 ring-primary " : " ") +
        "rounded-[18px] items-center font-[500] text-white"
      }
    >
      {text}
      {children}
    </Link>
  );
};
export default LinkButton;
