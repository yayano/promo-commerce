import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";
import useTheme from "../context/theme";
import { useTranslation } from "react-i18next";
const Searchbar = () => {
  const [t, i18n] = useTranslation();
  const { themeMode, darkTheme, lightTheme } = useTheme();
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  }, [location]);
  return showSearch ? (
    <div className="border-t border-b bg-gray-50 dark:bg-[#121212] text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2  ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm dark:text-gray-200"
          type="text"
          placeholder={t("search")}
        />
        <img
          src={
            themeMode === "light" ? assets.search_icon : assets.search_icon_dark
          }
          className="w-4"
          alt=""
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        src={themeMode === "light" ? assets.cross_icon : assets.cross_icon_dark}
        className="inline w-3 cursor-pointer"
        alt=""
      />
    </div>
  ) : null;
};

export default Searchbar;
