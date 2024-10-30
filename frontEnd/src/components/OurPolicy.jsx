import React from "react";
import { assets } from "../assets/assets";
import useTheme from "../context/theme";
const OurPolicy = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-200">
      <div>
        <img
          src={
            themeMode === "light"
              ? assets.exchange_icon
              : assets.exchange_icon_dark
          }
          className="w-12 m-auto mb-5"
          alt=""
        />
        <p className="font-semibold ">Politique d'échange facile</p>
        <p className="text-gray-400 dark:text-gray-300">
          Nous offrons une politique d'échange sans tracas
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold ">Politique de retour de 7 jours</p>
        <p className="text-gray-400 dark:text-gray-300">
          {" "}
          Nous offrons une politique de retour gratuit de 7 jours
        </p>
      </div>
      <div>
        <img
          src={
            themeMode === "light" ? assets.support_img : assets.support_img_dark
          }
          className="w-12 m-auto mb-5"
          alt=""
        />
        <p className="font-semibold ">Meilleur Service Client</p>
        <p className="text-gray-400 dark:text-gray-300">
          Nous offrons un service client 24/7
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
