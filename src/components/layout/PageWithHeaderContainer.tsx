"use client";

import React, { ReactNode, useEffect, useState } from "react";
import { PageItemProps } from "@/src/constants/type.const";
import { SectionHeader } from "@/src/sections/Layout";
import { useSearchParams, useRouter } from "next/navigation";

type PageWithHeaderContainerProps = {
  children: ReactNode;
  pageData: PageItemProps[];
};

const PageWithHeaderContainer: React.FC<PageWithHeaderContainerProps> = ({ children, pageData }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("nextpage");

  const [pageItem, setPageItem] = useState<PageItemProps | undefined>(() => {
    return pageData.find((item) => item.link === tab);
  });

  useEffect(() => {
    const item = pageData.find((item) => item.link === tab);
    setPageItem(item);

    if (!item) {
      router.push("/404");
    }
  }, [tab]);

  return (
    <main id="trade" className="w-full bg-customGray">
      {pageItem && (
        <SectionHeader img={pageItem.img} title={pageItem.title} desc={pageItem.desc} btnText={pageItem.btnText} />
      )}
      {children}
    </main>
  );
};

export default PageWithHeaderContainer;
