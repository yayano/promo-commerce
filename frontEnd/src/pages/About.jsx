import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import useTheme from "../context/theme";
import { useTranslation } from "react-i18next";
const About = () => {
  const [t, i18n] = useTranslation();
  const { themeMode, darkTheme, lightTheme } = useTheme();
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={t("about")} text2={""} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={themeMode === "light" ? assets.about_img : assets.about_img_dark}
          className="w-full md:max-w-[450px] "
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 dark:text-gray-400">
          <p>{t("wideRangeProducts")}</p>
          <p>{t("comprehensiveServices")}</p>
          <p>{t("expertiseReliability")}</p>
          <p>{t("customerSatisfaction")}</p>
          <b className="text-gray-800 de dark:text-gray-300">
            {t("ourMission")}
          </b>
          <p>{t("missionStatement")}</p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"POURQUOI "} text2={"NOUS CHOISIR"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 ">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="dark:text-gray-300">{t("qualityAssurance")}</b>
          <p className="text-gray-600 dark:text-gray-400">
            {t("qualityCommitment")}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="dark:text-gray-300">{t("convenience")}</b>
          <p className="text-gray-600 dark:text-gray-400">
            {t("convenienceMessage")}
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="dark:text-gray-300">
            S{t("exceptionalCustomerService")}
          </b>
          <p className="text-gray-600 dark:text-gray-400">
            {t("customerServiceMessage")}
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
