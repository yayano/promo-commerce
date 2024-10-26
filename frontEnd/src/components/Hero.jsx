import React from "react";
import { assets } from "../assets/assets";
import { Clock } from "./clock/Clock";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 dark:border-gray-500">
      {/** Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141] dark:text-[#e2e2e2]">
          <div className="w-[450px] relative">
            <Clock />
          </div>
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] dark:bg-[#fff]"></p>
            <p className="font-medium text-sm md:text-base  ">
              NOS MEILLEURES VENTES
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular">
            Promo Phone
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base ">
              DÉCOUVREZ-LE MAINTENANT !
            </p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] dark:bg-[#fff]"></p>
          </div>
        </div>
      </div>
      {/** Hero Right Side */}
      <img
        src={assets.hero_img}
        className="w-full sm:w-1/2 p-1 border rounded-lg dark:border-none  "
        alt=""
      />
    </div>
  );
};

export default Hero;
