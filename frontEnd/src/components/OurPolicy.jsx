import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold ">Politique d'échange facile</p>
        <p className="text-gray-400">
          {" "}
          Nous offrons une politique d'échange sans tracas
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold ">Politique de retour de 7 jours</p>
        <p className="text-gray-400">
          {" "}
          Nous offrons une politique de retour gratuit de 7 jours
        </p>
      </div>
      <div>
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="" />
        <p className="font-semibold ">Meilleur Service Client</p>
        <p className="text-gray-400">Nous offrons un service client 24/7</p>
      </div>
    </div>
  );
};

export default OurPolicy;
