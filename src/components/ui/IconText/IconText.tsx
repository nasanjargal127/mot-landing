"use client";

import { BsFillCheckCircleFill } from "react-icons/bs";

export default function IconText({ title, color = "customGray" }: { title: string; color?: string }) {
  return (
    <div className="flex gap-2 items-start">
      <BsFillCheckCircleFill
        size={25}
        className="text-mainGray h-4 w-4 bg-gradient-to-r from-[#FFA233] to-[#FFC81A] rounded-full px-1 text-left sm:text-center"
      />
      <p className={`text-${color} font-light text-md mt-[-4px] text-left`}>{title}</p>
    </div>
  );
}
