import React from "react";
import { type IconType } from "../types/menuDataTypes";

const Icon: React.FC<IconType> = ({ img, background }) => {
  return (
    <div
      className="w-[32px] h-[32px] flex justify-center items-center rounded-[8px]"
      style={{ background }}
    >
      <img src={img} alt="icon" className="w-[16px] h-[16px]" />
    </div>
  );
};

export default Icon;
