import { CustomStyles } from "@/src/styles/styles";
import React, { ReactNode } from "react";

type SectionContainterProps = {
  id?: string;
  sectionClassName?: string;
  divClassname?: string;
  children?: ReactNode;
};

const SectionContainter: React.FC<SectionContainterProps> = ({ id, sectionClassName, divClassname, children }) => {
  return (
    <section id={id} className={`${CustomStyles.section + " " + sectionClassName}`}>
      <div className={`${CustomStyles.container + " " + divClassname}`}>{children}</div>
    </section>
  );
};
export default SectionContainter;
