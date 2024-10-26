import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import NewsLetterBox from "../components/NewsLetterBox";
import useTheme from "../context/theme";
const Contact = () => {
  const { themeMode, darkTheme, lightTheme } = useTheme();
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"CONTACTEZ-"} text2={"NOUS"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[480px]"
          src={
            themeMode === "light" ? assets.contact_img : assets.contact_img_dark
          }
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6  ">
          <p className="font-semibold text-xl text-gray-600 dark:text-gray-300">
            Notre Magasin
          </p>
          <p className="text-gray-500">
            Boufarik City <br /> Suite 350 , Boufatik dummy ...
          </p>
          <p className="text-gray-500">
            Tel: (+213) 540-415-927 <br /> Email: Boussetta13yahia@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-500">
            {" "}
            Careers at PROMO-PHONE
          </p>
          <p className="text-gray-500">
            Learn more about aour teams and job opening.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
