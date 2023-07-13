import Link from "next/link";
import React, { ReactNode } from "react";
import { localizeHref } from "../../utils/LocalizeHref";

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
      href={localizeHref(href)}
      className={
        `${className ? className : "px-4 py-2"}` +
        (isOutlined ? " ring-2 ring-primary " : " ") +
        "rounded-[14px] items-center font-[500] text-white"
      }
    >
      {text}
      {children}
    </Link>
  );
};
export default LinkButton;
