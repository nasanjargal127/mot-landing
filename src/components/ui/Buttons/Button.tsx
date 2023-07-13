import React, { ReactNode } from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  size?: number;
  isOutlined?: boolean;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, size, isOutlined, children = false }) => {
  return <div>{children}</div>;
};
export default Button;
