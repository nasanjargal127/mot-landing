import { CustomStyles } from "@/src/styles/styles";
import React, { ReactNode } from "react";

type SectionContainterProps = {
  sectionClassName?: string;
  divClassname?: string;
  children?: ReactNode;
};

const SectionContainter: React.FC<SectionContainterProps> = ({ sectionClassName, divClassname, children }) => {
  return (
    <section className={`${CustomStyles.section + " " + sectionClassName}`}>
      <div className={`${CustomStyles.container + " " + divClassname}`}>{children}</div>
    </section>
  );
};
export default SectionContainter;
