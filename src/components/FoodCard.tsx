import React from "react";
import Icon from "./Icon";
import LogoIcon from "../images/i-icon.png";
import type { MenuItem } from "../types/menuDataTypes";

const FoodCard: React.FC<MenuItem> = ({
  img,
  title,
  description,
  calories,
  calorieDetails,
  deg,
  newPrice,
  oldPrice,
  btnText,
  icons,
}) => {
  return (
    <div className="flex flex-col justify-center items-center w-90 bg-[#FFFFFF] rounded-[16px]">
      {/* Image */}
      <div className="relative w-full">
        <img className="w-full " src={img} alt={title} />
        <div className="absolute right-[24px] top-[16px] flex justify-center items-center p-[7px] bg-[#FFFFFF] w-[32px] h-[32px] rounded-[16px]">
          <img src={LogoIcon} alt="logo" />
        </div>
      </div>

      <div className="w-ful p-6">
        {/* Title + Icons */}
        <div className="flex items-center justify-between mb-6">
          <p className=" text-[24px]">{title}</p>
          <div className="flex justify-center items-center gap-[10px]">
            {icons.map((icon, idx) => (
              <Icon key={idx} img={icon.img} background={icon.background} />
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="  text-[16px]  text-[#6E798C] ">{description}</p>

        {/* Calories + Deg */}
        <div className="flex justify-between items-center ">
          <p className="text-[16px] leading-[25px] w-[56px] font-[600] font-['Open Sans'] text-[#A5ADBB] calories">
            {calories} Cal
          </p>
          <p className="text-[16px] font-[600] text-[#A5ADBB] calorieDetails">
            {calorieDetails}
          </p>
          <p className="text-[16px] font-[600] text-[#A5ADBB] deg">{deg}°C</p>
        </div>

        {/* Price + Order button */}
        <div className="flex justify-between items-center mt-10">
          <div className="flex justify-center  items-baseline gap-[8px]">
            <p className="text-[#081F32] text-[28px] font-[400]">${newPrice}</p>
            <p className="text-[#F8593B] text-[20px] line-through">
              ${oldPrice}
            </p>
          </div>
          <button className="p-[9px] bg-[#2ECC71] w-[144px] h-[44px] text-[#ffff] tracking-[0.18rem] rounded-[4px] cursor-pointer">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
