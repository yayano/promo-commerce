import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-3/2 text-gray-600">
            Bienvenue chez PromoPhone ! Découvrez notre vaste sélection de
            téléphones de dernière génération et d'accessoires mobiles de
            qualité. Que vous recherchiez un smartphone performant ou des
            gadgets innovants, nous avons ce qu'il vous faut à des prix
            imbattables. Profitez d'offres exceptionnelles et d'un service
            client dédié pour une expérience d'achat inégalée !
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Société</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>ACCUEIL</li>
            <li>À PROPOS</li>
            <li>Livraison</li>
            <li>Politique de Confidentialité</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">CONTACTEZ-NOUS</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+213-540-596-016</li>
            <li>boussetta13yahia@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright 2024@ yayaTM.com -All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
