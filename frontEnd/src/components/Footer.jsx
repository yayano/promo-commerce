import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import useTheme from "../context/theme.js";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [t, i18n] = useTranslation();
  const { themeMode, darkTheme, lightTheme } = useTheme();

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-3 gap-14 my-10 mt-40 text-sm">
        <div>
          <img
            src={themeMode === "light" ? assets.logo : assets.darkLogo}
            className="mb-5 w-32"
            alt=""
          />
          <p className="w-full md:w-3/2 text-gray-600 dark:text-gray-300">
            {t("welcomeMessage")}
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 dark:text-gray-300">
            {t("company")}
          </p>
          <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-300">
            <li>{t("home")}</li>
            <li>{t("about")}</li>
            <li>{t("shipping")}</li>
            <li>{t("privacyPolicy")}</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 dark:text-gray-300">
            {t("contactUs")}
          </p>
          <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-300">
            <li>+213-540-596-016</li>
            <li>boussetta13yahia@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center dark:text-gray-500 ">
          {t("copyright")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
