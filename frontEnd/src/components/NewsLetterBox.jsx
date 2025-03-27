import React from "react";
import { useTranslation } from "react-i18next";

const NewsLetterBox = () => {
  const [t, i18n] = useTranslation();
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2x1 font-medium text-gray-800 dark:text-gray-200">
        {t("subscribeNow")}
      </p>
      <p className="text-gray-400 dark:text-gray-300 mt-3">
        {t("subscribeDescription")}
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          placeholder={t("enterYourEmail")}
          className="w-full sm:flex-1 outline-none dark:bg-[#121212] dark:text-gray-200"
          required
        />
        <button
          type="submit"
          className="bg-black text-white dark:text-[#121212] dark:bg-[#fff] dark:opacity-85 text-xs px-10 py-4"
        >
          {t("subscribeButton")}
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
